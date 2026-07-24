"use client";

/**
 * Benarasi Kuthi — Brand Story Component (v3.0)
 * বেনারসী কুঠি | Bangladesh's Oldest Benarasi Saree Brand
 * Mirpur Benaroshi Polli, Dhaka
 */

import Link from "next/link";
import Image from "next/image";

export function BrandStory() {
  return (
    <section className="bg-[#faf7f2] border-t border-[#8b1a2a]/15 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Brand Heritage Photo */}
          <div className="lg:col-span-6 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-sm overflow-hidden shadow-sm group reveal">
            <Image
              src="/images/benarashi/753783459_1333816908918009_8232937019758639704_n.jpg"
              alt="বেনারসী কুঠি — Heritage Benarasi Saree craftsmanship"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gold accent overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08),transparent_50%)]" />
            {/* Heritage badge */}
            <div className="absolute bottom-5 left-5 bg-[#3d0010]/85 backdrop-blur-sm border border-[#d4af37]/40 px-4 py-2.5 rounded-sm">
              <p className="text-[#d4af37] text-[9px] uppercase tracking-[0.25em] font-bold">বেনারসী কুঠি</p>
              <p className="text-white text-xs font-semibold mt-0.5">Mirpur Benaroshi Polli, Dhaka</p>
            </div>
          </div>

          {/* Right Side: Brand Narrative */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8 reveal [transition-delay:200ms]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1a2a] font-bold">
              আমাদের গল্প • Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-[#1a0008] font-heading">
              Bangladesh&apos;s Oldest Benarasi,
              <br />
              <span className="italic font-normal text-[#5c061c]/80">Crafted with Heritage</span>
            </h2>

            <div className="border-l-2 border-[#d4af37]/50 pl-4 py-1 text-[#3d0010]/70 italic text-sm">
              &ldquo;Benarasi Kuthi is one of the oldest and biggest manufacturer and retailer of
              Benarasi Sarees in BD!!&rdquo;
            </div>

            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                মিরপুর বেনারসি পল্লী থেকে জন্ম নেওয়া বেনারসী কুঠি বাংলাদেশের সেরা ও প্রাচীনতম
                বেনারসি শাড়ির প্রস্তুতকারক ও বিক্রেতা। আমাদের দক্ষ কারিগরেরা প্রজন্মের পর প্রজন্ম
                ধরে পিওর সিল্ক, জারির কাজ এবং হস্তশিল্পের ঐতিহ্য বজায় রেখে চলেছেন।
              </p>
              <p>
                Indian South Katan, Kani Jardoozi, Zari Silk Jardoozi, Samu Silk — আমাদের
                প্রতিটি শাড়ি বিয়ে, বউভাত, হলুদ ও যেকোনো বিশেষ অনুষ্ঠানের জন্য তৈরি।
                অর্ডার করুন আমাদের ইনবক্সে এবং পান সরাসরি মিরপুর বেনারসি পল্লী থেকে।
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#d4af37]/20">
              <div className="text-center">
                <p className="text-2xl font-bold text-[#5c061c]">371K+</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Followers</p>
              </div>
              <div className="text-center border-x border-[#d4af37]/20">
                <p className="text-2xl font-bold text-[#5c061c]">92%</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Recommend</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-[#5c061c]">100%</p>
                <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-medium">Pure Silk</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-11 px-8 bg-[#5c061c] text-[#f5e6c8] text-xs font-semibold uppercase tracking-[0.1em] hover:bg-[#3d0010] transition-all rounded-sm shadow-sm active:scale-[0.98]"
              >
                আমাদের সম্পর্কে জানুন
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
