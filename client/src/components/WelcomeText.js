import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../components/app.css'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import DisplayLottie from '../components/DisplayLottie'
import Signupimg from '../assests/welcomeanime.json'
import { NavLink } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#C87CF2',
            dark: '#D06FE8',
        },
        secondary: {
            main: '#FFFFFF',
        },
        type: 'dark'
    },
});

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                WeMeet
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
    },
    submit: {
        margin: theme.spacing(5, 0, 0),
        color: 'white'
    },
    text: {
        color: 'white',
        fontSize: '2rem',
        letterSpacing: '0.5px',
        marginTop: theme.spacing(10),
    },
    btn: {
        display: 'flex',
        flexDirection: 'column',
    },
    btnlink: {
        textDecoration: 'none',
    }
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <div className={classes.paper}>
                    <DisplayLottie animationData={Signupimg} />
                    <Grid container spacing={2}>


                        <Grid item xs={12}>
                            <Typography align="center" variant="h4" className={classes.text}>
                                Please login or sign up to continue using WeMeet
                            </Typography>

                        </Grid>
                        <Grid item xs={12}>


                        </Grid>
                    </Grid>

                    <div className={classes.btn}>
                        <NavLink to="signin" className={classes.btnlink}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                fullWidth
                            >
                                Login
                            </Button>
                        </NavLink>


                        <NavLink to="register" className={classes.btnlink}>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="secondary"
                                className={classes.submit}
                                fullWidth
                            >
                                Sign Up
                            </Button>
                        </NavLink>
                    </div>


                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </ThemeProvider>
        </Container >
    );
}