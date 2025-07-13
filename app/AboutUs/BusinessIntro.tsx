"use client";
import React from "react";

const BusinessIntro: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        maxWidth: 1100,
        margin: "0 auto 2.5rem auto",
        padding: "3rem 2rem 2.5rem 2rem",
        borderRadius: 32,
        background: "linear-gradient(120deg, #1e5bf7 0%, #86f3df 100%)",
        boxShadow: "0 8px 32px rgba(30,91,247,0.13)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.7rem", fontWeight: 800, letterSpacing: "0.08em", marginBottom: "1.2rem", textShadow: "0 4px 24px rgba(30,91,247,0.18)" }}>
        常識を越え、幸せを加速させる事業へ
      </h1>
      <p style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "2.2rem", maxWidth: 700, margin: "0 auto 2.2rem auto", lineHeight: 1.8 }}>
        Zenovithは、AI・Web・DX・新規事業開発を軸に、<br />
        社会や企業の「当たり前」を進化させる挑戦を続けています。<br />
        テクノロジーと創造力で、未来の幸せを共に創ります。
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2.5rem", marginTop: "2.5rem" }}>
        <div style={{ minWidth: 260, maxWidth: 340, background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem 1.2rem", boxShadow: "0 2px 12px rgba(30,91,247,0.10)", textAlign: "left" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>AI・Webシステム開発</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
            最新AI技術とWeb開発力で、業務効率化・DX推進・新規サービス立ち上げをトータルサポート。<br />
            クライアントの課題に寄り添い、最適なソリューションを提供します。
          </p>
        </div>
        <div style={{ minWidth: 260, maxWidth: 340, background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem 1.2rem", boxShadow: "0 2px 12px rgba(30,91,247,0.10)", textAlign: "left" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>デザイン・ブランディング</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
            ロゴ・Web・SNS・資料など、ブランド価値を高めるデザインを一貫してご提案。<br />
            伝わる・惹きつける・記憶に残るクリエイティブで事業成長を後押しします。
          </p>
        </div>
        <div style={{ minWidth: 260, maxWidth: 340, background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem 1.2rem", boxShadow: "0 2px 12px rgba(30,91,247,0.10)", textAlign: "left" }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: 12, color: "#fff" }}>新規事業・社会課題解決</h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
            物流・教育・地域活性など、社会の大きな課題にテクノロジーで挑戦。<br />
            未来志向のプロジェクトで、持続可能な社会づくりに貢献します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntro; 