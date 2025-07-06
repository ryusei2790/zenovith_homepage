import React from 'react';
import Image from 'next/image';
import styles from './Member.module.css';

// メンバー情報の型（必要に応じて拡張してください）
type MemberProps = {
  name: string;
  role?: string;
  image?: string;
  description?: string;
};

const Member: React.FC<MemberProps> = ({ name, role, image, description }) => {
  return (
    <div className={styles.memberCard}>
      {image && <Image src={image} alt={name} className={styles.memberImage} width={100} height={100} />}
      <h3 className={styles.memberName}>{name}</h3>
      {role && <p className={styles.memberRole}>{role}</p>}
      {description && <p className={styles.memberDescription}>{description}</p>}
    </div>
  );
};

export default Member;
