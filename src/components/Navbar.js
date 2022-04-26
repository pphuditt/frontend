import '../css/Navbar.css';
import { ReactComponent as YourSvg } from './Untitled-1.svg';
import { ReactComponent as UserSvg } from './user.svg';

function Navbar() {
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
        <div className='header'>
            <YourSvg className='logo' />
            <div className='user-button' item xs={4} >
                <div className='user-icon'><UserSvg /></div>
                <div className='user-name'><p><b>{fullName}</b></p></div> 
            </div>
        </div>
    );
};

export default Navbar;