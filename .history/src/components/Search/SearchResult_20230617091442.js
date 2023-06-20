import React, { useMemo } from 'react';
import AccountItem from '../AccountItem';

const SearchResult = ({ searchResult }) => {
    return (
        <ul>
            {
                searchResult.map((accountItem) => {
                    return <li key={accountItem.id}> <AccountItem accountItem={accountItem}></AccountItem></li>
                })
            }
        </ul>
    );
};

export default useMemo(SearchResult)