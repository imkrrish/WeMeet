import React from 'react'
import Logo from '../assests/logo.svg'
import Signupimg from '../assests/onlinemeetings.json'
import DisplayLottie from '../components/DisplayLottie'
import '../components/app.css'
import { NavLink } from 'react-router-dom'
import WelcomeText from '../components/WelcomeText'


const Signup = () => {

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
                        <WelcomeText></WelcomeText>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup