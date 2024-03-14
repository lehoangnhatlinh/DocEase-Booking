import React from 'react';

import './styles.css';
import NotificationIcon from '../../assets/icons/notification.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import avatar from '../../assets/images/hero-img02.png'

function DashboardHeader ({ btnText, onClick }) {
    return(
        <div className='dashbord-header-container'>
            {/* {btnText && 
                <button className='dashbord-header-btn' onClick={onClick}>{btnText}</button>
            } */}

            
                <img 
                    src={NotificationIcon}
                    alt='notification-icon'
                    className='dashbord-header-icon' />
                <img
                    className='dashbord-header-avatar'
                    src={avatar} />
            </div>
    )
}

export default DashboardHeader;