import React from 'react';
import MenuItem from './MenuItem';
import { HomeIcon, UserGroupIcon, LiveIcon, ExploreIcon } from '~/components/Icons/icon';
import routes from '~/config/routes';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
const Menu = () => {
    return (
        <nav className={cx('wrapper')}>
            <MenuItem to={routes.home} icon={<HomeIcon />} title={'For You'} />
            <MenuItem to={routes.following} icon={<UserGroupIcon />} title={'For You'} />
            <MenuItem to={routes.explore} icon={<ExploreIcon />} title={'For You'} />
            <MenuItem to={routes.live} icon={<LiveIcon />} title={'For You'} />
        </nav>
    );
};

export default Menu;