// src/components/organisms/UserProfileCard.tsx
// Organism: Zeigt die vollständigen Profilinformationen in einer Karte an.
// Enthält Molecules (AvatarWithName) und Atoms (Typography).
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AvatarWithName from '../molecules/AvatarWithName';

interface UserProfileCardProps {
    name: string;
    imageUrl?: string;
    bio?: string;
    address?: string;
    birthdate?: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, imageUrl, bio, address, birthdate }) => {
    return (
        <Card>
            <CardContent>
                <AvatarWithName name={name} imageUrl={imageUrl} size="large" />
                <Typography variant="body1">Bio: {bio}</Typography>
                <Typography variant="body2">Address: {address}</Typography>
                <Typography variant="body2">Birthdate: {birthdate}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserProfileCard;