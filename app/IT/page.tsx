"use client";
import React from "react";
import BackToHomeButton from "../components/elements/BackToHomeButton";

const ITPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>ITサービスページ（雛形）</h1>
      <p style={{ marginBottom: "2rem" }}>ここにITサービスの内容や説明を追加してください。</p>
      <BackToHomeButton />
    </div>
  );
};

export default ITPage;
