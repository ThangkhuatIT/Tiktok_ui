import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss'
const cx = classNames.bind(styles)
const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <div style={{ background: 'green' }}><h2 style={{ height: 1000 }}> Sidebar</h2></div>
        </aside>
    );
};

export default Sidebar;