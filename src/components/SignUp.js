import React,{useRef} from 'react'
import Nav from './Nav'
import {auth} from '../firebase'

const SignUp = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const registerUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(authUser => {
                console.log(authUser)
                // authUser({
                //     displayname: nameRef.current.value
                // })
            })
            .catch(err => alert(err.message))
    }
    return (
        <div>
            <Nav />
            <div className="signIn__form">
            <h1>New To Netflix</h1>
                <form>
                <input ref={nameRef} type="text" placeholder="Name"/>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={registerUser}>Sign Up</button>
            </form>
           
            
             
        </div>
        </div>
    )
}

export default SignUp
