import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';
import { FaHospitalUser, FaUserAlt , FaClipboardList, FaHouseUser  } from "react-icons/fa";

const sidebar_menu = [
    {
        id: 1,
        icon: <FaClipboardList />,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: <FaHospitalUser />,
        path: '/doctors',
        title: 'Doctors',
    },
    {
        id: 3,
        icon: <FaUserAlt  />,
        path: '/patients',
        title: 'Patients',
    },
    {
        id: 4,
        icon: <FaHouseUser />,
        path: '/profile',
        title: 'My account',
    }
]

export default sidebar_menu;