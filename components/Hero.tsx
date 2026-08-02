"use client";

import { motion } from "framer-motion";
import { GraduationCap, PhoneCall } from "lucide-react";
import KhatamStar from "./KhatamStar";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-masjid-600 dark:bg-masjid-950"
    >
      {/* Ambient gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-masjid-500/90 via-masjid-600 to-masjid-800 dark:from-masjid-900 dark:via-masjid-950 dark:to-black" />

      {/* Watermark madrasa emblem, slowly rotating */}
      <KhatamStar
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] text-gold-300/10 animate-spin-slower"
      />
      <KhatamStar
        className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] text-gold-300/10 animate-spin-slow"
        strokeWidth={0.8}
      />

      {/* Geometric watermark texture */}
      <div className="absolute inset-0 geo-watermark opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 shadow-2xl shadow-gold-900/30 animate-float"
        >
          <KhatamStar className="h-14 w-14 text-masjid-800" strokeWidth={2} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-3 text-sm uppercase tracking-[0.3em] text-gold-300"
        >
          Madresa-e-Taleem Ul Islam &middot; Online Branch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-ivory"
        >
          Taleem Ul Islam <span className="gold-text">Online Academy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-lg md:text-xl text-parchment/90 font-display italic"
        >
          Learn Qur&apos;an with Tajweed from Anywhere in the World.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#admissions"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 hover:bg-gold-400 text-masjid-900 font-semibold px-6 py-3.5 shadow-lg shadow-gold-900/30 transition"
          >
            <GraduationCap size={18} />
            Online Admission
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-parchment/30 text-parchment font-semibold px-6 py-3.5 hover:border-gold-400 hover:text-gold-300 transition"
          >
            <PhoneCall size={18} />
            Contact Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="relative z-10 mx-auto mb-4 grid w-full max-w-4xl grid-cols-2 gap-6 px-6 sm:grid-cols-4"
      >
        <Counter target={9} suffix="+" label="Years of Excellence" />
        <Counter target={350} suffix="+" label="Offline Students" />
        <Counter target={150} suffix="+" label="Qur'an Graduates" />
        <Counter target={7} label="Experienced Teachers" />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mx-auto mb-8 flex h-9 w-6 items-start justify-center rounded-full border-2 border-parchment/40 p-1"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="h-1.5 w-1.5 rounded-full bg-gold-400"
        />
      </motion.a>
    </section>
  );
}
