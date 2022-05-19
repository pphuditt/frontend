import '../css/Payment.css';

import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

import { api } from '../service/api';
import authHeader from '../service/AuthProvider.js';

import paymentBackground from '../statics/images/payment-background.svg';
import planeIcone from '../statics/images/plane-icon.svg';
import calendar from '../statics/images/calendar-paymentpage.svg';
import linepic from '../statics/images/linepic-payment.svg';

import Navbar from './Navbar';
import Footerr from './Footerr';
import { Card, Grid, Button } from '@mui/material';
import {useLocation} from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

function Payment(props) {

    const location = useLocation();
    const {data} = location.state;
    const tmp = moment(data.flightDate);
    const takenTime = data.takenTime;
    const fromAirport = data.from;
    const fromTimeZone = data.fromTimezone.split("/")[1].replace('_','');
    const fromDate = tmp.format("ddd D MMM YYYY");
    const fromTime = tmp.format('h:mm a');
    const toAirport = data.to;
    const toTimezone = data.toTimezone.split("/")[1].replace('_','');
    const toDate = tmp.add(takenTime,'m').format("ddd D MMM YYYY");
    const toTime = tmp.add(takenTime,'m').format("h:mm a");
    const fare = data.fare;

    const timeAbroad = takenTime / 60 + " hrs";

    const [discountAmount, setDiscountAmount] = React.useState(0);
    const [voucherCode, setVoucherCode] = React.useState("");

    const discount = () => {
        axios.get(`http://localhost:8080/api/voucher/use/${voucherCode}`, {
            headers: authHeader()
        })
            .then((response) => {
                setDiscountAmount(response.data);
                alert("โค้ดใช้ได้คร่า เริ่มเรอ");
            }).catch((error) => {
                alert("error", error.response.status);
            });
    };

    const submit = () => {
        axios.post(`http://localhost:8080/api/ticket`,{
            instanceId : data.instanceId,
            voucherCode : voucherCode===null? null:voucherCode,
        },{
            headers: authHeader()
        }).then((res)=>{
            alert("รายละเอียดการจองตั๋วจะถูกส่งไปยังอีเมลของท่าน");
        });
    }

    return (
        <div className="payment-main-body">
            <Navbar />
            <img className='payment-page-background' src={paymentBackground} alt='payment-background' />
            <Grid
                className='payment-content'
                container spacing={5}
                paddingLeft={8}
                paddingRight={8}
                marginBottom={6}
                rowGap={2}
            >
                <Grid item xs={8}>
                    <div className='payment-flight'>
                        <Card className="payment-card">
                            <img className='plane-icon' src={planeIcone} alt='plane-icon' />
                            <div className='payment-flight-detail'>
                                <div className='src-airport'>
                                    <h2>{fromTime} <span className='payment-country'>{fromTimeZone}</span></h2>
                                    <img className='calendar-pic' src={calendar} alt='calendar-pic' />
                                    <h2 className='payment-flight-date'>{fromDate}</h2>
                                    <div className='payment-airport-start'>
                                        <h2 className='payment-airport-detail'>{fromAirport}</h2>
                                    </div>
                                </div>
                                <p className='payment-time-abroad'>{timeAbroad}</p>
                                <img className='linepic' src={linepic} alt='linepic' />
                                <div className='dest-airport'>
                                    <h2>{toTime} <span className='payment-country'>{toTimezone}</span></h2>
                                    <img className='calendar-pic' src={calendar} alt='calendar-pic' />
                                    <h2 className='payment-flight-date'>{toDate}</h2>
                                    <div className='payment-airport-start'>
                                        <h2 className='payment-airport-detail'>{toAirport}</h2>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Grid>

                <Grid container item xs={4}
                    rowSpacing={0}
                    justifyContent='flex-end'>
                    <Grid item xs={12}>
                        <div className='payment-price'>
                            <Card>
                                <h3 className='payment-price-header'>รายละเอียดราคา</h3>
                                <table className='price-detail-table'>
                                    <tr className='payment-price-detail-row'>
                                        <td><p className='price-detail'>ราคาตั๋วจาก ({fromAirport+" "+toAirport})</p></td>
                                        <td><p className='price-detail rightCol'>THB {fare}</p></td>
                                    </tr>
                                    <tr className='payment-price-detail-row discount'>
                                        <td><p className='price-detail'>ส่วนลด</p></td>
                                        <td><p className='price-detail rightCol'>{discountAmount}</p></td>
                                    </tr>
                                    <tr className='payment-price-detail-row'>
                                        <td><p className='price-detail'>ราคาสุทธิ</p></td>
                                        <td><p className='price-detail rightCol'>THB {fare-discountAmount}</p></td>
                                    </tr>
                                </table>
                            </Card>
                            <div className='payment-page-spacing' />
                            <Grid container spacing={0}>
                                <Grid item xs={9}>
                                    <FormControl sx={{ width: '100%' }} variant="outlined">
                                        <InputLabel htmlFor="voucher-code-textfield">Enter Code</InputLabel>
                                        <OutlinedInput
                                            id="voucher-code-textfield"
                                            onChange={(newValue) => {
                                                console.log(newValue.target.value);
                                                setVoucherCode(newValue.target.value);
                                            }}
                                            label="VoucherCode"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button sx={{
                                        color: "white",
                                        height: "100%",

                                        float: "right",

                                        fontWeight: "bold",

                                        backgroundColor: "#DF3131",
                                        "&:hover": {
                                            backgroundColor: "#ad0202",
                                            boxShadow: "none",
                                        }
                                    }}
                                        fullWidth
                                        onClick={discount}>
                                        check code
                                    </Button>
                                </Grid>
                            </Grid>

                            <div className='payment-page-spacing' />
                            <Button
                                fullWidth
                                sx={{
                                    color: "white",
                                    backgroundColor: "#00A944",
                                    "&:hover": {
                                        backgroundColor: "#008535",
                                        boxShadow: "none",
                                    }
                                }}
                                onClick={submit}
                            >ยืนยันคำสั่งซื้อ</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Footerr />
        </div >
    );
}

export default Payment;