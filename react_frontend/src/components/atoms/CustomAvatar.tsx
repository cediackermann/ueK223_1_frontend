import React from 'react';
import { Avatar } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface AvatarProps {
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    className?: string;
    sx?: SxProps<Theme>;
}

const CustomAvatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 'medium', className, sx }) => {
    let sizeProps: SxProps<Theme> = {};

    switch (size) {
        case 'small':
            sizeProps = { width: 40, height: 40 };
            break;
        case 'medium':
            sizeProps = { width: 80, height: 80 };
            break;
        case 'large':
            sizeProps = { width: 120, height: 120 };
            break;
        default:
            sizeProps = { width: 80, height: 80 };
    }

    return (
        <Avatar
            src={src}
            alt={alt}
            className={className}
            sx={{ ...sizeProps, ...sx }}
        />
    );
};

export default CustomAvatar;