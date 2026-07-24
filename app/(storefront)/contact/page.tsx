/**
 * Benarasi Kuthi — Contact Us Page (v3.0)
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * Full Benarasi Kuthi branding — maroon & gold theme
 */

import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us — Benarasi Kuthi | বেনারসী কুঠি",
  description:
    "যোগাযোগ করুন বেনারসী কুঠির সাথে। House-17, Section-10, Block-A, Lane-7, Mirpur Benaroshi Polli, Dhaka-1221. ফোন: +880 1971-380319. Order-এর জন্য Facebook Inbox করুন।",
};

const contactDetails = [
  {
    icon: Phone,
    label: "ফোন",
    value: BUSINESS.PHONE,
    href: `tel:${BUSINESS.PHONE}`,
    note: "Sunday–Thursday, 10am–8pm",
  },
  {
    icon: MessageCircle,
    label: "Facebook Inbox",
    value: "Benarasi Kuthi",
    href: BUSINESS.FACEBOOK,
    note: "Order-এর জন্য Inbox করুন — সবচেয়ে দ্রুত সাড়া পাবেন",
  },
  {
    icon: Mail,
    label: "ইমেইল",
    value: BUSINESS.EMAIL,
    href: `mailto:${BUSINESS.EMAIL}`,
    note: "আমরা ২৪ ঘন্টার মধ্যে reply করি",
  },
  {
    icon: MapPin,
    label: "ঠিকানা",
    value: "House-17, Section-10, Block-A, Lane-7",
    href: "https://maps.google.com/?q=Mirpur+Benaroshi+Polli+Dhaka",
    note: "Mirpur Benaroshi Polli, Dhaka-1221, Bangladesh",
  },
  {
    icon: Clock,
    label: "শোরুম সময়",
    value: "রবি–বৃহস্পতি: সকাল ১০টা – রাত ৮টা",
    href: null,
    note: "শুক্রবার বিকেল ৩টা – রাত ৮টা | শনিবার বন্ধ",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Hero Section */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden bg-[#3d0010]">
        <Image
          src="/images/benarashi/753647362_1333816852251348_6497584975328229327_n.jpg"
          alt="Benarasi Kuthi — আমাদের সাথে যোগাযোগ করুন"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d0010]/50 via-[#3d0010]/30 to-[#3d0010]/80" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#f5e6c8] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full mb-5">
            আমাদের সাথে যোগাযোগ
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 font-heading">
            Contact Us
          </h1>
          <p className="text-[#f5e6c8] text-base md:text-lg font-medium">
            আমরা আপনার কথা শুনতে চাই
          </p>
        </div>
      </section>

      {/* Maroon Tagline Strip */}
      <section className="bg-[#5c061c] py-4 px-6 text-center">
        <p className="text-[#f5e6c8] text-sm font-semibold tracking-wide">
          ✦ Order-এর জন্য আমাদের Facebook Page-এ Inbox করুন — সবচেয়ে দ্রুত সাড়া পাবেন ✦
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1a2a] font-bold mb-3">
                  যোগাযোগের তথ্য
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a0008] leading-tight mb-4">
                  আমাদের সাথে সরাসরি
                  <br />
                  <span className="italic font-normal text-[#5c061c]">কথা বলুন</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Benarasi Kuthi — Bangladesh-এর অন্যতম প্রাচীন বেনারসি শাড়ির দোকান।
                  Order, saree সম্পর্কে যেকোনো প্রশ্ন, বা কাস্টম order-এর জন্য আমাদের সাথে যোগাযোগ করুন।
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-start gap-4 p-5 rounded-sm bg-white border border-[#e8e0d0] hover:border-[#d4af37]/40 hover:shadow-md transition-all group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#f7eded] flex items-center justify-center group-hover:bg-[#5c061c] transition-colors">
                      <detail.icon className="h-5 w-5 text-[#5c061c] group-hover:text-[#f5e6c8] transition-colors" />
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8b1a2a] font-bold">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith("http") ? "_blank" : undefined}
                          rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-semibold text-[#1a0008] hover:text-[#5c061c] transition-colors block"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-[#1a0008]">{detail.value}</p>
                      )}
                      <p className="text-xs text-muted-foreground">{detail.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Facebook CTA */}
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 h-14 w-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-bold rounded-sm transition-all shadow-sm active:scale-[0.99] tracking-wide"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook Inbox-এ Order করুন
              </a>
            </div>

            {/* Right: Message Form */}
            <div className="bg-white border border-[#e8e0d0] rounded-sm p-8 shadow-sm">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#1a0008] mb-1">মেসেজ পাঠান</h3>
                <p className="text-xs text-muted-foreground">
                  আমরা ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("ধন্যবাদ! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।\nFor faster response, please inbox us on Facebook!");
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#5c061c] mb-2">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full h-11 px-4 border border-[#e8e0d0] rounded-sm text-sm text-[#1a0008] placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#5c061c] focus:ring-1 focus:ring-[#5c061c]/20 transition-colors bg-[#fdfaf5]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#5c061c] mb-2">
                      ফোন নম্বর *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1XXX-XXXXXX"
                      className="w-full h-11 px-4 border border-[#e8e0d0] rounded-sm text-sm text-[#1a0008] placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#5c061c] focus:ring-1 focus:ring-[#5c061c]/20 transition-colors bg-[#fdfaf5]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#5c061c] mb-2">
                    ইমেইল
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full h-11 px-4 border border-[#e8e0d0] rounded-sm text-sm text-[#1a0008] placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#5c061c] focus:ring-1 focus:ring-[#5c061c]/20 transition-colors bg-[#fdfaf5]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#5c061c] mb-2">
                    বিষয় *
                  </label>
                  <select
                    required
                    className="w-full h-11 px-4 border border-[#e8e0d0] rounded-sm text-sm text-[#1a0008] focus:outline-none focus:border-[#5c061c] focus:ring-1 focus:ring-[#5c061c]/20 transition-colors bg-[#fdfaf5]"
                  >
                    <option value="">বিষয় নির্বাচন করুন</option>
                    <option value="order">Order সংক্রান্ত</option>
                    <option value="product">Product সম্পর্কে জানতে</option>
                    <option value="bridal">Bridal Collection</option>
                    <option value="delivery">Delivery সংক্রান্ত</option>
                    <option value="custom">Custom Order</option>
                    <option value="other">অন্যান্য</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#5c061c] mb-2">
                    আপনার বার্তা *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="আপনার প্রশ্ন বা বার্তা লিখুন..."
                    className="w-full px-4 py-3 border border-[#e8e0d0] rounded-sm text-sm text-[#1a0008] placeholder:text-muted-foreground/50 focus:outline-none focus:border-[#5c061c] focus:ring-1 focus:ring-[#5c061c]/20 transition-colors resize-none bg-[#fdfaf5]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-13 bg-[#5c061c] hover:bg-[#3d0010] text-[#f5e6c8] text-sm font-bold uppercase tracking-[0.15em] rounded-sm transition-all shadow-sm active:scale-[0.99] py-4 cursor-pointer"
                >
                  মেসেজ পাঠান
                </button>

                <p className="text-[11px] text-center text-muted-foreground">
                  দ্রুত সাড়ার জন্য{" "}
                  <a
                    href={BUSINESS.FACEBOOK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5c061c] font-semibold hover:underline"
                  >
                    Facebook Inbox
                  </a>{" "}
                  করুন।
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="bg-[#f7f0e8] py-12 px-6 border-t border-[#8b1a2a]/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1a2a] font-bold mb-3">
            আমাদের অবস্থান
          </p>
          <h2 className="text-2xl font-bold text-[#1a0008] mb-2">Mirpur Benaroshi Polli</h2>
          <p className="text-sm text-muted-foreground mb-6">
            House-17, Section-10, Block-A, Lane-7, Mirpur Benaroshi Polli, Dhaka-1221, Bangladesh
          </p>
          <a
            href="https://maps.google.com/?q=Mirpur+Benaroshi+Polli+Dhaka+Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-11 px-8 bg-[#5c061c] text-[#f5e6c8] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-[#3d0010] transition-all shadow-sm"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Google Maps-এ দেখুন
          </a>
        </div>
      </section>
    </main>
  );
}
