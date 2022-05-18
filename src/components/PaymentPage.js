import '../css/Payment.css';

import paymentBackground from '../statics/images/payment-background.svg';
import planeIcone from '../statics/images/plane-icon.svg';
import calendar from '../statics/images/calendar-paymentpage.svg';
import linepic from '../statics/images/linepic-payment.svg';

import Navbar from './Navbar';
import Footerr from './Footerr';
import { Card, Grid, TextField, Button } from '@mui/material';

function Payment() {
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
                                    <h2>11:30 <span className='payment-country'>INDIA</span></h2>
                                    <img className='calendar-pic' src={calendar} alt='calendar-pic' />
                                    <h2 className='payment-flight-date'>MON 28 MAR 2022</h2>
                                    <div className='payment-airport-start'>
                                        <h2 className='payment-airport-detail'>BKK</h2>
                                        <p className='payment-airport-detail'><b>Suvarnabhumi</b></p>
                                        <p className='payment-airport-detail'><b>International Airport</b></p>
                                    </div>
                                </div>
                                <p className='payment-time-abroad'>3 hrs</p>
                                <img className='linepic' src={linepic} alt='linepic' />
                                <div className='dest-airport'>
                                    <h2>11:30 <span className='payment-country'>INDIA</span></h2>
                                    <img className='calendar-pic' src={calendar} alt='calendar-pic' />
                                    <h2 className='payment-flight-date'>MON 28 MAR 2022</h2>
                                    <div className='payment-airport-start'>
                                        <h2 className='payment-airport-detail'>BKK</h2>
                                        <p className='payment-airport-detail'><b>Suvarnabhumi</b></p>
                                        <p className='payment-airport-detail'><b>International Airport</b></p>
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
                                        <td><p className='price-detail'>ขาไป (BKK DEL)</p></td>
                                        <td><p className='price-detail rightCol'>THB 4,000</p></td>
                                    </tr>
                                    <tr className='payment-price-detail-row discount'>
                                        <td><p className='price-detail'>ส่วนลด</p></td>
                                        <td><p className='price-detail rightCol'>- THB 1,000</p></td>
                                    </tr>
                                    <tr className='payment-price-detail-row'>
                                        <td><p className='price-detail'>ราคารวมทั้งหมด</p></td>
                                        <td><p className='price-detail rightCol'>THB 3,000</p></td>
                                    </tr>
                                </table>
                            </Card>
                            <div className='payment-page-spacing' />
                            <TextField className='voucher-code-textfield'
                                label="Enter code"
                                fullWidth
                                sx={{
                                    backgroundColor: "#D3D3D3",
                                    color: "#717075"
                                }} />
                            <div className='payment-page-spacing' />
                            <Button
                                sx={{
                                    color: "white",
                                    backgroundColor: "#00A944",
                                    "&:hover": {
                                        backgroundColor: "#f3a999",
                                        boxShadow: "none",
                                    }
                                }}
                                fullWidth>ยืนยันคำสั่งซื้อ</Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Footerr />
        </div >
    );
}

export default Payment;