"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";

export default function Home() {
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = 7; // Body内pages.lengthと同じ数に

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const goToPage = useCallback((pageIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(pageIndex);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  }, [isAnimating]);
  
  const goToPageFirst = useCallback(() => {
    setCurrentPage(1);
  }, []);

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

  // useEffect(() => {
  //   const autoPageTimer = setTimeout(() => {
  //     goToPage(1);
  //   }, 10000);
  //   return () => clearTimeout(autoPageTimer);
  // }, [goToPage]);

  useEffect(() => {
    const autoPageTimer = setTimeout(() => {
      goToPageFirst();
    }, 10000);
  }, [goToPageFirst]);

  return (
    <>
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
        <Head
          currentPage={currentPage}
          onSelectPage={(pageIndex) => goToPage(pageIndex)}
        />
        <Body currentPage={currentPage} />
      </main>

      <footer></footer>
    </>
  );
}
