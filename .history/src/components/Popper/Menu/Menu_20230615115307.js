import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss'
import { Wrapper as WrapperPopper } from '~/components/Popper/index'
import Button from '~/components/Button/Button';
import Header from './Header';
const cx = classNames.bind(styles)
const Menu = ({ children, menuItem = [] }) => {
    const [history, setHistory] = useState([{ data: menuItem }])
    const current = history[history.length - 1]
    return (
        <Tippy
            interactive={true}
            delay={[0, 700]}
            placement="top-end"
            hideOnClick={false}
            render={attrs => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        {history.length > 1 &&
                            <Header
                                title={current.title}
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}>
                            </Header>}
                        {
                            current.data.map((item, index) => {
                                const isParent = !!item.children;
                                return <Button
                                    boder={item.boder_top}
                                    className={cx('more-btn-item')}
                                    key={index}
                                    to={item.to}
                                    leftIcon={item.icon}
                                    rightIcon={item.toggle}
                                    onClick={() => {
                                        if (isParent) {
                                            setHistory((prev) => [...prev, item.children])
                                        }
                                    }
                                    }
                                >
                                    {item.title}
                                </Button>
                            })
                        }
                    </WrapperPopper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => prev.slice(0, 1))
            }}
        >
            {children}
        </Tippy>
    );
};

export default Menu;