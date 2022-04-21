import './App.css';
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

// const timeFunc = () => {
//   console.log(Temporal.TimeZone.from('Asia/Tokyo')
//                       .getInstantFor('2000-01-01T00:00'));
// }; 

function App() {
  // timeFunc();
  return (
    <Router>
      <Routes>
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
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>

  );
}

export default App;
