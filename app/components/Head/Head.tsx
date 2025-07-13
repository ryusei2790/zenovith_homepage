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

type NavItem = { href: string; value: string };

interface HeadProps {
  currentPage: number;
  onSelectPage: (pageIndex: number) => void;
  navItems?: NavItem[];
  title?: string;
}

const defaultNavItems = [
  { href: "#home", value: "ホーム" },
  { href: "#about", value: "AboutUs" },
  { href: "#services", value: "services" },
  { href: "#calendar", value: "イベント日程" },
  { href: "#news", value: "お知らせ" },
  { href: "#contact", value: "お問い合わせ" },
];

const Head: React.FC<HeadProps> = ({ navItems, currentPage, onSelectPage, title }) => {
  const pathname = usePathname();
  const items = navItems ?? defaultNavItems;
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
            {title && <span className={styles.pageTitle}> | {title}</span>}
          </div>
          <div className={styles.navMenu}>
            <NavMenu currentPage={currentPage} onSelectPage={onSelectPage} items={items}/>
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