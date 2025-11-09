import React from 'react';
import Hero from './components/Hero.jsx';
import Motivation from './components/Motivation.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import Certificates from './components/Certificates.jsx';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <main className="relative z-10">
        <Motivation />
        <SocialLinks />
        <Certificates />
      </main>
      <footer className="py-8 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Cybersecurity Portfolio
      </footer>
    </div>
  );
}
