import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Creator from "@/components/Creator";
import Courses from "@/components/Courses";
import OnlineClasses from "@/components/OnlineClasses";
import AdmissionForm from "@/components/AdmissionForm";
import Contact from "@/components/Contact";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Taleem Ul Islam Online Academy",
    alternateName: "Madresa-e-Taleem Ul Islam",
    description:
      "Online Qur'an academy teaching Noorani Qaida, Nazira Qur'an, and Hifz-ul-Qur'an with Tajweed.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Cross, 8th Main Road, Pillanna Garden, Stage 3, Kadugondanahalli",,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560045",
      addressCountry: "IN",
    },
    telephone: ["+91-7760414172", "+91-7730028313"],
    founder: {
      "@type": "Person",
      name: "Hazrat Maulana Mohammed Nadeem Ahmed Saheb Madni Qasmi",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Founder />
      <Creator />
      <Courses />
      <OnlineClasses />
      <AdmissionForm />
      <Contact />
    </>
  );
}
