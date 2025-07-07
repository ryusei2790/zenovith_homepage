"use client";
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './Body.module.css';

import BodyMain from './components/BodyMain';
import BodyHead from './components/BodyHead';
import BodyAbout from './components/BodyAbout';
import ServiceIcon from './components/ServiceIcon';
// import BodyNews from './components/BodyNews';一旦なしで後で頑張って作る
import BodyCTA from './components/BodyCTA';
import NavCard from './components/NavCard';
import Foot from '../Foot/Foot';

// 画像データの型定義
interface ImageData {
    src: string;
    link: string;
    alt: string;
}

interface BodyProps {
  onPageChange: (page: number) => void;
}

const images: ImageData[] = [
    {
      src: '/images/sliding-image1.png',
      link: '/',
      alt: 'US'
    },
    {
      src: '/images/sliding-image2.png',
      link: '/IT',
      alt: 'ITHomepage'
    },
    {
      src: '/images/sliding-image3.png',
      link: '/hobbylink',
      alt: 'hobbylink'
    },
    {
      src: '/images/sliding-image4.png',
      link: '/IT',
      alt: 'ITProduct'
    },
    {
      src: '/images/sliding-image5.png',
      link: '/BLUESNSSUPPORT',
      alt: 'SNS支援'
    },
    {
      src: '/images/sliding-image6.png',
      link: '/AboutUs',
      alt: 'AboutUs'
    },
];

export default function Body({ onPageChange }: BodyProps) {
    const pages = [
        <BodyMain key="main" />, 
        <BodyHead key="head" images={images}/>, 
        <BodyAbout key="about" />, 
        <ServiceIcon key="service" image="/images/AboutUs.png" title="AboutUs" link="/AboutUs"  />, 
        // <BodyNews key="news" />, 
        <BodyCTA key="cta" />, 
        <NavCard key="navcard" />, 
        <Foot key="foot"/>,
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const goToPage = useCallback((pageIndex: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentPage(pageIndex);
        onPageChange(pageIndex); // 親コンポーネントに通知
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000); // アニメーション完了まで待機
    }, [isAnimating, onPageChange]);

    const handleWheel = useCallback(
        (event: WheelEvent) => {
            event.preventDefault();
            
            if (isAnimating) return;

            // スクロール方向を判定（閾値を設定）
            const scrollThreshold = 50; // この値以上でスクロールと判定
            
            if (Math.abs(event.deltaY) < scrollThreshold) return;

            if (event.deltaY > 0) {
                // 下にスクロール → 次のページへ
                const nextPage = Math.min(currentPage + 1, pages.length - 1);
                if (nextPage !== currentPage) {
                    goToPage(nextPage);
                }
            } else if (event.deltaY < 0) {
                // 上にスクロール → 前のページへ
                const prevPage = Math.max(currentPage - 1, 0);
                if (prevPage !== currentPage) {
                    goToPage(prevPage);
                }
            }
        },
        [currentPage, pages.length, isAnimating, goToPage]
    );

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel]);

    return (
        <div
            ref={scrollContainerRef}
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                position: "relative",
            }}
            className={styles.pages}
        >
            <div
                style={{
                    height: `${pages.length * 100}vh`,
                    transform: `translateY(-${currentPage * 100}vh)`,
                    transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
            >
                {pages.map((page, idx) => (
                    <div key={idx} style={{ height: "100vh" }}>
                        {page}
                    </div>
                ))}
            </div>
        </div>
    );
}
