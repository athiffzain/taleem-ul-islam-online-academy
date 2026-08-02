# Taleem Ul Islam Online Academy

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion website for the online
branch of Madresa-e-Taleem Ul Islam, Bengaluru.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Things to replace before launch

1. **Madrasa logo** — the hero/navbar currently use a Lucide icon inside a
   circle as a placeholder mark. Drop your real logo into `/public/logo.png`
   and swap it into `components/Navbar.tsx` and `components/Hero.tsx`.
2. **Founder photograph** — `components/Founder.tsx` has a placeholder circle;
   replace with a real `<Image>` of Maulana Mohammed Nadeem Ahmed Madni Qasmi.
3. **Teacher names** — `components/Teachers.tsx` currently lists 7 generic
   placeholder entries ("Faculty Member 1–7") since real names/qualifications
   weren't provided. Update the `teachers` array with real details.
4. **Admission & Contact forms** — both forms currently just show a success
   state on submit (no backend wired up). Connect `handleSubmit` in
   `components/AdmissionForm.tsx` and `components/Contact.tsx` to an API route,
   email service (e.g. Resend), or Google Sheet.
5. **Live class links** — `components/OnlineClasses.tsx` has placeholder
   Zoom/Meet timings; update with your actual recurring meeting links and
   schedule.
6. **Domain** — update `metadataBase` in `app/layout.tsx` and `public/robots.txt`
   once you have the live domain.

## Structure

```
app/
  layout.tsx       Root layout, fonts, SEO metadata
  page.tsx          Assembles all homepage sections
  globals.css       Theme tokens, glassmorphism, watermark, a11y
components/
  Navbar, Hero, About, Founder, Creator, Teachers, Courses,
  OnlineClasses, AdmissionForm, Contact, Footer,
  WhatsAppButton, ScrollToTop, ThemeProvider, Counter,
  KhatamStar (signature 8-point geometric star), SectionHeading
```

## Design system

- Colors: masjid green (`#0B4D3C`), gold (`#C9A24B`), ivory (`#FAF7F0`)
- Display font: Amiri (serif, Arabic + Latin) — body font: Inter
- Signature motif: the khatam (8-point star) used as watermark, dividers,
  and the loading/logo mark — reused instead of generic gradients
- Dark mode via `class` strategy, toggle persisted to `localStorage`
