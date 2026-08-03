"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-masjid-200 dark:border-masjid-700 bg-white dark:bg-masjid-900 px-4 py-3 text-sm text-masjid-800 dark:text-parchment placeholder:text-masjid-400 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition";

const labelClass =
  "mb-1.5 block text-sm font-medium text-masjid-700 dark:text-parchment/90";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Enroll Today"
          title="Online Admission Form"
          description="Fill in the details below and our admission team will contact you."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass shadow-xl p-6 md:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-masjid-500 mb-4" />
              <h3 className="font-display text-xl font-bold">
                JazakAllahu Khairan!
              </h3>
              <p className="mt-2 text-sm">
                Your admission request has been received.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Student Name</label>
                <input className={inputClass} required />
              </div>

              <div>
                <label className={labelClass}>Parent Name</label>
                <input className={inputClass} required />
              </div>

              <div>
                <label className={labelClass}>Mobile Number</label>
                <input className={inputClass} required />
              </div>

              <div>
                <label className={labelClass}>Course</label>
                <input className={inputClass} required />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 rounded-full bg-masjid-500 text-white py-3 font-semibold"
              >
                <Send size={17} className="inline mr-2" />
                Submit Admission Form
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}