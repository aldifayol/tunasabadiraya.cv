import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/company";

export default function ServicesSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="layanan">
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-surface-container-low border border-border-hairline rounded self-start">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              01 // LAYANAN &amp; KAPABILITAS
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            Solusi Rekayasa Teknologi Terpadu Sesuai Kebutuhan Operasional Anda.
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Setiap sistem dirancang secara kustom (tailor-made) berdasarkan alur kerja unik, kepatuhan tata kelola, dan target efisiensi organisasi Anda.
          </p>
        </div>

        {/* 4-Card Persona Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-surface-container-lowest border border-border-hairline rounded-xl shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between group hover:border-primary-container/40"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-surface-container-low border border-border-hairline text-primary-container font-mono text-xs font-bold rounded">
                    {service.badge}
                  </span>
                  <span className="font-mono text-xs text-secondary">
                    {service.indexLabel}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-on-surface group-hover:text-primary-container transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-primary-container italic font-medium leading-relaxed">
                    {service.persona}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-surface-container-low border border-border-hairline text-on-surface-variant font-mono text-[11px] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-6 border-t border-border-hairline">
                <Link
                  href="/spesifikasi-legal"
                  className="flex items-center justify-between group/link"
                >
                  <span className="font-mono text-xs text-primary-container font-semibold tracking-wider group-hover/link:underline">
                    LIHAT SPESIFIKASI
                  </span>
                  <div className="w-8 h-8 rounded-full bg-surface-container-low border border-border-hairline flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary group-hover:border-primary-container transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
