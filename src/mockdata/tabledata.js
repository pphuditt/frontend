import AirportForm from '../Component/Popup/AirportForm';
import AircraftForm from '../Component/Popup/AircraftForm';
import CountryForm from '../Component/Popup/CountryForm';
import ModelForm from '../Component/Popup/ModelForm';
import FIForm from '../Component/Popup/FIForm';
import PromotionForm from '../Component/Popup/PromotionForm';
import FlightForm from '../Component/Popup/FlightForm';
import RouteForm from '../Component/Popup/RouteForm';
import { Link } from 'react-router-dom';
import UserForm from '../Component/Popup/UserForm';
import TicketForm from '../Component/Popup/TicketForm';

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

function htmlTagRemove(str) {
  const regex = /(<([^>]+)>)/ig;
  return str.replace(regex, "");
}

const columns = {

    airport: [
            {
              id:'code',
              label: 'Airport code',
              minWidth : 170
            },
            {
              id: 'countryCode',
              label: 'Country code',
              minWidth: 170
            },
            {
              id:'name',
              label: 'Airport name',
              minWidth: 170
            },
            {
              id: 'latitude',
              label: 'Latitude',
              minWidth: 170,
              format: (value) => value.toFixed(6),
            },  
            {
              id: 'longitude',
              label: 'Longitude',
              minWidth: 170,
              format: (value) => value.toFixed(6),
            },
            {
              id: 'timeZone',
              label: 'Time zone',
              minWidth: 170,
          },
    ],
    
    country:[
        {
            id: 'code',
            label: 'Country Code',
            minWidth: 170,
        },
        {
            id: 'name',
            label: 'Country',
            minWidth: 170,
        },
        {
            id: 'continent',
            label: 'Continent',
            minWidth: 170,
        },
    ],

    aircraft:[
      {
        id : 'regNum',
        label: 'Registration NO.',
        minWidth: 170
      },
      {
        id: 'MSN',
        label: 'MSN',
        minWidth: 170
      },
      {
        id: 'ICAOCode',
        label: 'ICAO',
        minWidth: 170
      },
      {
        id: 'firstFlight',
        label: 'First flight',
        minWidth: 170
      },
      {
        id: 'deliverDate',
        label: 'Deliver date',
        minWidth: 170
      }
    ],

    route:[
      {
        id : 'code',
        label: 'Route code',
        minWidth: 170
      },
      {
        id : 'fromAirport',
        label: 'From airport',
        minWidth: 170
      },
      {
        id : 'toAirport',
        label: 'To airport',
        minWidth: 170
      },
      {
        id : 'distance',
        label: 'Distance',
        minWidth: 170
      },
      {
        id : 'takenTime',
        label: 'Taken time (minutes)',
        minWidth: 170
      },
    ],

    flight:[
      {
        id: 'flightId',
        label: 'Flight ID',
        minWidth: 170
      },
      {
        id: 'routeCode',
        label: 'Route code',
        minWidth: 170
      },
      {
        id: 'ICAOCode',
        label: 'ICAO suggested',
        minWidth: 170
      },
      {
        id: 'departureTime',
        label: 'Departure time',
        minWidth: 170
      },
      {
        id: 'fare',
        label: 'Fare',
        minWidth: 170,
        format : (value) => value.toFixed(2)
      }
    ],

    model : [
      {
        id : 'ICAOCode',
        label: 'ICAO',
        minWidth: 170
      },
      {
        id : 'name',
        label: 'Model name',
        minWidth: 170
      },
      {
        id : 'seats',
        label: 'Seats',
        minWidth: 170
      },
      {
        id : 'agent',
        label: 'Agent',
        minWidth: 170
      },
      {
        id : 'speed',
        label: 'Speed (mph)',
        minWidth: 170,
        format : (value) => value.toFixed(2)
      },

    ],
    promotion:[
      {
        id: 'id',
        label: 'Promotion ID',
        minWidth : 170
      },
      {
        id: 'title',
        label: 'Title',
        minWidth : 170
      },
      {
        id: 'description',
        label: 'Description',
        minWidth : 170,
        format : (value) => htmlTagRemove(htmlDecode(value)),
        could : true
      },
      {
        id: 'discountAmount',
        label: 'Discount',
        minWidth : 170
      },
      {
        id: 'endDate',
        label: 'End date',
        minWidth : 170
      },
    ],
    fi:[
      {
        id: 'instanceId',
        label: 'ID',
        minWidth: 170
      },
      {
        id: 'flightId',
        label : "Flight ID",
        minWidth: 170
      },
      {
        id: 'flightDate',
        label : "Flight Date",
        minWidth:170
      },
      {
        id:'aircraftRegNum',
        label:'Aircraft',
        minWidth:170
      }
    ],
    user:[
      {
        id: 'id',
        label: 'ID',
        minWidth:170
      },
      {
        id: 'username',
        label: 'Email',
        minWidth:170
      },
      {
        id: 'fullName',
        label : 'Name',
        minWidth:170
      },
      {
        id: 'regisDate',
        label: 'Regis Date',
        minWidth:170
      },
      {
        id: 'DOB',
        label : 'Date of birth',
        minWidth:170
      },
      {
        id: 'totalMile',
        label: 'Mile',
        minWidth:170
      }
    ],
    ticket:[
      {
        id: 'ticketId',
        label: 'Ticket ID',
        minWidth:170
      },
      {
        id: 'instanceId',
        label: 'Instance ID',
        minWidth:170
      },
      {
        id: 'userId',
        label:'User ID',
        minWidth:170
      },
      {
        id:'voucherCode',
        label:'Voucher code',
        minWidth:170
      },
      {
        id:'issuedDate',
        label: 'Issued date',
        minWidth:170
      }
    ]
}

const sort_obj = {
  airport : "code",
  country : "code",
  aircraft : "regNum",
  flight: "flightId",
  route: "code",
  promotion : "id",
  model: "ICAOCode",
  fi: "flightDate",
  user: "id",
  ticket: "ticketId"
}

const pk_obj = {
  airport : "code",
  country : "code",
  aircraft : "regNum",
  flight: "flightId",
  route: "code",
  promotion : "id",
  model: "ICAOCode",
  fi: "instanceId",
  user: "id",
  ticket: "ticketId"
}

const edit_obj = {
  route : <RouteForm/>,
  country: <CountryForm/>,
  aircraft: <AircraftForm/>,
  airport: <AirportForm/>,
  flight: <FlightForm/>,
  model: <ModelForm/>,
  promotion: <PromotionForm/>,
  fi: <FIForm/>,
  user: <UserForm/>,
  ticket: <TicketForm/>
}

export {columns ,pk_obj , sort_obj,edit_obj};