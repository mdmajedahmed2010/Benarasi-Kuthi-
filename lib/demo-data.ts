/**
 * Benarasi Kuthi — Demo Product Data
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * One of the oldest and biggest manufacturer and retailer of Benarasi Sarees in BD!!
 * All images served from local /public/images/benarashi/ folder.
 */

import type { ProductCardProps } from "@/components/product/product-card";

// ═══════════════════════════════════════════
// Asset image paths (local, no Cloudinary)
// ═══════════════════════════════════════════
const ASSETS = {
  logo: "/images/benarashi/logo.jpg",
  img1: "/images/benarashi/1.jpg",
  img2: "/images/benarashi/574868282_1128857362747299_8392951929461907637_n.jpg",
  img3: "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
  img4: "/images/benarashi/753337157_1333816712251362_3971959350426019726_n.jpg",
  img5: "/images/benarashi/753356756_1333814148918285_5479160755195310419_n.jpg",
  img6: "/images/benarashi/753534598_1333816942251339_7555264707413932749_n.jpg",
  img7: "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
  img8: "/images/benarashi/753647362_1333816852251348_6497584975328229327_n.jpg",
  img9: "/images/benarashi/753707261_1333817032251330_6161071301291350100_n.jpg",
  img10: "/images/benarashi/753783459_1333816908918009_8232937019758639704_n.jpg",
  img11: "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
  img12: "/images/benarashi/754498110_1333816655584701_7003077919824650697_n.jpg",
  img13: "/images/benarashi/755364208_1333816692251364_8071345076815940643_n.jpg",
  img14: "/images/benarashi/755381079_1333816915584675_6627179465796299019_n.jpg",
  img15: "/images/benarashi/755600225_1333816745584692_2667566809036131095_n.jpg",
  img16: "/images/benarashi/755736085_1333816582251375_1599088046733009830_n.jpg",
};

// ═══════════════════════════════════════════
// Categories — Benarasi Kuthi Collection
// ═══════════════════════════════════════════
export const CATEGORIES = [
  {
    name: "Indian South Katan",
    slug: "indian-south-katan",
    description: "Exquisite Indian South Katan sarees — pure silk with intricate zari work. Starting from ৳4,000",
    image: ASSETS.img4,
    productCount: 6,
  },
  {
    name: "Kani Jardoozi",
    slug: "kani-jardoozi",
    description: "Handwoven Kani Jardoozi sarees with intricate needlework craftsmanship for weddings & parties",
    image: ASSETS.img7,
    productCount: 5,
  },
  {
    name: "Zari Silk Jardoozi",
    slug: "zari-silk-jardoozi",
    description: "Royal Zari Silk Jardoozi collection with heavy gold zari embroidery — perfect for bridal occasions",
    image: ASSETS.img8,
    productCount: 4,
  },
  {
    name: "Samu Silk",
    slug: "samu-silk",
    description: "Luxurious Samu Silk sarees — lightweight, premium party wear for every celebration",
    image: ASSETS.img5,
    productCount: 4,
  },
  {
    name: "Benarasi Katan",
    slug: "benarasi-katan",
    description: "Heritage Benarasi Katan silk sarees — pure silk, genuine zari work from master weavers",
    image: ASSETS.img9,
    productCount: 5,
  },
  {
    name: "Bridal Collection",
    slug: "bridal-collection",
    description: "Exclusive bridal sarees for biye & bouভাত — heavy silk, Jardoozi & Katan for special days",
    image: ASSETS.img11,
    productCount: 4,
  },
];

