"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { company, whatsappEnquireUrl, whatsappFormUrl } from "@/data/company";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

type Props = { hideHeading?: boolean };

type FormErrors = {
  name?: string;
  mobile?: string;
  email?: string;
  product?: string;
  message?: string;
};

const PRODUCT_OPTIONS = [
  "MS Pipes",
  "GI Pipes",
  "PVC Pipes",
  "UPVC Pipes",
  "CPVC Pipes",
  "Pipe Fittings",
  "Valves",
  "Flanges",
  "Bathroom Fittings",
  "Other",
];

export default function ContactSection({ hideHeading = false }: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("MS Pipes");
  const [customProduct, setCustomProduct] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && (window.location.hash === "#send-enquiry" || window.location.hash === "#enquiry")) {
      const el = document.getElementById("send-enquiry");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    const trimmedName = name.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Please enter your name (minimum 2 characters).";
    }

    // Mobile validation: 10-digit Indian mobile number
    const trimmedMobile = mobile.trim();
    const mobileRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!trimmedMobile) {
      newErrors.mobile = "Please enter your mobile number.";
    } else if (!mobileRegex.test(trimmedMobile.replace(/[\s-]/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    // Email validation (optional)
    const trimmedEmail = email.trim();
    if (trimmedEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    // Product validation
    const finalProduct = selectedProduct === "Other" ? customProduct.trim() : selectedProduct;
    if (!finalProduct) {
      newErrors.product = "Please select or enter your product requirement.";
    }

    // Message validation
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      newErrors.message = "Please enter your message.";
    } else if (trimmedMessage.length < 5) {
      newErrors.message = "Please enter your message (minimum 5 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const finalProduct = selectedProduct === "Other" ? customProduct.trim() : selectedProduct;

    // Build pre-filled WhatsApp message
    const url = whatsappFormUrl({
      name,
      mobile,
      email,
      product: finalProduct,
      message,
    });

    // Directly open WhatsApp
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-pad bg-white" id="contact">
      <div className="container-site">
        {!hideHeading ? (
          <FadeIn>
            <SectionHeading
              eyebrow="Get In Touch"
              title="Contact Us"
              subtitle="Call, WhatsApp or send an enquiry — we will help you with the right pipe or fitting."
            />
          </FadeIn>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column: Company Contact Details */}
          <FadeIn>
            <div className="rounded-xl border border-border bg-bg p-6 sm:p-8 shadow-sm h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy">{company.name}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  Since {company.established} · {company.city}
                </p>

                <ul className="mt-6 space-y-4">
                  {/* Primary Phone */}
                  <li>
                    <a href={company.secondaryPhoneTel} className="focus-ring flex gap-3 group">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition">
                        <PhoneIcon size={18} />
                      </span>
                      <div>
                        <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-text-muted">
                          Primary Phone (Click to Call)
                        </span>
                        <span className="text-base font-bold text-navy group-hover:text-gold transition">
                          {company.secondaryPhoneDisplay}
                        </span>
                      </div>
                    </a>
                  </li>

                  {/* Secondary Phone */}
                  <li>
                    <a href={company.primaryPhoneTel} className="focus-ring flex gap-3 group">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition">
                        <PhoneIcon size={18} />
                      </span>
                      <div>
                        <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-text-muted">
                          Secondary Phone (Click to Call)
                        </span>
                        <span className="text-base font-bold text-navy group-hover:text-gold transition">
                          {company.primaryPhoneDisplay}
                        </span>
                      </div>
                    </a>
                  </li>

                  {/* Email */}
                  <li>
                    <a href={company.emailMailto} className="focus-ring flex gap-3 group">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition">
                        <MailIcon size={18} />
                      </span>
                      <div>
                        <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-text-muted">
                          Email Us
                        </span>
                        <span className="break-all text-sm font-bold text-navy group-hover:text-gold transition">
                          {company.email}
                        </span>
                      </div>
                    </a>
                  </li>

                  {/* Locations */}
                  <li className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-gold">
                      <MapPinIcon size={18} />
                    </span>
                    <div>
                      <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-text-muted">
                        Our Branches
                      </span>
                      <span className="text-sm font-bold text-navy leading-snug block">
                        Vatva GIDC · Pankor Naka
                      </span>
                      <span className="text-xs font-semibold text-text-muted block mt-0.5">
                        {company.city}
                      </span>
                    </div>
                  </li>

                  {/* Hours */}
                  <li className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-navy text-gold">
                      <ClockIcon size={18} />
                    </span>
                    <div>
                      <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-text-muted">
                        Business Working Hours
                      </span>
                      <span className="block text-xs font-bold text-navy">
                        {company.workingHours.weekdays}
                      </span>
                      <span className="block text-xs font-bold text-navy mt-0.5">
                        {company.workingHours.sunday}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-border/80 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href={company.secondaryPhoneTel}
                  className="focus-ring inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-sm bg-navy px-4 text-sm font-bold text-white transition hover:bg-navy-mid"
                >
                  <PhoneIcon size={16} className="text-gold" />
                  <span>Call Now</span>
                </a>
                <a
                  href={whatsappEnquireUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-sm border border-emerald-600 bg-emerald-50 px-4 text-sm font-bold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <WhatsAppIcon size={16} className="text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Send Enquiry Form */}
          <FadeIn delay={60}>
            <div id="send-enquiry" className="rounded-xl border border-border bg-bg p-6 sm:p-8 shadow-sm scroll-mt-28">
              <h3 className="text-xl font-bold text-navy">Send Enquiry</h3>
              <p className="mt-2 text-sm text-text-muted">
                Share your requirement and send it directly to us on WhatsApp.
              </p>

              {/* Contact Form */}
              <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy">
                    Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    placeholder="Enter your full name"
                    className={`w-full rounded-md border bg-white px-3.5 py-3 text-sm font-semibold text-navy transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 ${
                      errors.name ? "border-rose-500 bg-rose-50/20" : "border-border"
                    }`}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-1 text-xs font-semibold text-rose-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                {/* Mobile & Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="mobile" className="mb-1.5 block text-sm font-bold text-navy">
                      Mobile <span className="text-rose-600">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      required
                      maxLength={15}
                      value={mobile}
                      aria-invalid={!!errors.mobile}
                      aria-describedby={errors.mobile ? "mobile-error" : undefined}
                      onChange={(e) => {
                        setMobile(e.target.value);
                        if (errors.mobile) setErrors((prev) => ({ ...prev, mobile: undefined }));
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full rounded-md border bg-white px-3.5 py-3 text-sm font-semibold text-navy transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 ${
                        errors.mobile ? "border-rose-500 bg-rose-50/20" : "border-border"
                      }`}
                    />
                    {errors.mobile ? (
                      <p id="mobile-error" className="mt-1 text-xs font-semibold text-rose-600">
                        {errors.mobile}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-navy">
                      Email <span className="text-xs font-normal text-text-muted">(Optional)</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      maxLength={150}
                      value={email}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="your.email@example.com"
                      className={`w-full rounded-md border bg-white px-3.5 py-3 text-sm font-semibold text-navy transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 ${
                        errors.email ? "border-rose-500 bg-rose-50/20" : "border-border"
                      }`}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1 text-xs font-semibold text-rose-600">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                {/* Custom Product / Requirement Dropdown UI */}
                <div>
                  <label htmlFor="product" className="mb-1.5 block text-sm font-bold text-navy">
                    Product / Requirement <span className="text-rose-600">*</span>
                  </label>

                  <div className="relative" ref={dropdownRef}>
                    <button
                      id="product"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={dropdownOpen}
                      onClick={() => setDropdownOpen((prev) => !prev)}
                      className={`flex w-full items-center justify-between rounded-md border bg-white px-3.5 py-3 text-sm font-semibold text-navy transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 ${
                        errors.product
                          ? "border-rose-500 bg-rose-50/20"
                          : dropdownOpen
                          ? "border-navy ring-1 ring-navy"
                          : "border-border hover:border-navy/60"
                      }`}
                    >
                      <span>{selectedProduct}</span>
                      <span
                        className={`text-xs font-bold transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-gold" : "text-navy/70"
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {dropdownOpen ? (
                      <div
                        role="listbox"
                        className="absolute left-0 right-0 top-full z-50 mt-1 max-h-60 overflow-y-auto rounded-lg border border-border bg-white py-1 shadow-xl"
                      >
                        {PRODUCT_OPTIONS.map((opt) => (
                          <div
                            key={opt}
                            role="option"
                            aria-selected={selectedProduct === opt}
                            onClick={() => {
                              setSelectedProduct(opt);
                              setDropdownOpen(false);
                              if (errors.product) setErrors((prev) => ({ ...prev, product: undefined }));
                            }}
                            className={`flex items-center justify-between px-4 py-2.5 text-sm font-semibold cursor-pointer transition ${
                              selectedProduct === opt
                                ? "bg-navy text-white font-bold"
                                : "text-navy hover:bg-bg hover:text-navy"
                            }`}
                          >
                            <span>{opt}</span>
                            {selectedProduct === opt ? <span className="text-gold font-bold">✓</span> : null}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  {selectedProduct === "Other" ? (
                    <input
                      type="text"
                      maxLength={200}
                      value={customProduct}
                      onChange={(e) => {
                        setCustomProduct(e.target.value);
                        if (errors.product) setErrors((prev) => ({ ...prev, product: undefined }));
                      }}
                      placeholder="e.g. PVC Elbow, MS Pipes, GI Fittings"
                      className="mt-2.5 w-full rounded-md border border-border bg-white px-3.5 py-3 text-sm font-semibold text-navy transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
                    />
                  ) : null}

                  {errors.product ? (
                    <p id="product-error" className="mt-1 text-xs font-semibold text-rose-600">
                      {errors.product}
                    </p>
                  ) : null}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy">
                    Message <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    maxLength={2000}
                    value={message}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                    }}
                    placeholder="Describe your piping, valve, or fitting requirement..."
                    className={`w-full rounded-md border bg-white px-3.5 py-3 text-sm font-semibold text-navy transition focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 ${
                      errors.message ? "border-rose-500 bg-rose-50/20" : "border-border"
                    }`}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-1 text-xs font-semibold text-rose-600">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                {/* Submit Button: Send Enquiry on WhatsApp */}
                <button
                  type="submit"
                  className="focus-ring inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-sm bg-emerald-600 px-6 text-sm font-bold text-white transition hover:bg-emerald-700 shadow-sm"
                >
                  <WhatsAppIcon size={18} />
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
