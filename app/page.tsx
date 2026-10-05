import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LocationSection } from "@/components/LocationSection";
import { MenuCard } from "@/components/MenuCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { menuItems } from "@/data/menu";

const featureItems = [
  {
    iconName: "coffee" as const,
    title: "Cozy Atmosphere",
    description: "A calm little space to slow down, catch up and stay awhile.",
  },
  {
    iconName: "sparkles" as const,
    title: "Freshly Baked",
    description: "Fresh croissants, desserts and comforting café favourites.",
  },
  {
    iconName: "leaf" as const,
    title: "Pure Vegetarian",
    description: "A completely vegetarian café menu with thoughtful flavours.",
  },
  {
    iconName: "bookOpen" as const,
    title: "Good Vibes",
    description: "Books, games, conversations and coffee that feel like home.",
  },
];

const experienceCards = [
  {
    title: "Coffee",
    description: "Slow moments deserve good coffee.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Croissants",
    description: "Flaky, buttery and freshly baked.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Comfort Food",
    description: "Pasta, pizza, paninis and more.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cozy Corners",
    description: "Books, games and conversations.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  const featuredItems = menuItems.slice(0, 6);

  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Why Happyy Cup?"
          title="Little comforts, beautifully served."
          description="The kind of café that makes the ordinary feel special — one beautiful cup at a time."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => (
            <FeatureCard
              key={item.title}
              iconName={item.iconName}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#F7F0E8] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Signature menu"
              title="Made for your happy moments."
            />
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#5A3825] transition hover:text-[#2C211B]"
            >
              View Full Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Experience"
          title="A café that feels like a pause."
          description="Delightful details, warm flavours and spaces worth staying in."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {experienceCards.map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[30px] border border-[#E8DCCA] bg-[#FFFDFB] shadow-[0_20px_40px_rgba(90,56,37,0.05)]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C211B]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-[#FFF8F0]">
                <h3 className="font-serif text-3xl">{card.title}</h3>
                <p className="mt-2 text-sm text-[#F7E8D6]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F5EEE5] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reviews"
            title="A few happy notes."
            description="These are placeholder testimonials for the frontend concept only."
            align="center"
          />
          <div className="mt-10">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <LocationSection />
      </section>
    </main>
  );
}
