import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Button.css';

const Button = ({ children, to, onClick, variant = 'primary', className = '', type = 'button' }) => {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const combinedClasses = `${baseClass} ${variantClass} ${className}`.trim();

    if (to) {
        return <Link to={to} className={combinedClasses}>{children}</Link>;
    }

    return (
        <button type={type} onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};

export default Button;
