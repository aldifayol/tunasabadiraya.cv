import React from "react";
import { X, CheckCircle2 } from "lucide-react";
import { CHALLENGES_MATRIX } from "@/data/company";

export default function ChallengesMatrixSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low border-y border-border-hairline" id="keunggulan">
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded self-start">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              02 // TANTANGAN &amp; SOLUSI REKAYASA
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            Mengapa Sistem Kustom Lebih Unggul Dibandingkan Perangkat Lunak Lepas-Pakai (Off-the-Shelf)?
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Bandingkan langsung batasan aplikasi generik versus kapabilitas arsitektur kustom dari Tunas Abadi Raya.
          </p>
        </div>

        {/* 2x2 Comparative Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHALLENGES_MATRIX.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest border border-border-hairline rounded-xl p-6 shadow-xs flex flex-col gap-4 transition-all hover:border-primary-container/40"
            >
              {/* Conventional Challenge */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[11px] text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">
                    Tantangan Konvensional
                  </div>
                  <p className="text-sm sm:text-base text-on-surface font-normal mt-1 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              </div>

              {/* Engineering Solution */}
              <div className="pt-4 border-t border-border-hairline flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    Solusi Rekayasa Tunas Abadi Raya
                  </div>
                  <p className="text-sm sm:text-base text-on-surface font-semibold mt-1 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
