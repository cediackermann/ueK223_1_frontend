import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            height="100vh"
            sx={{
                background: 'linear-gradient(135deg, #0f0fcf, #00d4ff)',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontFamily: 'Arial, sans-serif',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
            >
                User Dashboard
            </Typography>
            <Button
                variant="contained"
                sx={{
                    mt: 3,
                    backgroundColor: '#00d4ff',
                    '&:hover': { backgroundColor: '#0f0fcf' },
                }}
                onClick={() => navigate('/profile')}
            >
                View Profile
            </Button>
            <Button
                variant="contained"
                sx={{
                    mt: 2,
                    backgroundColor: '#00d4ff',
                    '&:hover': { backgroundColor: '#0f0fcf' },
                }}
                onClick={() => navigate('/my-list')}
            >
                My Custom List
            </Button>
            <Button
                variant="contained"
                sx={{
                    mt: 50,
                    backgroundColor: '#00d4ff',
                    '&:hover': { backgroundColor: '#0f0fcf' },
                }}
                onClick={() => navigate('/admin')}
            >
                Admin Page
            </Button>
        </Box>
    );
};

export default UserDashboard;