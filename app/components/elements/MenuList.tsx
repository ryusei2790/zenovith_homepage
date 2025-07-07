import React from 'react';
import styles from './MenuList.module.css';


interface MenuListProps {
  href: string;
  value: string;
  isActive?: boolean;
  sectionIndex?: number;
}

const MenuList: React.FC<MenuListProps> = ({ href, value, isActive = false, sectionIndex }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (sectionIndex !== undefined) {
      const el = document.getElementById(`section-${sectionIndex}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <li className={`${styles.menuItem} ${isActive ? styles.active : ''}`}>
      <a href={href} className={styles.menuLink} onClick={handleClick}>
        {value}
      </a>
    </li>
  );
};

export default MenuList;