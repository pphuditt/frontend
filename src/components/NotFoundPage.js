import './NotFoundPage.css';

import Navbar from './Navbar';
import Footerr from './Footerr';
import alert from '../statics/images/notice.svg';


function NotFoundPage() {
  return (
    <div>
        <Navbar />
        <div className="main-body">
          <img className='alert-icon' src={alert} alt='alert-icon' />
          <p className='text-not-found'><b>Sorry, flight not found</b></p>
        </div>
        <Footerr />
    </div>
  );
}

export default NotFoundPage;
