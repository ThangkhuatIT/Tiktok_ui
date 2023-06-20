import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
import Menu from './Menu';
import ListAccounts from './ListAccounts';
const cx = classNames.bind(styles)
const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu />
            <ListAccounts />
        </aside>
    );
};

export default Sidebar;