import React ,{useState,useEffect} from 'react'
import Logo from '../utils/netflix-logo.png'
import Avatar from '../utils/avatar.png'
import './Nav.css'

const Nav = () => {
    const [show, handleshow] = useState(false);
    const transitioNavbar = () => {
        if (window.scrollY > 100) {
            handleshow(true);
        }
        else {
            handleshow(false);
        }
    }
    useEffect(() => {
       window.addEventListener("scroll",transitioNavbar) 
    },[])
    return (
        <div className={`${show && 'nav'}`}>
            <div className="nav__content">
                <img className="nav__logo" src={Logo} alt="Netflix-Logo"></img>
                <img className="avatar" src={Avatar} alt="User-avatar"></img>
            </div>

            
        </div>
    )
}

export default Nav
