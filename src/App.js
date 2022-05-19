import './App.css';

import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import Privacy from './components/signup/privacy';
import Covid from './components/promotion/Covid';
import Birthday from './components/promotion/Birthday';
import Mile from './components/promotion/Mile';


import ProfilePage from './components/ProfilePage';
import NotFoundPage from './components/NotFoundPage';
import Payment from './components/PaymentPage';
import LandingPage from './components/landingPage/landingPage';

import ManagementPage from './Component/ManagementPage';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'; 
import AirportForm from './Component/Popup/AirportForm';
import AircraftForm from './Component/Popup/AircraftForm';
import CountryForm from './Component/Popup/CountryForm';
import ModelForm from './Component/Popup/ModelForm';
import DateTime from './Component/Date';
import NotFound from './Component/NotFound';
import PromotionForm from './Component/Popup/PromotionForm';
import FIForm from './Component/Popup/FIForm';
import FlightForm from './Component/Popup/FlightForm';
import RouteForm from './Component/Popup/RouteForm';

import Flight from './components/Flight'
<<<<<<< HEAD
import Income from './Component/Income'
=======
>>>>>>> f2814d15af7b7916b25ea51621d2888e68ce9cff


// const timeFunc = () => {
//   console.log(Temporal.TimeZone.from('Asia/Tokyo')
//                       .getInstantFor('2000-01-01T00:00'));
// }; >>>>>>> 3e4dc58209565d51389673abdc940059d3679ebb

function App() {
  // timeFunc();
  return (


    <Router>
      <Routes>
        <Route path="signin" element={<Signin/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="privacy" element={<Privacy/>}/>
        <Route path="covid" element={<Covid/>}/>
        <Route path="birthday" element={<Birthday/>}/>
        <Route path="income" element={<Income/>}/>
        <Route path="mile" element={<Mile/>}/>
        <Route path="dashboard/:page" element={<ManagementPage/>}/>
        <Route path='form/airport' element={<AirportForm/>}/>
        <Route path='form/aircraft' element={<AircraftForm/>}/>
        <Route path='form/country' element={<CountryForm/>}/>
        <Route path='form/model' element={<ModelForm/>}/>
        <Route path='form/promotion' element={<PromotionForm/>}/>
        <Route path='form/route' element={<RouteForm/>}/>
        <Route path='form/fi' element={<FIForm/>}/>
        <Route path='form/flight' element={<FlightForm/>}/>
        <Route path='date' element={<DateTime/>}/>
        <Route path='profile' element={<ProfilePage />} />
        <Route path='flightNotFound' element={<NotFoundPage />} />
        <Route path='payment' element={<Payment />} />
        <Route path='availableFlight' element={<Flight />}></Route>
        <Route path='landingPage' element={<LandingPage />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>


  );
}

export default App;
