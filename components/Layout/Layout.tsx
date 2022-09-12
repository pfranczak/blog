import React, { FC } from 'react';
import { Header } from './index';

const Layout: FC = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    );
};

export default Layout;
