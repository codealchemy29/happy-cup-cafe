"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { openWhatsApp, generateWhatsAppMessage } from "@/lib/whatsapp";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  guests: "2",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof FormState,
    value: string,
  ) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email.";
    if (!formData.date) nextErrors.date = "Please select a preferred date.";
    if (!formData.time) nextErrors.time = "Please select a preferred time.";
    if (!formData.guests.trim()) nextErrors.guests = "Please tell us the guest count.";
    if (!formData.message.trim()) nextErrors.message = "Please leave a short message.";

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  };

  const sendByWhatsApp = () => {
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    const message = generateWhatsAppMessage({
      name: formData.name,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      message: formData.message,
    });

    openWhatsApp(message);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[28px] border border-[#E8DCCA] bg-[#FFFDFB] p-6 shadow-[0_20px_40px_rgba(90,56,37,0.05)] sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#2C211B]">Name</label>
          <input
            value={formData.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
            placeholder="Your name"
          />
          {errors.name ? <p className="mt-2 text-sm text-[#A1584F]">{errors.name}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#2C211B]">Phone</label>
          <input
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
            placeholder="Your phone number"
          />
          {errors.phone ? <p className="mt-2 text-sm text-[#A1584F]">{errors.phone}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#2C211B]">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
            placeholder="you@example.com"
          />
          {errors.email ? <p className="mt-2 text-sm text-[#A1584F]">{errors.email}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#2C211B]">Number of Guests</label>
          <input
            type="number"
            min="1"
            value={formData.guests}
            onChange={(event) => handleChange("guests", event.target.value)}
            className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
            placeholder="2"
          />
          {errors.guests ? <p className="mt-2 text-sm text-[#A1584F]">{errors.guests}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#2C211B]">Preferred Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(event) => handleChange("date", event.target.value)}
            className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
          />
          {errors.date ? <p className="mt-2 text-sm text-[#A1584F]">{errors.date}</p> : null}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#2C211B]">Preferred Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(event) => handleChange("time", event.target.value)}
            className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
          />
          {errors.time ? <p className="mt-2 text-sm text-[#A1584F]">{errors.time}</p> : null}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#2C211B]">Message</label>
        <textarea
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          rows={5}
          className="w-full rounded-2xl border border-[#E8DCCA] bg-[#FFF8F0] px-4 py-3 text-[#2C211B] outline-none transition focus:border-[#7A8765] focus:ring-2 focus:ring-[#7A8765]/20"
          placeholder="Tell us what you are planning..."
        />
        {errors.message ? <p className="mt-2 text-sm text-[#A1584F]">{errors.message}</p> : null}
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-[#CFE6D0] bg-[#ECF7EE] px-4 py-3 text-sm text-[#295B35]">
          Thanks! Your enquiry has been prepared. We&apos;ll get back to you soon.
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2C211B] px-6 py-3 text-base font-medium text-[#FFF8F0] transition hover:bg-[#5A3825]"
        >
          <Send className="h-4 w-4" />
          Send Enquiry
        </button>

        <button
          type="button"
          onClick={sendByWhatsApp}
          className="inline-flex items-center justify-center rounded-full border border-[#E8DCCA] bg-white px-6 py-3 text-base font-medium text-[#2C211B] transition hover:border-[#D9C7AD] hover:bg-[#F3E5D0]"
        >
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
