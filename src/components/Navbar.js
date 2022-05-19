import '../css/Navbar.css';
import { ReactComponent as YourSvg } from '../statics/images/Untitled-1.svg';
import { ReactComponent as UserSvg } from '../statics/images/user.svg';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <YourSvg className='logo' onClick={() =>{navigate("../landingPage");}}/>
               
            <div className='user-button' item xs={4} >
                <div className='user-icon'><UserSvg onClick={() =>{navigate("../profile");}}/></div>
            </div>
        </div>
    );
};

export default Navbar;