import React from 'react';
import styles from './Foot.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MemberRollupWrapper from './Components/MemberRollupWrapper';

const Footer = () => {
  return (
    <>
        <footer className={styles.footer}>
        <div className={styles.SNSContainer}>
            <div className={styles.footerContent}>
                <div className={styles.questions}>
                <div className={styles.footerLogo}>
                    <h4>お問い合わせ</h4>
                </div>
                <div className={styles.footerSocial}>
                    <a href="#" className={styles.socialLink}>
                        <Image src="/images/facebook.png" alt="Facebook" className={styles.socialIcon} width={100} height={100} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <Image src="/images/X.png" alt="X" className={styles.socialIcon} width={100} height={100} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <Image src="/images/Instagram.png" alt="Instagram" className={styles.socialIcon} width={100} height={100} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <Image src="/images/LINE.png" alt="LINE" className={styles.socialIcon} width={100} height={100} />
                    </a>
                </div>
            </div>
                <div className={styles.socialButton}>
                    <Link href="/AboutUs" ><span>質問はこちらから</span></Link>
                </div>
            </div>
            <div className={styles.lastContainer}>
                <div className={styles.title}>
                    <Image src="/images/logo.png" alt="Zenovith" width={100} height={100} />
                </div>
                <div className={styles.Us}>
                    <div className={styles.socialButton}>
                        <Link href="/AboutUs"><span>活動紹介</span></Link>
                    </div>
                    <div className={styles.members}>
                        <MemberRollupWrapper name="久保 晶幹" role="代表" image="/images/masaki.jpg" description=" " />
                        <MemberRollupWrapper name="秋葉 壮太" role=" " image="/images/sota.JPG" description=" " />
                        <MemberRollupWrapper name="中村 優真" role=" " image="/images/yuma.jpg" description=" " />
                        <MemberRollupWrapper name="上田 琉聖" role="エンジニア" image="/images/ryusei.JPG" description=" " />
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
             <p className={styles.copyright}>© 2025 Zenovith. All rights reserved.</p>
             </div>
        </div>
        </footer>
    </>
  );
};

export default Footer; 