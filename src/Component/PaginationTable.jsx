import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button, Grid } from '@mui/material';
import { columns as data_columns , sort_obj ,edit_obj, pk_obj} from '../mockdata/tabledata.js';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';
import CustomDialog from './CustomDialog.jsx';
import authHeader from '../service/AuthProvider.js';
import {api} from '../service/api';
import moment from 'moment';

const LoadingIcon = styled(CircularProgress)`
      color : purple;
      min-width: 64px;
      min-height: 64px;
`

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRow] = React.useState([]);
  const [columns,setColumn] = React.useState([]);
  const [isFinish,setFinish] = React.useState(false);

  const readData = (pageName) => {
    console.log(`http://localhost:8080/api/${pageName}`);
    api.get(`${pageName}`,{
      headers : authHeader()
    })
      .then((res) => {  
        const data = [...res.data];
        if(typeof data[0][sort_obj[`${pageName}`]] === 'number' ){
          data.sort( (a,b) => a[sort_obj[`${pageName}`]] - b[sort_obj[`${pageName}`]]);
        }else if(props.page === "fi"){
          data.sort( (a,b) => moment(b[sort_obj[props.page]]).diff(moment(a[sort_obj[props.page]])));
        }
        else{
          data.sort( (a,b) => a[sort_obj[`${pageName}`]].localeCompare(b[sort_obj[`${pageName}`]]));
        }
        setRow(data);
        setColumn(data_columns[pageName]);
      })
      .then(        
        setInterval(() => {
        setFinish(true);
        },1500)
      );
  };

  const deleteItem = (id) => {
    const isConfirm = window.confirm(`ต้องการที่จะลบข้อมูลเกี่ยวกับ ${id}  ดังกล่าวใช่หรือไม`);
    if(isConfirm){
      api.delete(`${props.page}/${id}`,{
        headers : authHeader()
      })
      .then((res) =>{
        readData(props.page);
      }).catch((err) => {
        const res = err.response;
        alert(res.status+" : "+res.data);
      });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const editSelector = edit_obj[props.page];
  
  React.useEffect(() =>{
    setFinish(false);
    readData(props.page);
  },[props.page]);


  let content = <LoadingIcon />;

  if(isFinish){
    content = <div>
      <TableContainer sx={{ maxHeight: 720, minHeight:720 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={{minWidth:170}} align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row[sort_obj[props.page]]}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof column === "number" || column.could
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align='center'>
                      <Grid container display="column" spacing={0}>
                        <Grid item xs={6}> 
                          <CustomDialog isedit={true} page={props.page} data={{...row}} refresh={readData}>
                            {editSelector}
                          </CustomDialog>
                        </Grid>
                        <Grid item xs={6}>
                          <Button sx={{color : '#FF0000'}} onClick={() => deleteItem(row[pk_obj[props.page]])}>Delete</Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10,25,100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  }

  



  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {content}
    </Paper>
  );
}
