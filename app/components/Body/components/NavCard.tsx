"use client"
import React from 'react';
import styles from './/NavCard.module.css';
import Image from 'next/image';

const NavCards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardsGrid}>
        <div className={styles.navCard}>
        <a href="/AboutUs" className={styles.cardLink}>
          <Image src={"/images/logo.png"} alt={"AboutUs"} width={100} height={100} />
        </a>
        </div>
        <div className={styles.navCard}>
        <a href="/OpenSpace" className={styles.cardLink}>
          <Image src={"/images/OpenSpace.png"} alt={"OpenSpace"} width={100} height={100} />
        </a>
        </div>
      </div>
    </div>
  );
};

export default NavCards;