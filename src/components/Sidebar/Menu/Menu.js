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
            <MenuItem to={routes.following} icon={<UserGroupIcon />} title={'Following'} />
            <MenuItem to={routes.explore} icon={<ExploreIcon />} title={'Explore'} />
            <MenuItem to={routes.live} icon={<LiveIcon />} title={'Live'} />
        </nav>
    );
};

export default Menu;