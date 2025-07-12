"use client";
import React, { useState } from "react";

interface Post {
  id: number;
  name: string;
  message: string;
  createdAt: string;
}

const Board: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const newPost: Post = {
      id: Date.now(),
      name: name.trim() || "匿名",
      message: message.trim(),
      createdAt: new Date().toLocaleString(),
    };
    setPosts([newPost, ...posts]);
    setMessage("");
    setName("");
  };

  return (
    <div style={{ maxWidth: 600, minHeight: "100vh", marginLeft: "auto", marginRight: 0, padding: "1.5rem", background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px rgba(30,91,247,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="お名前（省略可）"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: "0.7em 1em", borderRadius: 8, border: "1px solid #ccc", fontSize: "1rem" }}
        />
        <textarea
          placeholder="メッセージを入力..."
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={3}
          style={{ padding: "0.7em 1em", borderRadius: 8, border: "1px solid #ccc", fontSize: "1rem", resize: "vertical" }}
        />
        <button type="submit" style={{ background: "linear-gradient(90deg,#1e5bf7,#86f3df)", color: "#fff", fontWeight: 700, border: "none", borderRadius: 8, padding: "0.7em 2em", fontSize: "1.1rem", cursor: "pointer", alignSelf: "flex-end", boxShadow: "0 2px 8px rgba(30,91,247,0.10)", transition: "background 0.2s, transform 0.2s" }}>投稿</button>
      </form>
      <div>
        {posts.length === 0 && <p style={{ color: "#888", textAlign: "center" }}>まだ投稿はありません。</p>}
        {posts.map(post => (
          <div key={post.id} style={{ marginBottom: "1.5rem", padding: "1rem", background: "#f7f7fa", borderRadius: 10, boxShadow: "0 1px 4px rgba(30,91,247,0.04)" }}>
            <div style={{ fontWeight: 600, color: "#1e5bf7", marginBottom: 4 }}>{post.name}</div>
            <div style={{ whiteSpace: "pre-wrap", marginBottom: 6 }}>{post.message}</div>
            <div style={{ fontSize: "0.85rem", color: "#888", textAlign: "right" }}>{post.createdAt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board; 