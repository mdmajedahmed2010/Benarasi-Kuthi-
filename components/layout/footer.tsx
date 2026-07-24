"use client";

/**
 * Benarasi Kuthi — Footer (Premium v3.0)
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * Heritage luxury saree brand since generations
 */

import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

const shopLinks = [
  { href: "/collections/indian-south-katan", label: "Indian South Katan" },
  { href: "/collections/kani-jardoozi", label: "Kani Jardoozi" },
  { href: "/collections/zari-silk-jardoozi", label: "Zari Silk Jardoozi" },
  { href: "/collections/samu-silk", label: "Samu Silk" },
  { href: "/collections/benarasi-katan", label: "Benarasi Katan" },
  { href: "/collections/bridal-collection", label: "Bridal Collection" },
];

const helpLinks = [
  { href: "/track-order", label: "Track Order" },
  { href: "/contact", label: "Contact Us" },
  { href: "/refund-policy", label: "Refund & Exchange Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/about", label: "About Us" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ settings = {} }: { settings?: Record<string, any> }) {
  return (
    <footer className="bg-[#faf7f2] border-t border-[#8b1a2a]/15">
      {/* Heritage Newsletter Section — deep maroon */}
      <div className="bg-[#3d0010] text-white py-16 md:py-20 border-y border-[#d4af37]/25 relative overflow-hidden">
        {/* Gold radial glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#d4af37]/8 blur-3xl pointer-events-none rounded-full" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3 text-center md:text-left max-w-lg">
              <span className="inline-block px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#f5e6c8] text-[9.5px] uppercase tracking-[0.28em] font-bold">
                বেনারসী কুঠি সার্কেল
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white font-heading">
                Join the Benarasi Kuthi Family
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed font-sans">
                Be the first to know about our new collections, special bridal offers, and exclusive
                discounts — delivered straight to your inbox.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("ধন্যবাদ! আপনাকে Benarasi Kuthi পরিবারে স্বাগতম!");
              }}
              className="w-full md:w-auto flex flex-col sm:flex-row gap-3 items-stretch max-w-md shrink-0"
            >
              <input
                type="email"
                required
                placeholder="আপনার ইমেইল লিখুন"
                className="h-12 px-5 bg-neutral-900/90 border border-neutral-700/80 text-white text-xs placeholder:text-neutral-500 rounded-sm focus:outline-none focus:border-[#d4af37] w-full sm:w-72 transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-7 bg-[#d4af37] hover:bg-[#c9a42e] text-[#3d0010] text-xs font-bold uppercase tracking-[0.16em] rounded-sm transition-all shadow-lg active:scale-[0.98] cursor-pointer"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/benarashi/538246816_1070103038622732_8799063959850478389_n.jpg"
                alt="Benarasi Kuthi"
                width={48}
                height={48}
                className="h-12 w-12 object-cover rounded-full ring-2 ring-[#d4af37]/40"
              />
              <div>
                <p className="text-[13px] font-extrabold text-[#5c061c] uppercase tracking-wide">
                  Benarasi Kuthi
                </p>
                <p className="text-[10px] text-[#5c061c]/50 font-medium">বেনারসী কুঠি</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              One of the oldest and biggest manufacturer and retailer of Benarasi Sarees in
              Bangladesh. Trusted by 371K+ customers. 92% recommend rate.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={settings.social_facebook || BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5c061c]/40 hover:text-[#5c061c] transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5c061c] mb-4">
              কালেকশন
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#5c061c] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5c061c] mb-4">
              সাহায্য
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-[#5c061c] transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#5c061c] mb-4">
              যোগাযোগ
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground font-medium">
              <li>
                <a
                  href={`tel:${settings.store_phone || BUSINESS.PHONE}`}
                  className="hover:text-[#5c061c] transition-colors"
                >
                  {settings.store_phone || BUSINESS.PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.store_email || BUSINESS.EMAIL}`}
                  className="hover:text-[#5c061c] transition-colors"
                >
                  {settings.store_email || BUSINESS.EMAIL}
                </a>
              </li>
              <li className="leading-relaxed pt-1 text-[12px]">
                {settings.store_address || BUSINESS.ADDRESS}
              </li>
              <li className="pt-1">
                <span className="inline-block px-2 py-0.5 bg-[#5c061c]/10 text-[#5c061c] text-[10px] font-bold rounded uppercase tracking-wider">
                  Inbox করুন Order-এর জন্য
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#8b1a2a]/15">
        <div className="container mx-auto px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-medium">
          <p>© {new Date().getFullYear()} Benarasi Kuthi (বেনারসী কুঠি). All rights reserved.</p>
          <p>
            Cash on Delivery&nbsp;|&nbsp;Dhaka: ৳{settings.shipping_dhaka || 80}&nbsp;|&nbsp;
            Outside: ৳{settings.shipping_outside || 150}&nbsp;|&nbsp;Secured Checkout
          </p>
        </div>
      </div>
    </footer>
  );
}
