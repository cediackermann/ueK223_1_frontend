import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/users')}>
                Manage Users
            </Button>
        </Box>
    );
};

export default AdminPage;
