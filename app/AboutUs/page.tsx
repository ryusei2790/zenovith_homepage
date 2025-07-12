"use client";
import React from "react";
import MemberRollupWrapper from "./MemberRollupWrapper";
import Head from "../components/Head/Head";
import Foot from "../components/Foot/Foot";

const AboutUspage: React.FC = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Head currentPage={0} onSelectPage={() => {}} />
      <main style={{ flex: 1, width: "100vw", maxWidth: 1200, margin: "0 auto", padding: "2rem 1rem" }}>
        <div>
          <MemberRollupWrapper name="久保 晶幹" role="代表" image="/images/masaki.jpg" description=" " />
          <MemberRollupWrapper name="秋葉 壮太" role=" " image="/images/sota.JPG" description=" " />
          <MemberRollupWrapper name="中村 優真" role=" " image="/images/yuma.jpg" description=" " />
          <MemberRollupWrapper name="上田 琉聖" role="エンジニア" image="/images/ryusei.JPG" description=" " />
        </div>
      </main>
      <Foot />
    </div>
  );
};

export default AboutUspage;