"use client";
import React from "react";
import Head from "../components/Head/Head";
import Foot from "../components/Foot/Foot";
import Board from "./Board";

const OpenSpacePage: React.FC = () => {
  const openSpaceNavItems = [
    { href: "#board", value: "掲示板" },
    { href: "#rules", value: "利用規約" },
    { href: "#contact", value: "お問い合わせ" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f7faff" }}>
     <Head currentPage={0} onSelectPage={() => {}} title="OpenSpace" navItems={openSpaceNavItems} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
       
        <Board />
      
      </main>
      <Foot />
    </div>
  );
};

export default OpenSpacePage;
