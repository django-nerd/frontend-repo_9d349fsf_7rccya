import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/',
    icon: Github,
    handle: '@yourhandle',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: Linkedin,
    handle: 'Your Name',
  },
  {
    name: 'Email',
    href: 'mailto:you@example.com',
    icon: Mail,
    handle: 'you@example.com',
  },
  {
    name: 'Website',
    href: 'https://your-site.com',
    icon: Globe,
    handle: 'your-site.com',
  },
];

export default function SocialLinks() {
  return (
    <section id="socials" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Connect with me
        </motion.h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map(({ name, href, icon: Icon, handle }, i) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-sky-100 group-hover:text-sky-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-sky-900/40 dark:group-hover:text-sky-300">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm opacity-70">{name}</p>
                <p className="font-medium">{handle}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
