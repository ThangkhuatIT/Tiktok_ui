import React from 'react';
import MenuItem from './MenuItem';
import routes from '~/config/routes';

const Menu = () => {
    return (
        <ul>
            <MenuItem to={routes.home} icon={ } title={'For You'} />
            <MenuItem to={routes.following} icon={ } title={'For You'} />
            <MenuItem to={routes.explore} icon={ } title={'For You'} />
            <MenuItem to={routes.live} icon={ } title={'For You'} />
        </ul>
    );
};

export default Menu;