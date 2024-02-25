import React from 'react'
import "../Register/index.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import GoogleLogin from 'react-google-login'
import { GoogleLoginButton } from 'react-social-login-buttons'

const id = "95172988738-9fgrp6pqt54b5i7skt47gl05i8e2pjnf.apps.googleusercontent.com"

function Register() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    function responseGoogle(response) {
        console.log('Google login successful', response);
        navigate("/home")
    }

    function responseGoogleFailure(error) {
        console.error('Google login failed', error);
    }

    function validate(usernameRef, emailRef, passwordRef) {
        if (!usernameRef.current.value) {
            usernameRef.current.focus()
            alert("Usename kiritishili shart")
            usernameRef.current.value = ""
            return false
        }
        if (usernameRef.current.value.trim().length == 0) {
            usernameRef.current.focus()
            alert("Username faqat probellardan iborat bo'lishi mumkin emas")
            usernameRef.current.value = ""
            return false
        }
        if (usernameRef.current.value.trim().length < 4) {
            usernameRef.current.focus()
            alert("Usename kamida 4 ta belgidan iborat bo'lishi kerak")
            usernameRef.current.value = ""
            return false
        }

        if (!emailRef.current.value) {
            emailRef.current.focus()
            alert("Email kiritishili shart")
            emailRef.current.value = ""
            return false
        }
        if (emailRef.current.value.trim().length == 0) {
            emailRef.current.focus()
            alert("Email faqat probellardan iborat bo'lishi mumkin emas")
            emailRef.current.value = ""
            return false
        }

        if (!passwordRef.current.value) {
            passwordRef.current.focus()
            alert("Password kiritishili shart")
            passwordRef.current.value = ""
            return false
        }
        if (passwordRef.current.value.trim().length < 4) {
            passwordRef.current.focus()
            alert("Password kamida 4 ta belgidan iborat bo'lishi kerak")
            passwordRef.current.value = ""
            return false
        }
        if (passwordRef.current.value.trim().length == 0) {
            passwordRef.current.focus()
            alert("Password faqat probellardan iborat bo'lishi mumkin emas")
            passwordRef.current.value = ""
            return false
        }
        return true
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (validate(usernameRef, emailRef, passwordRef)) {

            const user = {
                username: usernameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            fetch("https://auth-rg69.onrender.com/api/auth/signup", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    navigate("/login")
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }



    return (
        <div className='wrapper'>
            <form className="form">
                <div className="flex-column">
                    <label>Username</label>
                </div>
                <div className="inputForm">
                    <input ref={usernameRef} placeholder="Enter your Username" className="input" type="text" />
                </div>
                <div className="flex-column">
                    <label>Email</label>
                </div>
                <div className="inputForm">
                    <input ref={emailRef} placeholder="Enter your Email" className="input" type="email" />
                </div>
                <div className="flex-column">
                    <label>Password </label>
                </div>
                <div className="inputForm">
                    <input ref={passwordRef} placeholder="Enter your Password" className="input" type="password" />
                </div>
                <button onClick={handleSubmit} className="button-submit">Sign In</button>
                <p className="p">Don't have an account? <NavLink to="/login" className="span">Sign In</NavLink></p>
                <div className="flex-row">
                    {/* <button onClick={googleClick} className="btn google"><svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg> Google</button> */}
                    <GoogleLogin
                        clientId={id}
                        className='google'
                        cookiePolicy={"single_host_origin"}
                        isSignedIn={true}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogleFailure}
                       
                    />
                </div>
            </form>
        </div>
    )
}

export default Register