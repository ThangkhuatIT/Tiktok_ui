import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss'
import Image from '../Image/Image';
const cx = classNames.bind(style)
const AccountItem = ({ accountItem }) => {
    return (
        <Link to={`/@${accountItem.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={accountItem.avatar}
                alt='avatar' 
                fallback = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU'
                />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{accountItem.full_name}</span>
                    {
                        accountItem.tick &&
                        <Icon className={cx('icon')} icon="tabler:circle-check-filled" />
                    }
                </p>
                <span className={cx('username')}>{accountItem.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItem;