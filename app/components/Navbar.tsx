import React from 'react';
import styles from '../page.module.css'; // Adjust the path to your CSS file

import ExternalLink from 'public/external-link.svg';
import LinkedIn from 'public/linkedin.svg';

const Navbar = () => {
  return (
    <main className={styles.main}>
      <div className={styles.gridcontainer}>
        <div className={styles.navbar}>
          <a className={styles.griditem} href="https://www.linkedin.com/in/fshack/">
            LinkedIn
            <LinkedIn />
            </a>
          <a className={styles.griditem} href="https://github.com/FranklinShack">
            GitHub
            <ExternalLink />
            </a>
          <a className={styles.griditem} href="mailto:franklin@franklinshack.com">
            Contact
          
          </a>
        </div>
      </div>
    </main>
  );
};

export default Navbar;