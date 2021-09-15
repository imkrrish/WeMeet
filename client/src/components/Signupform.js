import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './app.css'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(5, 0, 3),
        color: 'white'
    },
    textfield: {
        margin: theme.spacing(1, 0, 1),
    },
    title: {
        color: 'white',
        lineHeight: '3',
        fontSize: '2.5rem',
        letterSpacing: '0.5px'
    },
    cssLabel: {
        color: "white",
        "&.Mui-focused": {
            color: "white"
        }
    },
    cssOutlinedInput: {
        "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline": {
            borderColor: "white" //default
        },
        "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
            borderColor: "white" //hovered
        },
        "&$cssFocused $notchedOutline": {
            borderColor: "white" //focused
        }
    },
}));

export default function SignUp() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <div className={classes.paper}>
                    <Typography align="left" variant="h3" className={classes.title}>
                        Create Account
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textfield}
                                    color='secondary'
                                    autoComplete="fname"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    className={classes.textfield}
                                    color='secondary'
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.textfield}
                                    color='secondary'
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="off"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    className={classes.textfield}
                                    color='secondary'
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssFocused,
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" color='secondary' underline='none'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </ThemeProvider>
        </Container >
    );
}