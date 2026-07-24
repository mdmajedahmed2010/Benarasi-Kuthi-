/**
 * Benarasi Kuthi — Refund & Exchange Policy (v3.0)
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * Actual policy based on Facebook page practice
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, Eye, Phone, AlertTriangle, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Refund & Exchange Policy — Benarasi Kuthi | বেনারসী কুঠি",
  description:
    "বেনারসী কুঠির Refund ও Exchange Policy। Delivery-র সময় পণ্য দেখে নিন। Order-এর আগে Facebook Inbox-এ যোগাযোগ করুন।",
};

const policyPoints = [
  {
    icon: Eye,
    title: "Delivery-তে পণ্য দেখে নিন",
    body: "প্রতিটি Order delivery-র সময় Delivery Agent-এর সামনে খুলে দেখুন। পণ্য বুঝে নেওয়ার পরে কোনো Claim গ্রহণযোগ্য হবে না।",
    type: "info",
  },
  {
    icon: AlertTriangle,
    title: "No Return | No Exchange",
    body: "Order Confirm হওয়ার পরে কোনো Return, Exchange বা Cancellation সম্ভব নয়। তাই Order করার আগে সম্পূর্ণ বিস্তারিত জেনে নিন।",
    type: "warning",
  },
  {
    icon: ShieldCheck,
    title: "Manufacturing Defect",
    body: "Delivery Agent-এর সামনে পণ্যে Manufacturing Defect পাওয়া গেলে তাৎক্ষণিকভাবে পণ্য ফেরত দিন এবং আমাদের Facebook Inbox বা ফোনে জানান।",
    type: "success",
  },
  {
    icon: Truck,
    title: "Delivery Charge",
    body: "ঢাকার ভিতরে: ৳80 | ঢাকার বাইরে: ৳150। Cash on Delivery সুবিধা উপলব্ধ — পণ্য পাওয়ার পর টাকা দিন।",
    type: "info",
  },
  {
    icon: CheckCircle2,
    title: "Pure Silk গ্যারান্টি",
    body: "বেনারসী কুঠির সকল শাড়ি 100% খাঁটি সিল্ক এবং প্রামাণিক বেনারসি কারিগরি কাজ দিয়ে তৈরি। আমরা গুণমানের ব্যাপারে আপস করি না।",
    type: "success",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Page Header */}
      <section className="bg-[#3d0010] py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#d4af37] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-[#d4af37] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#f5e6c8] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full">
            আমাদের নীতিমালা
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Refund & Exchange Policy
          </h1>
          <p className="text-[#f5e6c8]/80 text-sm leading-relaxed">
            Benarasi Kuthi-তে Order করার আগে আমাদের নীতিমালা সম্পর্কে জেনে নিন।
          </p>
        </div>
      </section>

      {/* Main Alert */}
      <section className="bg-[#5c061c] py-5 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 justify-center flex-wrap text-center">
            <AlertTriangle className="h-5 w-5 text-[#d4af37] shrink-0" />
            <p className="text-[#f5e6c8] text-sm font-bold tracking-wide">
              IMPORTANT: Order Confirm হওয়ার পরে NO RETURN | NO EXCHANGE | NO CANCELLATION
            </p>
            <AlertTriangle className="h-5 w-5 text-[#d4af37] shrink-0" />
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Policy Cards */}
          <div className="space-y-5 mb-16">
            {policyPoints.map((point, idx) => (
              <div
                key={point.title}
                className={`flex items-start gap-5 p-6 rounded-sm border ${
                  point.type === "warning"
                    ? "bg-amber-50 border-amber-200 border-l-4 border-l-amber-500"
                    : point.type === "success"
                    ? "bg-emerald-50 border-emerald-100 border-l-4 border-l-emerald-500"
                    : "bg-white border-[#e8e0d0] border-l-4 border-l-[#5c061c]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center ${
                    point.type === "warning"
                      ? "bg-amber-100 text-amber-700"
                      : point.type === "success"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-[#f7eded] text-[#5c061c]"
                  }`}
                >
                  <point.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground/50 font-mono">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2
                      className={`text-sm font-bold uppercase tracking-wide ${
                        point.type === "warning"
                          ? "text-amber-800"
                          : point.type === "success"
                          ? "text-emerald-800"
                          : "text-[#1a0008]"
                      }`}
                    >
                      {point.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-[#f7f0e8] rounded-sm p-8 border border-[#d4af37]/20 mb-10">
            <h2 className="text-xl font-bold text-[#1a0008] mb-6 flex items-center gap-2">
              <span className="text-[#d4af37]">✦</span>
              সাধারণ প্রশ্নোত্তর
            </h2>
            <div className="space-y-5">
              {[
                {
                  q: "আমি কি Order করার পরে Cancel করতে পারব?",
                  a: "না। Order Confirm হওয়ার পরে কোনো Cancellation সম্ভব নয়। Order করার আগে সম্পূর্ণ বিস্তারিত জেনে নিন।",
                },
                {
                  q: "Delivery-তে পণ্যে সমস্যা থাকলে কী করব?",
                  a: "Delivery Agent-এর সামনে পণ্য খুলে দেখুন। সমস্যা থাকলে সেখানেই ফেরত দিন এবং আমাদের Facebook Inbox বা ফোনে জানান।",
                },
                {
                  q: "Cash on Delivery কি available?",
                  a: "হ্যাঁ! আমরা Cash on Delivery সুবিধা দিই। পণ্য পাওয়ার পর Delivery Agent-কে টাকা দিন।",
                },
                {
                  q: "আমার শাড়ি কতদিনে পাব?",
                  a: "ঢাকার ভিতরে সাধারণত ১-২ কার্যদিবস। ঢাকার বাইরে ২-৫ কার্যদিবস।",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-[#d4af37]/15 pb-5 last:border-0 last:pb-0">
                  <p className="text-sm font-semibold text-[#1a0008] mb-1.5">প্রশ্ন: {faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">উত্তর: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Help */}
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Policy সম্পর্কে আরো জানতে বা সমস্যায় পড়লে:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={BUSINESS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-bold rounded-sm transition-all shadow-sm tracking-wide"
              >
                Facebook Inbox করুন
              </a>
              <a
                href={`tel:${BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 border-2 border-[#5c061c]/30 text-[#5c061c] text-sm font-semibold rounded-sm hover:bg-[#5c061c]/5 hover:border-[#5c061c] transition-all tracking-wide"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.PHONE}
              </a>
            </div>
            <div className="pt-4">
              <Link
                href="/contact"
                className="text-xs text-[#5c061c] hover:underline font-medium"
              >
                Contact Us পেজে যান →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
