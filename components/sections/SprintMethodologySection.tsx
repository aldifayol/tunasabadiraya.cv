import React from "react";
import { SPRINT_STEPS } from "@/data/company";

export default function SprintMethodologySection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface" id="metodologi">
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-surface-container-low border border-border-hairline rounded self-start">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              03 // METODOLOGI SPRINT
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            Proses Rekayasa Transparan dengan Deliverable Terukur di Setiap Tahap.
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Kami menerapkan disiplin rekayasa terstruktur guna memastikan kepatuhan jadwal rilis, kepastian fungsionalitas, serta kualitas kode standar industri.
          </p>
        </div>

        {/* 4 Horizontal Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPRINT_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-lowest border border-border-hairline rounded-xl p-6 shadow-xs flex flex-col justify-between transition-all hover:border-primary-container/40 group"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between pb-2 border-b border-border-hairline/60">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-primary-container">
                    {step.number}
                  </span>
                  <span className="font-mono text-xs text-secondary font-semibold uppercase tracking-wider">
                    {step.phase}
                  </span>
                </div>
                <h3 className="font-heading text-base font-bold text-on-surface mt-2 group-hover:text-primary-container transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverable Box */}
              <div className="mt-6 bg-surface-container-low border border-border-hairline rounded-lg p-3">
                <div className="font-mono text-[10px] text-secondary uppercase font-semibold">
                  {step.deliverableLabel}
                </div>
                <div className="font-mono text-[11px] text-on-surface font-bold mt-0.5">
                  {step.deliverableValue}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
