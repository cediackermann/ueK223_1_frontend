import React, { useEffect, useState, useContext } from 'react';
import { Box, Typography, Button } from '@mui/material';
import UserProfileService from '../../../Services/UserProfileService';
import { useNavigate } from "react-router-dom";
import ActiveUserContext from "../../../Contexts/ActiveUserContext";  // Import ActiveUserContext

const UserProfile = () => {
    const [profile, setProfile] = useState<{ name: string; address: string; birthDate: Date | null; age: string }>({
        name: '',
        address: '',
        birthDate: null,
        age: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { user: loggedInUser } = useContext(ActiveUserContext);

    useEffect(() => {
        const fetchProfile = async () => {
            if (loggedInUser) {
                try {
                    const profileData = await UserProfileService.getUserProfileById(loggedInUser.id);
                    console.log("Raw profileData from API:", profileData); // Überprüfe die Rohdaten

                    if (profileData) {
                        // Convert birthDate to Date object
                        const birthDateValue = profileData.birthDate ? new Date(profileData.birthDate) : null;
                        setProfile({
                            name: profileData.name, // Assuming 'name' is added by the backend
                            address: profileData.address,
                            birthDate: birthDateValue,
                            age: profileData.age
                        });
                    } else {
                        setError("Profile not found for logged-in user.");
                    }
                } catch (err) {
                    setError("Failed to load profile.");
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            } else {
                setError("No logged-in user found.");
                setLoading(false);
            }
        };

        setLoading(true);
        fetchProfile();
    }, [loggedInUser]);


    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    // Helper function to format the date
    const formatDate = (date: Date | null): string => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };


    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4">User Profile</Typography>
            {loggedInUser && (
                <>
                    <Typography><strong>Name:</strong> {loggedInUser.firstName} {loggedInUser.lastName}</Typography>
                    <Typography><strong>Address:</strong> {profile.address}</Typography>
                    <Typography><strong>Birthdate:</strong> {formatDate(profile.birthDate)}</Typography>
                    <Typography><strong>Age:</strong> {profile.age}</Typography>
                </>
            )}
            {!loggedInUser && (
                <Typography color="error">User not logged in or unable to fetch profile.</Typography>
            )}

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

export default UserProfile;