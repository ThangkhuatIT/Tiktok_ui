import React from 'react';
import MenuItem from './MenuItem';
import routes from '~/config/routes';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
const Menu = () => {
    return (
        <nav className={cx('wrapper')}>
            <MenuItem to={routes.home} icon={ } title={'For You'} />
            <MenuItem to={routes.following} icon={ } title={'For You'} />
            <MenuItem to={routes.explore} icon={ } title={'For You'} />
            <MenuItem to={routes.live} icon={ } title={'For You'} />
        </nav>
    );
};

export default Menu;