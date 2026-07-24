"use client";

/**
 * BIBAZ — Short Brand Story Section (Homepage)
 * Concise, high-impact overview of "Fashion with Fusion" linking to full About Us and Collections.
 */

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function ImageWithSkeleton({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="absolute inset-0 skeleton-shimmer z-[1]" />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}

export function EditorialSection() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f6] relative border-y border-border/40 overflow-hidden">
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-border/20 hidden lg:block" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px 0px" }}
        className="container mx-auto px-4 md:px-12 lg:px-16 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-2 bg-accent-light border border-accent/25 rounded-sm -z-10 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 shadow-md">
              <ImageWithSkeleton
                src="https://res.cloudinary.com/dnbol4pey/image/upload/f_auto,q_auto/v1783961964/bibaz/products/0bcafce4-8d43-4f3e-a1c2-59642e51c611.png"
                alt="BIBAZ — Fashion With Fusion"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="lg:col-span-7 space-y-5 lg:pl-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent animate-pulse" />
                <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold">
                  ABOUT BIBAZ
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] text-foreground font-heading">
                Dedicated to <span className="italic font-normal text-accent">Fashion With Fusion</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Biba’z is a premier Bangladeshi fashion brand dedicated to fashion with fusion, showcasing our own exclusive designer dress collections curated predominantly for luxury womenswear.
            </p>

            <div className="p-4 md:p-5 bg-white border-l-2 border-accent rounded-sm shadow-2xs">
              <p className="text-xs md:text-sm text-foreground/90 leading-relaxed font-medium italic">
                &ldquo;We have a vast, beautiful dress collection which makes each customer feel special on every occasion, every season. They feel special when they wear Biba’z.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/collections/new-arrivals"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#1c1815] hover:bg-[#c9a96e] text-white hover:text-[#1c1815] text-xs font-bold uppercase tracking-[0.16em] transition-all rounded-sm shadow-sm"
              >
                Explore Collections
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground border-b border-foreground/50 hover:border-accent hover:text-accent pb-1 transition-all"
              >
                Read Full Story
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
