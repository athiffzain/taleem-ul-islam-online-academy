"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center mb-14"
    >
      <div className={`khatam-divider text-xs uppercase tracking-[0.3em] font-semibold ${light ? "text-gold-300" : "text-gold-600 dark:text-gold-400"}`}>
        {eyebrow}
      </div>
      <h2 className={`mt-3 font-display text-3xl md:text-4xl font-bold ${light ? "text-ivory" : "text-masjid-700 dark:text-parchment"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-parchment/80" : "text-masjid-600/80 dark:text-parchment/70"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
