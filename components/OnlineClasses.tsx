"use client";

import { motion } from "framer-motion";
import { Clock, CalendarCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const schedule = [
  { batch: "All Batches", time: "3:00 PM – 11:00 PM (IST)" },
];
export default function OnlineClasses() {
  return (
    <section id="online-classes" className="py-24 md:py-32 bg-parchment/40 dark:bg-masjid-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Study From Home"
          title="Online Classes"
          description="Attend live, interactive Qur'an classes with experienced teachers over google meet — Tajweed correction and Islamic learning from the comfort of your home."

        />
        div className="mx-auto max-w-2xl"
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white dark:bg-masjid-900 border border-masjid-100 dark:border-masjid-800 shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-masjid-50 dark:bg-masjid-800 text-masjid-500 dark:text-gold-400">
                <CalendarCheck size={20} />
              </span>
              <h3 className="font-display text-xl font-bold text-masjid-700 dark:text-parchment">
                Class Timings
              </h3>
            </div>
            <ul className="space-y-4">
              {schedule.map((s) => (
                <li
                  key={s.batch}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-masjid-100 dark:border-masjid-800 pb-4 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-masjid-700 dark:text-parchment">{s.batch}</span>
                  <span className="flex items-center gap-1.5 text-sm text-gold-600 dark:text-gold-400">
                    <Clock size={14} /> {s.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-masjid-600 dark:text-parchment/70 leading-relaxed">
  <strong>Flexible Class Timings:</strong> Classes are available between <strong>3:00 PM and 11:00 PM (IST)</strong> and will be scheduled according to your convenience. <strong>Weekly Holiday:</strong> Sunday.
</p>
          </motion.div>
        </div>
      
    </section>
  );
}
