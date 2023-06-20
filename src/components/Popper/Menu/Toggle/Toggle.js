import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Toggle.module.scss';
const cx = classNames.bind(styles)
const Toggle = () => {
    const [on, setOn] = useState(false)
    return (
        <div>
            <div
                className={cx('toggle', `${on ? "active-toggle" : ""}`)}
                onClick={() => setOn(!on)}>
                <div className={cx('spinner', `${on ? "active-spinner" : ""}`)}>
                </div>
            </div>
        </div>
    );
};

export default Toggle;