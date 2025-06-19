"use client"
import React from 'react';
import Link from 'next/link';
import styles from './/NavCards.module.css';

const NavCards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        <div className={styles.navCard}>
          <h2>はじめての方</h2>
          <p>東京都倫理法人会について詳しく知りたい方はこちら</p>
          <Link href="" className={styles.cardLink}>
            →
          </Link>
        </div>
        <div className={styles.navCard}>
          <h2>会員の方</h2>
          <p>会員専用サービスやお知らせはこちら</p>
          <Link href="" className={styles.cardLink}>
            →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavCards;