
import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import CustomListService from '../../Services/CustomListService';
import { useNavigate } from "react-router-dom";
import UserProfileService from '../../Services/UserProfileService'; // Importiere den UserProfileService

interface ListEntry {
    id: string;
    newTitle: string;
    newText: string;
}

const CustomListPage = () => {
    const [profile, setProfile] = useState({ name: '', address: '', birthdate: '', age: '' }); // State für das Profil
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

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

    useEffect(() => {
        if (profile.birthdate) {
            const birthDateObj = new Date(profile.birthdate);
            const today = new Date();
            let age = today.getFullYear() - birthDateObj.getFullYear();
            const month = today.getMonth() - birthDateObj.getMonth();

            if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
                age--;
            }

            setProfile(prevProfile => ({ ...prevProfile, age: age.toString() }));
        }
    }, [profile.birthdate]);

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
            <Typography variant="h4">Edit User Profile</Typography> {/* Geändert */}
            <TextField
                label="Name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                fullWidth
                margin="normal"
                data-cy="name-field"
            />
            <TextField
                label="Address"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                fullWidth
                margin="normal"
                data-cy="address-field"
            />
            <TextField
                label="Birthdate"
                type="date"
                value={profile.birthdate}
                onChange={(e) => setProfile({ ...profile, birthdate: e.target.value })}
                fullWidth
                margin="normal"
                data-cy="birthdate-field"
            />
            <TextField
                label="Age"
                value={profile.age}
                InputProps={{ readOnly: true }}
                fullWidth
                margin="normal"
                data-cy="age-field"
            />
            <Button variant="contained" color="primary" onClick={handleSave} style={{ marginTop: 10 }}  data-cy="save-button">
                Save Profile
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

export default CustomListPage;