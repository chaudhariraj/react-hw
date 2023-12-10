import React, { useState } from 'react';
import { Button, Container, Grid, TextField, Typography, CircularProgress } from '@material-ui/core';
import { post } from '../helpers/apiHelper';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = () => {
        validateUsername(username);
        validatePassword(password);

        if (validateEmail(email) && !emailError && !usernameError && !passwordError && username.trim() && password.trim()) {
            setLoading(true);
            post('/Register', { username, password, email }).then((Res) => {
                console.log(Res);
                setLoading(false);
                navigate("/Login");
            }).catch((error) => {
                // Handle error here
                console.log(error)
                setLoading(false);
            });
        } else {
            if (!validateEmail(email)) {
                setEmailError('Please enter a valid email');
            }
        }
    };

    const validateUsername = (value: string) => {
        if (!value.trim()) {
            setUsernameError('Username is required');
        } else {
            setUsernameError('');
        }
    };

    const validatePassword = (value: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!value.trim()) {
            setPasswordError('Password is required');
        } else if (!passwordRegex.test(value)) {
            setPasswordError('Password should have at least 8 characters, one uppercase, one lowercase, one number, and one special character.');
        } else {
            setPasswordError('');
        }
    };

    return (
        <Container maxWidth="sm">
            <div>
                <Typography className='mb-5' component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form noValidate>
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        error={!!usernameError}
                        helperText={usernameError}
                        onChange={(e) => { setUsername(e.target.value); validateUsername(e.target.value); }}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        error={!!emailError}
                        helperText={emailError}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailError) {
                                setEmailError('');
                            }
                        }}
                    />
                    <TextField
                        variant="filled"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        error={!!passwordError}
                        helperText={passwordError}
                        onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                    >
                        {loading ? <CircularProgress size={24} style={{ marginRight: '12px' }} /> : null}
                        {loading ? 'Signing up' : 'Sign up'}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <RouterLink to="/login">
                                {"Member? Login"}
                            </RouterLink >
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Register;

