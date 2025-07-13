"use client";
import React from "react";
import Head from "../components/Head/Head";
import Foot from "../components/Foot/Foot";
import SNS from "./SNS";


const BLUESNSSUPPORTPage: React.FC = () => {
  const blueSnsNavItems = [
    { href: "#logo", value: "ロゴデザイン" },
    { href: "#web", value: "Webデザイン" },
    { href: "#sns", value: "SNS投稿" },
    { href: "#template", value: "テンプレート" },
    { href: "#support", value: "運用サポート" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Head currentPage={0} onSelectPage={() => {}} title="BLUE SNS SUPPORT" navItems={blueSnsNavItems} />
      <SNS />
      <Foot />
    </div>
  );
};

export default BLUESNSSUPPORTPage;
