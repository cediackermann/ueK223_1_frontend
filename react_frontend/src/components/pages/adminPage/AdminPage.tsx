// src/components/pages/adminPage/AdminPage.tsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/users')}  data-cy="manage-users-button">
                Manage Users
            </Button>
            <Button
                variant="contained"
                sx={{
                    mt: 2,
                    backgroundColor: '#00d4ff',
                    '&:hover': { backgroundColor: '#0f0fcf' },
                }}
                onClick={() => navigate(-1)}
                data-cy="go-back-button"
            >
                Go Back
            </Button>
        </Box>
    );
};

export default AdminPage;