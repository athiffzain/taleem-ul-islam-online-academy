"use client";

import { motion } from "framer-motion";
import { Check, BookMarked, ScrollText, Award, Library } from "lucide-react";
import SectionHeading from "./SectionHeading";

const courses = [
  {
    icon: BookMarked,
    name: "Noorani Qaida",
    features: [
      "Arabic alphabet recognition",
      "Correct pronunciation (Makharij)",
      "Foundational Tajweed rules",
      "One-on-one attention",
    ],
  },
  {
    icon: ScrollText,
    name: "Nazira Qur'an",
    features: [
      "Fluent Qur'an reading with Tajweed",
      "Daily revision (Sabaq/Sabqi)",
      "Separate boys' & girls' batches",
      "Regular progress reports",
    ],
    featured: true,
  },
  {
    icon: Award,
    name: "Hifz-ul-Qur'an",
    },
{
  icon: Library,
  name: "Islamic Studies & Essential Learning",
  features: [
    "Daily Duas",
    "Selected Ahadees",
    "Basic Aqaid",
    "Islamic Studies",
    "Akhlaq & Adaab",
    "Daily Masail",
    "Namaz & Salah Training",
  ],
},
];
    features: [
      "Complete memorization program",
      "Structured daily revision cycle",
      "Experienced Hifz teachers",
      "Ijazah guidance on completion",
    ],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our Programs"
          title="Courses We Offer"
          description="From the first letters of the Arabic alphabet to complete memorization of the Holy Qur'an — a structured path for every student."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4"
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl ${
                c.featured
                  ? "bg-masjid-600 dark:bg-masjid-800 text-ivory ring-2 ring-gold-400"
                  : "bg-white dark:bg-masjid-900 border border-masjid-100 dark:border-masjid-800"
              }`}
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                  c.featured ? "bg-gold-400/20 text-gold-300" : "bg-masjid-50 dark:bg-masjid-800 text-masjid-500 dark:text-gold-400"
                }`}
              >
                <c.icon size={26} strokeWidth={1.5} />
              </div>
              <h3 className={`mt-1 font-display text-2xl font-bold ${c.featured ? "text-ivory" : "text-masjid-700 dark:text-parchment"}`}>
                {c.name}
              </h3>

              <ul className="mt-6 flex-1 space-y-3">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${c.featured ? "text-gold-300" : "text-masjid-500 dark:text-gold-400"}`}
                    />
                    <span className={c.featured ? "text-parchment/90" : "text-masjid-600 dark:text-parchment/80"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#admissions"
                className={`mt-8 inline-flex items-center justify-center rounded-full py-3 font-semibold transition ${
                  c.featured
                    ? "bg-gold-500 hover:bg-gold-400 text-masjid-900"
                    : "bg-masjid-500 hover:bg-masjid-600 text-white"
                }`}
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
