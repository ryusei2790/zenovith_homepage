"use client";
import React from "react";
import Head from "../components/Head/Head";
import Foot from "../components/Foot/Foot";
import BackToHomeButton from "../components/elements/BackToHomeButton";

const ITPage: React.FC = () => {
  const itNavItems = [
    { href: "#services", value: "サービス" },
    { href: "#portfolio", value: "ポートフォリオ" },
    { href: "#skills", value: "スキル" },
    { href: "#contact", value: "お問い合わせ" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Head currentPage={0} onSelectPage={() => {}} title="IT" navItems={itNavItems} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>ITサービスページ（雛形）</h1>
        <p style={{ marginBottom: "2rem" }}>ここにITサービスの内容や説明を追加してください。</p>
        <BackToHomeButton />
      </main>
      <Foot />
    </div>
  );
};

export default ITPage;
