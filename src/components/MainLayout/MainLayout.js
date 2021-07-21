import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.scss';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <main className={styles.mainLayoutContainer}>
    <Header />
    {children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;