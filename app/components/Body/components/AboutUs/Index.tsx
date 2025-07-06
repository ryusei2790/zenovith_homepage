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
    <>
      <h2>{h2}</h2>
      <a href={link} className={styles.aboutbButtonLink}>
        <button className={styles.aboutButton}>{button}
          <div className={styles.image}>
          <Image src="/images/masaki.jpg" alt="代表" className={styles.zenovithImage} width={100} height={100} />
          </div>
          <h3>{vision}</h3>
          <h4>{mission}</h4>
          <h5>{descriptionService}</h5>
          <p>{contentsIT}</p>
          <h5>{descriptionNewProject}</h5>
          <p>{contentsNewProject}</p>
        </button>
      </a>
    </>
  );
};

export default Index;