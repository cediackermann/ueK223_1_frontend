import {
    Paper,
    Grid,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';
import authorities from '../../../config/Authorities';
import roles from "../../../config/Roles";

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Login = () => {
    const navigate = useNavigate();
    const { user, login,checkRole } = useContext(ActiveUserContext);

    useEffect(() => {
        if (user && user.roles) {
            const isAdmin = checkRole(roles.ADMIN);
            navigate(isAdmin ? '/admin' : '/dashboard');
        }
    }, [user, navigate]);

    const handleSubmit = (values: { email: string; password: string }) => {
        login(values.email.toLowerCase(), values.password)
            .then((loggedInUser) => {
                const isAdmin = checkRole(roles.ADMIN);
                navigate(isAdmin ? '/admin' : '/dashboard');
            })
            .catch((error) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    alert('Invalid login');
                } else {
                    alert('Login Error');
                }
            });
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            height="100vh"
            sx={{
                background: 'linear-gradient(135deg, #0f0fcf, #00d4ff)',
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    padding: 4,
                    width: 320,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Sign In
                </Typography>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                id="email"
                                placeholder="Enter email"
                                fullWidth
                                required
                                margin="normal"
                                InputProps={{
                                    style: { color: '#fff' },
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                sx={{ '& label': { color: '#fff' }, '& .MuiOutlinedInput-root': { borderColor: '#fff' } }}
                            />
                            {errors.email && <Typography color="error">{errors.email}</Typography>}
                            <TextField
                                id="password"
                                label="Password"
                                placeholder="Enter password"
                                type="password"
                                fullWidth
                                required
                                margin="normal"
                                InputProps={{
                                    style: { color: '#fff' },
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                sx={{ '& label': { color: '#fff' }, '& .MuiOutlinedInput-root': { borderColor: '#fff' } }}
                            />
                            {errors.password && <Typography color="error">{errors.password}</Typography>}
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 2,
                                    backgroundColor: '#00d4ff',
                                    '&:hover': { backgroundColor: '#0f0fcf' },
                                }}
                            >
                                Sign in
                            </Button>
                        </form>
                    )}
                </Formik>
                <Typography sx={{ mt: 2 }}>
                    <Link href="#" color="inherit">
                        Forgot password?
                    </Link>
                </Typography>
                <Typography>
                    Don't have an account?{' '}
                    <Link href="#" color="inherit">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Login;
