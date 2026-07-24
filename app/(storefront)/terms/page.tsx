/**
 * Benarasi Kuthi — Terms & Conditions (v3.0)
 * বেনারসী কুঠি | Mirpur Benaroshi Polli, Dhaka
 * Actual business terms — Cash on Delivery, order process, delivery policy
 */

import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions — Benarasi Kuthi | বেনারসী কুঠি",
  description:
    "বেনারসী কুঠির Terms & Conditions। Order Process, Delivery Policy, Cash on Delivery, Exchange Policy সম্পর্কে বিস্তারিত জানুন।",
};

const sections = [
  {
    id: "01",
    title: "আমাদের পরিচয় ও ব্যবসায়িক মডেল",
    content: `Benarasi Kuthi (বেনারসী কুঠি) বাংলাদেশের অন্যতম প্রাচীন ও বৃহত্তম বেনারসি শাড়ির প্রস্তুতকারক ও বিক্রেতা। আমাদের শোরুম মিরপুর বেনারসি পল্লীতে অবস্থিত — House-17, Section-10, Block-A, Lane-7, Mirpur Benaroshi Polli, Dhaka-1221।

আমরা Indian South Katan, Kani Jardoozi, Zari Silk Jardoozi, Samu Silk, এবং Bridal Collection-সহ বিভিন্ন ধরনের খাঁটি সিল্কের বেনারসি শাড়ি তৈরি ও বিক্রি করি।`,
  },
  {
    id: "02",
    title: "Order Process",
    content: `Order করতে আমাদের Facebook Page-এ Inbox করুন অথবা সরাসরি ফোন করুন। Order-এ অবশ্যই উল্লেখ করুন:
• আপনার পূর্ণ নাম
• সক্রিয় ফোন নম্বর
• সম্পূর্ণ ডেলিভারি ঠিকানা
• পছন্দের পণ্যের বিস্তারিত (ছবি/নাম)

আমরা Cash on Delivery-তে পণ্য পাঠাই। অ্যাডভান্স পেমেন্টের প্রয়োজন নেই (কিছু বিশেষ ক্ষেত্রে ব্যতিক্রম হতে পারে)।`,
  },
  {
    id: "03",
    title: "Delivery Policy",
    content: `ডেলিভারি চার্জ:
• ঢাকার ভিতরে: ৳80
• ঢাকার বাইরে: ৳150

ডেলিভারি সময়:
• ঢাকার ভিতরে: ১–২ কার্যদিবস
• ঢাকার বাইরে: ২–৫ কার্যদিবস

Cash on Delivery সুবিধায় পণ্য পাওয়ার পর Delivery Agent-কে টাকা দিন। পণ্য বুঝে নেওয়ার আগে অবশ্যই দেখে নিন।`,
  },
  {
    id: "04",
    title: "Return, Exchange ও Cancellation Policy",
    content: `গুরুত্বপূর্ণ: Order Confirm হওয়ার পরে কোনো Return, Exchange বা Cancellation সম্ভব নয়।

Delivery Agent-এর সামনে পণ্য খুলে পরীক্ষা করুন। Manufacturing Defect বা Shipping Damage থাকলে সেখানেই Delivery Agent-এর কাছে ফেরত দিন এবং আমাদের সাথে যোগাযোগ করুন।

পণ্য গ্রহণ করার পরে কোনো দাবি গ্রহণযোগ্য হবে না।`,
    highlight: true,
  },
  {
    id: "05",
    title: "পণ্যের গুণমান ও গ্যারান্টি",
    content: `বেনারসী কুঠির সকল শাড়ি:
• ১০০% খাঁটি সিল্ক (Pure Silk)
• প্রামাণিক বেনারসি কারিগরের হাতের কাজ
• Indian South Katan, Kani Jardoozi, Zari Silk Jardoozi প্রতিটি শাড়ি মানসম্পন্ন

আমরা ৩৭১K+ গ্রাহকের বিশ্বাস অর্জন করেছি এবং ৯২% গ্রাহক আমাদের Recommend করেন।`,
  },
  {
    id: "06",
    title: "Privacy ও তথ্যের নিরাপত্তা",
    content: `আপনার ব্যক্তিগত তথ্য (নাম, ফোন, ঠিকানা) শুধুমাত্র Order Process ও Delivery-র জন্য ব্যবহার করা হয়। আমরা কোনো তৃতীয় পক্ষের সাথে আপনার তথ্য শেয়ার করি না।`,
  },
  {
    id: "07",
    title: "যোগাযোগ",
    content: `যেকোনো প্রশ্ন বা সমস্যার জন্য:

Facebook: facebook.com/benarasikuthi
ফোন: ${BUSINESS.PHONE}
ইমেইল: ${BUSINESS.EMAIL}
ঠিকানা: House-17, Section-10, Block-A, Lane-7, Mirpur Benaroshi Polli, Dhaka-1221`,
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Page Header */}
      <section className="bg-[#3d0010] py-16 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#d4af37] translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/40 bg-[#d4af37]/10 text-[#f5e6c8] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full">
            আমাদের শর্তাবলী
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-heading">
            Terms & Conditions
          </h1>
          <p className="text-[#f5e6c8]/80 text-sm leading-relaxed">
            বেনারসী কুঠিতে কেনাকাটা করার আগে আমাদের শর্তাবলী পড়ুন।
          </p>
          <p className="text-[#d4af37]/60 text-xs">সর্বশেষ আপডেট: জুলাই ২০২৬</p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b border-[#e8e0d0] py-4 px-6 sticky top-[72px] z-30">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wide font-bold shrink-0 mr-2">
              বিষয়:
            </span>
            {sections.slice(0, 5).map((s) => (
              <a
                key={s.id}
                href={`#section-${s.id}`}
                className="text-[11px] text-[#5c061c] font-medium whitespace-nowrap px-3 py-1 rounded-full border border-[#5c061c]/20 hover:bg-[#5c061c]/5 transition-colors shrink-0"
              >
                {s.id}. {s.title.split(" ")[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className={`rounded-sm p-6 md:p-8 border scroll-mt-40 ${
                section.highlight
                  ? "bg-amber-50 border-amber-200 border-l-4 border-l-amber-500"
                  : "bg-white border-[#e8e0d0] border-l-4 border-l-[#5c061c]"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[11px] font-mono text-[#d4af37] font-bold bg-[#5c061c]/10 px-2 py-0.5 rounded">
                  {section.id}
                </span>
                <h2
                  className={`text-base md:text-lg font-bold ${
                    section.highlight ? "text-amber-900" : "text-[#1a0008]"
                  }`}
                >
                  {section.title}
                </h2>
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}

          {/* Acceptance Notice */}
          <div className="text-center pt-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5c061c]/5 border border-[#d4af37]/25">
              <span className="text-[#d4af37] text-sm">✦</span>
              <p className="text-xs text-[#5c061c]/70 font-medium">
                বেনারসী কুঠিতে Order করে আপনি এই Terms & Conditions-এ সম্মত হচ্ছেন
              </p>
              <span className="text-[#d4af37] text-sm">✦</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/refund-policy"
                className="text-sm text-[#5c061c] hover:underline font-semibold"
              >
                Refund & Exchange Policy →
              </Link>
              <span className="text-[#d4af37] hidden sm:inline">|</span>
              <Link
                href="/contact"
                className="text-sm text-[#5c061c] hover:underline font-semibold"
              >
                Contact Us →
              </Link>
              <span className="text-[#d4af37] hidden sm:inline">|</span>
              <Link
                href="/privacy-policy"
                className="text-sm text-[#5c061c] hover:underline font-semibold"
              >
                Privacy Policy →
              </Link>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-10 bg-[#5c061c] text-[#f5e6c8] text-xs font-bold uppercase tracking-[0.15em] rounded-sm hover:bg-[#3d0010] transition-all shadow-sm"
              >
                কেনাকাটা শুরু করুন
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
