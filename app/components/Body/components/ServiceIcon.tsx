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
    <div className={styles.container}>
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      > 
        <source src="/videos/masaki.mp4" type="video/mp4" />
      </video>*/}
      <Link href={link}>
        <div className={styles.imageContainer}>
              <Image src={image} width={20} height={20} alt={title} className={styles.image} /> 
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceIcon;
