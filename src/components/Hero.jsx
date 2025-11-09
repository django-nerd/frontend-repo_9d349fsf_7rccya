import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Spline from '@splinetool/react-spline';

function useThemeToggle() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return { isDark, toggle: () => setIsDark((v) => !v) };
}

export default function Hero() {
  const { isDark, toggle } = useThemeToggle();

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 dark:from-slate-950/70 dark:via-slate-950/20 dark:to-slate-950/95" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center">
        <motion.button
          onClick={toggle}
          aria-label="Toggle theme"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 text-sm backdrop-blur-md transition hover:shadow-lg dark:border-slate-800/60 dark:bg-slate-900/60"
          whileTap={{ scale: 0.96 }}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="opacity-80">{isDark ? 'Light mode' : 'Dark mode'}</span>
        </motion.button>

        <motion.img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2880&auto=format&fit=crop"
          alt="Profile"
          className="h-28 w-28 rounded-full ring-4 ring-white/70 shadow-xl object-cover dark:ring-slate-900/70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        <motion.h1
          className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Cybersecurity Portfolio
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-balance text-base leading-relaxed text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Showcasing a passion for defending systems, analyzing threats, and building secure, resilient products. Explore my journey, credentials, and ways to connect.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {['Threat Analysis', 'Network Security', 'SIEM', 'Incident Response'].map((tag) => (
            <motion.span
              key={tag}
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
              className="rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 text-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/60"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
