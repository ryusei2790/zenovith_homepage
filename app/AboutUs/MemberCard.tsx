"use client";
import React from "react";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ name, role, image, description }) => {
  return (
    <div
      style={{
        background: "linear-gradient(120deg, #fff 60%, #e0e7ef 100%)",
        borderRadius: 28,
        boxShadow: "0 8px 32px rgba(30,91,247,0.13), 0 1.5px 16px rgba(255,255,255,0.7) inset",
        padding: "2.2rem 1.5rem 1.5rem 1.5rem",
        margin: "1.5rem 0",
        width: "80%",
        height: "80%",
        maxWidth: 900,
        minWidth: 260,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s cubic-bezier(.4,2,.3,1), box-shadow 0.3s",
        cursor: "pointer",
        border: "1.5px solid #e0e7ef",
        backdropFilter: "blur(2px)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      className="luxury-card"
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 18 }}>
        <img
          src={image}
          alt={name}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 4px 16px rgba(30,91,247,0.13)",
            border: "2.5px solid #fff",
            background: "#f7faff"
          }}
        />
        <div style={{ textAlign: "left" }}>
          <div style={{ fontWeight: 700, fontSize: "1.25rem", color: "#1e5bf7", letterSpacing: "0.04em" }}>{name}</div>
          <div style={{ fontWeight: 500, fontSize: "1.05rem", color: "#222", opacity: 0.7, marginTop: 2 }}>{role}</div>
        </div>
      </div>
      <div style={{ fontSize: "1rem", color: "#333", lineHeight: 1.7, textAlign: "left", marginTop: 8 }}>{description}</div>
      <div style={{
        position: "absolute",
        right: -40,
        bottom: -40,
        width: 120,
        height: 120,
        background: "radial-gradient(circle, #86f3df 0%, #1e5bf7 100%)",
        opacity: 0.13,
        borderRadius: "50%",
        zIndex: 0,
      }} />
    </div>
  );
};

export default MemberCard; 