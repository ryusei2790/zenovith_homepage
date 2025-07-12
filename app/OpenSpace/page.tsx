"use client";
import React from "react";
import Head from "./OpenSpaceHead";
import Foot from "../components/Foot/Foot";
import Board from "./Board";

const OpenSpacePage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#f7faff" }}>
     <Head />
      <main style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
       
        <Board />
      
      </main>
      <Foot />
    </div>
  );
};

export default OpenSpacePage;
