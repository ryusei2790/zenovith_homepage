import React from 'react';
import styles from './BodyAbout.module.css';
import Index from './AboutUs/Index'
import AboutContent from './AboutUs/AboutContent'

const BodyAbout: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.aboutContent}>
      <div className={styles.aboutTitle}>
        <div className={styles.zenovth}>
        <Index h2="Zenovith" vision="常識を越え、幸せを加速させる会社" mission="真摯かつ謙虚であり続ける" descriptionService="AIを活用したWeb制作を主としたシステム開発と新規事業への取り組み" contentsIT="システム開発・AIを効率的に活用したWeb制作を主に、DXを効果的に進めるシステムサービスを提供" descriptionNewProject="新規プロジェクト･日本の物流問題に1つの終止符を打ちうる革新的なサービスを進行中" contentsNewProject="「2024年問題」と呼ばれる物流業界における最大規模の問題に、新たな風を吹き込む革新的なソリューションを提供するプロジェクトを現在進行中。今後時間を経るに従い、より深刻化していくこの問題を、我が社の画期的なソリューションを社会に組み込むことで大きな変革をもたらします。配達員の不足や、コスト効率化、また環境負荷が少なく弾力的でオープンな持続可能型物流網を構築するこのプロジェクトは、日本の物流業界を大きく変えるものと確信しております。" button="view more・・・" link="/AboutUs" />
        </div>
      </div>
      <div className={styles.aboutLinks} >
        <AboutContent name="About Zenovith"/>
      </div>
    </div>
  </div>
);

export default BodyAbout;