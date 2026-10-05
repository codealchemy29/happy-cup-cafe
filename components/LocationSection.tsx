import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";

export function LocationSection() {
  return (
    <section className="rounded-[32px] border border-[#E8DCCA] bg-[#FFFDFB] p-6 shadow-[0_20px_40px_rgba(90,56,37,0.05)] sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8765]">
            Visit us
          </p>
          <h3 className="mt-4 font-serif text-4xl text-[#2C211B]">
            The Happyy Cup Cafe
          </h3>

          <div className="mt-7 space-y-5 text-[#5A3825]">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[#7A8765]" />
              <p className="leading-7">
                Shop No. 5, A Parampara, Cosmos Heritage,
                <br />
                near Gaurav Sweets,
                <br />
                Manpada, Thane West,
                <br />
                Maharashtra 400610
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#7A8765]" />
              <a href="tel:+918070789797" className="font-medium">
                +91 80707 89797
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-[#7A8765]" />
              <p>12:30 PM – 11:00 PM</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://maps.google.com/?q=The+Happyy+Cup+Cafe+Thane"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2C211B] px-5 py-3 text-sm font-medium text-[#FFF8F0] transition hover:bg-[#5A3825]"
            >
              Get Directions
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+918070789797"
              className="inline-flex items-center justify-center rounded-full border border-[#E8DCCA] bg-white px-5 py-3 text-sm font-medium text-[#2C211B] transition hover:border-[#D9C7AD] hover:bg-[#F3E5D0]"
            >
              Call Us
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-[#E8DCCA] bg-[#F1E7DB] p-3">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80"
            alt="Cafe exterior and neighborhood"
            className="h-full min-h-[320px] w-full rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
