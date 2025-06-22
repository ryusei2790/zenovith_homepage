"use client"
import { useState } from 'react';
import Image from "next/image";
import GalaxyBackground from "./components/layouts/Background";
import Head from './components/Head/Head'
import Body from './components/Body/Body'
import Foot from './components/Foot/Foot'


export default function Home() {
  const [fadeOut, setFadeOut] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleGalaxyReady = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };
  
  
  return (
    <>
      {isLoading && (
        <div className={`splash=screen${fadeOut ? ' fade-out': ''}`}>
          <Image src="/images/logo.png" alt="Loading..." width={100} height={100} style={{ objectFit: 'cover' }} />
        </div>
      )}
      <GalaxyBackground onReady={handleGalaxyReady} />
      <main className="">
        <Head />
        <Body />
        <Foot />
      </main>
      <footer className="">
      </footer>
    </>
  );
}
