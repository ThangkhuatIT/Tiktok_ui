import React, { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import * as searchApi from '~/apiServices/searchApi'


import useDebounce from '../Hooks/useDebounce';
import styles from './Search.module.scss';
import { Wrapper as WrapperPopper } from '~/components/Popper/index';
import AccountItem from '~/components/AccountItem/index';
const cx = classNames.bind(styles)
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [load, setLoad] = useState(false);

    let inputRef = useRef()
    const debounced = useDebounce(searchValue, 800)

    // useEffect(() => {
    //     if (searchValue) {
    //         setLoad(true);
    //     }
    // }, [searchValue])

    useEffect(() => {
        if (!debounced?.trim()) {
            setSearchResult([])
            return
        }
        const fetchData = async () => {
            try {
                const result = await searchApi.search(debounced)
                setSearchResult(result)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [debounced]);

    const HandleChange = (e) => {
        let value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value)
            setLoad(false)
        }
    }
    const HandleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }
    return (
        <TippyHeadless
            interactive={true}
            visible
            render={attrs => (
                searchResult?.length > 0 &&
                <div className={cx('box-result-search')} tabIndex="-1" {...attrs}>
                    <WrapperPopper>
                        <h4 className={cx('title')}>Account</h4>
                        <div>
                            <ul>
                                {
                                    searchResult.map((accountItem) => {
                                        return <li key={accountItem.id}> <AccountItem accountItem={accountItem}></AccountItem></li>
                                    })
                                }
                            </ul>
                        </div>
                    </WrapperPopper>
                </div>

            )}>
            <div className={cx('search')}>
                <input
                    placeholder='Search'
                    spellCheck='false'
                    className={cx('input-search')}
                    value={searchValue}
                    onChange={HandleChange}
                    ref={inputRef}

                />

                {load &&
                    <Icon className={cx('loading')} icon="eos-icons:loading" />
                }
                {console.log('11')}
                {

                    searchValue && !load &&
                    <button className={cx('clear')} onClick={HandleClear}>
                        <Icon icon="pajamas:clear" />
                    </button>
                }
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <Icon icon="iconamoon:search-light" />
                </button>
            </div>
        </TippyHeadless>
    );
};

export default Search;



