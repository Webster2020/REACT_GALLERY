import React from 'react';
import styles from './Header.scss';
import {Link} from 'react-router-dom';

//COMPONENT NOT USED - TO REMOVE PROBABLY

class Header extends React.Component {

  render() {
    return (
      <nav className={styles.headerNavBar}>
        <section className={styles.headerContainer}>
          <div className={styles.headerLogoWrapper}>
            <h2 className={styles.headerLogo}>WEBSTER</h2>
          </div>
          <div className={styles.headerMenuWrapper}>
            <ul className={styles.headerMenu}>
              <li className={styles.headerMenuElement}>
                <Link to={`/`} className={styles.headerLink}>HOME</Link>
                {/* <a className={styles.headerLink} href='#'>HOME</a> */}
              </li>
            </ul>
          </div>
        </section>
      </nav>
    );  
  }
}

export default Header;