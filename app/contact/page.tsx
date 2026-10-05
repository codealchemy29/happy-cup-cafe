import { ContactForm } from "@/components/ContactForm";
import { LocationSection } from "@/components/LocationSection";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Plan your next happy visit."
        description="Whether you are dropping by for coffee, a quiet catch-up or a family meal, we would love to welcome you."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <LocationSection />
      </div>
    </main>
  );
}
