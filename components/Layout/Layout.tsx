import React, { FC } from 'react';
import { Header } from './index';

const styles = {
  height: '100vh',
  overflowY: 'auto',
  position: 'relative'
}

const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
    return (
        <div style={styles as any}>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;
