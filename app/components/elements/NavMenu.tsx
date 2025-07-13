import React from 'react';
import styles from './NavMenu.module.css';
import MenuList from './MenuList';

interface NavMenuProps {
  currentPage: number;
  onSelectPage: (pageIndex: number) => void;
  items: { href: string; value: string }[];
}

// NavMenuはpropsなしなので型定義は不要ですが、React.FCを明示してもOK
const NavMenu: React.FC<NavMenuProps> = ({ currentPage, onSelectPage, items }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {items.map((item, idx) => (
          <MenuList
            key={item.href}
            href={item.href}
            value={item.value}
            isActive={currentPage === idx}
            sectionIndex={idx}
            onSelectPage={onSelectPage}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu; 