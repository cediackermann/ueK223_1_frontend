
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface FormRowProps {
    label: string;
    id: string;
    type: 'text' | 'email' | 'password' | 'date' | 'number';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const FormRow: React.FC<FormRowProps> = ({ label, id, type, value, onChange, error }) => {
    return (
        <div className="form-row">
            <Label htmlFor={id}>{label}</Label>
            <Input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                error={error}
            />
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default FormRow;