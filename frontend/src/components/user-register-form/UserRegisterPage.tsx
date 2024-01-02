<<<<<<< HEAD
import * as React from 'react';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
=======
import UserRegisterForm from "./index.ts";
import {useNavigate} from "react-router-dom";
import {RegistrationUser} from "../../type/types.ts";
import {useState} from "react";



>>>>>>> 94b6f404b356a8e251ad6b21f1e107cad0e4e442

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        username :"",
        name : "",
        password : "",
        email : ""
    })

<<<<<<< HEAD
    function sendUserDatas ( user : User) {
        fetch("/api/users/register", {
=======
function UserRegisterPage () {
    const navigate = useNavigate()
    const [userRegistered, setUserRegistered] = useState(false);
    const [errorMassage, setErrorMassage] = useState(String);

    async function sendUserDatas ( user : RegistrationUser) {
        const response = await fetch("/api/users/register", {
>>>>>>> 94b6f404b356a8e251ad6b21f1e107cad0e4e442
            method : "POST",
            headers : {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(user)
<<<<<<< HEAD
        }).then((res) => res.json());
    }



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newUser = {
            username: event.target.elements.username.value,
            name: event.target.elements.firstName.value + " " + event.target.elements.lastName.value,
            password: event.target.elements.password.value,
            email: event.target.elements.email.value
        }
        // @ts-ignore
        setUser(newUser);
        sendUserDatas(newUser);
        console.log(newUser);
        navigate("/login");
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username: "
                                    name="username"
                                    autoComplete="user-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
=======
        });
        if (response.ok) {
            setUserRegistered(true)
        } else if (response.status === 400) {
            setErrorMassage( await response.text())
        }
    }


    if (!userRegistered) {
    return (
        <UserRegisterForm
        onSave={sendUserDatas}
        />
    )
    } else {
        navigate("/login")
    }


}

export default UserRegisterPage;
>>>>>>> 94b6f404b356a8e251ad6b21f1e107cad0e4e442
