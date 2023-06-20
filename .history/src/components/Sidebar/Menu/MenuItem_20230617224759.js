import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
const MenuItem = ({ to, icon, title }) => {
    return (
        <NavLink to={to}>
            {icon}
            <span>{title}</span>
        </NavLink>
    );
};

export default MenuItem;