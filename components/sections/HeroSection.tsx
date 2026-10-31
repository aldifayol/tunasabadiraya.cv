import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  CheckCircle2,
  Network,
  Laptop,
  Cpu,
  Database,
  ArrowDown,
  Building2,
} from "lucide-react";
import { INDUSTRY_SECTORS, TRUSTED_CLIENTS } from "@/data/company";

export default function HeroSection() {
  return (
    <div className="w-full relative overflow-hidden bg-surface">
      {/* HERO SECTION (ASYMMETRIC 7:5 SPLIT) */}
      <section className="max-w-[1340px] mx-auto px-4 lg:px-6 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-surface-container-low border border-border-hairline rounded-full self-start shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider font-semibold">
                MITRA REKAYASA PERANGKAT LUNAK &amp; TRANSFORMASI DIGITAL RESMI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[54px] lg:leading-[1.12] font-bold tracking-tight text-on-surface text-balance">
              Rekayasa Perangkat Lunak &amp; Arsitektur Sistem Enterprise untuk Akselerasi Bisnis Modern.
            </h1>

            {/* Lead Paragraph */}
            <p className="text-secondary text-base lg:text-lg max-w-2xl leading-relaxed">
              CV Tunas Abadi Raya merancang, membangun, dan mengelola sistem informasi kustom, aplikasi web &amp; mobile berkinerja tinggi, serta infrastruktur cloud yang aman, terukur, dan siap mendukung pertumbuhan skala korporasi.
            </p>

            {/* Dual CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#konsultasi"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-container hover:bg-brand-violet-vivid text-on-primary font-semibold text-sm rounded-lg shadow-sm hover:opacity-95 transition-all group"
              >
                <span>Konsultasi &amp; Estimasi Proyek</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-surface-container-lowest border border-border-hairline hover:bg-surface-container-low text-on-surface font-semibold text-sm rounded-lg shadow-sm transition-colors group"
              >
                <span>Pelajari Layanan &amp; Portofolio</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>

            {/* Executive Trust Strip */}
            <div className="pt-6 mt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-on-surface-variant text-xs sm:text-sm">
                <ShieldCheck className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                <span className="font-medium">Perjanjian NDA Tersedia</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs sm:text-sm">
                <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                <span className="font-medium">100% Source Code Klien</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant text-xs sm:text-sm">
                <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                <span className="font-medium">Kontrak &amp; Faktur Resmi (IDR)</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) -> Interactive Architecture Telemetry Card */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-border-hairline rounded-xl shadow-md p-6 flex flex-col gap-5">
            {/* Card Header / Meta */}
            <div className="flex items-center justify-between pb-3 border-b border-border-hairline">
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-primary-container" />
                <span className="font-mono text-xs text-on-surface font-semibold tracking-wider">
                  SYS-ARCH // TUNAS-CLOUD-CORE v4.2
                </span>
              </div>
              <div className="px-2.5 py-0.5 bg-surface-container-low border border-border-hairline rounded-full">
                <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                  99.98% SLA READY
                </span>
              </div>
            </div>

            {/* 3-Layer Visual Stack Diagram */}
            <div className="flex flex-col gap-2.5">
              {/* Layer 1 */}
              <div className="bg-surface-container-low border border-border-hairline rounded-lg p-3.5 transition-all hover:border-primary-container/50">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-secondary font-bold uppercase">
                    01 / CLIENT &amp; OMNI-CHANNEL LAYER
                  </span>
                  <Laptop className="w-4 h-4 text-secondary" />
                </div>
                <p className="font-heading text-sm text-on-surface font-semibold">
                  Next.js Web App, iOS/Android Mobile &amp; BI Portal
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-[11px] text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    TypeScript
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    Flutter / Native
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    Edge CDN
                  </span>
                </div>
              </div>

              {/* Inter-layer Flow Indicator */}
              <div className="flex items-center justify-center -my-1 text-primary-container">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Layer 2 */}
              <div className="bg-surface-container-low border border-primary-container/40 rounded-lg p-3.5 transition-all hover:border-primary-container">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-primary-container font-bold uppercase">
                    02 / CORE ENGINE &amp; PAYMENT GATEWAY
                  </span>
                  <Cpu className="w-4 h-4 text-primary-container" />
                </div>
                <p className="font-heading text-sm text-on-surface font-semibold">
                  Microservices, ERP/CRM Workflow &amp; Webhooks
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-[11px] text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    REST / GraphQL
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    Xendit/Bank VA
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    Redis Queue
                  </span>
                </div>
              </div>

              {/* Inter-layer Flow Indicator */}
              <div className="flex items-center justify-center -my-1 text-primary-container">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Layer 3 */}
              <div className="bg-surface-container-low border border-border-hairline rounded-lg p-3.5 transition-all hover:border-primary-container/50">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[11px] text-secondary font-bold uppercase">
                    03 / HA CLOUD &amp; DATA SECURITY
                  </span>
                  <Database className="w-4 h-4 text-secondary" />
                </div>
                <p className="font-heading text-sm text-on-surface font-semibold">
                  PostgreSQL Cluster, Auto-Backup &amp; RBAC
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-[11px] text-on-surface-variant">
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    Multi-AZ Storage
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    Kubernetes
                  </span>
                  <span className="px-1.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded">
                    AES-256 Auth
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Indicator */}
            <div className="pt-3 border-t border-border-hairline flex flex-col gap-2">
              <div className="flex items-center justify-between font-mono text-xs text-secondary">
                <span>SYS-METRICS</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  ALL SYSTEMS NOMINAL
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-surface-container-low border border-border-hairline rounded">
                  <div className="font-mono text-[10px] text-secondary uppercase">Deploy</div>
                  <div className="font-mono text-[12px] font-bold text-on-surface">Automated CI/CD</div>
                </div>
                <div className="p-2 bg-surface-container-low border border-border-hairline rounded">
                  <div className="font-mono text-[10px] text-secondary uppercase">Security</div>
                  <div className="font-mono text-[12px] font-bold text-on-surface">ISO/OWASP 10</div>
                </div>
                <div className="p-2 bg-surface-container-low border border-border-hairline rounded">
                  <div className="font-mono text-[10px] text-secondary uppercase">SLA</div>
                  <div className="font-mono text-[12px] font-bold text-on-surface">24/7 Monitored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE CAPABILITY & INDUSTRY MARQUEE STRIP */}
      <section className="w-full bg-surface-container-low border-y border-border-hairline py-6 shadow-xs">
        <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 shrink-0">
              <Building2 className="w-4 h-4 text-primary-container" />
              <span className="font-mono text-xs text-secondary uppercase font-bold tracking-wider">
                DIPERCAYA UNTUK SISTEM OPERASIONAL LINTAS INDUSTRI:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {INDUSTRY_SECTORS.map((sector) => (
                <span
                  key={sector}
                  className="px-3 py-1 bg-surface-container-lowest border border-border-hairline text-on-surface rounded-full font-mono text-xs font-medium shadow-xs"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          {/* Client Partner Badges */}
          <div className="pt-2 border-t border-border-hairline/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="font-mono text-[11px] text-secondary uppercase font-semibold tracking-wider shrink-0">
              KLIEN &amp; MITRA TERVERIFIKASI:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full sm:w-auto">
              {TRUSTED_CLIENTS.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest/80 border border-border-hairline transition-colors hover:bg-surface-container-lowest"
                  title={client.name}
                >
                  <div className="relative w-6 h-6 shrink-0 rounded-full overflow-hidden bg-surface-container">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xs font-semibold text-on-surface truncate">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
