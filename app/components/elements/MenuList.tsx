"use client"
import React from 'react';
import styles from './MenuList.module.css';

// propsの型を定義
type MenuListProps = {
  href: string;
  value: string;
};

const MenuList: React.FC<MenuListProps> = ({ href, value }) => {
  return <li className={styles.navList}><a href={href} className={styles.menuLink}>{value}</a></li>;
};

export default MenuList;