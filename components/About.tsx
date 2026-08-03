"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, BookOpen, HeartHandshake } from "lucide-react";
import SectionHeading from "./SectionHeading";
import KhatamStar from "./KhatamStar";

const points = [
  { icon: Users, text: "12+ Qualified Male & Female Teachers" },
  { icon: BookOpen, text: "Separate classes for boys and girls" },
  { icon: Sparkles, text: "Authentic Tajweed and recitation" },
  { icon: HeartHandshake, text: "Strong Islamic values and good manners" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      <KhatamStar className="pointer-events-none absolute -left-24 top-10 h-72 w-72 text-masjid-500/5 dark:text-gold-400/5 animate-spin-slow" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Who We Are"
          title="About Our Academy"
        />

        <div className="grid gap-12 lg:grid-cols-5 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-2xl glass p-8 md:p-10 shadow-xl shadow-masjid-900/5"
          >
            <p className="font-display text-lg italic text-gold-600 dark:text-gold-400 mb-4">
              Assalamu Alaikum wa Rahmatullahi wa Barakatuh.
            </p>
            <div className="space-y-4 text-[15px] leading-relaxed text-masjid-700 dark:text-parchment/85">
              <p>
                Welcome to the official website of Taleem Ul Islam Online Academy, the
                online branch of Madresa-e-Taleem Ul Islam, located at 3rd Cross, 8th Main Road, Pillanna Garden,Pillanna Garden,
                Stage 3, Kadugondanahalli, Bengaluru.
              </p>
              <p>
                Madresa-e-Taleem Ul Islam has been providing quality Islamic education
for the past 9 years. Alhamdulillah, our madrasa has 12+ qualified male
and female teachers.
              </p>
              <p>
                Currently, more than 450 students are studying in our offline madrasa,
and over 150 students have successfully completed the Holy Qur'an.
              </p>
              <p>
                We offer separate classes for boys and girls in Noorani Qaida, Nazira
                Qur&apos;an, and Hifz-ul-Qur&apos;an.
              </p>
              <p>
                Our mission is to provide authentic Islamic education with proper
                Tajweed, good manners, and strong Islamic values.
              </p>
              <p className="font-display italic text-gold-600 dark:text-gold-400">
                May Allah accept our efforts. Ameen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {points.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-masjid-100 dark:border-masjid-800 bg-white/70 dark:bg-masjid-900/50 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-masjid-50 dark:bg-masjid-800 text-masjid-600 dark:text-gold-400">
                  <p.icon size={20} strokeWidth={1.75} />
                </span>
                <span className="text-sm font-medium text-masjid-700 dark:text-parchment/90">
                  {p.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
