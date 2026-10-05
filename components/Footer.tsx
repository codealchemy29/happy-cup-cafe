import Link from "next/link";
import { ArrowUpRight, Camera, Clock3, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#2C211B] text-[#F9F1EA]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                 <img
            src="/HappyyCupCaféLogo.png"
            alt="The Happyy Cup logo"
            className="h-14 w-14 rounded-full object-cover sm:h-17 sm:w-17"
          />
                <div>
                  <p className="font-serif text-2xl text-[#FFF8F0]">The Happyy Cup</p>
                  <p className="text-sm text-[#F7E8D6]">Cafe & Bakery</p>
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#F7E8D6]">
              Coffee. Croissants. Happy moments. A cozy vegetarian café experience in the heart of Thane.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E7D8C7]">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#F7E8D6]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E7D8C7]">Visit Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-[#F7E8D6]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B8A5]" />
                <span>Manpada, Thane West, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#E8B8A5]" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 shrink-0 text-[#E8B8A5]" />
                <span>Mon-Sun • 9:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E7D8C7]">Follow Along</h3>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8DCCA]/30 bg-white/5 text-[#F9F1EA] transition hover:border-[#E8DCCA] hover:bg-white/10"
                aria-label="Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#E8DCCA]/30 bg-white/5 px-4 py-2 text-sm font-medium text-[#F9F1EA] transition hover:border-[#E8DCCA] hover:bg-white/10"
              >
                Book a table
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E8DCCA]/20 pt-6 text-sm text-[#EADCC9]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 The Happyy Cup Cafe. All rights reserved.</p>
            <p>Made with love for slow mornings and good company.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
