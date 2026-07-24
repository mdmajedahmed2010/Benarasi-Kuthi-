"use client";

/**
 * Benarasi Kuthi — Header (Premium v3.0)
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * Heritage luxury saree store — royal maroon & gold theme
 */

import Link from "next/link";
import Image from "next/image";
import { User, X } from "lucide-react";
import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar";
import { MegaMenu } from "../storefront/mega-menu";

const navLinks = [
  { href: "/collections/indian-south-katan", label: "South Katan" },
  { href: "/collections/kani-jardoozi", label: "Kani Jardoozi" },
  { href: "/collections/zari-silk-jardoozi", label: "Zari Silk" },
  { href: "/collections/samu-silk", label: "Samu Silk" },
  { href: "/collections/bridal-collection", label: "Bridal" },
  { href: "/about", label: "About Us" },
];

const megaMenuData: Record<
  string,
  {
    categories: { label: string; href: string }[];
    styles: { label: string; href: string }[];
    featured: { title: string; subtitle: string; image: string; href: string };
  }
> = {
  "South Katan": {
    categories: [
      { label: "Shop All South Katan", href: "/collections/indian-south-katan" },
      { label: "Indian South Katan", href: "/collections/indian-south-katan" },
      { label: "Champagne Tissue Katan", href: "/collections/indian-south-katan" },
      { label: "Crimson Zari Border Katan", href: "/collections/indian-south-katan" },
    ],
    styles: [
      { label: "Party Wear Katan", href: "/collections/indian-south-katan" },
      { label: "Bridal Katan", href: "/collections/indian-south-katan" },
      { label: "Wedding Reception Katan", href: "/collections/indian-south-katan" },
      { label: "Pure Silk Katan", href: "/collections/indian-south-katan" },
    ],
    featured: {
      title: "Indian South Katan",
      subtitle: "Pure Silk Katan — Starting from ৳4,000",
      image: "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
      href: "/collections/indian-south-katan",
    },
  },
  "Kani Jardoozi": {
    categories: [
      { label: "Shop All Kani Jardoozi", href: "/collections/kani-jardoozi" },
      { label: "Party Wear Kani", href: "/collections/kani-jardoozi" },
      { label: "Bridal Kani Jardoozi", href: "/collections/kani-jardoozi" },
    ],
    styles: [
      { label: "Deep Maroon Kani Silk", href: "/collections/kani-jardoozi" },
      { label: "Ivory Floral Kani", href: "/collections/kani-jardoozi" },
    ],
    featured: {
      title: "New Party Wear Kani Jardoozi",
      subtitle: "Exquisite handwork for weddings & celebrations",
      image: "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
      href: "/collections/kani-jardoozi",
    },
  },
  "Zari Silk": {
    categories: [
      { label: "Shop All Zari Silk Jardoozi", href: "/collections/zari-silk-jardoozi" },
      { label: "Heavy Bridal Zari Silk", href: "/collections/zari-silk-jardoozi" },
      { label: "Golden Zari Party Saree", href: "/collections/zari-silk-jardoozi" },
    ],
    styles: [
      { label: "Royal Copper Zari", href: "/collections/zari-silk-jardoozi" },
      { label: "Pure Gold Zari Work", href: "/collections/zari-silk-jardoozi" },
    ],
    featured: {
      title: "Zari Silk Jardoozi",
      subtitle: "Heavy gold zari embroidery — perfect for biye & bouভাত",
      image: "/images/benarashi/755364208_1333816692251364_8071345076815940643_n.jpg",
      href: "/collections/zari-silk-jardoozi",
    },
  },
  Bridal: {
    categories: [
      { label: "Shop All Bridal Sarees", href: "/collections/bridal-collection" },
      { label: "Bridal Silk Saree", href: "/collections/bridal-collection" },
      { label: "Bridal Jardoozi Collection", href: "/collections/bridal-collection" },
    ],
    styles: [
      { label: "Biye Special Saree", href: "/collections/bridal-collection" },
      { label: "Bouভাত Saree", href: "/collections/bridal-collection" },
    ],
    featured: {
      title: "Grand Bridal Silk Saree",
      subtitle: "Exclusive bridal collection — Biye & Bouভাত",
      image: "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
      href: "/collections/bridal-collection",
    },
  },
};

