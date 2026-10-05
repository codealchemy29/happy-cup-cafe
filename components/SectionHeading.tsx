type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#7A8765]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-none text-[#2C211B] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#5A3825]/75 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
