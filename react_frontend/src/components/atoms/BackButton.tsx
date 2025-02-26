// components/atoms/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    children?: React.ReactNode;
    className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({children = "Go Back", className }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // navigiert zur vorherigen Seite in der Browserhistorie
    };

    return (
        <button onClick={handleGoBack} className={`px-4 py-2 rounded font-bold bg-gray-200 text-gray-700 hover:bg-gray-300 ${className}`}>
            {children}
        </button>
    );
};

export default BackButton;