export function Header({ settings = {} }: { settings?: Record<string, unknown> }) {
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("bk_announcement_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => setShowAnnouncement(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem("bk_announcement_dismissed", "true");
  };

  const freeShippingThreshold = Number(settings.free_shipping_threshold || 0);
  const announcementText =
    freeShippingThreshold > 0
      ? `✨ বেনারসী কুঠি — Oldest & Biggest Benarasi Saree Manufacturer in BD | Free Delivery on orders above ৳${freeShippingThreshold.toLocaleString()}`
      : "✨ বেনারসী কুঠি — Oldest & Biggest Benarasi Saree Manufacturer in BD | Nationwide Cash on Delivery | 92% Customer Recommend";

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 border-b border-[#8b1a2a]/15 shadow-sm transition-all duration-300">
      {/* Heritage Announcement Bar — deep maroon */}
      {showAnnouncement && (
        <div className="bg-[#5c061c] text-[#f5e6c8] border-b border-[#d4af37]/30 text-center text-[9.5px] md:text-[10.5px] font-semibold tracking-[0.14em] md:tracking-[0.18em] uppercase py-2 md:py-2.5 px-6 relative">
          <p className="flex items-center justify-center gap-1.5 md:gap-2 truncate">
            <span className="text-[#d4af37] shrink-0">✦</span>
            <span className="md:hidden truncate">বেনারসী কুঠি • CASH ON DELIVERY</span>
            <span className="hidden md:inline">{announcementText}</span>
            <span className="text-[#d4af37] shrink-0">✦</span>
          </p>
          <button
            onClick={dismissAnnouncement}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f5e6c8]/70 hover:text-[#f5e6c8] transition-colors p-1"
            aria-label="Close announcement"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Header — 72px */}
      <div className="relative">
        <div className="container mx-auto px-6 md:px-12 static">
          <div className="flex h-[72px] items-center justify-between">
            {/* Left: Mobile menu + Brand Logo + Name */}
            <div className="flex items-center gap-4">
              <MobileNav links={navLinks} />
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <Image
                    src={typeof settings?.store_logo === "string" && settings.store_logo ? settings.store_logo : "/images/benarashi/logo.jpg"}
                    alt="Benarasi Kuthi"
                    width={44}
                    height={44}
                    className="h-11 w-11 object-cover rounded-full ring-2 ring-[#d4af37]/40 group-hover:ring-[#d4af37] transition-all duration-300"
                  />
                </div>
                <div className="hidden sm:block">
                  <p className="text-[13px] font-extrabold tracking-[0.08em] text-[#5c061c] leading-tight uppercase">
                    Benarasi Kuthi
                  </p>
                  <p className="text-[9px] font-medium tracking-[0.18em] text-[#8b1a2a]/60 uppercase">
                    বেনারসী কুঠি
                  </p>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 static" aria-label="Main navigation">
              {navLinks.map((link) => {
                const hasMegaMenu = link.label in megaMenuData;
                const menu = megaMenuData[link.label];

                if (hasMegaMenu && menu) {
                  return (
                    <MegaMenu key={link.href} label={link.label} href={link.href} data={menu} />
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#3d0010]/80 hover:text-[#5c061c] py-6 block transition-colors relative after:absolute after:bottom-1.5 after:left-0 after:w-full after:h-[1.5px] after:bg-[#d4af37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search + Cart + User */}
            <div className="flex items-center gap-1.5">
              <SearchBar />
              <CartButton />
              <Link
                href="/account"
                className="flex items-center justify-center size-10 rounded-full text-[#5c061c]/70 hover:text-[#5c061c] hover:bg-[#f9f0f0] transition-all"
                aria-label="My account"
              >
                <User className="h-5 w-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
