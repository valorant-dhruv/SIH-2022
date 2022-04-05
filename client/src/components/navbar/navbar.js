import React from 'react'
import avatarIcon from '../../icons/avatar.png'
import demoLogo from '../../icons/demo-logo.png'
import './navbar.css'
import {
    Link
} from "react-router-dom";
const navbar = () => {
    const openProfile = () => {
        // document.onload.querySelector('.drop-down').classList.add('profile-dropdown')
        document.querySelector('.drop-down').classList.toggle('d-none')
    }
    return (
        <>
            <header className="bg-navbar">
                <nav className="d-flex justify-content-between align-items-center p-2 m-1">
                    <img src={demoLogo} alt="logo" className='logo-home' />
                    <div className='profile-div'>
                        <img src={avatarIcon} alt="avatarIcon" className="profile-icon" onClick={openProfile} />
                    </div>
                </nav>
                <div className="drop-down d-none bg-navbar">
                    <ul>
                        <li><Link to="/profile">My Profile</Link></li>
                        <li><Link to="/landingPage">Logout</Link></li>
                    </ul>
                </div>
            </header>

        </>
    )
}

export default navbar