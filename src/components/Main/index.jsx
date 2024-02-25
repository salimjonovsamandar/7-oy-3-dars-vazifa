import React from 'react'
import "../Main/index.css"
import { NavLink } from 'react-router-dom'

function Main() {
    return (
        <div className="login-card">
            {/* <button onClick={handleClick} >Sign in</button */}
            <p className="instruction-text">Or sign in with</p>
            <NavLink to="/login" className="normal-signin">Sign in</NavLink>
            <p className="instruction-text">Don't have an Account?</p>
            <NavLink to="/register" className="create-account">Create Account</NavLink>
        </div>
    )
}

export default Main