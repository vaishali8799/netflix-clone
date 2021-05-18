import React, { useRef }from 'react'
import { auth } from '../firebase';
import './SignIn.css'

const SignIn = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const registerUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(authUser => console.log(authUser))
            .catch(err => alert(err.message))
    }
    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then(authUser => console.log(authUser))
        .catch(err => alert(err.message))
        
    }

    return (
        <div className="signIn__form">
            <h1>Sign In</h1>
            <form>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef}type="password" placeholder="Password" />
                <button type="submit" onClick={signin}>Sign In</button>
            </form>
            <div>
                <p>New to Netflix
                <span onClick={registerUser}>Sign Up Now</span></p>
            </div>
            
             
        </div>
    )
}

export default SignIn
