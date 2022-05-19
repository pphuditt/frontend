import '../css/ProfilePage.css';

import Navbar from "./Navbar";
import Footerr from "./Footerr";
import profilepic from "../statics/images/profilepic.svg";
import authHeader from '../service/AuthProvider.js';

import { Button } from '@mui/material';
import {api} from '../service/api';
import {useState,useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';



function ProfilePage() {

    const [profile,setProfile] = useState({});
    const [table,setTable] = useState([]);
    const navigate = useNavigate();

    const signOut = () => {
        console.log("out")
        localStorage.removeItem("user");
        navigate("../signin");
        
    };

    useEffect(() => {
        api.get('user/profile',{
            headers : authHeader()
        }).then((res) => {
            setProfile(res.data)
        });
        axios.get('http://localhost:8080/api/voucher/user/individual',{
            headers : authHeader()
        }).then((res) => {
            setTable(res.data);
        });
        // api.get('voucher/user/individual',{
            // headers : authHeader()
        // }).then((res) => {
            // setTable(res.data);
        // });
    },[]);

    return (
        <div className='main-body-profilePage'>
            <Navbar />
            <div className='profile-background' />
            <img className='profilepic' src={profilepic} alt='profilepic' />
            <h1 className='name'>{profile.fullName}</h1>
            <div className='user-detail'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td className='profile-left-col'><h3>Email</h3></td>
                            <td><p>{profile.username}</p></td>
                        </tr>
                        <tr>
                            <td className='profile-left-col'><h3>Birth date</h3></td>
                            <td><p>{profile.DOB}</p></td>
                        </tr>
                        <tr>
                            <td className='profile-left-col'><h3>Total mile</h3></td>
                            <td><p>{profile.totalMile}</p></td>
                        </tr>
                    </tbody>
                </table>

                <h2>My voucher</h2>
                <table className='table voucher'>
                    <thead className='voucher-header-table'>
                        <tr>
                            <th>Promotion</th>
                            <th>Code</th>
                            <th>Expiration date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((row) => {
                            return (
                                <tr className='voucher-row'>
                                    <td>{row.title}</td>
                                    <td>{row.code}</td>
                                    <td>{moment(row.valid_until).format('dddd, MMMM Do YYYY, h:mm:ss a')}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Button variant="contained" onClick={signOut} color="error">Logout</Button>
            </div>
            <Footerr />
        </div>
    );
}

export default ProfilePage;