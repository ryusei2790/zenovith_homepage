"use client"
import React from 'react';
import styles from './HamburgerMenu.module.css';
import MenuList from '../MenuList'

const HamburgerMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <MenuList href="#home" value="ホーム" />
        <MenuList href="#calendar" value="イベント日程" />
        <MenuList href="#services" value="services" />
        <MenuList href="#about" value="AboutUs" />
        <MenuList href="#news" value="お知らせ" />
        <MenuList href="#contact" value="お問い合わせ" />
      </ul>
    </nav>
  );
};

export default HamburgerMenu; 