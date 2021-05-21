import React,{useRef} from 'react'
import { auth } from '../firebase'
import './SignUp.css'
import { useHistory } from 'react-router'
import Logo from '../utils/netflix-logo-removebg-preview.png'

const SignUp = () => {
    const history=useHistory()
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const registerUser = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
            .then(authUser => {
                console.log(authUser)
                history.push("/Profile")
                // authUser({
                //     displayname: nameRef.current.value
                // })
            })
            .catch(err => alert(err.message))
    }
    return (
        <div>
            
            <div className="signUp__screen">
                <img className="login__logo" src={Logo} alt="Netflix-Logo"></img>
                <div className="signup__body">
                <hr/>
                    <div className="signup__form">
            
                    <h1>New To Netflix?</h1>
                    <h2>Joining Netflix is easy. </h2>
                    <h4>Enter your password and you'll be watching in no time.</h4>
                <form>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={registerUser}>Continue</button>
                </form>
                    </div>
                    </div>
           
            
             
        </div>
        </div>
    )
}

export default SignUp
