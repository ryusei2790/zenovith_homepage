"use client"
import React from 'react';
import Link from 'next/link';
import styles from './BackToHomeButton.module.css';

interface BackToHomeButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const BackToHomeButton: React.FC<BackToHomeButtonProps> = ({ 
  className = '', 
  children = 'ホームに戻る' 
}) => {
  return (
    <Link href="/" className={`${styles.backButton} ${className}`}>
      <svg 
        className={styles.arrowIcon} 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M19 12H5M12 19l-7-7 7-7"/>
      </svg>
      {children}
    </Link>
  );
};

export default BackToHomeButton; 