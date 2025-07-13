"use client";
import React from "react";
import Head from "../components/Head/Head";
import Foot from "../components/Foot/Foot";

const AboutUsPage: React.FC = () => {
  const aboutUsNavItems = [
    { href: "#about", value: "About" },
    { href: "#mission", value: "ミッション" },
    { href: "#vision", value: "ビジョン" },
    { href: "#team", value: "チーム" },
  ];

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "linear-gradient(120deg, #1e5bf7 0%, #86f3df 100%)", color: "#fff" }}>
      <Head currentPage={0} onSelectPage={() => {}} title="About Us" navItems={aboutUsNavItems} />
      
      {/* About セクション */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: 1200, width: "100%", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", letterSpacing: "0.08em", textShadow: "0 4px 24px rgba(30,91,247,0.18)" }}>
            About Zenovith
          </h1>
          <p style={{ fontSize: "1.3rem", fontWeight: 500, marginBottom: "3rem", maxWidth: 800, margin: "0 auto 3rem auto", lineHeight: 1.8 }}>
            Zenovithは、次世代のテクノロジーとクリエイティブで<br />
            社会や企業の「当たり前」を進化させる挑戦を続けています。<br />
            多様なバックグラウンドを持つメンバーが集い、<br />
            未来の幸せを共に創ります。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center", maxWidth: 900, margin: "0 auto" }}>
            <div style={{ flex: "1", minWidth: 280, background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(30,91,247,0.15)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>テクノロジー</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                最新の技術を駆使して、革新的なソリューションを提供します。
              </p>
            </div>
            <div style={{ flex: "1", minWidth: 280, background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(30,91,247,0.15)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>クリエイティブ</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                デザインと創造性で、ユーザー体験を向上させます。
              </p>
            </div>
            <div style={{ flex: "1", minWidth: 280, background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(30,91,247,0.15)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>イノベーション</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                既存の常識を打破し、新しい価値を創造します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ミッション セクション */}
      <section id="mission" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", background: "rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", letterSpacing: "0.08em", textShadow: "0 4px 24px rgba(30,91,247,0.18)" }}>
            Our Mission
          </h2>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 30, padding: "3rem 2rem", boxShadow: "0 8px 32px rgba(30,91,247,0.20)", marginBottom: "3rem" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "2rem", lineHeight: 1.8, color: "#fff" }}>
              テクノロジーと創造力で、社会に新しい価値と幸せを届けること
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#f0f8ff", maxWidth: 800, margin: "0 auto" }}>
              私たちは、技術の力で人々の生活をより豊かにし、<br />
              企業の成長を加速させることを使命としています。<br />
              一人ひとりのアイデアが社会を変える力を持つことを信じ、<br />
              日々新しい可能性に挑戦し続けています。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: 900, margin: "0 auto" }}>
            <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>社会貢献</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                テクノロジーを通じて、社会課題の解決に貢献します。
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem", textAlign: "left" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>価値創造</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                既存の枠組みを超えた新しい価値を創造します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ビジョン セクション */}
      <section id="vision" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div style={{ maxWidth: 1000, width: "100%", textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", letterSpacing: "0.08em", textShadow: "0 4px 24px rgba(30,91,247,0.18)" }}>
            Our Vision
          </h2>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 30, padding: "3rem 2rem", boxShadow: "0 8px 32px rgba(30,91,247,0.20)", marginBottom: "3rem" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "2rem", lineHeight: 1.8, color: "#fff" }}>
              常識を越え、幸せを加速させる会社として、<br />
              持続可能な社会と新しい未来を創造します
            </p>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#f0f8ff", maxWidth: 800, margin: "0 auto" }}>
              2030年までに、テクノロジーとクリエイティブの力で<br />
              100万人の生活をより豊かにし、<br />
              1000社の企業のデジタル変革を支援することを目指します。
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem", textAlign: "center" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>100万人</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                生活を豊かにする人々
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem", textAlign: "center" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>1000社</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                デジタル変革を支援する企業
              </p>
            </div>
            <div style={{ background: "rgba(255,255,255,0.10)", borderRadius: 20, padding: "2rem", textAlign: "center" }}>
              <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#fff" }}>2030年</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff" }}>
                目標達成の年
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* チーム セクション */}
      <section id="team" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem 1rem", background: "rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, width: "100%", textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "2rem", letterSpacing: "0.08em", textShadow: "0 4px 24px rgba(30,91,247,0.18)" }}>
            Our Team
          </h2>
          <p style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: "3rem", maxWidth: 800, margin: "0 auto 3rem auto", lineHeight: 1.8, color: "#f0f8ff" }}>
            多様な専門性を持つメンバーが、<br />
            それぞれの強みを活かしてプロジェクトを推進しています。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(30,91,247,0.15)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>エンジニア</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff", marginBottom: "1rem" }}>
                フロントエンド、バックエンド、インフラまで幅広い技術スタックをカバー
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>React</span>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>Node.js</span>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>AWS</span>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(30,91,247,0.15)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>デザイナー</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff", marginBottom: "1rem" }}>
                UI/UX、グラフィック、ブランディングまで多岐にわたるデザインスキル
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>Figma</span>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>Photoshop</span>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>Illustrator</span>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "2rem", boxShadow: "0 4px 20px rgba(30,91,247,0.15)" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "1rem", color: "#fff" }}>マーケター</h3>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#f0f8ff", marginBottom: "1rem" }}>
                デジタルマーケティング、SNS運用、ブランド戦略まで包括的なマーケティング
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>SNS</span>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>SEO</span>
                <span style={{ background: "rgba(255,255,255,0.2)", padding: "0.3rem 0.8rem", borderRadius: 15, fontSize: "0.9rem" }}>広告</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Foot />
    </div>
  );
};

export default AboutUsPage;