import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Icon } from '@iconify/react';
const cx = classNames.bind(styles)
const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('btn-back')} onClick={onBack}>
                <Icon icon="mingcute:left-line" />
            </button>
            <p className={cx('header-title')}>{title}</p>
        </header>
    );
};

export default Header;