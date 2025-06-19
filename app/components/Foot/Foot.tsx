"use client"
import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link'
import Image from 'next/image'

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
                        <img src="/facebook.png" alt="Facebook" className={styles.socialIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <img src="/X.png" alt="X" className={styles.socialIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <img src="/youtube_social_icon_red.png" alt="Youtube" className={styles.socialIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <img src="/Instagram_Glyph_Gradient.png" alt="Instagram" className={styles.socialIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <img src="/LINE.png" alt="LINE" className={styles.socialIcon} />
                    </a>
                </div>
            </div>
                <div className={styles.socialButton}>
                    <Link href="#" ><span>質問はこちらから</span></Link>
                </div>
            </div>
            <div className={styles.lastContainer}>
                <div className={styles.title}>
                <Image src="/logo.png" width={100} height={100}/>
                <h2>Zenovith</h2>
                    <p>
                        <span>
                            
                    </p>
                </div>
                <div className={styles.loginButton}>
                    <Link href="/login"><span></span></Link>
                </div>
                <ul>
                    <li><Link href="#"><span></span></Link></li>
                    <li><Link href="#"><span></span></Link>
                    <Link href="#">組織・役員</Link>
                    </li>
                    <li><Link href="#"><span>活動紹介</span></Link>
                    {/* <ul>
                        <li>
                            <Link href="#"></Link>
                        </li>
                        <li>
                        <Link href="#"></Link>
                        </li>
                        <li>
                        <Link href="#"></Link>
                        </li>
                        <li>
                        <Link href="#"></Link>
                        </li>
                        <li>
                        <Link href="#"></Link>
                        </li>
                    </ul> */}
                    </li>
                    {/* <li><Link href="#"><span></span></Link></li> */}
                    <li><Link href="#"><span>お問い合わせ</span></Link></li>
                    {/* <li><Link href="#"><span></span></Link></li> */}
                </ul>
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