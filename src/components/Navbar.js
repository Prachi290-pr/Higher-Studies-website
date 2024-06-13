import React, {useState} from 'react'
import {Link} from "react-router-dom";
import Profile from "../pages/Profile"
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";
import { MdCastForEducation  } from 'react-icons/md';

function Navbar() {
    const [openLinks, setOpenLinks] =useState(false)

    const toggleNavbar =() => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className="navbar">
        <div className='leftSide' id={openLinks ? "open" : "close"}>
            
            <a href="#" className="logo flex">
                <h1><MdCastForEducation className="icon"/> Study Abroad.</h1>
            </a>
            
            <div className='hiddenLinks'>
                
                <Link to="/about">About</Link>
                <Link to="/notif">Notifications</Link>
                <Link to="/Profile">Profile</Link>
            </div>
        </div>
        <div className='rightSide'>
            
            <Link to="/about">About</Link>
            <Link to="/notif">Notifications</Link>
            <Link to="/Profile">Profile</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar