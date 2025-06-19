import React from 'react';
import styles from './MenuList.module.css';

// propsの型を定義
type MenuListProps = {
  href: string;
  value: string;
};

const MenuList: React.FC<MenuListProps> = ({ href, value }) => {
  return <li><a href={href}>{value}</a></li>;
};

export default MenuList;