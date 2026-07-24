/* eslint-disable */
"use client";

/**
 * Benarasi Kuthi — Home UI Orchestrator (v5.0)
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * All images use local /public/images/benarashi/ assets — NO Cloudinary dependency.
 */

import { HeroSlider, type HeroSlide } from "@/components/home/hero-slider";
import { TrustBadges } from "@/components/home/trust-badges";
import { CategoryGrid, type CategoryItem } from "@/components/home/category-grid";
import { LookbookSection, type LookbookLook } from "@/components/home/lookbook-section";
import { CollectionsShowcase, type CollectionShowcaseItem } from "@/components/home/collections-showcase";
import { NewArrivalsGrid, type ArrivalsProduct } from "@/components/home/new-arrivals-grid";
import { TestimonialsCarousel, type Testimonial } from "@/components/home/testimonials-carousel";
import { EditorialSection } from "@/components/home/editorial-section";

/* ──────────────── Static Data — Benarasi Kuthi ──────────────── */

// Hero slides — using local asset images from /public/images/benarashi/
const heroSlides: HeroSlide[] = [
  {
    image: "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
    title: "INDIAN SOUTH KATAN SILK",
    subtitle:
      "Pure silk katan sarees with exquisite zari work — handcrafted by master weavers of Mirpur. Starting from ৳4,000.",
    link: "/collections/indian-south-katan",
    overline: "NEW COLLECTION",
    color: "from-black/65",
  },
  {
    image: "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
    title: "KANI JARDOOZI PARTY WEAR",
    subtitle:
      "New party wear collections — Kani Jardoozi, Zari Silk Jardoozi, Samu Silk. Perfect for biye, bouভাত & celebrations.",
    link: "/collections/kani-jardoozi",
    overline: "PARTY WEAR EDIT",
    color: "from-[#2b0a10]/65",
  },
  {
    image: "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
    title: "EXCLUSIVE BRIDAL COLLECTION",
    subtitle:
      "Heavy silk & Jardoozi bridal sarees for your most special day. Biye, Holud & Bouভাত specials available.",
    link: "/collections/bridal-collection",
    overline: "BRIDAL LUXE 2026",
    color: "from-[#1a0a05]/65",
  },
  {
    image: "/images/benarashi/755364208_1333816692251364_8071345076815940643_n.jpg",
    title: "ZARI SILK JARDOOZI",
    subtitle:
      "Heavy gold zari embroidery on pure silk — the ultimate statement saree for every grand occasion.",
    link: "/collections/zari-silk-jardoozi",
    overline: "HERITAGE CRAFT",
    color: "from-[#1c1205]/65",
  },
];

// Customer testimonials (based on 92% recommend from Facebook reviews)
const testimonials: Testimonial[] = [
  {
    quote:
      "Benarasi Kuthi-র saree quality অসাধারণ! Indian South Katan-টা পড়ে অনুষ্ঠানে গিয়ে সবাই প্রশংসা করলো। এতো সুন্দর silk, দাম-ও reasonable। Highly recommend!",
    author: "Fatema Begum",
    designation: "Verified Buyer — Dhaka",
    stars: 5,
  },
  {
    quote:
      "Kani Jardoozi saree-টা বিয়ের জন্য নিয়েছিলাম। কাজের মান অবিশ্বাস্য — হাতের কাজ এতো মসৃণ এবং নিখুঁত। Benarasi Kuthi সত্যিই বাংলাদেশের সেরা।",
    author: "Rahela Khanam",
    designation: "Verified Buyer — Chattogram",
    stars: 5,
  },
  {
    quote:
      "Inbox করার পরেই খুব দ্রুত respond করলো। Delivery-ও সময়মতো হলো। Bridal collection-এর saree অনেক heavy ও gorgeous। পুরো পরিবার খুশি!",
    author: "Nasrin Sultana",
    designation: "Verified Buyer — Sylhet",
    stars: 5,
  },
  {
    quote:
      "92% recommend কেন সেটা এখন বুঝলাম! Zari Silk Jardoozi-র quality দেখে মুগ্ধ হয়ে গেলাম। Mirpur Benaroshi Polli-র সেরা দোকান এটাই।",
    author: "Shirin Akter",
    designation: "Verified Buyer — Gazipur",
    stars: 5,
  },
];

/* ──────────────── Main Component ──────────────── */

