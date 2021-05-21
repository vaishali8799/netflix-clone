import React,{useRef} from 'react'
import Logo from '../utils/netflix-logo-removebg-preview.png'
import avatar from '../utils/avatar.png'
import './Profile.css'
import { auth } from '../firebase'
import { useHistory } from 'react-router'

const Profile = () => {
    const nameRef = useRef(null);
    const history =useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = auth.currentUser;
        user.updateProfile({
            displayName: nameRef.current.value
        }).then(res => console.log(res)).catch(err => alert(err.message))
        history.push("/Home")
    }
    
    return (
        
            <div className="Profile__screen">
            <img className="login__logo" src={Logo} alt="Netflix-Logo"></img>
            <div className="login__gradient" />
                 <div className="Profile__body">
                <h2>Add Profile</h2>
                <h4>Tell us who is watching Netflix.</h4>
                <hr/>
                <div className="profile__content">
                    
                    <form>
                    <div className="user__details">
                            <img src={avatar} alt="avatar" />
                            
                    <input ref={nameRef} type="text" placeholder="Enter Your Username"></input>
                    </div>   
                        <button type="submit" onClick={handleSubmit}>Continue</button>
                        </form>
                </div>
               
            </div>
        </div>
    )
}

export default Profile
