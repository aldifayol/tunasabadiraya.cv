import React from "react";
import Image from "next/image";
import { PORTFOLIO_CASES } from "@/data/company";

export default function PortfolioSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-border-hairline" id="portofolio">
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded self-start">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              04 // PORTOFOLIO &amp; STUDI KASUS
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            Implementasi Sistem Nyata yang Menggerakkan Operasional Klien.
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Contoh penerapan arsitektur perangkat lunak untuk menyelesaikan hambatan operasional nyata dengan dampak bisnis terukur.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CASES.map((item) => (
            <div
              key={item.projectCode}
              className="bg-surface-container-lowest border border-border-hairline rounded-xl shadow-xs overflow-hidden flex flex-col transition-all hover:shadow-md hover:border-primary-container/40 group"
            >
              {/* Visual Header with Real Image */}
              <div className="h-48 bg-surface-container p-4 relative overflow-hidden flex flex-col justify-between">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-35 dark:opacity-40 mix-blend-multiply dark:mix-blend-luminosity group-hover:scale-105 transition-transform duration-500"
                />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-surface-container-lowest/90 backdrop-blur-xs border border-border-hairline rounded font-mono text-[11px] text-primary-container font-bold">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 bg-surface-container-lowest/90 backdrop-blur-xs border border-border-hairline rounded font-mono text-[11px] text-on-surface font-medium">
                    {item.projectCode}
                  </span>
                </div>

                <div className="relative z-10 p-2.5 bg-surface-container-lowest/95 backdrop-blur-xs border border-border-hairline rounded-lg shadow-xs">
                  <span className="font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider block">
                    {item.impactLabel}
                  </span>
                  <span className="font-heading text-xs sm:text-sm text-on-surface font-bold block mt-0.5">
                    {item.impactMetric}
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-heading text-lg font-bold text-on-surface leading-snug group-hover:text-primary-container transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-hairline">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-surface-container border border-border-hairline rounded font-mono text-[11px] text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
