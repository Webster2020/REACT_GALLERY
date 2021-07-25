import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainLayout.scss';

const MainLayout = ({children}) => (
  <main className={styles.mainLayoutContainer}>
    {children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;