"use client";
import React, { useEffect, useState } from "react";
import styles from "./BodyMain.module.css";
import Image from "next/image";

const BodyMain: React.FC = () => {
  const [isSlidingVisible, setIsSlidingVisible] = useState(false);
  const [isFirstTextVisible, setIsFirstTextVisible] = useState(false);
  const [isThirdTextVisible, setIsThirdTextVisible] = useState(false);

  // スライディング画像表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlidingVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // 1つ目テキスト（3秒後）
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstTextVisible(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  // 2つ目テキスト（5秒後）
  

  // 3つ目テキスト（7秒後）
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsThirdTextVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* ZenovithHead画像 */}
      <Image
        src="/images/ZenovithMain.png"
        alt="Zenovith"
        width={900}
        height={900}
        className={styles.zenovithHeadImage}
        priority
      />

      {/* 1つ目スローガン */}
      <div
        style={{
          position: 'fixed',
          top: '3%',
          right: 0,
          fontSize: '2rem',
          fontWeight: 'bold',
          color: 'black',
          padding: '20px',
          opacity: isFirstTextVisible ? 1 : 0,
          transform: isFirstTextVisible ? 'translateX(0)' : 'translateX(-100vw)',
          transition: 'opacity 1.5s ease-in-out, transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 20000,
          fontFamily: "'Noto Serif JP', serif",
          whiteSpace: 'nowrap',
        }}
      >
        日常をもっと自由に。
      </div>

      {/* 3つ目テキスト（下から） */}
      <div
        style={{
          position: 'fixed',
          top: '10%', 
          left: '0',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'black',
          padding: '20px',
          opacity: isThirdTextVisible ? 1 : 0.3,
          transform: isThirdTextVisible ? 'translateY(0)' : 'translateY(100vh)',
          transition: 'opacity 1.5s ease-in-out, transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 20000,
          fontFamily: "'Noto Serif JP', serif",
          whiteSpace: 'nowrap',
        }}
      >
        常識を超えて幸せを加速
      </div>

      {/* 背景動画 */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "80vw",
          height: "80vh",
          objectFit: "cover",
          zIndex: -1,
          pointerEvents: "none",
        }}
      >
        <source src="/videos/souta.mp4" type="video/mp4" />
      </video> */}

      {/* 白いオーバーレイ */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '80vw',
          height: '80vh',
          backgroundColor: 'white',
          transform: isSlidingVisible ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 2s',
          zIndex: 10000,
        }}
      />
    </div>
  );
};

export default BodyMain;

