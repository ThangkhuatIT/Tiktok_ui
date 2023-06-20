import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ to, icon, title }) => {
    return (
        <NavLink to={to}>
            {icon}
            <span>{title}</span>
        </NavLink>
    );
};

export default MenuItem;