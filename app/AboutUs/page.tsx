"use client";
import React from "react";
import BackToHomeButton from "../components/elements/BackToHomeButton";
import Image from "next/image";

export const metadata = {
  title: 'AboutUs',
  description: 'AboutUsページ',
}

const AboutUsPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>AboutUsページ（雛形）</h1>
      <p style={{ marginBottom: "2rem" }}>ここにAboutUsの内容や説明を追加してください。</p>
      <BackToHomeButton />
      <a href="/AboutUs" target="_blank" rel="noopener noreferrer">
      </a>
    </div>
  );
};

export default AboutUsPage;