"use client"
import React from 'react';
import styles from './BodyAbout.module.css';
import Index from './AboutUs/Index'
import AboutContent from './AboutUs/AboutContent'

const BodyAbout: React.FC = () => (
  <div>
    <div className={styles.aboutContent}>
      <div className={styles.aboutTitle}>
        <Index h2="Zenovith" description=" " button="view more・・・" link="#" />
      </div>
      <div className={styles.aboutLinks} >
        <AboutContent name=""/>
      </div>
    </div>
  </div>
);

export default BodyAbout;