import { useEffect, useState } from 'react';
import Image from "next/image";
import GalaxyBackground from "./components/layouts/Background";
import Head from './components/Head/Head'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  
  return (
    <>
      <GalaxyBackground />
      <main className="">

      </main>
      <footer className="">
      </footer>
    </>
  );
}
