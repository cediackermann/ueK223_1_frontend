
import React from 'react';
import CustomAvatar from '../atoms/CustomAvatar';
import { Typography } from '@mui/material';

interface AvatarWithNameProps {
    name: string;
    imageUrl?: string;
    size?: 'small' | 'medium' | 'large';
}

const AvatarWithName: React.FC<AvatarWithNameProps> = ({ name, imageUrl, size = 'medium' }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <CustomAvatar src={imageUrl} alt={name} size={size} />
            <Typography variant="subtitle1" style={{ marginLeft: '8px' }}>{name}</Typography>
        </div>
    );
};

export default AvatarWithName;