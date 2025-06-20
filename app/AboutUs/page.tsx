import './AboutUs.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'NONDA',
  description: 'NONDA Application',
}

export default function AboutUsPage() {
  return (
    <div>
      <header className="header">
        <nav>
          <Link href="/">Home</Link>
        </nav>
      </header>
      <footer className="footer">
        <p>&copy; 2025 Zenovith</p>
      </footer>
    </div>
  )
}