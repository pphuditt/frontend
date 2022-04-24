import './Navbar.css';
import { ReactComponent as YourSvg } from './Untitled-1.svg';
import { ReactComponent as UserSvg } from './user.svg';

function Navbar() {
    return (
        <div className='header'>
            <YourSvg className='logo' />
            <div className='user-button' item xs={4} >
                <div className='user-icon'><UserSvg /></div>
                <div className='user-name'><p><b>user name</b></p></div> 
            </div>
        </div>
    );
};

export default Navbar;