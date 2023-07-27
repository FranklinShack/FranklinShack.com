import React from 'react';
import styles from '../page.module.css'; // Adjust the path to your CSS file
import Button from '@mui/material/Button';


import Github from 'public/github.svg';
import LinkedIn from 'public/linkedin.svg';
import Mail from 'public/email.svg';

const Navbar = () => {
  return (
    <main className={styles.gridcontainer}>
      <div className={styles.navbar}>
      <Button size="small" className={styles.griditem} href="https://www.linkedin.com/in/fshack/">
          LinkedIn 
          <LinkedIn className={styles.navicon} />
        </Button>
        <Button size="small" className={styles.griditem} href="https://github.com/FranklinShack">
          GitHub 
          <Github className={styles.navicon} />
        </Button>
        <Button size="small" className={styles.griditem} href="mailto:franklin@franklinshack.com">
          Contact 
          <Mail className={styles.navicon} />
        </Button>
      </div>
    </main>
  );
};

export default Navbar;