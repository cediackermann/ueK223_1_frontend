import React from 'react';

interface InputProps {
    id?: string;
    type: 'text' | 'email' | 'date' | 'number' | 'password';
    label?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    required?: boolean;
    className?: string;
}

const Input: React.FC<InputProps> = ({
                                         id,
                                         type,
                                         label,
                                         value,
                                         onChange,
                                         placeholder,
                                         error,
                                         required,
                                         className
                                     }) => {
    return (
        <div className={className}>
            {label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Input;