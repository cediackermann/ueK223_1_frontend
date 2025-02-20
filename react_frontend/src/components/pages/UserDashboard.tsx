import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4" gutterBottom>User Dashboard</Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/profile')}>
                View Profile
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate('/my-list')} style={{ marginTop: 10 }}>
                My Custom List
            </Button>
        </Box>
    );
};

export default UserDashboard;
