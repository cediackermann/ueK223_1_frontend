import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import UserProfileService from '../../../Services/UserProfileService';

const UserProfile = () => {
    const [profile, setProfile] = useState({ name: '', address: '', birthdate: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await UserProfileService.getUserProfile();
                if (profileData) {
                    setProfile(profileData);
                }
            } catch (err) {
                setError("Failed to load profile.");
            } finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleSave = async () => {
        try {
            await UserProfileService.updateUserProfile(profile);
            alert('Profile updated successfully');
        } catch (error) {
            setError('Error updating profile');
        }
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;
    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4">User Profile</Typography>
            <TextField label="Name" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} fullWidth margin="normal" />
            <TextField label="Address" value={profile.address} onChange={(e) => setProfile({ ...profile, address: e.target.value })} fullWidth margin="normal" />
            <TextField label="Birthdate" type="date" value={profile.birthdate} onChange={(e) => setProfile({ ...profile, birthdate: e.target.value })} fullWidth margin="normal" />
            <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 10 }}>
                Save Profile
            </Button>
        </Box>
    );
};

export default UserProfile;