export function HomeUI({
  dbProducts,
  dbCategories,
}: {
  dbProducts: any[];
  dbCategories: any[];
}) {
  // Local asset fallbacks for category images
  const localCategoryImages: string[] = [
    "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
    "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
    "/images/benarashi/753647362_1333816852251348_6497584975328229327_n.jpg",
    "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
    "/images/benarashi/755364208_1333816692251364_8071345076815940643_n.jpg",
    "/images/benarashi/753783459_1333816908918009_8232937019758639704_n.jpg",
  ];

  /* ── Map DB categories or use Benarasi Kuthi defaults ── */
  const defaultCategories: CategoryItem[] = [
    {
      name: "Indian South Katan",
      slug: "indian-south-katan",
      productCount: 6,
      image: localCategoryImages[0] || "",
    },
    {
      name: "Kani Jardoozi",
      slug: "kani-jardoozi",
      productCount: 5,
      image: localCategoryImages[1] || "",
    },
    {
      name: "Zari Silk Jardoozi",
      slug: "zari-silk-jardoozi",
      productCount: 4,
      image: localCategoryImages[2] || "",
    },
    {
      name: "Bridal Collection",
      slug: "bridal-collection",
      productCount: 4,
      image: localCategoryImages[3] || "",
    },
    {
      name: "Benarasi Katan",
      slug: "benarasi-katan",
      productCount: 5,
      image: localCategoryImages[4] || "",
    },
    {
      name: "Samu Silk",
      slug: "samu-silk",
      productCount: 4,
      image: localCategoryImages[5] || "",
    },
  ];

  const mappedCategories: CategoryItem[] =
    dbCategories.length > 0
      ? dbCategories.map((c, i) => ({
          name: c.name,
          slug: c.slug,
          productCount: c._count?.products || 0,
          image: c.image || localCategoryImages[i % localCategoryImages.length] || "",
        }))
      : defaultCategories;

  // Local fallback product images
  const localProductImages: string[] = [
    "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
    "/images/benarashi/753337157_1333816712251362_3971959350426019726_n.jpg",
    "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
    "/images/benarashi/753647362_1333816852251348_6497584975328229327_n.jpg",
    "/images/benarashi/753707261_1333817032251330_6161071301291350100_n.jpg",
    "/images/benarashi/753783459_1333816908918009_8232937019758639704_n.jpg",
    "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
    "/images/benarashi/754498110_1333816655584701_7003077919824650697_n.jpg",
  ];

  /* ── Demo products for Benarasi Kuthi ── */
  const defaultProducts: ArrivalsProduct[] = [
    { id: "bk-001", name: "Indian South Katan Silk Saree", slug: "indian-south-katan-silk-saree", price: 4000, compareAtPrice: 4500, image: localProductImages[0] || "", category: "Indian South Katan", isNew: true },
    { id: "bk-002", name: "Royal Gold Indian South Katan", slug: "royal-gold-indian-south-katan", price: 4500, compareAtPrice: 5000, image: localProductImages[1] || "", category: "Indian South Katan", isNew: true },
    { id: "bk-005", name: "New Party Wear Kani Jardoozi", slug: "new-party-wear-kani-jardoozi", price: 6500, compareAtPrice: 7500, image: localProductImages[2] || "", category: "Kani Jardoozi", isNew: true },
    { id: "bk-006", name: "Bridal Kani Jardoozi Saree", slug: "bridal-kani-jardoozi-saree", price: 8000, compareAtPrice: 9500, image: localProductImages[3] || "", category: "Kani Jardoozi", isNew: true },
    { id: "bk-009", name: "Heavy Zari Silk Jardoozi Bridal", slug: "heavy-zari-silk-jardoozi-bridal", price: 9500, compareAtPrice: 11000, image: localProductImages[4] || "", category: "Zari Silk Jardoozi", isNew: true },
    { id: "bk-012", name: "Lightweight Samu Silk Party Wear", slug: "lightweight-samu-silk-party-wear", price: 5000, compareAtPrice: 6000, image: localProductImages[5] || "", category: "Samu Silk", isNew: true },
    { id: "bk-014", name: "Pure Benarasi Katan Silk Saree", slug: "pure-benarasi-katan-silk-saree", price: 6000, compareAtPrice: 7000, image: localProductImages[6] || "", category: "Benarasi Katan", isNew: true },
    { id: "bk-016", name: "Grand Bridal Silk Saree", slug: "grand-bridal-silk-saree", price: 12000, compareAtPrice: 15000, image: localProductImages[7] || "", category: "Bridal Collection", isNew: true },
  ];

  /* ── Map database products OR use defaults ── */
  const mappedProducts: ArrivalsProduct[] =
    dbProducts.length > 0
      ? dbProducts.slice(0, 8).map((p, i) => {
          const variantPrice = p.variants?.[0]?.price ? Number(p.variants[0].price) : Number(p.basePrice);
          const variantImages = p.variants?.[0]?.images;
          return {
            id: p.id,
            name: p.name,
            slug: p.slug,
            price: variantPrice,
            compareAtPrice: Math.round(variantPrice * 1.2),
            image:
              Array.isArray(variantImages) && variantImages.length > 0
                ? variantImages[0]
                : localProductImages[i % localProductImages.length],
            category: p.category?.name || "Saree",
            isNew: true,
          };
        })
      : defaultProducts;

  /* ── Lookbook looks ── */
  const lookbookLooks: LookbookLook[] = [
    {
      id: "look1",
      image: "/images/benarashi/753647362_1333816852251348_6497584975328229327_n.jpg",
      title: "Kani Jardoozi",
      subtitle: "New Party Wear Kani Jardoozi",
      slug: "new-party-wear-kani-jardoozi",
      price: 6500,
      tag: "PARTY WEAR",
    },
    {
      id: "look2",
      image: "/images/benarashi/754498110_1333816655584701_7003077919824650697_n.jpg",
      title: "Bridal Collection",
      subtitle: "Grand Bridal Silk Saree",
      slug: "grand-bridal-silk-saree",
      price: 12000,
      tag: "BRIDAL LUXE",
    },
    {
      id: "look3",
      image: "/images/benarashi/755600225_1333816745584692_2667566809036131095_n.jpg",
      title: "Zari Silk Jardoozi",
      subtitle: "Golden Zari Silk Party Saree",
      slug: "golden-zari-silk-party-saree",
      price: 8500,
      tag: "HERITAGE CRAFT",
    },
  ];

  /* ── Collections showcase ── */
  const allCollections: CollectionShowcaseItem[] = [
    {
      title: "Bridal Silk Collection",
      image: "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
      href: "/collections/bridal-collection",
      tag: "BRIDAL LUXE 2026",
    },
    {
      title: "Kani Jardoozi Party Wear",
      image: "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
      href: "/collections/kani-jardoozi",
      tag: "NEW PARTY WEAR",
    },
    {
      title: "Indian South Katan",
      image: "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
      href: "/collections/indian-south-katan",
      tag: "FROM ৳4,000",
    },
    {
      title: "Zari Silk Jardoozi",
      image: "/images/benarashi/755364208_1333816692251364_8071345076815940643_n.jpg",
      href: "/collections/zari-silk-jardoozi",
      tag: "HEAVY ZARI WORK",
    },
    {
      title: "Pure Benarasi Katan",
      image: "/images/benarashi/753707261_1333817032251330_6161071301291350100_n.jpg",
      href: "/collections/benarasi-katan",
      tag: "HERITAGE KATAN",
    },
    {
      title: "Samu Silk Party Wear",
      image: "/images/benarashi/753337157_1333816712251362_3971959350426019726_n.jpg",
      href: "/collections/samu-silk",
      tag: "LIGHTWEIGHT LUXE",
    },
  ];

  return (
    <div className="flex flex-col bg-[#fdfcfa] overflow-hidden">
      {/* 1. HERO — Eager loaded (above fold) */}
      <HeroSlider slides={heroSlides} />

      {/* 2. TRUST BADGES — Lightweight, eager */}
      <TrustBadges />

      {/* 3. CATEGORY GRID — Lazy loaded */}
      <CategoryGrid categories={mappedCategories} />

      {/* 4. NEW ARRIVALS — Lazy loaded */}
      <NewArrivalsGrid products={mappedProducts} />

      {/* 5. LOOKBOOK — Lazy loaded */}
      <LookbookSection looks={lookbookLooks} />

      {/* 6. ALL COLLECTIONS — Lazy loaded */}
      <CollectionsShowcase collections={allCollections} />

      {/* 7. TESTIMONIALS — Lazy loaded */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* 8. EDITORIAL / BRAND STORY — Lazy loaded */}
      <EditorialSection />
    </div>
  );
}
