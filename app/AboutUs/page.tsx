"use client";
import React from "react";
import MemberRollupWrapper from './MemberRollupWrapper';
import styles from './page.module.css';


const AboutUsPage: React.FC = () => {
  return (
    <div>
      <div className={styles.members}>
        <MemberRollupWrapper name="久保 晶幹" role="代表" image="/images/masaki.jpg" description=" " />
        <MemberRollupWrapper name="秋葉 壮太" role=" " image="/images/sota.JPG" description=" " />
        <MemberRollupWrapper name="中村 優真" role=" " image="/images/yuma.jpg" description=" " />
        <MemberRollupWrapper name="上田 琉聖" role="エンジニア" image="/images/ryusei.JPG" description=" " />
      </div>
    </div>
  );
};

export default AboutUsPage;