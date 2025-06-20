import React from 'react';
import Image from 'next/image';



// メンバー情報の型（必要に応じて拡張してください）
type MemberProps = {
  name: string;
  role?: string;
  image?: string;
  description?: string;
};

const Member: React.FC<MemberProps> = ({ name, role, image, description }) => {
  return (
    <div className="member-card">
      {image && <Image src={image} alt={name} className="member-image" width={100} height={100} />}
      <h3>{name}</h3>
      {role && <p className="member-role">{role}</p>}
      {description && <p className="member-description">{description}</p>}
    </div>
  );
};

export default Member; 
