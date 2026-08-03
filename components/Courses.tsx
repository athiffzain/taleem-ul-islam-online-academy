"use client";

import { motion } from "framer-motion";
import { Check, BookMarked, ScrollText, Award, Library } from "lucide-react";
import SectionHeading from "./SectionHeading";

const courses = [
  {
    icon: BookMarked,
    name: "Noorani Qaida",
    features: [
      "Arabic Letters",
      "Correct Qur'an Reading",
      "Basic Tajweed",
      "Personal Guidance",
    ],
  },
  {
    icon: ScrollText,
    name: "Nazira Qur'an",
    features: [
      "Qur'an Reading with Tajweed",
      "Daily Reading Practice",
      "Separate Classes for Boys & Girls",
      "Regular Progress Check",
    ],
    featured: true,
  },
  {
    icon: Award,
    name: "Hifz-ul-Qur'an",
    features: [
      "Complete Qur'an Memorization",
      "Daily Revision",
      "Experienced Teachers",
      "Completion Guidance",
    ],
  },
  {
    icon: Library,
    name: "Other Courses",
    features: [
      "Daily Duas",
      "Selected Ahadees",
      "Basic Aqaid",
      "Regular Islamic Knowledge",
      "Akhlaq & Adaab",
      "Basic Masail",
      "Namaz & Salah Training",
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
          description="Structured Islamic education for students of all ages."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-masjid-100 dark:border-masjid-800 bg-white dark:bg-masjid-900 p-8 shadow-lg"
            >
              <course.icon
                className="mb-5 text-masjid-500 dark:text-gold-400"
                size={30}
              />

              <h3 className="mb-5 font-display text-2xl font-bold text-masjid-700 dark:text-parchment">
                {course.name}
              </h3>

              <ul className="space-y-3">
                {course.features.map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <Check
                      size={16}
                      className="mt-1 text-masjid-500 dark:text-gold-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#admissions"
                className="mt-8 inline-flex w-full justify-center rounded-full bg-masjid-500 py-3 font-semibold text-white hover:bg-masjid-600"
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