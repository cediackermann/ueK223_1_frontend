
import React, { useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ActiveUserContext from '../../../Contexts/ActiveUserContext';

const UserDashboard = () => {
    const navigate = useNavigate();
    const { logout } = useContext(ActiveUserContext);

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
                data-cy="view-profile-button"
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
                onClick={() => navigate('/Edit-Profile')}
                data-cy="edit-profile-button"
            >
                Edit Profile {/* Geändert zu Edit Profile */}
            </Button>
            <Button
                variant="contained"
                sx={{
                    mt: 2,
                    backgroundColor: '#00d4ff',
                    '&:hover': { backgroundColor: '#0f0fcf' },
                }}
                onClick={() => navigate('/admin')}
                data-cy="admin-page-button"
            >
                Admin Page
            </Button>
            <Button
                variant="contained"
                sx={{
                    mt: 2,
                    backgroundColor: '#ff5555',
                    '&:hover': { backgroundColor: '#cc0000' },
                }}
                onClick={logout}
                data-cy="logout-button"
            >
                Logout
            </Button>

        </Box>
    );
};

export default UserDashboard;