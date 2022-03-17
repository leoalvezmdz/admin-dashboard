import './sidebar.scss'
import DasboardIcon from '@mui/icons-material/Dashboard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { AccountCircleOutlined, ExitToApp, InsertChartOutlined, NotificationsNoneOutlined, PsychologyOutlined, SettingsApplicationsOutlined, SettingsSystemDaydreamOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className='top'>
            <Link to="/" style={{textDecoration: "none"}}>
                <span className='logo'>leodev admin</span>
            </Link>
            </div>
            <hr />
            <div className='center'>
                <ul>
                <p className='title'>Main</p>
                    <li>
                        <DasboardIcon className='icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <Link to="/users" style={{textDecoration: "none"}}>

                    <li>
                        <PersonOutlineIcon className='icon'/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: "none"}}>

                    <li>
                        <StorefrontIcon className='icon'/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <Link to="/orders" style={{textDecoration: "none"}}>

                    <li>
                        <CreditCardIcon className='icon'/>
                        <span>Orders</span>
                    </li>
                    </Link>
                    <li>
                        <LocalShippingIcon className='icon'/>
                        <span>Delivery</span>
                    </li>
                    <p className='title'>USEFUL</p>
                    <li>
                        <InsertChartOutlined className='icon'/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlined className='icon'/>
                        <span>Notifications</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlined className='icon'/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlined className='icon'/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsOutlined className='icon'/>
                        <span>Settings</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <AccountCircleOutlined className='icon'/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className='icon'/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                <div className='colorOption' onClick={()=>dispatch({type: "LIGHT"})}></div>
                <div className='colorOption' onClick={()=>dispatch({type: "DARK"})}></div>
            </div>
        </div>
    )
}

export default Sidebar;