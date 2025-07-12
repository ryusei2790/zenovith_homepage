"use client";
import React from "react";
import Head from "../components/Head/Head";
import Foot from "../components/Foot/Foot";
import SNS from "./SNS";


const BLUESNSSUPPORTPage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Head currentPage={0} onSelectPage={() => {}} />
      <SNS />
      <Foot />
    </div>
  );
};

export default BLUESNSSUPPORTPage;
