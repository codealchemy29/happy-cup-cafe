import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";

const storyPoints = [
  {
    iconName: "coffee" as const,
    title: "Coffee & conversation",
    description: "Warm brews, slow sips and endless conversations that make you want to stay awhile.",
  },
  {
    iconName: "bookOpen" as const,
    title: "Quiet corners",
    description: "Soft corners for reading, working or simply sipping while the world slows down.",
  },
  {
    iconName: "sparkles" as const,
    title: "Good company",
    description: "Whether it is a date, a family catch-up or a friends’ meetup, the vibe is always easy and welcoming.",
  },
  {
    iconName: "leaf" as const,
    title: "Sweet little rituals",
    description: "Fresh coffee, flaky croissants and comforting favourites that bring a smile to every visit.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="More than coffee. It's a little escape."
            description="From catching up with friends to quiet work mornings, The Happyy Cup is designed for the moments that feel slower, sweeter and more human."
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-[#5A3825]/80">
            <p>
              We wanted a space that feels like a warm pause in the middle of a busy day — cozy enough for late conversations, beautiful enough for a date, and comfortable enough to stay for hours.
            </p>
            <p>
              That is why we serve vegetarian comfort food, freshly baked croissants, rich coffee and a little atmosphere made for lingering. Whether you are here to read, work, recharge or simply enjoy the moment, we keep it gentle, thoughtful and full of happy energy.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div className="rounded-[24px] border border-[#E8DCCA] bg-white/70 p-5">
              <p className="font-serif text-4xl text-[#2C211B]">4.6★</p>
              <p className="mt-2 text-sm text-[#5A3825]">Google Rating</p>
            </div>
            <div className="rounded-[24px] border border-[#E8DCCA] bg-white/70 p-5">
              <p className="font-serif text-4xl text-[#2C211B]">100%</p>
              <p className="mt-2 text-sm text-[#5A3825]">Vegetarian</p>
            </div>
            <div className="rounded-[24px] border border-[#E8DCCA] bg-white/70 p-5">
              <p className="font-serif text-3xl text-[#2C211B]">12:30 PM – 11 PM</p>
              <p className="mt-2 text-sm text-[#5A3825]">Daily</p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-[#E8DCCA] bg-[#F7EFE8] p-3 shadow-[0_20px_40px_rgba(90,56,37,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80"
            alt="Warm café table with coffee and pastries"
            className="h-full min-h-[520px] w-full rounded-[26px] object-cover"
          />
        </div>
      </section>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Why us"
          title="A space that keeps people coming back."
          description="We bring together comfort food, soft ambience and thoughtful details that make every visit feel like a small reset."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {storyPoints.map((point) => (
            <FeatureCard
              key={point.title}
              iconName={point.iconName}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
