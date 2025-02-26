import React, { ChangeEvent } from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface DatePickerProps {
    id?: string;
    label?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
    className?: string;
    fullWidth?: boolean;
    margin?: 'normal' | 'dense' | 'none';
}

const DatePicker: React.FC<DatePickerProps> = ({
                                                   id,
                                                   label,
                                                   value,
                                                   onChange,
                                                   error,
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
                type="date"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error}
                required={required}
                fullWidth={fullWidth}
                margin={margin}
                InputLabelProps={{
                    shrink: true,
                    style: { color: '#fff' }
                }}
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

export default DatePicker;