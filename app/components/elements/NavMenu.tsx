import React from 'react';
import styles from './NavMenu.module.css';
import MenuList from './MenuList';

interface NavMenuProps {
  currentPage: number;
}

// NavMenuはpropsなしなので型定義は不要ですが、React.FCを明示してもOK
const NavMenu: React.FC<NavMenuProps> = ({ currentPage }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <MenuList href="#home" value="ホーム" isActive={currentPage === 0} sectionIndex={0} />
        <MenuList href="#calendar" value="イベント日程" isActive={currentPage === 1} sectionIndex={1} />
        <MenuList href="#services" value="services" isActive={currentPage === 2} sectionIndex={2}/>
        <MenuList href="#about" value="AboutUs" isActive={currentPage === 3} sectionIndex={3}/>
        <MenuList href="#news" value="お知らせ" isActive={currentPage === 4} sectionIndex={4}/>
        <MenuList href="#contact" value="お問い合わせ" isActive={currentPage === 5} sectionIndex={5}/>
      </ul>
    </nav>
  );
};

export default NavMenu; 