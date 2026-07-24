import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Benarasi Kuthi | বেনারসী কুঠি",
  description:
    "Benarasi Kuthi — Bangladesh's oldest and biggest manufacturer and retailer of Benarasi Sarees. Located in Mirpur Benaroshi Polli, Dhaka. 371K+ followers, 92% customer recommend rate.",
  openGraph: {
    title: "About Us — Benarasi Kuthi",
    description:
      "Bangladesh's oldest and biggest Benarasi saree manufacturer in Mirpur Benaroshi Polli, Dhaka.",
    images: ["/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fdfaf5]">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-[#3d0010]">
        <Image
          src="/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg"
          alt="Benarasi Kuthi — Heritage Benarasi Saree Store"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d0010]/60 via-[#3d0010]/40 to-[#3d0010]/80" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
          <span className="inline-block px-4 py-1.5 border border-[#d4af37]/50 bg-[#d4af37]/10 text-[#f5e6c8] text-[10px] uppercase tracking-[0.28em] font-bold rounded-full mb-5">
            আমাদের পরিচয়
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-4 font-heading">
            Benarasi Kuthi
          </h1>
          <p className="text-[#f5e6c8] text-base md:text-lg font-medium tracking-wide">
            বেনারসী কুঠি — Mirpur Benaroshi Polli, Dhaka
          </p>
        </div>
      </section>

      {/* Tagline Banner */}
      <section className="bg-[#5c061c] py-8 px-6 text-center">
        <p className="text-[#f5e6c8] text-sm md:text-base font-semibold tracking-wide max-w-3xl mx-auto">
          ✦ &quot;One of the oldest and biggest manufacturer and retailer of Benarasi Sarees in BD!!&quot; ✦
        </p>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg">
              <Image
                src="/images/benarashi/753783459_1333816908918009_8232937019758639704_n.jpg"
                alt="Benarasi Kuthi store heritage"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-[#3d0010]/85 backdrop-blur-sm border border-[#d4af37]/30 px-4 py-2 rounded-sm">
                <p className="text-[#d4af37] text-[9px] uppercase tracking-widest font-bold">
                  House-17, Section-10, Block-A, Lane-7
                </p>
                <p className="text-white text-xs mt-0.5">Mirpur Benaroshi Polli, Dhaka-1221</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1a2a] font-bold mb-3">
                  আমাদের গল্প
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a0008] leading-tight mb-4">
                  Bangladesh&apos;s Most Trusted
                  <br />
                  <span className="italic font-normal text-[#5c061c]">Benarasi Heritage</span>
                </h2>
              </div>

              <div className="border-l-3 border-[#d4af37] pl-5 py-2">
                <p className="text-[#3d0010]/70 italic text-sm leading-relaxed">
                  মিরপুর বেনারসি পল্লী — ঢাকার বুকে বেনারসি শাড়ির ঐতিহ্যবাহী কেন্দ্র। এখানেই
                  অবস্থিত বেনারসী কুঠি — বাংলাদেশের অন্যতম প্রাচীন ও বৃহত্তম বেনারসি
                  শাড়ির প্রস্তুতকারক ও বিক্রেতা।
                </p>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  বেনারসী কুঠি শুরু থেকেই বাংলাদেশের মানুষের কাছে পিওর সিল্কের বেনারসি শাড়ি
                  পৌঁছে দেওয়ার লক্ষ্য নিয়ে কাজ করেছে। আমাদের দক্ষ কারিগরেরা ভারতীয় ও
                  দেশীয় ঐতিহ্যের সমন্বয়ে তৈরি করেন অনন্য সব শাড়ি।
                </p>
                <p>
                  Indian South Katan, Kani Jardoozi, Zari Silk Jardoozi, Samu Silk — আমাদের
                  প্রতিটি শাড়ি বিয়ে, বউভাত, হলুদসন্ধ্যা ও যেকোনো বিশেষ উপলক্ষের জন্য আদর্শ।
                  আমরা বিশ্বাস করি প্রতিটি নারী সেরাটা পাওয়ার যোগ্য।
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-5 border-t border-b border-[#d4af37]/20">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#5c061c]">371K+</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">
                    Followers
                  </p>
                </div>
                <div className="text-center border-x border-[#d4af37]/20">
                  <p className="text-2xl font-bold text-[#5c061c]">92%</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">
                    Recommend
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#5c061c]">100%</p>
                  <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-1">
                    Pure Silk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Collections Overview */}
      <section className="py-16 bg-[#f7f0e8] px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#8b1a2a] font-bold mb-3">
              আমাদের কালেকশন
            </p>
            <h2 className="text-3xl font-bold text-[#1a0008]">Our Signature Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                name: "Indian South Katan",
                desc: "Pure silk katan sarees with exquisite zari work. Starting from ৳4,000.",
                img: "/images/benarashi/753298324_1333816632251370_5295865794992845222_n.jpg",
                href: "/categories/indian-south-katan",
              },
              {
                name: "Kani Jardoozi",
                desc: "New party wear collections — handwoven with exquisite needlework craftsmanship.",
                img: "/images/benarashi/753540936_1333816615584705_5583210581735532479_n.jpg",
                href: "/categories/kani-jardoozi",
              },
              {
                name: "Zari Silk Jardoozi",
                desc: "Heavy gold zari embroidery on pure silk — perfect for biye & bouভাত.",
                img: "/images/benarashi/755364208_1333816692251364_8071345076815940643_n.jpg",
                href: "/categories/zari-silk-jardoozi",
              },
              {
                name: "Samu Silk",
                desc: "Lightweight luxury Samu Silk party wear sarees for every celebration.",
                img: "/images/benarashi/753337157_1333816712251362_3971959350426019726_n.jpg",
                href: "/collections/samu-silk",
              },
              {
                name: "Benarasi Katan",
                desc: "Heritage pure Benarasi Katan silk — the timeless choice for every occasion.",
                img: "/images/benarashi/753707261_1333817032251330_6161071301291350100_n.jpg",
                href: "/collections/benarasi-katan",
              },
              {
                name: "Bridal Collection",
                desc: "Exclusive bridal sarees for biye, holud & bouভাত — grand & luxurious.",
                img: "/images/benarashi/754224350_1333816785584688_5611948856128396534_n.jpg",
                href: "/collections/bridal-collection",
              },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative rounded-sm overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-[#e8e0d0] hover:border-[#d4af37]/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0008]/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1a0008] text-sm mb-1">{item.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a0008] mb-4">আমাদের সাথে যোগাযোগ করুন</h2>
          <p className="text-muted-foreground mb-10">
            Order করতে বা যেকোনো প্রশ্নের জন্য আমাদের Facebook Inbox করুন।
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f7f0e8] rounded-sm p-6 border border-[#d4af37]/20">
              <div className="w-10 h-10 rounded-full bg-[#5c061c]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#5c061c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a0008] text-sm mb-2">ঠিকানা</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                House-17, Section-10, Block-A, Lane-7,<br />
                Mirpur Benaroshi Polli,<br />
                Dhaka-1221, Bangladesh
              </p>
            </div>

            <div className="bg-[#f7f0e8] rounded-sm p-6 border border-[#d4af37]/20">
              <div className="w-10 h-10 rounded-full bg-[#5c061c]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#5c061c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a0008] text-sm mb-2">ফোন</h3>
              <a
                href="tel:+8801971380319"
                className="text-xs text-[#5c061c] font-semibold hover:underline"
              >
                +880 1971-380319
              </a>
            </div>

            <div className="bg-[#f7f0e8] rounded-sm p-6 border border-[#d4af37]/20">
              <div className="w-10 h-10 rounded-full bg-[#5c061c]/10 flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-[#5c061c]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#1a0008] text-sm mb-2">Facebook</h3>
              <a
                href="https://www.facebook.com/benarasikuthi/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#5c061c] font-semibold hover:underline"
              >
                Inbox করুন
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-10 bg-[#5c061c] text-[#f5e6c8] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#3d0010] transition-all rounded-sm shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
