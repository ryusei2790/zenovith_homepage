import React from 'react';
import styles from './BodyCTA.module.css';

const BodyCTA: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.ctaContent}>
      <h2 className={styles.ctaTitle}></h2>
      <p className={styles.ctaDescription}>
      </p>
    </div>
  </div>
);

export default BodyCTA; 