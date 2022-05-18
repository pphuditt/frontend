import '../css/ProfilePage.css';

import Navbar from "./Navbar";
import Footerr from "./Footerr";
import profilepic from "../statics/images/profilepic.svg"
import authHeader from '../service/AuthProvider.js';
import {api} from '../service/api';
import {useState,useEffect} from 'react';



function ProfilePage() {

    const [profile,setProfile] = useState({});
    const [table,setTable] = useState([]);


    useEffect(() => {
        api.get('user/profile',)
    });

    const ob1 = {
        promotion: 'Promotion1',
        code: 'Code1',
        expDate: 'ExpDate1'
    }

    const ob2 = {
        promotion: 'Promotion2',
        code: 'Code2',
        expDate: 'ExpDate2'
    }

    const ob3 = {
        promotion: 'Promotion3',
        code: 'Code3',
        expDate: 'ExpDate3'
    }

    const array = [ob1, ob2, ob3];

    const user_data = {
        "id": 1,
        "username": "disorn.bootso2@gmail.com",
        "firstName": "Nior",
        "lastName": "Disorn",
        "regisDate": "2022-04-09",
        "totalMile": 0,
        "role": "ROLE_PASSENGER",
        "dob": "2001-08-07"
    }

    const fullName = user_data.firstName + " " + user_data.lastName;

    return (
        <div className='main-body-profilePage'>
            <Navbar />
            <div className='profile-background' />
            <img className='profilepic' src={profilepic} alt='profilepic' />
            <h1 className='name'>{fullName}</h1>
            <div className='user-detail'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <td className='profile-left-col'><h3>Email</h3></td>
                            <td><p>{user_data.username}</p></td>
                        </tr>
                        <tr>
                            <td className='profile-left-col'><h3>Birth date</h3></td>
                            <td><p>{user_data.dob}</p></td>
                        </tr>
                        <tr>
                            <td className='profile-left-col'><h3>Total mile</h3></td>
                            <td><p>{user_data.totalMile}</p></td>
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
                        {array.map((row) => {
                            return (
                                <tr className='voucher-row'>
                                    <td>{row.promotion}</td>
                                    <td>{row.code}</td>
                                    <td>{row.expDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <Footerr />
        </div>
    );
}

export default ProfilePage;