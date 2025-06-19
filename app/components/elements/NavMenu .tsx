import React from 'react';
import styles from './NavMenu.module.css';
import MenuList from './MenuList';

// NavMenuはpropsなしなので型定義は不要ですが、React.FCを明示してもOK
const NavMenu: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <MenuList href="#home" value="ホーム" />
        <MenuList href="#calendar" value="イベント日程" />
        <MenuList href="#services" value="会員・初めての方はこちら" />
        <MenuList href="#about" value="法人会について" />
        <MenuList href="#news" value="お知らせ" />
        <MenuList href="#contact" value="お問い合わせ" />
      </ul>
    </nav>
  );
};

export default NavMenu; 