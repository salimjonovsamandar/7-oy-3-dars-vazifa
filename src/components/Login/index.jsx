import React from 'react'
import "../Login/index.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useRef } from 'react'

function Login() {

    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    function validate(usernameRef, passwordRef) {
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

        if (!passwordRef.current.value) {
            passwordRef.current.focus()
            alert("Password kiritishili shart")
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
        if (validate(usernameRef, passwordRef)) {

            const user = {
                username: usernameRef.current.value,
                password: passwordRef.current.value
            }
            fetch("https://auth-rg69.onrender.com/api/auth/signin", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.id) {
                        localStorage.setItem("accessToken", data.accessToken)
                        localStorage.setItem("user", JSON.stringify(data))
                    }
                    navigate("/home")
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
                    <label>Password </label>
                </div>
                <div className="inputForm">
                    <input ref={passwordRef} placeholder="Enter your Password" className="input" type="password" />
                </div>
                <button onClick={handleSubmit} className="button-submit">Sign In</button>
                <p className="p">Don't have an account? <NavLink to="/register" className="span">Sign Up</NavLink></p>
            </form>
        </div>
    )
}

export default Login