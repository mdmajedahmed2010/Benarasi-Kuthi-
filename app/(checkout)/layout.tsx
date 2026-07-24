/**
 * BIBAZ — Checkout Layout
 * Isolated layout (no full header/footer — focused checkout flow)
 * SOP §২ — Frontend Plan PAGE 5
 */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf5]">
      {/* Minimal Header */}
      <header className="bg-white border-b border-[#d4af37]/30 shadow-sm">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm text-[#5c061c]/80 hover:text-[#5c061c] font-semibold transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-[#5c061c] font-heading">
            Benarasi Kuthi
          </Link>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-[#d4af37]/30 py-6 bg-white">
        <div className="container mx-auto px-4 text-center text-xs text-muted-foreground font-medium">
          <p>
            © {new Date().getFullYear()} Benarasi Kuthi. Secure checkout.{" "}
            <Link href="/terms" className="underline hover:text-[#5c061c]">
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/refund-policy" className="underline hover:text-[#5c061c]">
              Refund Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
