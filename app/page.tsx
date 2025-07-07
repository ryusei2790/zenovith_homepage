"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";

export default function Home() {
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // スプラッシュスクリーンを3秒後にフェードアウト
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 初期スプラッシュ */}
      {isLoading && (
        <div className={`splash-screen ${fadeOut ? "fade-out" : ""}`}>
          <Image
            src="/images/logo.png"
            alt="Loading..."
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      <main>
        <Head currentPage={currentPage} />
        <Body onPageChange={setCurrentPage} />
      </main>

      <footer></footer>
    </>
  );
}


