import React, { useState } from 'react'
import SignIn from './SignIn'
import { useHistory } from 'react-router';
import './Login.css'
import Logo from '../utils/netflix-logo-removebg-preview.png'

const Login = () => {
    
    const [signIn, setsignIn] = useState(false)
    const history = useHistory()
    const handleClick = (e) => {
        e.preventDefault();
        history.push("/Signup")
        
    }
    return (
        <div className="login__screen">
            <img className="login__logo" src={Logo} alt="Netflix-Logo"></img>
            <button className="signIn" onClick={()=>{setsignIn(true)}}>Sign In</button>
            <div className="login__gradient" />
            <div className="login__body">
            {signIn ? <SignIn /> : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login__inputs">
                            <form>
                                <input type="email" placeholder="Email address" required />
                                <button className="signIn__button" onClick={handleClick } >GET STARTED</button>
                            </form>
                        </div>
                    </>
            )}
          
          </div>
        </div>
    )
}

export default Login
