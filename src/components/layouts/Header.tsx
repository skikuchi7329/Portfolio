import Link from 'next/link';
import styles from './Header.module.scss';
import React from 'react';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles.link}>
          Welcome To My Blog
        </Link>
      </h1>
    </header>
  );
};

export default Header;
