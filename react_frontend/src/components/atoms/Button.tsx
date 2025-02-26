
import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, variant = 'primary' }) => {
    let buttonStyle = 'px-4 py-2 rounded font-bold'; // Base styles

    switch (variant) {
        case 'primary':
            buttonStyle += ' bg-blue-500 text-white hover:bg-blue-700';
            break;
        case 'secondary':
            buttonStyle += ' bg-gray-200 text-gray-700 hover:bg-gray-300';
            break;
        case 'danger':
            buttonStyle += ' bg-red-500 text-white hover:bg-red-700';
            break;
    }

    return (
        <button onClick={onClick} className={`${buttonStyle} ${className}`}>
            {children}
        </button>
    );
};

export default Button;