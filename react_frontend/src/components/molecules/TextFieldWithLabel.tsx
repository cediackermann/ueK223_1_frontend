// src/components/molecules/TextFieldWithLabel.tsx
// Molecule: Ein Label und ein Textfeld kombiniert
import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface TextFieldWithLabelProps {
    id: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number' | 'date';
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const TextFieldWithLabel: React.FC<TextFieldWithLabelProps> = ({ id, label, type, value, onChange, error }) => {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} type={type} value={value} onChange={onChange} error={error} />
        </div>
    );
};

export default TextFieldWithLabel;