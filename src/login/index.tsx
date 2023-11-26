import React, { useState } from 'react';
import { Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography, CircularProgress } from '@material-ui/core';
import { post } from '../helpers/apiHelper';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRememberMeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRememberMe(event.target.checked);
    };

    const handleLogin = () => {
        validateUsername(username);
        validatePassword(password);

        if (!usernameError && !passwordError && username.trim() && password.trim()) {
            setLoading(true);
            post('/Login', { username, password }).then((Res) => {
                console.log(Res)
                localStorage.setItem("token", Res.result)
                setLoading(false);
                navigate("/")
            }).catch((error) => {
                if (error.response && error.response.data && error.response.data.message) {
                    alert(error.response.data.message);
                    setLoading(false);
                } else {
                    alert('An error occurred while processing your request.');
                }
                setLoading(false);
            });
        }

    }
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
                    Login
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
                        onChange={(e) => { setUsername(e.target.value); validateUsername(e.target.value); }}
                        error={!!usernameError}
                        helperText={usernameError}
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
                        onChange={(e) => { setPassword(e.target.value); validatePassword(e.target.value); }}
                        error={!!passwordError}
                        helperText={passwordError}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" checked={rememberMe} onChange={handleRememberMeChange} />}
                        label="Remember me"
                    />

                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                    >
                        {loading ? <CircularProgress size={24} style={{ marginRight: '12px' }} /> : null}
                        {loading ? 'Signing in' : 'Sign in'}
                    </Button>

                    <Grid container>
                        <Grid item xs>
                            <Link href="" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <RouterLink to="/register">
                                {"Not a member? Register"}
                            </RouterLink >
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default Login;
