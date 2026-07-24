import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { CartSyncManager } from "@/components/cart/cart-sync-manager";
import { unstable_cache } from "next/cache";
import { ServiceWorkerRegistry } from "@/components/pwa/service-worker-registry";
import { PostHogProvider } from "@/components/analytics/posthog-provider";

// Body font — clean, modern, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Heading font — elegant, premium feel for fashion brand
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Global metadata — Benarasi Kuthi
export const metadata: Metadata = {
  title: {
    default: "Benarasi Kuthi — Bangladesh's Oldest Benarasi Saree Store",
    template: "%s — Benarasi Kuthi",
  },
  description:
    "Benarasi Kuthi (বেনারসী কুঠি) — Bangladesh's oldest and biggest manufacturer and retailer of Benarasi Sarees. Shop Indian South Katan, Kani Jardoozi, Zari Silk Jardoozi, Samu Silk & Bridal Sarees. Mirpur Benaroshi Polli, Dhaka. 371K+ followers, 92% recommend.",
  keywords: [
    "Benarasi Kuthi",
    "বেনারসী কুঠি",
    "Benarasi Saree",
    "Indian South Katan",
    "Kani Jardoozi",
    "Zari Silk Jardoozi",
    "Samu Silk",
    "Bridal Saree",
    "Mirpur Benaroshi Polli",
    "Pure Silk Saree",
    "Bangladesh Saree",
    "Dhaka Saree Shop",
  ],
  authors: [{ name: "Benarasi Kuthi" }],
  creator: "Benarasi Kuthi",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Benarasi Kuthi",
    title: "Benarasi Kuthi — Bangladesh's Oldest Benarasi Saree Store",
    description:
      "One of the oldest and biggest manufacturer and retailer of Benarasi Sarees in BD. Shop Indian South Katan, Kani Jardoozi, Zari Silk Jardoozi & Bridal Collections.",
    images: ["/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Benarasi Kuthi",
  },
};

export const viewport: Viewport = {
  themeColor: "#5c061c",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const userId = session?.user?.id;

  const getFavicon = unstable_cache(
    async () => {
      try {
        const setting = await prisma.siteSetting.findUnique({
          where: { key: "store_favicon" },
        });
        if (setting && setting.value) {
          return String(setting.value).replace(/['"]/g, "");
        }
      } catch {
        console.error("Failed to load favicon setting");
      }
      return "/favicon.ico";
    },
    ["favicon_setting"],
    { revalidate: 3600, tags: ["site_settings"] }
  );

  const faviconUrl = await getFavicon();

  return (
    <html
      lang="en"
      className={cn("h-full", inter.variable, playfair.variable)}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href={faviconUrl} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground">
        <CartSyncManager userId={userId} />
        {/* Skip to main content — Accessibility (WCAG AA) */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NextTopLoader
          color="#d4af37"
          height={2}
          showSpinner={false}
          shadow="0 0 10px #d4af37,0 0 5px #5c061c"
        />
        {/* Structured Data — SEO (SOP §৭) */}
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster position="top-right" richColors closeButton />
        <PostHogProvider />
        <ServiceWorkerRegistry />
      </body>
    </html>
  );
}
