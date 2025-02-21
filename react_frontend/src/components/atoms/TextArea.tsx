import React, { ChangeEvent } from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface TextAreaProps {
    id?: string;
    label?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    error?: string;
    rows?: number;
    required?: boolean;
    className?: string;
    fullWidth?: boolean;
    margin?: 'normal' | 'dense' | 'none';
}

const TextArea: React.FC<TextAreaProps> = ({
                                               id,
                                               label,
                                               value,
                                               onChange,
                                               placeholder,
                                               error,
                                               rows = 3,
                                               required,
                                               className,
                                               fullWidth = false,
                                               margin = 'normal'
                                           }) => {
    return (
        <Box className={className}>
            {label && <Typography variant="body1" id={`${id}-label`} sx={{ color: '#fff' }}>{label}</Typography>}
            <TextField
                id={id}
                label={label}
                multiline
                rows={rows}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                error={!!error}
                helperText={error}
                required={required}
                fullWidth={fullWidth}
                margin={margin}
                InputProps={{ style: { color: '#fff' } }}
                sx={{
                    '& label': { color: '#fff' },
                    '& .MuiOutlinedInput-root': { borderColor: '#fff' },
                    '& .MuiInputBase-input': { color: '#fff' },
                }}
            />
        </Box>
    );
};

export default TextArea;