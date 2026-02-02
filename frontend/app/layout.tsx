import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {/* NAVBAR */}
        <nav className="bg-gray-900 text-white p-4 flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* PAGE CONTENT */}
        <main className="p-6">
          {children}
        </main>

      </body>
    </html>
  );
}
