"use client";
import React from "react";

const BodyMain: React.FC = () => {
  return (
    <>
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
          pointerEvents: "none", // 背景なのでクリックを透過
        }}
      >
        <source src="/videos/souta.mp4" type="video/mp4" />
        {/* WebMなど他形式も必要なら追加 */}
      </video>
    </>
  );
};

export default BodyMain;
