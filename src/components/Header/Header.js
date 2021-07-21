import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

class Header extends React.Component {
  static propTypes = {
    background: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }

  render() {
    console.log('===============================');
    console.log('>> RENDER HEADER ... ');
    console.log('All /Header/ props: ');
    console.log(this.props);
    return (
      <nav className={styles.headerNavBar}>
        <section className={styles.headerContainer}>
          <div className={styles.headerLogoWrapper}>
            <h2 className={styles.headerLogo}>WEBSTER</h2>
          </div>
          <div className={styles.headerMenuWrapper}>
            <ul className={styles.headerMenu}>
              <li className={styles.headerMenuElement}>
                <a className={styles.headerLink} href='#'>HOME</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
    );  
  }
}

export default Header;