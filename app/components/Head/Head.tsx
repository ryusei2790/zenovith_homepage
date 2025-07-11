"use client";
import React from 'react';
import NavMenu from  '../elements/NavMenu'
import styles from './Head.module.css';
// import SearchButton from '../elements/SearchButton';
// import useScrollHamburgerMenu from "../elements/hooks/useScrollHamburgerMenu";
import Image from 'next/image';
// import Link from 'next/link';
import BackToHomeButton from '../elements/BackToHomeButton';
import { usePathname } from 'next/navigation';

interface HeadProps {
  currentPage: number;
  onSelectPage: (pageIndex: number) => void;
}

const Head: React.FC<HeadProps> = ({ currentPage, onSelectPage }: HeadProps) => {
  const pathname = usePathname();
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
          {/* トップページ以外でBackToHomeButtonを表示 */}
          {pathname !== '/' && (
            <div className={styles.headerActions}>
              <BackToHomeButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Head; 