"use client"
import React from 'react';
import styles from './MenuList.module.css';
import Link from 'next/link';

// propsの型を定義
type MenuListProps = {
  href: string;
  value: string;
};

const MenuList: React.FC<MenuListProps> = ({ href, value }) => {
  return <li className={styles.navList}><Link href={href} className={styles.menuLink}>{value}</Link></li>;
};

export default MenuList;