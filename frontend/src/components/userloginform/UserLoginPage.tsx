<<<<<<< HEAD
import * as React from 'react';
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
=======
import {LogInUser} from "../../type/types.ts";
import UserLoginForm from "./index.ts";
>>>>>>> 94b6f404b356a8e251ad6b21f1e107cad0e4e442
import {useState} from "react";
import User from "../../type/types.ts";
import {useNavigate} from "react-router-dom";

<<<<<<< HEAD
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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate;
    const [user,setUser] = useState({
        username :"",
        name : "",
        password : "",
        email : ""
    })
    const [userIsValid, setUserIsValid] = useState(false);

    async function  sendUserDatas(user :User): Promise<void> {
=======
function UserLoginPage(){
    const navigate = useNavigate();
    const [userIsValid, setUserIsValid]= useState(false)
    const [errorMassage, setErrorMassage] = useState(String)


    async function  sendUserDatas(user :LogInUser): Promise<void> {
>>>>>>> 94b6f404b356a8e251ad6b21f1e107cad0e4e442
        const response =  await fetch("/api/users/login",
            {method : "POST",
                headers : {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify(user)})
<<<<<<< HEAD
        const data :boolean = await response.json();
        if (data) {
            // @ts-ignore
            navigate('/home');
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const loginUser = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        }
        sendUserDatas(loginUser);

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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username:"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
=======
        if (response.ok) {
            setUserIsValid(true);
        } else if (response.status === 400) {
            setErrorMassage(await response.text())
        }



    }

    if(!userIsValid){
        return(
                <UserLoginForm
                    loginUser={sendUserDatas}/>);
    } else {
        navigate("/home");
    }

}
export default UserLoginPage;
>>>>>>> 94b6f404b356a8e251ad6b21f1e107cad0e4e442
