import './Navbar.css';
import { ReactComponent as YourSvg } from './Untitled-1.svg';

function Navbar(){
    return(
        <div className='header'>
            <div >
                <YourSvg className='logo'/>
            </div>
        </div>
    );
};

export default Navbar;