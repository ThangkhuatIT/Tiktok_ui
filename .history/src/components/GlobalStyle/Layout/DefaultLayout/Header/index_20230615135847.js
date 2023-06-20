import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Icon } from '@iconify/react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import Toggle from '~/components/Popper/Menu/Toggle/Toggle';
import Image from '~/components/Image/Image';
import Search from '~/components/Search/Search';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
const cx = classNames.bind(styles)
const logIn = true;
const MENU_ITEM = [
    {
        icon: <Icon icon="clarity:language-solid" width="24" height="24" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'En',
                    title: 'English'
                },
                {
                    code: 'Vi',
                    title: 'VietNam'
                },
                {
                    code: 'En',
                    title: 'English'
                },
                {
                    code: 'Vi',
                    title: 'VietNam'
                },
                {
                    code: 'En',
                    title: 'English'
                },
                {
                    code: 'Vi',
                    title: 'VietNam'
                },
                {
                    code: 'En',
                    title: 'English'
                },
                {
                    code: 'Vi',
                    title: 'VietNam'
                },
                {
                    code: 'En',
                    title: 'English'
                },
                {
                    code: 'Vi',
                    title: 'VietNam'
                },
            ]
        }
    },
    {
        icon: <Icon icon="octicon:question-24" width="24" height="24" />,
        title: 'Feedback and help'
    },
    {
        icon: <Icon icon="ph:keyboard-light" width="24" height="24" />,
        title: 'Keybroad shortcuts',
        to: '/Folowing'
    },
    {
        icon: <Icon icon="ph:moon" width="24" height="24" />,
        title: 'Dark mode',
        toggle: <Toggle></Toggle>
    }
]
const MENU_USER = [
    {
        icon: <Icon icon="iconamoon:profile-light" width="24" height="24" />,
        title: 'View profile',
        to: '/Folowing'
    },
    {
        icon: <Icon icon="iconamoon:bookmark" width="24" height="24" />,
        title: 'Favorites',
        to: '/Folowing'
    },
    {
        icon: <Icon icon="akar-icons:coin" width="24" height="24" />,
        title: 'Get Coins',
        to: '/Folowing'
    },
    {
        icon: <Icon icon="icon-park-outline:setting-three" width="24" height="24" />,
        title: 'Setting',
        to: '/Folowing'
    },
    ...MENU_ITEM,
    {
        boder_top: true,
        icon: <Icon icon="gg:log-out" width="24" height="24" rotate={2} />,
        title: 'Log out',
        to: '/Folowing'
    }
]
const Header = () => {
    // const [acounts, setAcounts] = useState([]);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setAcounts([1, 2, 3])
    //     }, 2000)
    // }, [])
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={images.logo} alt='TikTok' />
                </Link>
                {/* Search */}

                <Search></Search>



                {/* Header Left */}
                <div className={cx('action')}>
                    {logIn ? (
                        <>
                            <Button leftIcon={<Icon icon="ic:round-plus" />} outline_bl > Upload</Button>
                            <Tippy content='Messages'>
                                <button><Icon icon="iconoir:telegram" width="24" height="24" /></button>
                            </Tippy>
                            <Tippy content='Inbox'>
                                <button> <Icon icon="heroicons:envelope" width="24" height="24" /></button>
                            </Tippy>
                            <Menu menuItem={MENU_USER}>
                                <Image className={cx('avatar')}
                                    src='https://vcdn1-giaitri.vnecdn.net/2022/09/23/-2181-1663929656.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=wvx3Xd9YNeLA-9IvhcFllw'
                                    alt='avata'
                                    fallback='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6SGvshARHJ5GYSH_Kig8-cYNw5rO3nWn7mA&usqp=CAU'
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<Icon icon="ic:round-plus" />} outline_bl > Upload</Button>
                            <Button primary> Log in</Button>
                            <Menu menuItem={MENU_ITEM}>
                                <button className={cx('more-btn')}>
                                    <Icon icon="uil:ellipsis-v" width="24" height="24" />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
export default Header;