"use client"
import React from 'react';
import styles from './BodyCTA.module.css';
import Link from 'next/link';

const BodyCTA: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.ctaContent}>
      <h2 className={styles.ctaTitle}></h2>
      <p className={styles.ctaDescription}>
      </p>
    </div>
    <Link href="#" className={styles.ctaButton}>
      <span></span>
    </Link>
  </div>
);

export default BodyCTA; 