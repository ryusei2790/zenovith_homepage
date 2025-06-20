"use client"
import React from 'react';
import styles from './Foot.module.css';
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
                <h2>Zenovith</h2> 
                    {/* <p> </p> */}
                </div>
                {/* <div className={styles.loginButton}>
                    <Link href=""><span></span></Link> 
                </div> */}
                <ul>
                    {/* <li><Link href="#"><span></span></Link></li>
                    <li><Link href="#"><span></span></Link></li> */}
                    <li><Link href="#contact">組織・メンバー</Link></li>
                    <li><Link href="/AboutUs"><span>活動紹介</span></Link></li>
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
                    {/* <li><Link href="#"><span></span></Link></li> */}
                    {/* <li><Link href=""><span>お問い合わせ</span></Link></li> */}
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