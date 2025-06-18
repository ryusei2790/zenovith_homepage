import React from 'react';
import styles from '../../../../../styles/components/MenuList.module.css';

const MenuList = ({ href, value }) => {
  return <li><a href={href}>{value}</a></li>;
};

export default MenuList;