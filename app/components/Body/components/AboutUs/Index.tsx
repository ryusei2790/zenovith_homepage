"use client"
import React from 'react';
import styles from './Index.module.css';
import Image from 'next/image';

type IndexProps = {
  h2: string;
  vision: string;
  mission: string;
  descriptionService: string;
  contentsIT: string;
  descriptionNewProject: string;
  contentsNewProject: string;
  button: string;
  link: string;
};

const Index: React.FC<IndexProps> = ({ h2, vision, mission, descriptionService, contentsIT, descriptionNewProject, contentsNewProject, button, link }) => {
  return (
    <div className={styles.indexContainer}>
      <h2 className={styles.indexTitle}>{h2}</h2>
      <div className={styles.indexVision}>{vision}</div>
      <div className={styles.indexMission}>{mission}</div>
      <div className={styles.indexDescription}>{descriptionService}</div>
      <p>{contentsIT}</p>
      <h5>{descriptionNewProject}</h5>
      <p>{contentsNewProject}</p>
      <a href={link} className={styles.indexButton}>{button}</a>
    </div>
  );
};

export default Index;