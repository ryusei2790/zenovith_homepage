import React from 'react';
import styles from './MenuList.module.css';

interface MenuListProps {
  href: string;
  value: string;
  isActive?: boolean;
  sectionIndex?: number;
  currentPage?: number;
  onSelectPage?: (n: number) => void;
}

const MenuList: React.FC<MenuListProps> = ({ href, value, sectionIndex, currentPage, onSelectPage }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (sectionIndex !== undefined && onSelectPage) {
      onSelectPage(sectionIndex);
    }
  };

  // currentPageとsectionIndexが一致すればactive
  const isActive = sectionIndex === currentPage;

  return (
    <li className={`${styles.menuItem} ${isActive ? styles.active : ''}`}>
      <a href={href} className={styles.menuLink} onClick={handleClick}>
        {value}
      </a>
    </li>
  );
};

export default MenuList;

