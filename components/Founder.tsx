"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import KhatamStar from "./KhatamStar";

export default function Founder() {
  return (
    <section className="relative py-24 md:py-32 bg-masjid-600 dark:bg-masjid-950 overflow-hidden">
      <div className="absolute inset-0 geo-watermark opacity-30" />
      <KhatamStar className="pointer-events-none absolute right-0 top-0 h-96 w-96 text-gold-300/10 animate-spin-slower" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center"
        >
          <Quote className="mx-auto mb-4 h-8 w-8 text-gold-400/70" />
          <p className="text-xs uppercase tracking-[0.3em] text-gold-300 mb-3">
            Founder
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-ivory leading-snug">
            Hazrat Maulana Mohammed Nadeem Ahmed Saheb Madni Qasmi
          </h3>
          
        </motion.div>
      </div>
    </section>
  );
}
