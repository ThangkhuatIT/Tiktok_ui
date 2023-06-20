import React from 'react';
import classNames from 'classnames/bind';
import style from './ListAccounts.module.scss'
import AccountItem from '~/components/AccountItem/AccountItem';
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
const ListAccounts = () => {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}> Following accounts</h3>
            {
                accounts.map((account => {
                    return <li key={account.id} ><AccountItem accountItem={account} /></li>
                }))
            }
        </div>
    );
};

export default ListAccounts;