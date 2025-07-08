"use client";
import React from 'react';
import NavMenu from  '../elements/NavMenu'
import styles from './Head.module.css';
// import SearchButton from '../elements/SearchButton';
// import useScrollHamburgerMenu from "../elements/hooks/useScrollHamburgerMenu";
import Image from 'next/image';
// import Link from 'next/link';

interface HeadProps {
  currentPage: number;
  onSelectPage: (pageIndex: number) => void;
}

const Head: React.FC<HeadProps> = ({ currentPage, onSelectPage }: HeadProps) => {
  
  return (
    <header>
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
            <NavMenu currentPage={currentPage} onSelectPage={onSelectPage}/>
          </div>
          {/* <div className={styles.headerActions}>
            {/* <div className={styles.loginButton}>
              <Link href="/login"><span></span></Link>
            </div> */}
            {/* <div className={styles.searchButton}>
              <SearchButton />
            </div> 
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Head; 