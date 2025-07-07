import React from 'react';
import styles from './MenuList.module.css';


interface MenuListProps {
  href: string;
  value: string;
  isActive?: boolean;
}

const MenuList: React.FC<MenuListProps> = ({ href, value, isActive = false }) => {
  return (
    <li className={`${styles.menuItem} ${isActive ? styles.active : ''}`}>
      <a href={href} className={styles.menuLink}>
        {value}
      </a>
    </li>
  );
};

export default MenuList;