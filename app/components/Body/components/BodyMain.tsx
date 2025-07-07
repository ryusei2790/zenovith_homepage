"use client";
import React, { useEffect, useState } from "react";
import styles from "./BodyMain.module.css";
import Image from "next/image";

const BodyMain: React.FC = () => {
  const [isSlidingVisible, setIsSlidingVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);

  // スライディング画像の表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlidingVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // テキストの表示（7秒後）
  useEffect(() => {
    const textTimer = setTimeout(() => {
      setIsTextVisible(true);
    }, 7000);

    return () => clearTimeout(textTimer);
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

      
      {/* 常識を超えて幸せを加速 テキスト */}
      <div
        style={{
          position: 'fixed',
          top: '10%',
          left: 0,
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: 'black',
          background: 'transparent',
          padding: '20px',
          textShadow: 'none',
          opacity: isTextVisible ? 1 : 0.3,
          transform: isTextVisible ? 'translateX(0)' : 'translateX(-100vw)',
          transition: 'opacity 1.5s ease-in-out, transform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 20000,
          textAlign: 'left',
          fontFamily: "'Noto Serif JP', serif",
          whiteSpace: 'nowrap',
        }}
      >
        常識を超えて幸せを加速
      </div>
      
      {/* 背景動画 */}
      <video
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
      </video>
      
      {/* 動画を隠す白い画像（5秒後に右にスライド） */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '80vw',
          height: '80vh',
          backgroundColor: 'white',
          transform: isSlidingVisible ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 2s ',//cubic-bezier(0.25, 0.46, 0.45, 0.94)
          zIndex: 10000,
        }}
      />
    </div>
  );
};

export default BodyMain;
