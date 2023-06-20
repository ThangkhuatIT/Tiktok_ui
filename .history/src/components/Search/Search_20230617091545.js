import React, { useEffect, useRef, useState } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Icon } from '@iconify/react';
import * as searchApi from '~/services/searchService'


import useDebounce from '../Hooks/useDebounce';
import styles from './Search.module.scss';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import SearchResult from './SearchResult';
const cx = classNames.bind(styles)
const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [load, setLoad] = useState(false);

    let inputRef = useRef()
    const debounceValue = useDebounce(searchValue, 800)

    useEffect(() => {
        if (searchValue) {
            setLoad(true);
        }
    }, [searchValue])


    useEffect(() => {
        if (!debounceValue?.trim()) {
            setSearchResult([])
            return
        }
        const fetchData = async () => {
            try {
                const result = await searchApi.search(debounceValue)
                setSearchResult(result)
                setLoad(false)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [debounceValue]);

    const HandleChange = (e) => {
        let value = e.target.value;
        if (!value.startsWith(' ')) {
            setSearchValue(value)
        }
    }
    const HandleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    return (
        <div>
            <TippyHeadless
                interactive={true}
                visible
                render={attrs => (
                    searchResult?.length > 0 &&
                    <div className={cx('box-result-search')} tabIndex="-1" {...attrs}>
                        <WrapperPopper>
                            <h4 className={cx('title')}>Account</h4>
                            <div>
                                <SearchResult searchResult={searchResult} />
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
        </div>
    );
};

export default Search;



