import { BookOpenText } from "lucide-react";
import KhatamStar from "./KhatamStar";

const courseLinks = ["Noorani Qaida", "Nazira Qur'an", "Hifz-ul-Qur'an"];

export default function Footer() {
  return (
    <footer className="relative bg-masjid-800 dark:bg-black text-parchment/80 overflow-hidden">
      <KhatamStar className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 text-gold-300/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-masjid-600 text-gold-300 ring-1 ring-gold-400/40">
              <BookOpenText size={18} />
            </span>
            <span className="font-display font-bold text-lg text-parchment">
              Taleem Ul Islam
            </span>
          </div>
          <p className="text-sm leading-relaxed text-parchment/60">
            The official online branch of Madresa-e-Taleem Ul Islam, Bengaluru —
            teaching Qur&apos;an with Tajweed since 9+ years.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-parchment mb-4">Courses</h4>
          <ul className="space-y-2.5 text-sm">
            {courseLinks.map((c) => (
              <li key={c}>
                <a href="#courses" className="text-parchment/60 hover:text-gold-400 transition">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-parchment mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-parchment/60">
            <li>Pillanna Garden, Stage 3, Kadugondanahalli</li>
            <li>Bengaluru, Karnataka – 560045, India</li>
            <li>
              <a href="tel:+917760414172" className="hover:text-gold-400 transition">+91 77604 14172</a>
            </li>
            <li>
              <a href="tel:+917730028313" className="hover:text-gold-400 transition">+91 77300 28313</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-parchment mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#admissions" className="text-parchment/60 hover:text-gold-400 transition">Admissions</a></li>
            <li><a href="#privacy" className="text-parchment/60 hover:text-gold-400 transition">Privacy Policy</a></li>
            <li><a href="#terms" className="text-parchment/60 hover:text-gold-400 transition">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-parchment/10 py-6 text-center text-xs text-parchment/50">
        &copy; {new Date().getFullYear()} Taleem Ul Islam Online Academy. All rights reserved.
      </div>
    </footer>
  );
}
