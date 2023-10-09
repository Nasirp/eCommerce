import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
import "./Moret.css"
const MoreT = () => {
  return (
    <div className='moret'>
      <div className='moret_in'>
        <NotificationsNoneIcon />
        <p>Notifications preferences</p>
      </div>
      <hr />
      <div className='moret_in'>
        <MonetizationOnIcon />
        <p>Sell on flipkart</p>
      </div>
      <hr />
      <div className='moret_in'>
        <LiveHelpIcon />
        <p>
            24*7 customer care
        </p>
      </div>
      <hr />
      <div className='moret_in'>
        <TrendingUpIcon />
        <p>Advertise</p>
      </div>
      <hr />
      <div className='moret_in'>
        <GetAppIcon/>
        <p>Download app</p>
      </div> 
      <hr />
    </div>
  )
}

export default MoreT
