"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Creator() {
  return (
    <section className="relative py-16 md:py-20 bg-masjid-600 dark:bg-masjid-950 overflow-hidden">
      <div className="absolute inset-0 geo-watermark opacity-30" />

      <div className="mx-auto max-w-3xl px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-gold-400/30 bg-masjid-700/60 p-8 text-center shadow-xl"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
            <Code2 size={32} strokeWidth={1.75} />
          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gold-300">
            Director of Online Branch
          </p>

          <h4 className="mt-3 font-display text-xl md:text-2xl font-bold text-ivory">
            Hazrat Maulana Mufti Mohammed Athif Zain Saheb As Suvoodi
          </h4>

          <p className="mt-4 text-parchment/80 leading-relaxed">
            Founder of the Online Branch of Madresa-e-Taleem Ul Islam,
            dedicated to spreading Qur&apos;anic education through modern
            online learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}