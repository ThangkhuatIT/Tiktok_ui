import React from 'react';
import classNames from 'classnames/bind';
import style from './ListAccounts.module.scss'
import AccountItem from '~/components/AccountItem';
import Tippy from '@tippyjs/react/headless';
import Image from '~/components/Image/Image';
import Button from '~/components/Button';
const cx = classNames.bind(style)


const accounts = [
    {
        id: 1,
        nickname: 'thangKhuta123',
        avatar: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/117833777_1225983271077178_4018519723684804927_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68w8tr-veWIAX8Fh9FK&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBChMR8YVlrAD00ttVvl-hKfSfAmNDl--DgNsn9D1VZhg&oe=64B73D35',
        full_name: 'F8 shop',
        tick: false
    },
    {
        id: 2,
        nickname: 'thangKhuta123',
        avatar: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/117833777_1225983271077178_4018519723684804927_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68w8tr-veWIAX8Fh9FK&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBChMR8YVlrAD00ttVvl-hKfSfAmNDl--DgNsn9D1VZhg&oe=64B73D35',
        full_name: 'F8 shop',
        tick: false
    },
    {
        id: 3,
        nickname: 'thangKhuta123',
        avatar: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/117833777_1225983271077178_4018519723684804927_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68w8tr-veWIAX8Fh9FK&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBChMR8YVlrAD00ttVvl-hKfSfAmNDl--DgNsn9D1VZhg&oe=64B73D35',
        full_name: 'F8 shop',
        tick: true
    },
    {
        id: 4,
        nickname: 'thangKhuta123',
        avatar: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/117833777_1225983271077178_4018519723684804927_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68w8tr-veWIAX8Fh9FK&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBChMR8YVlrAD00ttVvl-hKfSfAmNDl--DgNsn9D1VZhg&oe=64B73D35',
        full_name: 'F8 shop',
        tick: false
    },
    {
        id: 5,
        nickname: 'thangKhuta123',
        avatar: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/117833777_1225983271077178_4018519723684804927_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68w8tr-veWIAX8Fh9FK&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBChMR8YVlrAD00ttVvl-hKfSfAmNDl--DgNsn9D1VZhg&oe=64B73D35',
        full_name: 'F8 shop',
        tick: true
    },
    {
        id: 6,
        nickname: 'thangKhuta123',
        avatar: 'https://scontent.fhan14-3.fna.fbcdn.net/v/t1.6435-9/117833777_1225983271077178_4018519723684804927_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=68w8tr-veWIAX8Fh9FK&_nc_ht=scontent.fhan14-3.fna&oh=00_AfBChMR8YVlrAD00ttVvl-hKfSfAmNDl--DgNsn9D1VZhg&oe=64B73D35',
        full_name: 'F8 shop',
        tick: false
    },
]
const ListAccounts = ({ title }) => {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}> {title}</h3>
            <ul className={cx('list-account')}>
                {
                    accounts.map((account => {
                        return <Tippy
                            interactive={true}
                            delay={[0, 300]}
                            placement="bottom-end"
                            hideOnClick={false}
                            render={attrs => (
                                <div className={cx('wrapper-tippy')}>
                                    <div className={cx('header')}>
                                        <Image src={account.avatar} className={cx('avatar')} tabIndex="-1" {...attrs} />
                                        <Button primary>Follow</Button>
                                    </div>
                                    <h3>{account.full_name}<span>{account.tick}</span></h3>
                                    <p>{account.nickname</p>
                                    <div className={cx('footer')}>
                                        <div><span>6.7M</span> Followers</div>
                                        <div><span>429.9M</span> Likes</div>
                                    </div>
                                </div>
                            )}
                        >
                            <li key={account.id}>
                                <AccountItem accountItem={account} />
                            </li>
                        </Tippy
                        >
                    }))
                }
            </ul>
            <span className={cx('see-more')}> See more</span>
        </div >
    );
};

export default ListAccounts;