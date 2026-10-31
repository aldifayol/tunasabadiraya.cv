import React from "react";
import Link from "next/link";
import { Check, CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck, Lock } from "lucide-react";
import { PROJECT_TIERS } from "@/data/company";

export default function ProjectSchemesSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="skema-proyek">
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-surface-container-low border border-border-hairline rounded self-start">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              05 // SKEMA &amp; PAKET PROYEK
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            Skema Investasi Pembangunan Sistem yang Jelas, Terstruktur &amp; Berbasis Milestone.
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Seluruh layanan pengembangan perangkat lunak dikerjakan berdasarkan kontrak kerja resmi dan spesifikasi ruang lingkup (Scope of Work) yang disepakati bersama.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PROJECT_TIERS.map((tier) => {
            const isGrowth = tier.recommended;

            return (
              <div
                key={tier.tierCode}
                className={`bg-surface-container-lowest border rounded-xl p-8 shadow-xs flex flex-col justify-between transition-all ${
                  isGrowth
                    ? "relative ring-2 ring-primary-container border-primary-container shadow-md"
                    : "border-border-hairline hover:border-primary-container/40"
                }`}
              >
                {/* Growth Recommended Badge */}
                {isGrowth && tier.recommendedBadge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-container text-on-primary font-mono text-[10px] sm:text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm whitespace-nowrap">
                    {tier.recommendedBadge}
                  </div>
                )}

                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider ${
                        isGrowth ? "text-primary-container" : "text-secondary"
                      }`}
                    >
                      {tier.tierCode}
                    </span>
                    <span
                      className={`px-2 py-0.5 font-mono text-[11px] rounded font-medium border ${
                        isGrowth
                          ? "bg-primary-container text-on-primary border-primary-container"
                          : "bg-surface-container-low text-secondary border-border-hairline"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-on-surface">
                      {tier.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-secondary mt-1 leading-relaxed">
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-4 bg-surface-container-low border border-border-hairline rounded-lg px-4">
                    <div className="font-mono text-xs text-secondary">
                      {tier.priceLabel}
                    </div>
                    <div
                      className={`font-heading text-2xl sm:text-3xl font-bold mt-1 ${
                        isGrowth ? "text-primary-container" : "text-on-surface"
                      }`}
                    >
                      {tier.priceValue}
                    </div>
                    <div className="text-xs text-secondary mt-1">
                      {tier.timeline}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="flex flex-col gap-3 pt-2">
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface"
                      >
                        {isGrowth ? (
                          <CheckCircle2 className="w-4 h-4 text-primary-container shrink-0 mt-0.5" />
                        ) : (
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        )}
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <Link
                    href="#konsultasi"
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold text-sm transition-all shadow-xs ${
                      isGrowth
                        ? "bg-primary-container hover:bg-brand-violet-vivid text-on-primary hover:opacity-95"
                        : "bg-surface-container-low hover:bg-surface-container border border-border-hairline text-on-surface"
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    {isGrowth ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Xendit Compliance & Payment Transparency Banner */}
        <div className="bg-surface-container-low border border-border-hairline rounded-xl p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 rounded-lg bg-surface-container-lowest border border-border-hairline flex items-center justify-center text-primary-container shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-primary-container" />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-heading text-base sm:text-lg font-bold text-on-surface">
                Transparansi Kontrak, Termin Pembayaran &amp; Faktur Resmi (IDR)
              </h4>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Setiap proyek dilengkapi dengan Perjanjian Kerja Sama (PKS), rincian Scope of Work (SoW), dan penagihan bertahap (Milestone Billing) dalam mata uang Rupiah (IDR). Pembayaran diproses secara aman melalui saluran perbankan resmi dan infrastruktur Payment Gateway terverifikasi (Virtual Account Bank, QRIS, dan Transfer Korporasi) atas nama resmi <strong>CV Tunas Abadi Raya</strong>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center font-mono text-[11px] text-on-surface-variant bg-surface-container-lowest border border-border-hairline px-4 py-2.5 rounded-lg shadow-xs">
            <Lock className="w-4 h-4 text-emerald-500" />
            <span className="font-semibold">REGULATED IDR BILLING // ZERO HIDDEN FEES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
