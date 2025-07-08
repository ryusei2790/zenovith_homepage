import React from 'react';
import styles from './NavMenu.module.css';
import MenuList from './MenuList';

interface NavMenuProps {
  currentPage: number;
  onSelectPage: (pageIndex: number) => void;
}

// NavMenuはpropsなしなので型定義は不要ですが、React.FCを明示してもOK
const NavMenu: React.FC<NavMenuProps> = ({ currentPage, onSelectPage }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
      <MenuList href="#home" value="ホーム" isActive={currentPage === 0} sectionIndex={0} onSelectPage={onSelectPage} />
        <MenuList href="#calendar" value="イベント日程" isActive={currentPage === 1} sectionIndex={1} onSelectPage={onSelectPage} />
        <MenuList href="#services" value="services" isActive={currentPage === 2} sectionIndex={2} onSelectPage={onSelectPage}/>
        <MenuList href="#about" value="AboutUs" isActive={currentPage === 3} sectionIndex={3} onSelectPage={onSelectPage}/>
        <MenuList href="#news" value="お知らせ" isActive={currentPage === 4} sectionIndex={4} onSelectPage={onSelectPage}/>
        <MenuList href="#contact" value="お問い合わせ" isActive={currentPage === 5} sectionIndex={5} onSelectPage={onSelectPage}/>
      </ul>
    </nav>
  );
};

export default NavMenu; 