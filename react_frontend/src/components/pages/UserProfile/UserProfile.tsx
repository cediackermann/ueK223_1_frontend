import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';
import api from '../../../config/Api';

const UserProfile = () => {
    const [profile, setProfile] = useState({ name: '', address: '', birthdate: '', profileImage: '' });

    useEffect(() => {
        api.get('/user/profile')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error fetching profile:', error));
    }, []);

    const handleSave = () => {
        api.put('/user/profile', profile)
            .then(() => alert('Profile updated successfully'))
            .catch(error => console.error('Error updating profile:', error));
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100vw"
            height="100vh"
            sx={{
                background: 'linear-gradient(135deg, #0f0fcf, #00d4ff)',
                color: '#fff',
                textAlign: 'center',
                overflow: 'hidden', // Verhindert Scrollbars
            }}
        >
            <Avatar
                src={profile.profileImage}
                alt="Profile Image"
                sx={{ width: 100, height: 100, mb: 2, border: '2px solid #fff' }}
            />
            <Typography variant="h4" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                User Profile
            </Typography>
            <Box width="100%" maxWidth={400}>
                <TextField
                    label="Name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    fullWidth
                    margin="normal"
                    InputProps={{ style: { color: '#fff' } }}
                    sx={{ '& label': { color: '#fff' }, '& .MuiOutlinedInput-root': { borderColor: '#fff' } }}
                />
                <TextField
                    label="Address"
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    fullWidth
                    margin="normal"
                    InputProps={{ style: { color: '#fff' } }}
                    sx={{ '& label': { color: '#fff' }, '& .MuiOutlinedInput-root': { borderColor: '#fff' } }}
                />
                <TextField
                    label="Birthdate"
                    type="date"
                    value={profile.birthdate}
                    onChange={(e) => setProfile({ ...profile, birthdate: e.target.value })}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    InputProps={{ style: { color: '#fff' } }}
                    sx={{ '& label': { color: '#fff' }, '& .MuiOutlinedInput-root': { borderColor: '#fff' } }}
                />
                <Button
                    variant="contained"
                    sx={{
                        mt: 3,
                        backgroundColor: '#00d4ff',
                        '&:hover': { backgroundColor: '#0f0fcf' },
                    }}
                    onClick={handleSave}
                >
                    Save Profile
                </Button>
            </Box>
        </Box>
    );
};

export default UserProfile;
