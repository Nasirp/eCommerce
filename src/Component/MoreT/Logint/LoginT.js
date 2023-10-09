import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StoreIcon from '@mui/icons-material/Store';
import "./LoginT.css";
import { Link } from 'react-router-dom';
const LoginT = () => {
  return (
    <div className='logint'>
      <div className='logint_in'>
        <Link className="signupLink" to='/signup'>
        <h3>New Customer SignUp</h3>
      </Link>
      
      </div>
      <hr />
      <div className='logint_in'>
        <AccountCircleIcon />
        <p>my profile</p>
      </div>
      <hr />
      <div className='logint_in'>
        {/* <img src='src/img/fkplus-4ff29a.svg' alt=''>flipkaet plus zone</img> */}
      </div>
      <hr />
      <div className='logint_in'>
        <StoreIcon />
        <p>Order</p>
      </div>
      <hr />
      <div className='logint_in'>
        <FavoriteIcon />
        <p>Whishlist</p>
      </div>
      <hr />
      <div className='logint_in'>
         <ConfirmationNumberIcon />
         <p>Rewards</p>
      </div>
      <hr />
      <div className='logint_in'>
        <CardGiftcardIcon />
        <p>Gift Card</p>
      </div>
      <hr />
    </div>
  )
}

export default LoginT
