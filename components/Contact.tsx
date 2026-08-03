"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const inputClass =
  "w-full rounded-lg border border-masjid-200 dark:border-masjid-700 bg-white dark:bg-masjid-900 px-4 py-3 text-sm text-masjid-800 dark:text-parchment placeholder:text-masjid-400 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-parchment/40 dark:bg-masjid-900/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          description="For admissions, class timings, or any queries — reach out and we'll respond promptly, In Sha Allah."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-2xl bg-white dark:bg-masjid-900 border border-masjid-100 dark:border-masjid-800 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-masjid-50 dark:bg-masjid-800 text-masjid-500 dark:text-gold-400 mb-4">
                <MapPin size={20} />
              </div>
              <h3 className="font-display font-bold text-masjid-700 dark:text-parchment mb-1">
                Madresa-e-Taleem Ul Islam
              </h3>
              <p className="text-sm text-masjid-600 dark:text-parchment/75 leading-relaxed">
  3rd Cross, 8th Main Road
  <br />
  Pillanna Garden, Stage 3
  <br />
  Kadugondanahalli
  <br />
  Bengaluru, Karnataka – 560045
  <br />
  India
</p>
            </div>

            <div className="rounded-2xl bg-white dark:bg-masjid-900 border border-masjid-100 dark:border-masjid-800 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-masjid-50 dark:bg-masjid-800 text-masjid-500 dark:text-gold-400 mb-4">
                <Phone size={20} />
              </div>
              <h3 className="font-display font-bold text-masjid-700 dark:text-parchment mb-2">Phone</h3>
              <a href="tel:+917760414172" className="block text-sm text-masjid-600 dark:text-parchment/75 hover:text-gold-600 dark:hover:text-gold-400">
                +91 77604 14172
              </a>
              <a href="tel:+917730028313" className="block text-sm text-masjid-600 dark:text-parchment/75 hover:text-gold-600 dark:hover:text-gold-400">
                +91 77300 28313
              </a>
            </div>

            <div className="space-y-3">
  <a
    href="https://wa.me/917760414172"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold py-3.5 shadow-md hover:brightness-95 transition"
  >
    <MessageCircle size={18} /> WhatsApp (Mufti Athif Zain)
  </a>

  <a
    href="https://wa.me/917730028313"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold py-3.5 shadow-md hover:brightness-95 transition"
  >
    <MessageCircle size={18} /> WhatsApp (Academy)
  </a>
</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 rounded-2xl glass shadow-xl p-6 md:p-8"
          >
            {sent ? (
              <div className="flex flex-col items-center py-14 text-center">
                <CheckCircle2 className="h-14 w-14 text-masjid-500 dark:text-gold-400 mb-4" />
                <h3 className="font-display text-xl font-bold text-masjid-700 dark:text-parchment">
                  Message Sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-masjid-500 dark:text-parchment/70">
                  JazakAllahu Khairan for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="cName" className="mb-1.5 block text-sm font-medium text-masjid-700 dark:text-parchment/90">Name</label>
                  <input id="cName" required className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="cPhone" className="mb-1.5 block text-sm font-medium text-masjid-700 dark:text-parchment/90">Phone / WhatsApp</label>
                  <input id="cPhone" required className={inputClass} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cEmail" className="mb-1.5 block text-sm font-medium text-masjid-700 dark:text-parchment/90">Email (optional)</label>
                  <input id="cEmail" type="email" className={inputClass} placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="cMessage" className="mb-1.5 block text-sm font-medium text-masjid-700 dark:text-parchment/90">Message</label>
                  <textarea id="cMessage" required rows={4} className={inputClass} placeholder="How can we help you?" />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-masjid-500 hover:bg-masjid-600 text-white font-semibold py-3.5 shadow-md shadow-masjid-500/25 transition"
                >
                  <Send size={17} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
