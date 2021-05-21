import React, { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'
import Logo from '../utils/netflix-logo-removebg-preview.png'
import Avatar from '../utils/avatar.png'
import './Nav.css'
import { auth } from '../firebase'
import { userDetail } from '../features/userSlice'
import {useSelector} from 'react-redux'

const Nav = () => {
    const [show, handleshow] = useState(false);
    const [dropdown, setdropdown] = useState(false)
    const history = useHistory()
    const user = useSelector(userDetail);
    const transitioNavbar = () => {
        if (window.scrollY > 100) {
            handleshow(true);
        }
        else {
            handleshow(false);
        }
    }
    useEffect(() => {
       window.addEventListener("scroll", transitioNavbar)
        return () => {
            window.removeEventListener("scroll",transitioNavbar)
          }
    },[])
    return (
        <div className={`${show && 'nav'}`}>
            <div className="nav__content">
                <img className="nav__logo" src={Logo} alt="Netflix-Logo" onClick={() => { history.push("/") }}></img>
                <h4 className="username">Hi, {user.name}</h4>
                <img className="avatar" src={Avatar} alt="User-avatar" onMouseUp={() => { setdropdown(!dropdown) }}></img>
                
                {dropdown && <div className="dropdown">
                    <div className="dropdown__content">
                            <p>Help</p>
                        <p onClick={() => {
                            auth.signOut()
                            history.push("/login") 

                        }}>Sign Out</p>
                       
                    </div>
                </div>}
            </div>

            
        </div>
    )
}

export default Nav
