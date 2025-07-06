"use client";
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './Body.module.css';

import BodyMain from './components/BodyMain';
import BodyHead from './components/BodyHead';
import BodyAbout from './components/BodyAbout';
import ServiceIcon from './components/ServiceIcon';
import BodyNews from './components/BodyNews';
import BodyCTA from './components/BodyCTA';
import NavCard from './components/NavCard';
import Foot from '../Foot/Foot';

// 画像データの型定義
interface ImageData {
    src: string;
    link: string;
    alt: string;
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

export default function Body() {
    const pages = [
        <BodyMain key="main" />, 
        <BodyHead key="head" images={images}/>, 
        <BodyAbout key="about" />, 
        <ServiceIcon key="service" image="/images/AboutUs.png" title="AboutUs" link="/AboutUs"  />, 
        <BodyNews key="news" />, 
        <BodyCTA key="cta" />, 
        <NavCard key="navcard" />, 
        <Foot key="foot"/>
    ];
    const [currentPage, setCurrentPage] = useState(0);
    const isScrolling = useRef(false);

    const handleWheel = useCallback(
        (event: WheelEvent) => {
            if (isScrolling.current) return;
            isScrolling.current = true;

            if (event.deltaY > 0) {
                setCurrentPage((prev) => prev < pages.length - 1 ? prev + 1 : prev);
            } else if (event.deltaY < 0) {
                setCurrentPage((prev) => prev > 0 ? prev - 1 : prev);
            }

            setTimeout(() => {
                isScrolling.current = false;
            }, 800);
        },
        [pages.length]
    );

    useEffect(() => {
        window.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                position: "relative"
            }}
        >
            <div
                style={{
                    height: `${pages.length * 1000}vh`,
                    transform: `translateY(-${currentPage * 1000}vh)` ,
                    transition: "transform 0.7s cubic-bezier(0.77,0,0.175,1)",
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
