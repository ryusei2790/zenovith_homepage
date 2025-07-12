"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Head from "../components/Head/Head";
import BodyEventCalendar from "../components/Body/components/BodyEventCalendar";

function SectionContainer({ children }: { children: React.ReactNode }) {
  return (
    <section style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      boxSizing: 'border-box',
    }}>
      {children}
    </section>
  );
}

function MyWorkBody({ currentPage }: { currentPage: number }) {
  const pages = [
    <SectionContainer key="main">
      <h1 style={{ fontSize: "2.2rem", marginBottom: "1.2rem", fontWeight: 700, letterSpacing: '0.05em', textAlign: 'center' }}>HobbyLink ギターレッスン ギターレンタル</h1>
      <p style={{ marginBottom: "2rem", fontSize: '1.1rem', color: '#333', textAlign: 'center' }}>ギターレッスン</p>
      <a href="https://mypagefirst.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}>
        <Image
          src="/images/ryusei.JPG"
          alt="guitarLesson"
          width={120}
          height={120}
          style={{ objectFit: 'cover' }}
        />
      </a>
    </SectionContainer>,
    <SectionContainer key="lesson">
      <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', fontWeight: 600 }}></h2>
      <BodyEventCalendar />
    </SectionContainer>,
    <SectionContainer key="rental">
      <h2 style={{ fontSize: '1.7rem', marginBottom: '1rem', fontWeight: 600 }}>ギターレッスン・ギターレンタル</h2>
      <p style={{ fontSize: '1.1rem', color: '#444', textAlign: 'center', maxWidth: 500 }}></p>
    </SectionContainer>,
    <SectionContainer key="image">
      <div style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)', borderRadius: 16, overflow: 'hidden', background: '#fff', padding: 16 }}>
        <Image src="/images/mywork.png" alt="mywork" width={400} height={400} style={{ objectFit: 'contain', maxWidth: '80vw', height: 'auto' }} />
      </div>
    </SectionContainer>,
  ];
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: '#f7f7fa' }}>
      <div
        style={{
          height: `${pages.length * 100}vh`,
          transform: `translateY(-${currentPage * 100}vh)`,
          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {pages.map((page, idx) => (
          <div key={idx} id={`section-${idx}`} style={{ height: "100vh" }}>
            {page}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MyWorkApp() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = 4;

  const goToPage = useCallback((pageIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(pageIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);

  const handleWheel = useCallback((event: WheelEvent) => {
    event.preventDefault();
    if (isAnimating) return;
    const scrollThreshold = 50;
    if (Math.abs(event.deltaY) < scrollThreshold) return;
    if (event.deltaY > 0) {
      const nextPage = Math.min(currentPage + 1, totalPages - 1);
      if (nextPage !== currentPage) {
        goToPage(nextPage);
      }
    } else {
      const prevPage = Math.max(currentPage - 1, 0);
      if (prevPage !== currentPage) {
        goToPage(prevPage);
      }
    }
  }, [currentPage, isAnimating, goToPage, totalPages]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <>
        <header>
            <Head currentPage={currentPage} onSelectPage={goToPage} />
        </header>
      <MyWorkBody currentPage={currentPage} />
    </>
  );
} 