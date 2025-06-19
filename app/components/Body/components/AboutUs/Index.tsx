"use client"
import React from 'react';
import styles from './Index.module.css';

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
      <p>{description}</p>
      <a href={link} className={styles.aboutbButtonLink}>
        <button className={styles.aboutButton}>{button}</button>
      </a>
    </>
  );
};

export default Index;