import React from 'react'
import Logo from '../assests/logo.svg'
import Signupimg from '../assests/register.json'
import DisplayLottie from './DisplayLottie'
// import { makeStyles } from '@material-ui/core/styles';
import './app.css'
import Signupform from './Signupform'
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
                    <img className="logo" src={Logo} alt="wm-logo" />
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