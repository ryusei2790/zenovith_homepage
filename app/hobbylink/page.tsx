"use client";
import React from "react";
import BackToHomeButton from "../components/elements/BackToHomeButton";
import Image from "next/image";

const HobbyLinkPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>HobbyLinkページ（雛形）</h1>
      <p style={{ marginBottom: "2rem" }}>ここにHobbyLinkの内容や説明を追加してください。</p>
      <BackToHomeButton />
      <a href="https://hobby-link.replit.app" target="_blank" rel="noopener noreferrer">
        <Image
          src="/images/sliding-image3.png"
          alt="hobbylink"
          width={100}
          height={100}
        />
      </a>
    </div>
  );
};

export default HobbyLinkPage;
