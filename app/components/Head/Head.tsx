import React from 'react';
import NavMenu from './searchsection/NavMenu';
import styles from './Header.module.css';
import SearchButton from './searchsection/SearchButton';
import useScrollHamburgerMenu from "../../hooks/useScrollHamburgerMenu";
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  // 型を仮定（必要に応じて修正してください）
  const [showMenu, open, setOpen]: [boolean, boolean, React.Dispatch<React.SetStateAction<boolean>>] = useScrollHamburgerMenu();

  return (
    <header className={styles.header}>
      {/* ハンバーガーメニュー（スクロール時に右上に表示） */}
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logoArea}>
            <span className={styles.logoIcon}>
              <Image src="/images/logo.png" width={10} height={10} alt="Zenovith" />
            </span>
            <span className={styles.logoText}>Zenovith</span>
          </div>
          <div className={styles.navMenu}>
            <NavMenu />
          </div>
          <div className={styles.headerActions}>
            {/* <div className={styles.loginButton}>
              <Link href="/login"><span></span></Link>
            </div> */}
            <div className={styles.searchButton}>
              <SearchButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 