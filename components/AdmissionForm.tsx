"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-masjid-200 dark:border-masjid-700 bg-white dark:bg-masjid-900 px-4 py-3 text-sm text-masjid-800 dark:text-parchment placeholder:text-masjid-400 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition";

const labelClass = "mb-1.5 block text-sm font-medium text-masjid-700 dark:text-parchment/90";

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to your backend / email service / Google Sheet.
    setSubmitted(true);
  };

  return (
    <section id="admissions" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="Enroll Today"
          title="Online Admission Form"
          description="Fill in the details below and our admission team will contact you to confirm your batch and teacher."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass shadow-xl p-6 md:p-10"
        >
          {submitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-masjid-500 dark:text-gold-400 mb-4" />
              <h3 className="font-display text-xl font-bold text-masjid-700 dark:text-parchment">
                JazakAllahu Khairan!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-masjid-500 dark:text-parchment/70">
                Your admission request has been received. Our team will contact you
                shortly to confirm your batch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="studentName">Student Name</label>
                <input id="studentName" required className={inputClass} placeholder="Full name of student" />
              </div>
              <div>
                <label className={labelClass} htmlFor="parentName">Parent / Guardian Name</label>
                <input id="parentName" required className={inputClass} placeholder="Full name of parent/guardian" />
              </div>
              <div>
                <label className={labelClass} htmlFor="dob">Date of Birth</label>
                <input id="dob" type="date" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="gender">Gender</label>
                <select id="gender" required className={inputClass} defaultValue="">
                  <option value="" disabled>Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="mobile">Mobile Number</label>
                <input id="mobile" type="tel" required className={inputClass} placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className={labelClass} htmlFor="course">Course Selection</label>
                <select id="course" required className={inputClass} defaultValue="">
                  <option value="" disabled>Select a course</option>
                  <option value="qaida">Noorani Qaida</option>
                  <option value="nazira">Nazira Qur&apos;an</option>
                  <option value="hifz">Hifz-ul-Qur&apos;an</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="address">Address</label>
                <textarea id="address" required rows={2} className={inputClass} placeholder="Full residential address" />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="prevEducation">Previous Islamic Education</label>
                <textarea id="prevEducation" rows={2} className={inputClass} placeholder="E.g. completed Qaida, currently on Para 5, etc. (leave blank if none)" />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-masjid-500 hover:bg-masjid-600 text-white font-semibold py-3.5 shadow-md shadow-masjid-500/25 transition"
              >
                <Send size={17} /> Submit Admission Form
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
