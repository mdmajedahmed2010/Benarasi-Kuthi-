/**
 * Benarasi Kuthi — Application Constants
 * Mirpur Benaroshi Polli, Dhaka — Bangladesh's Oldest Benarasi Saree Brand
 */

// Delivery Charges (BDT)
export const DELIVERY_CHARGE = {
  DHAKA_INSIDE: 80,
  OUTSIDE_DHAKA: 150,
} as const;

// Order Number Prefix
export const ORDER_PREFIX = "BK";

// Product Status
export const PRODUCT_STATUS = {
  DRAFT: "DRAFT",
  ACTIVE: "ACTIVE",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  ARCHIVED: "ARCHIVED",
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  PROCESSING: "PROCESSING",
  SHIPPED: "SHIPPED",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
  RETURNED: "RETURNED",
  REFUNDED: "REFUNDED",
} as const;

// Payment Methods
export const PAYMENT_METHOD = {
  COD: "COD",
  BKASH: "BKASH",
  NAGAD: "NAGAD",
  SSLCOMMERZ: "SSLCOMMERZ",
} as const;

// Rate Limiting
export const RATE_LIMITS = {
  LOGIN: { requests: 5, window: "15m" },
  REGISTER: { requests: 3, window: "1h" },
  PASSWORD_RESET: { requests: 3, window: "1h" },
  CHECKOUT: { requests: 10, window: "1m" },
  API: { requests: 100, window: "1m" },
  ADMIN: { requests: 50, window: "1m" },
} as const;

// Image Upload Limits
export const UPLOAD_LIMITS = {
  MAX_SIZE_MB: 10,
  MAX_SIZE_BYTES: 10 * 1024 * 1024,
  ALLOWED_TYPES: ["image/jpeg", "image/png", "image/webp", "image/gif"],
  ALLOWED_EXTENSIONS: [".jpg", ".jpeg", ".png", ".webp", ".gif"],
  MAX_DIMENSION: 4000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
} as const;

// Session & Auth
export const AUTH = {
  ACCESS_TOKEN_EXPIRY: 15 * 60,
  REFRESH_TOKEN_EXPIRY: 7 * 24 * 60 * 60,
  ADMIN_SESSION_TIMEOUT: 30 * 60,
  BCRYPT_SALT_ROUNDS: 12,
  PASSWORD_RESET_EXPIRY: 60 * 60,
} as const;

// Business Info — Benarasi Kuthi
export const BUSINESS = {
  NAME: "Benarasi Kuthi",
  NAME_BN: "বেনারসী কুঠি",
  TAGLINE: "One of the oldest and biggest manufacturer and retailer of Benarasi Sarees in BD!!",
  PHONE: "+880 1971-380319",
  EMAIL: "info@benarasikuthi.com",
  ADDRESS: "House-17, Section-10, Block-A, Lane-7, Mirpur Benaroshi Polli, Dhaka-1221, Bangladesh",
  FACEBOOK: "https://www.facebook.com/benarasikuthi/?locale=en_GB",
  INSTAGRAM: "https://www.instagram.com/benarasikuthi",
  WEBSITE: "https://benarasikuthi.com",
  ESTABLISHED: "Mirpur Benaroshi Polli",
  FOLLOWERS: "371K+",
  RECOMMEND_RATE: "92%",
} as const;

// Currency
export const CURRENCY = {
  CODE: "BDT",
  SYMBOL: "৳",
  LOCALE: "en-BD",
} as const;

// Coupon Codes
export const COUPON_CODES: Record<
  string,
  { type: "percent" | "flat"; value: number; label: string }
> = {
  BK10: { type: "percent", value: 10, label: "10% off your order" },
  BK15: { type: "percent", value: 15, label: "15% off your order" },
  BRIDAL20: { type: "percent", value: 20, label: "20% Bridal Special Discount" },
  WELCOME: { type: "percent", value: 5, label: "5% Welcome Discount" },
  FLAT200: { type: "flat", value: 200, label: "৳200 flat discount" },
  EID2026: { type: "percent", value: 15, label: "15% Eid Special Discount" },
} as const;
