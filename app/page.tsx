import { useEffect, useState } from 'react';
import Image from "next/image";
import GalaxyBackground from "./components/layouts/Background";
import Head from './components/Head/Head'


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
          <img src="/images_load_background.png" alt="Loading..." style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
        </div>
      )}
      <GalaxyBackground onReady={handleGalaxyReady} />
      <main className="">

      </main>
      <footer className="">
      </footer>
    </>
  );
}
