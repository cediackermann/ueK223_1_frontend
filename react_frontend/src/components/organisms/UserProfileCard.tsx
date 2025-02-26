
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AvatarWithName from '../molecules/AvatarWithName';

interface UserProfileCardProps {
    name: string;
    imageUrl?: string;
    age?: string;
    address?: string;
    birthdate?: string;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, imageUrl, age, address, birthdate }) => {
    return (
        <Card>
            <CardContent>
                <AvatarWithName name={name} imageUrl={imageUrl} size="medium" />
                <Typography variant="body1">Age: {age}</Typography>
                <Typography variant="body2">Address: {address}</Typography>
                <Typography variant="body2">Birthdate: {birthdate}</Typography>
            </CardContent>
        </Card>
    );
};

export default UserProfileCard;