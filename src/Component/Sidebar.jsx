import '../css/sidebar.scss';
import AttributionIcon from '@mui/icons-material/Attribution';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NewLink = styled(Link)`
    text-decoration: none;
    color : white;
`

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <AttributionIcon className='logo'/>
            </div>
            <div className='center'>
                <ul>
                    <NewLink to='../dashboard/aircraft'><li>Aircraft</li></NewLink>
                    <NewLink to='../dashboard/airport'><li>Airport</li></NewLink>
                    <NewLink to='../dashboard/country'><li>Country</li></NewLink>
                    <NewLink to='../dashboard/route'><li>Route</li></NewLink>
                    <NewLink to='../dashboard/flight'><li>Flight</li></NewLink>
                    <NewLink to='../dashboard/fi'><li>Flight instance</li></NewLink>
                    <NewLink to='../dashboard/promotion'><li>Promotion</li></NewLink>
                    <NewLink to='../dashboard/user'><li>User</li></NewLink>
                    <NewLink to='../dashboard/ticket'><li>Ticket</li></NewLink>
                    <NewLink to='../dashboard/model'><li>Model</li></NewLink>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;