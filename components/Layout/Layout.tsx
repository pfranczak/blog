import React, { FC } from 'react';
import { Header } from './index';

const Layout: FC = ({ children }) => {
    return (
        <div style={{ height: '100vh', overflowY: 'auto' }}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
