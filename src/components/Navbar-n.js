import '../css/Navbar-n.css';
import { ReactComponent as YourSvg } from './Untitled-1.svg';

function Navbarn(){
    return(
        <div className='header'>
            <YourSvg className='logo' />
            <div className='user-button' item xs={4} >
            </div>
        </div>
    );
};

export default Navbarn;