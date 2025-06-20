"use client"
import React from 'react';
import Link from 'next/link';
import styles from './/NavCard.module.css';

const NavCards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        <div className={styles.navCard}>
          <h2>Zenovith</h2>
          <p>私たちの取り組み</p>
          <Link href="/AboutUs" className={styles.cardLink}>
            →
          </Link>
        </div>
        <div className={styles.navCard}>
          <h2>OpenSpace</h2>
          <p>誰でも楽しく</p>
          <Link href="/OpenSpace" className={styles.cardLink}>
            →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavCards;