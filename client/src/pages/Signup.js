import React from 'react'
import Logo from '../assests/logo.svg'
import Signupimg from '../assests/register.json'
import DisplayLottie from '../components/DisplayLottie'
// import { makeStyles } from '@material-ui/core/styles';
import '../components/app.css'
import Signupform from '../components/Signupform'
import { NavLink } from 'react-router-dom'
// const useStyles = makeStyles({

// });


const Signup = () => {
    // const classes = useStyles();

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
                        <Signupform></Signupform>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup