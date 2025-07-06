"use client"
import React from 'react';
import styles from './Index.module.css';
import Image from 'next/image';

type IndexProps = {
  h2: string;
  description: string;
  button: string;
  link: string;
};

const Index: React.FC<IndexProps> = ({ h2, description, button, link }) => {
  return (
    <>
      <h2>{h2}</h2>
      <a href={link} className={styles.aboutbButtonLink}>
        <button className={styles.aboutButton}>{button}
          <div className={styles.image}>
          <Image src="/images/masaki.jpg" alt="代表" className={styles.zenovithImage} width={100} height={100} />
          </div>
          <p>{description}</p>
        </button>
      </a>
    </>
  );
};

export default Index;