"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Creator() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl glass p-6 md:p-8 shadow-lg shadow-masjid-900/5"
        >
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-masjid-500 text-gold-200">
            <Code2 size={28} strokeWidth={1.75} />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-600 dark:text-gold-400 mb-1">
              Director of Online Branch
            </p>
            <h4 className="font-display text-xl font-bold text-masjid-700 dark:text-parchment">
             Hazrat Maulana Mufti Mohammed Athif Zain Saheb As Suvoodi
            </h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
