import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Lock } from 'lucide-react';

export default function Motivation() {
  const items = [
    {
      icon: Shield,
      title: 'Protect What Matters',
      desc:
        'I believe security is about enabling trust. My goal is to reduce risk while empowering people and products to move fast safely.',
    },
    {
      icon: Target,
      title: 'Always Be Learning',
      desc:
        'Cybersecurity evolves daily. I continuously train, lab, and certify to stay ahead of emerging threats and techniques.',
    },
    {
      icon: Lock,
      title: 'Build With Security',
      desc:
        'From design to deployment, I champion secure-by-default patterns, code reviews, and automated checks to prevent vulnerabilities.',
    },
  ];

  return (
    <section id="motivation" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/5 to-transparent dark:via-sky-400/5" />
      <div className="relative container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Motivation & Philosophy
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/0 transition group-hover:via-sky-500/5 group-hover:to-sky-500/10" />
              <Icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
