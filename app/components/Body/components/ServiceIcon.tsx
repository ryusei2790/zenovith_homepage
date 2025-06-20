"use client"
import React from 'react';
import styles from './ServiceIcon.module.css';
import Link from 'next/link';
import Image from 'next/image';

type ServiceIconProps = {
  image: string;
  title: string;
  link: string;
};

const ServiceIcon: React.FC<ServiceIconProps> = ({ image, title, link }) => {
  return (
    <Link href={link}>
      <div className={styles.imageContainer}>
            <Image src={image} width={20} height={20} alt={title} className={styles.image} /> 
        <p>{title}</p>
      </div>
    </Link>
  );
};

export default ServiceIcon;
