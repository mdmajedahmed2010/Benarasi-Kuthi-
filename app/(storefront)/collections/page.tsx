/**
 * BIBAZ — All Collections Page (EXCLUSIVE ATELIER COLLECTIONS)
 * Route: /collections
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { prisma } from "@/lib/db";
import { CATEGORIES } from "@/lib/demo-data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "All Collections — BIBAZ",
  description:
    "Explore exclusive BIBAZ collections — Eid & Festive Edit, Bridal & Trousseau, Everyday Luxury, Signature Tye-Dye Series and more.",
};

export default async function CollectionsPage() {
  const curatedCollections = [
    {
      title: "Indian South Katan",
      image: "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
      href: "/collections/indian-south-katan",
      tag: "HERITAGE SILK",
      desc: "Exquisite Indian South Katan sarees — pure silk with intricate zari work.",
    },
    {
      title: "Kani Jardoozi",
      image: "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
      href: "/collections/kani-jardoozi",
      tag: "HANDWOVEN ART",
      desc: "Handwoven Kani Jardoozi sarees with intricate needlework craftsmanship.",
    },
    {
      title: "Zari Silk Jardoozi",
      image: "/images/benarashi/753647362_1333816852251348_6497584975328229327_n.jpg",
      href: "/collections/zari-silk-jardoozi",
      tag: "ROYAL EMBROIDERY",
      desc: "Royal Zari Silk Jardoozi collection with heavy gold zari embroidery.",
    },
    {
      title: "Samu Silk",
      image: "/images/benarashi/753337157_1333816712251362_3971959350426019726_n.jpg",
      href: "/collections/samu-silk",
      tag: "PARTY WEAR",
      desc: "Luxurious Samu Silk sarees — lightweight, premium party wear.",
    },
    {
      title: "Benarasi Katan",
      image: "/images/benarashi/753707261_1333817032251330_6161071301291350100_n.jpg",
      href: "/collections/benarasi-katan",
      tag: "PURE BENARASI",
      desc: "Heritage Benarasi Katan silk sarees — pure silk from master weavers.",
    },
    {
      title: "Bridal Collection",
      image: "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
      href: "/collections/bridal-collection",
      tag: "BIYE & BOUBHAT",
      desc: "Exclusive bridal sarees for biye & boubhat — heavy silk and Katan.",
    },
  ];

  // Also fetch DB categories so users can easily browse by category too
  let categories = await prisma.category.findMany({
    where: { isActive: true },
    orderBy: { sortOrder: "asc" },
  });

  if (categories.length === 0) {
    categories = CATEGORIES.map((cat, i) => ({
      id: `demo-cat-${i}`,
      name: cat.name,
      slug: cat.slug,
      parentId: null,
      image: cat.image,
      sortOrder: i,
      isActive: true,
      seoTitle: null,
      seoDesc: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <Breadcrumb items={[{ label: "All Collections" }]} />

        {/* Luxury Haute-Couture Header */}
        <div className="mt-10 mb-14 text-center">
          <span className="inline-block px-3.5 py-1 rounded-full border border-[#c9a96e]/50 bg-[#c9a96e]/10 text-[#0f0e0d] text-[10px] uppercase tracking-[0.28em] font-bold mb-4">
            ✦ EXCLUSIVE ATELIER EDITIONS ✦
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0f0e0d] font-heading">
            All Collections
          </h1>
          <div className="w-20 h-[2px] bg-[#c9a96e] mx-auto mt-5" />
          <p className="text-neutral-600 mt-4 text-sm md:text-base max-w-xl mx-auto font-sans">
            Discover our curated seasonal edits, haute-couture bridal trousseau series, and luxury everyday silhouettes.
          </p>
        </div>

        {/* Curated Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9 mb-24">
          {curatedCollections.map((col) => (
            <Link
              key={col.title}
              href={col.href}
              className="group relative overflow-hidden rounded-sm shadow-luxury hover:shadow-gold-glow transition-all duration-500 aspect-[4/5] bg-neutral-900 block border border-[#e8e6e1]/40"
            >
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-3.5 border border-[#c9a96e]/25 group-hover:border-[#c9a96e]/70 transition-all duration-500 pointer-events-none z-10" />

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/40 text-[#e8ce9e] text-[9.5px] uppercase tracking-[0.24em] font-bold mb-2.5">
                  ✦ {col.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-white group-hover:text-[#e8ce9e] transition-colors">
                  {col.title}
                </h2>
                <p className="text-xs md:text-sm text-neutral-300 mt-2 line-clamp-2 leading-relaxed">
                  {col.desc}
                </p>
                <span className="text-[11px] text-[#e8ce9e] uppercase tracking-[0.16em] font-bold mt-4 inline-flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                  Explore Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Category Switcher */}
        <div className="border-t border-black/10 pt-12 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-serif text-[#1a1a1a]">Shop by Category</h3>
            <Link
              href="/categories"
              className="text-xs uppercase tracking-widest font-bold text-[#b8935a] hover:underline"
            >
              View All Categories →
            </Link>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/collections/${cat.slug}`}
                className="px-4 py-2 rounded-sm border border-black/15 bg-white hover:bg-[#1a1a1a] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