// ═══════════════════════════════════════════
// All Products — Benarasi Kuthi Catalog
// ═══════════════════════════════════════════
export const ALL_PRODUCTS: ProductCardProps[] = [
  // --- INDIAN SOUTH KATAN ---
  {
    id: "bk-001",
    name: "Indian South Katan Silk Saree",
    slug: "indian-south-katan-silk-saree",
    price: 4000,
    compareAtPrice: 4500,
    image: ASSETS.img4,
    category: "Indian South Katan",
    isNew: true,
  },
  {
    id: "bk-002",
    name: "Royal Gold Indian South Katan",
    slug: "royal-gold-indian-south-katan",
    price: 4500,
    compareAtPrice: 5000,
    image: ASSETS.img5,
    category: "Indian South Katan",
    isNew: true,
  },
  {
    id: "bk-003",
    name: "Crimson Zari Border South Katan",
    slug: "crimson-zari-border-south-katan",
    price: 4200,
    compareAtPrice: 4800,
    image: ASSETS.img9,
    category: "Indian South Katan",
  },
  {
    id: "bk-004",
    name: "Champagne Tissue South Katan Silk",
    slug: "champagne-tissue-south-katan-silk",
    price: 5500,
    compareAtPrice: 6200,
    image: ASSETS.img10,
    category: "Indian South Katan",
  },

  // --- KANI JARDOOZI ---
  {
    id: "bk-005",
    name: "New Party Wear Kani Jardoozi",
    slug: "new-party-wear-kani-jardoozi",
    price: 6500,
    compareAtPrice: 7500,
    image: ASSETS.img7,
    category: "Kani Jardoozi",
    isNew: true,
  },
  {
    id: "bk-006",
    name: "Bridal Kani Jardoozi Saree",
    slug: "bridal-kani-jardoozi-saree",
    price: 8000,
    compareAtPrice: 9500,
    image: ASSETS.img8,
    category: "Kani Jardoozi",
    isNew: true,
  },
  {
    id: "bk-007",
    name: "Deep Maroon Kani Silk Jardoozi",
    slug: "deep-maroon-kani-silk-jardoozi",
    price: 7200,
    compareAtPrice: 8000,
    image: ASSETS.img11,
    category: "Kani Jardoozi",
  },
  {
    id: "bk-008",
    name: "Ivory Floral Kani Jardoozi",
    slug: "ivory-floral-kani-jardoozi",
    price: 7800,
    compareAtPrice: 9000,
    image: ASSETS.img12,
    category: "Kani Jardoozi",
  },

  // --- ZARI SILK JARDOOZI ---
  {
    id: "bk-009",
    name: "Heavy Zari Silk Jardoozi Bridal Saree",
    slug: "heavy-zari-silk-jardoozi-bridal",
    price: 9500,
    compareAtPrice: 11000,
    image: ASSETS.img13,
    category: "Zari Silk Jardoozi",
    isNew: true,
  },
  {
    id: "bk-010",
    name: "Golden Zari Silk Party Saree",
    slug: "golden-zari-silk-party-saree",
    price: 8500,
    compareAtPrice: 10000,
    image: ASSETS.img14,
    category: "Zari Silk Jardoozi",
  },
  {
    id: "bk-011",
    name: "Royal Copper Zari Silk Jardoozi",
    slug: "royal-copper-zari-silk-jardoozi",
    price: 10000,
    compareAtPrice: 12000,
    image: ASSETS.img6,
    category: "Zari Silk Jardoozi",
  },

  // --- SAMU SILK ---
  {
    id: "bk-012",
    name: "Lightweight Samu Silk Party Wear",
    slug: "lightweight-samu-silk-party-wear",
    price: 5000,
    compareAtPrice: 6000,
    image: ASSETS.img2,
    category: "Samu Silk",
    isNew: true,
  },
  {
    id: "bk-013",
    name: "Samu Silk Wedding Collection",
    slug: "samu-silk-wedding-collection",
    price: 5500,
    compareAtPrice: 6500,
    image: ASSETS.img3,
    category: "Samu Silk",
  },

  // --- BENARASI KATAN ---
  {
    id: "bk-014",
    name: "Pure Benarasi Katan Silk Saree",
    slug: "pure-benarasi-katan-silk-saree",
    price: 6000,
    compareAtPrice: 7000,
    image: ASSETS.img1,
    category: "Benarasi Katan",
    isNew: true,
  },
  {
    id: "bk-015",
    name: "Heritage Tanchoi Benarasi Katan",
    slug: "heritage-tanchoi-benarasi-katan",
    price: 7500,
    compareAtPrice: 9000,
    image: ASSETS.img4,
    category: "Benarasi Katan",
  },

  // --- BRIDAL COLLECTION ---
  {
    id: "bk-016",
    name: "Grand Bridal Silk Saree (Biye/Bouভাত)",
    slug: "grand-bridal-silk-saree",
    price: 12000,
    compareAtPrice: 15000,
    image: ASSETS.img11,
    category: "Bridal Collection",
    isNew: true,
  },
  {
    id: "bk-017",
    name: "Exclusive Bridal Jardoozi Silk",
    slug: "exclusive-bridal-jardoozi-silk",
    price: 14000,
    compareAtPrice: 18000,
    image: ASSETS.img12,
    category: "Bridal Collection",
  },
];

// ═══════════════════════════════════════════
// Filtered Collections
// ═══════════════════════════════════════════
export const NEW_ARRIVALS = ALL_PRODUCTS.filter((p) => p.isNew);
export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 8);
export const KATAN_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Indian South Katan" || p.category === "Benarasi Katan");
export const BRIDAL_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Bridal Collection");
export const JARDOOZI_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Kani Jardoozi" || p.category === "Zari Silk Jardoozi");
export const SAMU_PRODUCTS = ALL_PRODUCTS.filter((p) => p.category === "Samu Silk");

// Get products by category slug
export function getProductsByCategory(slug: string): ProductCardProps[] {
  switch (slug) {
    case "indian-south-katan":
      return ALL_PRODUCTS.filter((p) => p.category === "Indian South Katan");
    case "kani-jardoozi":
      return ALL_PRODUCTS.filter((p) => p.category === "Kani Jardoozi");
    case "zari-silk-jardoozi":
      return ALL_PRODUCTS.filter((p) => p.category === "Zari Silk Jardoozi");
    case "samu-silk":
      return SAMU_PRODUCTS;
    case "benarasi-katan":
      return ALL_PRODUCTS.filter((p) => p.category === "Benarasi Katan");
    case "bridal-collection":
      return BRIDAL_PRODUCTS;
    case "new-arrivals":
      return NEW_ARRIVALS;
    case "featured":
      return FEATURED_PRODUCTS;
    default:
      return ALL_PRODUCTS;
  }
}
