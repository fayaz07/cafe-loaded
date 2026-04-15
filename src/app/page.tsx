import Image from "next/image";
import { getMenu } from "@/lib/menu";
import MenuClient from "@/components/MenuClient";

// ISR: revalidate this page at most once every 24 hours
export const revalidate = 86400;

export default async function Home() {
  const menu = await getMenu();

  return (
    <div className="grain min-h-screen bg-[#080706] text-[#f5f0eb] relative">
      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-5 sm:px-8 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo mark */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.webp"
              alt="Cafe Loaded"
              width={38}
              height={38}
              className="rounded-full ring-1 ring-[#c9a96e]/30"
              priority
            />
            <span className="text-base font-black tracking-tight">
              Cafe <span className="text-gold-shimmer">Loaded</span>
            </span>
          </div>
          <a
            href="#menu"
            className="
              text-xs font-semibold tracking-widest uppercase
              text-[#c9a96e]/70 hover:text-[#e8d5b0]
              border border-[#c9a96e]/20 hover:border-[#c9a96e]/50
              px-4 py-2 rounded-full
              transition-all duration-300
            "
          >
            Menu ↓
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-4">
        {/* ── Background radial gradients ── */}
        <div className="absolute inset-0 bg-[#080706]" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px]
                        bg-[radial-gradient(ellipse_at_top,_rgba(201,169,110,0.10)_0%,_transparent_65%)]
                        pointer-events-none"
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px]
                        bg-[radial-gradient(ellipse_at_bottom-left,_rgba(201,169,110,0.06)_0%,_transparent_60%)]
                        pointer-events-none"
        />
        <div
          className="absolute top-1/3 right-0 w-[400px] h-[400px]
                        bg-[radial-gradient(ellipse_at_right,_rgba(139,90,43,0.08)_0%,_transparent_60%)]
                        pointer-events-none"
        />

        {/* ── Floating particles ── */}
        {[
          { w: 3, h: 3, l: "15%", t: "70%", dur: "6s", del: "0s" },
          { w: 2, h: 2, l: "25%", t: "80%", dur: "8s", del: "1s" },
          { w: 4, h: 4, l: "40%", t: "85%", dur: "7s", del: "2s" },
          { w: 2, h: 2, l: "60%", t: "75%", dur: "9s", del: "0.5s" },
          { w: 3, h: 3, l: "75%", t: "82%", dur: "6.5s", del: "3s" },
          { w: 2, h: 2, l: "85%", t: "78%", dur: "7.5s", del: "1.5s" },
        ].map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{
              width: p.w,
              height: p.h,
              left: p.l,
              top: p.t,
              animationDuration: p.dur,
              animationDelay: p.del,
              opacity: 0,
            }}
          />
        ))}

        {/* ── Decorative spinning rings ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div
            className="spin-slow w-[520px] h-[520px] rounded-full
                          border border-dashed border-[#c9a96e]/8"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
          <div
            className="spin-slow-rev w-[680px] h-[680px] rounded-full
                          border border-[#8a6a3a]/10"
          />
        </div>

        {/* ── Hero content ── */}
        <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
          {/* Logo */}
          <div className="animate-fade-up relative mb-8">
            {/* Glow under logo */}
            <div
              className="absolute inset-0 rounded-full
                            bg-[radial-gradient(circle,_rgba(201,169,110,0.25)_0%,_transparent_70%)]
                            blur-2xl scale-150 pointer-events-none"
            />
            <Image
              src="/logo.webp"
              alt="Cafe Loaded"
              width={200}
              height={200}
              className="relative rounded-full
                         ring-2 ring-[#c9a96e]/40
                         shadow-[0_0_60px_rgba(201,169,110,0.18)]
                         hover:ring-[#c9a96e]/70
                         hover:shadow-[0_0_90px_rgba(201,169,110,0.30)]
                         transition-all duration-500"
              priority
            />
          </div>

          {/* Premium badge */}
          <div
            className="animate-fade-up-1 inline-flex items-center gap-2
                          border border-[#c9a96e]/25 rounded-full
                          px-5 py-1.5 mb-6
                          bg-[#c9a96e]/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
            <span className="text-[#c9a96e] text-[11px] font-bold tracking-[0.2em] uppercase">
              Premium Quality · Keep Loading
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9a96e] animate-pulse" />
          </div>

          {/* Title */}
          <h1
            className="animate-fade-up-2 text-6xl sm:text-7xl lg:text-[88px] font-black
                         tracking-tighter leading-[0.9] mb-4"
          >
            <span className="text-[#f5f0eb]">Cafe</span>
            <br />
            <span className="text-gold-shimmer">Loaded</span>
          </h1>

          <p
            className="animate-fade-up-3 text-[#c9a96e]/60 text-base sm:text-lg
                        tracking-widest uppercase font-medium mb-3 mt-2"
          >
            ★ Fast Food · Coffee · Beverages ★
          </p>
          <p className="animate-fade-up-3 text-[#f5f0eb]/30 text-sm mb-10">
            Fresh flavors, great vibes — right around the corner.
          </p>

          {/* CTA */}
          <a
            href="#menu"
            className="
              animate-fade-up-4
              inline-flex items-center gap-3
              bg-gradient-to-r from-[#b8915a] via-[#e8d5b0] to-[#b8915a]
              bg-[length:200%_auto]
              hover:bg-right
              text-[#0d0b09] font-bold text-sm tracking-wider uppercase
              px-9 py-4 rounded-full
              transition-all duration-500
              shadow-[0_4px_30px_rgba(201,169,110,0.35)]
              hover:shadow-[0_6px_40px_rgba(201,169,110,0.55)]
              hover:scale-[1.04]
            "
          >
            Explore Menu
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        {/* ── Scroll indicator ── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30">
          <span className="text-[10px] tracking-widest uppercase text-[#c9a96e]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#c9a96e] to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURE STRIP
      ══════════════════════════════════════ */}
      <div className="relative border-y border-[#c9a96e]/10 bg-[#0d0b09]">
        {/* Gold line top */}
        <div
          className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent"
        />
        <div
          className="max-w-6xl mx-auto px-4
                        grid grid-cols-3 divide-x divide-[#c9a96e]/10"
        >
          {[
            { icon: "🍔", label: "Fast Food", sub: "Crispy & Fresh" },
            { icon: "☕", label: "Coffee & Tea", sub: "Freshly Brewed" },
            { icon: "🥤", label: "Beverages", sub: "Cool & Loaded" },
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center py-6 px-3 text-center group">
              <span
                className="text-3xl mb-2 select-none
                               transition-transform duration-300 group-hover:scale-110"
              >
                {f.icon}
              </span>
              <span className="text-[#e8d5b0] font-semibold text-sm">{f.label}</span>
              <span className="text-[#c9a96e]/40 text-xs mt-0.5">{f.sub}</span>
            </div>
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent"
        />
      </div>

      {/* ══════════════════════════════════════
          MENU SECTION
      ══════════════════════════════════════ */}
      <div className="relative">
        {/* Section heading */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-6 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#c9a96e]/50 mb-2">
            — Our Menu —
          </p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#f5f0eb]">
            What&apos;s <span className="text-gold-shimmer">Loaded</span> Today
          </h2>
        </div>

        <MenuClient menu={menu} />
      </div>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="relative border-t border-[#c9a96e]/10 py-12 px-4">
        <div
          className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-[#c9a96e]/25 to-transparent"
        />
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.webp"
              alt="Cafe Loaded"
              width={44}
              height={44}
              className="rounded-full ring-1 ring-[#c9a96e]/25 opacity-80"
            />
            <span className="text-base font-black tracking-tight">
              Cafe <span className="text-gold-shimmer">Loaded</span>
            </span>
          </div>
          <p className="text-[#c9a96e]/30 text-xs tracking-widest uppercase">
            Fast Food · Coffee · Beverages
          </p>
          <p className="text-[#f5f0eb]/15 text-xs">
            © {new Date().getFullYear()} Cafe Loaded. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
