"use client";
import React, { useEffect, useState } from "react";

const BodyMain: React.FC = () => {
  const [isSlidingVisible, setIsSlidingVisible] = useState(false);

  // スライディング画像の表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlidingVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      
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
          width: "70vw",
          height: "70vh",
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
          width: '70vw',
          height: '70vh',
          backgroundColor: 'white',
          transform: isSlidingVisible ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          zIndex: 100,
        }}
      />
    </div>
  );
};

export default BodyMain;
