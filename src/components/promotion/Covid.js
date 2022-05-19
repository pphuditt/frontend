import { ReactComponent as CSvg } from "./covid.svg";
import Navbar from "../Navbar";
import { Grid, Button, Box } from "@mui/material";
import Footerr from "../Footerr";
import ButtonGroup from "@mui/material/ButtonGroup";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { api } from "../../service/api";
import authHeader from '../../service/AuthProvider.js';

const voucher= (id) =>{

  api.post("voucher",{
    promotionId: id
  },{
    headers : authHeader()
  })
  .then((response)=>{
    if(response.status===200) alert("แลกแล้ว");
  }).catch((error)=>{
    alert("แลกไม่ได้จ้า");
  });
};

function Covid() {
  return (
    <div  style={{ textAlign: "center" }}>
      <Navbar />
      <CSvg style={{ width: "100%", height: "100%" }} />
      <Grid container display="row" rowSpacing={5}>
        <div style={{ position: "relative", margin: "0 auto", textAlign: "left" }}>
          <Box
            marginTop={10}
            sx={{ maxWidth: 1000, maxHeight: 1000}}
          >
          <Grid container display="row" rowSpacing={4}>
            <Grid item xs={12}>
              <text
                style={{
                  position: "absolute",
                  textAligVertical: "center",
                  textAlign: "center",
                  width: "100%",
                  fontSize: "50px",
                  fontFamily: "Podkova, serif",
                }}
              >
                เที่ยวสู้ COVID-19
              </text>
            </Grid>
            <Grid item xs={12}>
              <Card style={{  marginTop:"5%", width: "1000px" }}>
                <CardContent>
                  <Typography
                    marginLeft={2}
                    gutterBottom
                    variant="h4"
                    component="div"
                    style={{ fontFamily: "Podkova, serif" }}
                  >
                    <u>
                      <b>รายละเอียดโปรโมชัน </b>
                    </u>
                  </Typography>
                  <Typography
                    marginLeft={5}
                    variant="h6"
                    color="text.secondary"
                  >
                    รายละเอียดส่วนลด : ทวีปยุโรป ส่วนลด 5,000THB <br />
                  </Typography>
                  <Typography
                    marginLeft={26.5}
                    variant="h6"
                    color="text.secondary"
                  >
                    ทวีปอเมริกา ส่วนลด 2,000 THB <br />
                    ทวีปเอเชีย ส่วนลด 500 THB
                  </Typography>
                  <br />
                  <Typography
                    marginLeft={2}
                    gutterBottom
                    variant="h4"
                    component="div"
                  >
                    <u>
                      <b>เงื่อนไขเกี่ยวกับค่าโดยสาร</b>
                    </u>
                  </Typography>
                  <Typography
                    marginLeft={5}
                    variant="h6"
                    color="text.secondary"
                  >
                    1. เที่ยวบินที่ใช้ได้ : เที่ยวบิน CU10X CU20X CU30X <br />
                    2. การเปลี่ยนกำหนดการเดินทาง : ไม่อนุญาต <br />
                    3. การยกเลิก/ขอคืนเงิน : ไม่อนุญาต <br />
                    4. การเปลี่ยนชื่อผู้โดยสาร : ไม่อนุญาต <br />
                    5. อัตราค่าโดยสารเด็กเช่นเดียวกับผู้ใหญ่ <br />
                  </Typography>
                </CardContent>
              </Card>
              <Grid item xs={12}>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  style={{
                    marginTop: "3%",
                    float: "right",
                    width: "51.35%",
                  }}
                >
                  <Button
                    onClick ={()=>{
                       voucher("p_005");
                    }}
                    sx={{
                      backgroundColor: "#00A944",
                      borderColor: "#00A944",
                      "&:active": {
                        boxShadow: "none",
                        backgroundColor: "#00A944",
                        borderColor: "#00A944",
                      },
                      "&:hover": {
                        backgroundColor: "#00672a",
                        borderColor: "#00672a",
                        boxShadow: "none",
                      },
                      fontFamily: "Podkova, serif",
                    }}
                  >
                    รับโค้ดส่วนลดไปยุโรป
                  </Button>
                  <Button
                  onClick ={()=>{
                    voucher("p_006");
                 }}
                    sx={{
                      backgroundColor: "#00A944",
                      borderColor: "#00A944",
                      "&:active": {
                        boxShadow: "none",
                        backgroundColor: "#00A944",
                        borderColor: "#00A944",
                      },
                      "&:hover": {
                        backgroundColor: "#00672a",
                        borderColor: "#00672a",
                        boxShadow: "none",
                      },
                      fontFamily: "Podkova, serif",
                    }}
                  >
                    รับโค้ดส่วนลดไปอเมริกา
                  </Button>
                  <Button
                  onClick ={()=>{
                    voucher("p_007");
                 }}
                    sx={{
                      backgroundColor: "#00A944",
                      borderColor: "#00A944",
                      "&:active": {
                        boxShadow: "none",
                        backgroundColor: "#00A944",
                        borderColor: "#00A944",
                      },
                      "&:hover": {
                        backgroundColor: "#00672a",
                        borderColor: "#00672a",
                        boxShadow: "none",
                      },
                      fontFamily: "Podkova, serif",
                    }}
                  >
                    รับโค้ดส่วนลดไปเอเชีย
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
            </Grid>
          </Box>
        </div>
        <Grid item xs={12}>
          <Footerr />
        </Grid>
      </Grid>
    </div>
  );
}

export default Covid;
