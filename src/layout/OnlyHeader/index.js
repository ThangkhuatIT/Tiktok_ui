import React from 'react';
import Header from './HeaderOnly';
const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default HeaderOnly;