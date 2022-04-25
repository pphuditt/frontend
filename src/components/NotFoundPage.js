import './NotFoundPage.css';

import Navbar from './Navbar';
import Footerr from './Footerr';
import alert from '../statics/images/notice.svg';


function NotFoundPage() {
  return (
    <div className='main-body'>
        <Navbar />
        <img className='alert-icon' src={alert} alt='alert-icon' />
        <p className='text-not-found'><b>Sorry, flight not found</b></p>
        <Footerr />
    </div>
  );
}

export default NotFoundPage;
