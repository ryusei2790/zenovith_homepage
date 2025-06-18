import Image from "next/image";
import Background from './components/layouts/Background'

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Background />
      </main>
      <footer className="">
      </footer>
    </>
  );
}
