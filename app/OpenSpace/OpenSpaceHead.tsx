"use client";
import React from "react";
import Image from "next/image";
import styles from "../components/Head/Head.module.css";

const OpenSpaceHead: React.FC = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logoArea}>
            <span className={styles.logoIcon}>
              <Image src="/images/logo.png" width={30} height={30} alt="OpenSpace" />
            </span>
            <span className={styles.logoText}>OpenSpace</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OpenSpaceHead; 