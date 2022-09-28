import React, { FC } from 'react';
import { Header } from './index';

const styles = {
  height: '100vh',
  overflowY: 'auto',
  position: 'relative'
}

const Layout: FC = ({ children }) => {
    return (
        <div style={styles}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
