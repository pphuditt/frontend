
import { useParams } from 'react-router-dom';
import '../App.css';
import Sidebar from './Sidebar';
import Title from './Title';
import StickyHeadTable from './PaginationTable';
import CustomDialog from './CustomDialog';
import { edit_obj } from '../mockdata/tabledata';

const ManagementPage = () => {
    const {page} = useParams();
    const selector = edit_obj[page];
    const temp = ["fi","user","ticket"];
    const showAdd = temp.includes(page) ?  "":<CustomDialog isedit={false} page={page}>{selector}</CustomDialog>;
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user.role.includes("ROLE_MANAGER","ROLE_ADMIN")){
      return (
          <div>
              You have no access.
          </div>
      );
  }
    return (
        <div className="App">
        <Sidebar/>
        <div className="main-container">
          <div className='something'>
            <Title title={page}/>
            {showAdd}
            <br></br>
            <StickyHeadTable page={page}/>
          </div>
        </div>
        </div>
    );
};

export default ManagementPage;