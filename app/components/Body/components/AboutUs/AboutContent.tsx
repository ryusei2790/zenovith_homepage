"use client"
import React from 'react';
import styles from './AboutContent.module.css';

type AboutContentProps = {
  name: string;
};

const AboutContent: React.FC<AboutContentProps> = ({ name }) => {
  return (
    <div className={styles.aboutContentItem}>
      <span>{name}</span>
    </div>
  );
};

export default AboutContent;