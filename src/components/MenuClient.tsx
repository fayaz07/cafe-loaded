"use client";

import { useState, useEffect, useRef } from "react";
import type { MenuData } from "@/types/menu";

const NON_VEG_CATEGORIES = new Set(["Non-Veg Snacks"]);
const VEG_CATEGORIES = new Set(["Veg Snacks"]);

function FoodDot({ nonVeg }: { nonVeg: boolean }) {
  return (
    <span
      aria-label={nonVeg ? "Non-vegetarian" : "Vegetarian"}
      className={`inline-flex items-center justify-center w-4 h-4 rounded-sm shrink-0
        border-[1.5px] ${nonVeg ? "border-red-500/70" : "border-emerald-500/70"}`}
    >
      <span className={`w-2 h-2 rounded-full ${nonVeg ? "bg-red-500" : "bg-emerald-500"}`} />
    </span>
  );
}

export default function MenuClient({ menu }: { menu: MenuData }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const prevIdx = useRef(0);

  const category = menu.categories[activeIdx];
  const showVegDot = VEG_CATEGORIES.has(category.name);
  const showNonVegDot = NON_VEG_CATEGORIES.has(category.name);

  // bump animKey so items re-animate on tab switch
  useEffect(() => {
    if (prevIdx.current !== activeIdx) {
      setAnimKey((k) => k + 1);
      prevIdx.current = activeIdx;
    }
  }, [activeIdx]);

  return (
    <div id="menu">
      {/* ══ Sticky tab bar ══ */}
      <div
        className="sticky top-0 z-30
                      bg-[#0d0b09]/95 backdrop-blur-md
                      border-b border-[#c9a96e]/10"
      >
        {/* Gold line */}
        <div
          className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-[#c9a96e]/25 to-transparent"
        />
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-1.5 px-4 sm:px-6 py-3 min-w-max max-w-6xl mx-auto">
            {menu.categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveIdx(i)}
                className={`
                  relative px-4 py-2.5 rounded-full text-xs font-bold
                  tracking-wide uppercase whitespace-nowrap
                  transition-all duration-300 cursor-pointer
                  ${
                    activeIdx === i
                      ? "bg-gradient-to-r from-[#b8915a] via-[#e8d5b0] to-[#b8915a] text-[#0d0b09] shadow-[0_2px_16px_rgba(201,169,110,0.35)]"
                      : "text-[#c9a96e]/50 hover:text-[#c9a96e] hover:bg-[#c9a96e]/8 border border-transparent hover:border-[#c9a96e]/15"
                  }
                `}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══ Items area ══ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Category header */}
        <div className="flex items-center gap-4 mb-8">
          {/* Icon ring */}
          <div className="relative shrink-0">
            <div
              className="absolute inset-0 rounded-2xl
                            bg-[radial-gradient(circle,_rgba(201,169,110,0.2)_0%,_transparent_70%)]
                            blur-md pointer-events-none"
            />
            <div
              className="relative w-14 h-14 rounded-2xl
                            flex items-center justify-center text-2xl
                            bg-[#141210]
                            border border-[#c9a96e]/20
                            shadow-[inset_0_1px_0_rgba(201,169,110,0.1)]"
            >
              {category.icon}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight text-[#f5f0eb]">{category.name}</h2>
            <p className="text-[#c9a96e]/40 text-xs tracking-widest uppercase mt-0.5">
              {category.items.length} items
            </p>
          </div>
          {/* Decorative line */}
          <div className="flex-1 h-px bg-gradient-to-r from-[#c9a96e]/20 to-transparent ml-4 hidden sm:block" />
        </div>

        {/* Items grid */}
        <div key={animKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {category.items.map((item, i) => (
            <div
              key={item.name}
              className="menu-item glow-gold
                group flex items-center justify-between gap-4
                bg-[#0d0b09] rounded-xl px-5 py-4
                border border-[#c9a96e]/10
                hover:border-[#c9a96e]/30
                hover:bg-[#141210]
                transition-all duration-200
                cursor-default"
              style={{ animationDelay: `${i * 35}ms` }}
            >
              <div className="flex items-center gap-3 min-w-0">
                {(showVegDot || showNonVegDot) && <FoodDot nonVeg={showNonVegDot} />}
                <span
                  className="text-[#e8d5b0]/80 text-sm font-medium truncate
                                 group-hover:text-[#f5f0eb] transition-colors duration-150"
                >
                  {item.name}
                </span>
              </div>

              {/* Price badge */}
              <div className="shrink-0 flex items-center gap-0.5">
                <span className="text-[#c9a96e] text-xs font-bold">₹</span>
                <span className="text-gold-shimmer text-sm font-black tabular-nums">
                  {item.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
