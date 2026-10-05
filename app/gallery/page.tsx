import { SectionHeading } from "@/components/SectionHeading";
import { Gallery } from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Moments"
        title="A little glimpse of our happy space."
        description="Warm corners, generous coffee, buttery pastries and the kind of ambience that makes people linger."
        align="center"
      />

      <div className="mt-10">
        <Gallery />
      </div>
    </main>
  );
}
