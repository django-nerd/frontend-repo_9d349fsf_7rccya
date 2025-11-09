import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'CompTIA Security+',
    org: 'CompTIA',
    year: '2023',
    link: '#',
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    org: 'EC-Council',
    year: '2024',
    link: '#',
  },
  {
    title: 'AWS Certified Security – Specialty',
    org: 'Amazon Web Services',
    year: '2024',
    link: '#',
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target={c.link?.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 transition group-hover:via-emerald-500/5 group-hover:to-emerald-500/10" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                    <Award className="h-5 w-5" />
                    <span className="text-sm font-medium">{c.org}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm opacity-70">Issued {c.year}</p>
                </div>
                <div className="mt-1 opacity-0 transition group-hover:opacity-100">
                  <ExternalLink className="h-5 w-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
