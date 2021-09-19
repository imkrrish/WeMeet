import React from 'react'
import Logo from '../assests/logo.svg'
import Signupimg from '../assests/register.json'
import DisplayLottie from '../components/DisplayLottie'
import '../components/app.css'
import Loginform from '../components/Loginform'
import { NavLink } from 'react-router-dom'


const Login = () => {

    return (
        <>
            <div className="root">
                <div className="background">
                    <div className="backgroundcolor"></div>
                </div>
                <div className="container">
                    <NavLink to='/'>
                        <img className="logo" src={Logo} alt="wm-logo" />
                    </NavLink>
                    <div className="signupimg">
                        <DisplayLottie animationData={Signupimg} />
                    </div>
                    <div className="form-container">
                        <Loginform></Loginform>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login