"use client";

import * as React from "react";
import Link from "next/link";
import {
  FileText,
  RotateCcw,
  Shield,
  ShieldCheck,
  ChevronRight,
  Building2,
  CheckCircle2,
  Scale,
  Receipt,
  Mail,
  Printer,
} from "lucide-react";

export type LegalTab = "tos" | "refund" | "privacy" | "sla";

interface LegalCompliancePortalProps {
  initialTab?: LegalTab;
}

export default function LegalCompliancePortal({
  initialTab = "tos",
}: LegalCompliancePortalProps) {
  const [activeTab, setActiveTab] = React.useState<LegalTab>(initialTab);

  // Sync if initialTab prop changes
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  const handlePrintPdf = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="w-full flex flex-col bg-surface text-on-surface">
      {/* Top Breadcrumb & Status Ribbon */}
      <section className="w-full bg-surface-container-low border-b border-border-hairline shadow-xs">
        <div className="max-w-[1340px] mx-auto px-4 lg:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-sm text-secondary">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span className="text-secondary/40 font-mono">/</span>
            <Link href="/#layanan" className="hover:text-primary transition-colors">
              Layanan &amp; Kapabilitas
            </Link>
            <span className="text-secondary/40 font-mono">/</span>
            <span className="font-medium text-on-surface">
              Spesifikasi Teknis &amp; Alur Kontrak
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-lowest rounded-full border border-border-hairline text-on-surface shadow-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] font-medium tracking-wide">
                ISO/IEC 25010 &amp; UU PDP ALIGNED
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-on-surface-variant">
              <span>PORTAL ID:</span>
              <span className="text-primary font-bold">LEGAL-TAR-2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section 01: Header and Core Specifications */}
      <section className="w-full py-12 lg:py-16">
        <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-10 lg:gap-12">
          {/* Section Hero Header */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="px-2.5 py-1 bg-primary text-on-primary rounded font-mono text-xs font-semibold tracking-wider">
                01 · SPESIFIKASI &amp; TATA KELOLA KONTRAK
              </div>
              <span className="font-mono text-xs text-secondary">
                CV TUNAS ABADI RAYA COMPLIANCE
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-on-surface font-bold tracking-tight leading-tight">
              Standar Deliverables, Alur Pembayaran Milestone &amp; Jaminan Kualitas (SLA)
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Transparansi alur kerja rekayasa perangkat lunak, jaminan hak kekayaan intelektual (HAKI), serta kepatuhan pemrosesan transaksi komersial resmi CV Tunas Abadi Raya yang beroperasi dengan legalitas berbadan hukum Indonesia.
            </p>
          </div>

          {/* 3-Column Deliverable & Governance Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Arsitektur & Dokumentasi Teknis */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl border border-border-hairline p-6 lg:p-8 justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-surface-container rounded font-mono text-xs text-primary font-semibold">
                    DOC-SPEC // STANDAR TINGGI
                  </span>
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-heading text-xl font-bold text-on-surface">
                    Arsitektur &amp; Dokumentasi Teknis
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Pondasi terstruktur dengan dokumentasi baku industri untuk kemudahan audit dan transfer pengetahuan.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 pt-2 text-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Penyusunan Dokumen PRD (Product Requirement Document) detail dan terukur</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Skema Database &amp; Relasi (ERD) dan kamus data komprehensif</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>API Documentation interaktif (Swagger / OpenAPI 3.0)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Arsitektur Diagram Cloud Topology (AWS, Google Cloud, atau Bare-Metal)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between bg-surface-container-low px-4 py-3 rounded-lg border border-border-hairline">
                <span className="font-mono text-xs text-on-surface font-semibold">
                  PENYERAHAN SUMBER:
                </span>
                <span className="px-2 py-0.5 bg-primary text-on-primary font-mono text-xs rounded font-medium">
                  100% Repositori Git &amp; CI/CD
                </span>
              </div>
            </div>

            {/* Card 2: Mekanisme Pembayaran Resmi (IDR) */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl border border-border-hairline p-6 lg:p-8 justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-surface-container rounded font-mono text-xs text-primary font-semibold">
                    BILLING // MILESTONE-BASED
                  </span>
                  <Receipt className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-heading text-xl font-bold text-on-surface">
                    Mekanisme Pembayaran Resmi (IDR)
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Skema pembayaran bertahap proporsional berdasarkan pencapaian milestone fungsional terverifikasi.
                  </p>
                </div>
                <div className="flex flex-col gap-2.5 pt-1">
                  <div className="bg-surface-container-low p-3 rounded-lg border border-border-hairline flex flex-col gap-1">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-on-surface">Termin 1 · Uang Muka</span>
                      <span className="font-mono text-primary font-bold">30% (IDR)</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Inisiasi Proyek, Desain UI/UX &amp; Arsitektur Database.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg border border-border-hairline flex flex-col gap-1">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-on-surface">Termin 2 · UAT &amp; Staging</span>
                      <span className="font-mono text-primary font-bold">40% (IDR)</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Pengembangan Backend/Frontend &amp; Validasi Staging Lingkungan.
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-3 rounded-lg border border-border-hairline flex flex-col gap-1">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-on-surface">Termin 3 · Serah Terima</span>
                      <span className="font-mono text-primary font-bold">30% (IDR)</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Deployment Server Produksi, Pelatihan &amp; Serah Terima Final.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2 bg-surface-container p-3 rounded-lg border border-border-hairline text-sm text-on-surface">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-xs">Kepatuhan Gateway &amp; e-Invoice</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-tight">
                  Faktur resmi CV Tunas Abadi Raya diproses via Payment Gateway berlisensi Bank Indonesia (Virtual Account, QRIS &amp; Transfer Perusahaan).
                </p>
              </div>
            </div>

            {/* Card 3: Jaminan Garansi, HAKI & SLA */}
            <div className="flex flex-col bg-surface-container-lowest rounded-xl border border-border-hairline p-6 lg:p-8 justify-between shadow-xs hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-surface-container rounded font-mono text-xs text-primary font-semibold">
                    WARRANTY // LEGAL ASSURANCE
                  </span>
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-heading text-xl font-bold text-on-surface">
                    Jaminan Garansi, HAKI &amp; SLA
                  </h2>
                  <p className="text-sm text-on-surface-variant">
                    Proteksi aset dan operasional enterprise dengan klausul hukum perlindungan kekayaan intelektual penuh.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 pt-2 text-sm text-on-surface">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-on-surface">100% Kepemilikan Penuh HAKI:</strong> Hak cipta kode sumber dialihkan sepenuhnya kepada klien setelah pelunasan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-on-surface">Garansi Bug Pasca-Peluncuran:</strong> Perbaikan bug fungsional gratis selama 30 hingga 90 hari kalender.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-on-surface">SLA Server Hingga 99.9%:</strong> Kontrak pemeliharaan infrastruktur komputasi awan bergaransi operasional tinggi.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-on-surface">Bilateral NDA:</strong> Perjanjian kerahasiaan data bisnis &amp; keamanan siber berkekuatan hukum formal.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between bg-surface-container-low px-4 py-3 rounded-lg border border-border-hairline">
                <span className="font-mono text-xs text-on-surface font-semibold">
                  PERJANJIAN KERJASAMA:
                </span>
                <span className="px-2 py-0.5 bg-primary text-on-primary font-mono text-xs rounded font-medium">
                  AKTA NOTARIS &amp; MATERAI RESMI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Section 02: Legal & Policy Compliance Reader */}
      <section className="w-full pb-20 pt-4 bg-surface">
        <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-8">
          {/* Section Heading */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="px-2.5 py-1 bg-primary text-on-primary rounded font-mono text-xs font-semibold tracking-wider">
                02 · REGULASI &amp; KEBIJAKAN KEPATUHAN RESMI
              </div>
              <span className="font-mono text-xs text-secondary">
                XENDIT COMPLIANCE &amp; LEGAL DIRECTIVES
              </span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
                Dokumentasi Hukum &amp; Kepatuhan Transaksi Komersial
              </h2>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                YURISDIKSI: REPUBLIK INDONESIA · KOTA MANADO
              </span>
            </div>
          </div>

          {/* Split Layout: Left Sticky Navigation & Right Reader Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar Navigation (col-span-4) */}
            <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-[96px]">
              {/* Interactive Navigation Tabs */}
              <div className="flex flex-col gap-2 bg-surface-container-lowest p-3 rounded-xl border border-border-hairline shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab("tos")}
                  className={`w-full text-left px-4 py-3.5 rounded-lg flex items-center justify-between transition-all font-semibold text-sm ${
                    activeTab === "tos"
                      ? "bg-primary-container text-white shadow-xs"
                      : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <FileText className={`w-5 h-5 ${activeTab === "tos" ? "text-white" : "text-secondary"}`} />
                    <span>Syarat &amp; Ketentuan Layanan</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeTab === "tos" ? "text-white" : "text-secondary"}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("refund")}
                  className={`w-full text-left px-4 py-3.5 rounded-lg flex items-center justify-between transition-all font-semibold text-sm ${
                    activeTab === "refund"
                      ? "bg-primary-container text-white shadow-xs"
                      : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <RotateCcw className={`w-5 h-5 ${activeTab === "refund" ? "text-white" : "text-secondary"}`} />
                    <span>Kebijakan Pengembalian Dana</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeTab === "refund" ? "text-white" : "text-secondary"}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("privacy")}
                  className={`w-full text-left px-4 py-3.5 rounded-lg flex items-center justify-between transition-all font-semibold text-sm ${
                    activeTab === "privacy"
                      ? "bg-primary-container text-white shadow-xs"
                      : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Shield className={`w-5 h-5 ${activeTab === "privacy" ? "text-white" : "text-secondary"}`} />
                    <span>Kebijakan Privasi &amp; Data</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeTab === "privacy" ? "text-white" : "text-secondary"}`} />
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("sla")}
                  className={`w-full text-left px-4 py-3.5 rounded-lg flex items-center justify-between transition-all font-semibold text-sm ${
                    activeTab === "sla"
                      ? "bg-primary-container text-white shadow-xs"
                      : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <ShieldCheck className={`w-5 h-5 ${activeTab === "sla" ? "text-white" : "text-secondary"}`} />
                    <span>Standar Keamanan, HAKI &amp; SLA</span>
                  </span>
                  <ChevronRight className={`w-4 h-4 ${activeTab === "sla" ? "text-white" : "text-secondary"}`} />
                </button>
              </div>

              {/* Corporate Legal Badge Box */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-border-hairline shadow-xs flex flex-col gap-4">
                <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold">
                  <Building2 className="w-4 h-4" />
                  <span>IDENTITAS ENTITAS USAHA</span>
                </div>

                <div className="flex flex-col gap-3 text-sm text-on-surface">
                  <div className="flex flex-col">
                    <span className="text-secondary text-[11px] font-mono">NAMA PERUSAHAAN:</span>
                    <span className="font-bold text-on-surface">CV Tunas Abadi Raya</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondary text-[11px] font-mono">DOMAIN RESMI:</span>
                    <span className="font-mono text-primary font-medium">tunasabadiraya.cloud</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondary text-[11px] font-mono">SURAT ELEKTRONIK KORESPONDENSI:</span>
                    <a
                      href="mailto:fayol@tunasabadiraya.cloud"
                      className="font-medium text-primary hover:underline"
                    >
                      fayol@tunasabadiraya.cloud
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-secondary text-[11px] font-mono">ALAMAT DOMISILI HUKUM:</span>
                    <span className="text-on-surface leading-tight text-xs sm:text-sm">
                      Malalayang Satu Timur, Kecamatan Malalayang, Kota Manado, Sulawesi Utara, Indonesia
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-surface-container-low rounded-lg border border-border-hairline text-xs text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface">Keterangan Resmi:</strong> Entitas badan usaha persekutuan komanditer terdaftar resmi di Kementerian Hukum dan HAM Republik Indonesia untuk kegiatan konsultansi teknologi informasi, pengembangan perangkat lunak terintegrasi, dan pengelolaan sistem komputasi awan berizin.
                </div>
              </div>
            </aside>

            {/* Right Document Reader Panel (col-span-8) */}
            <div className="lg:col-span-8 bg-surface-container-lowest p-6 sm:p-10 rounded-xl border border-border-hairline shadow-xs flex flex-col gap-8">
              {/* TAB 1: TOS */}
              {activeTab === "tos" && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 bg-surface-container-low p-4 rounded-lg border border-border-hairline">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-primary font-semibold">
                        DOC-REF: TAR-LGL-TOS-2026-01
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl text-on-surface font-bold">
                        Syarat &amp; Ketentuan Layanan Rekayasa Perangkat Lunak
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 bg-surface text-secondary font-mono text-xs rounded border border-border-hairline">
                      Revisi: Januari 2026
                    </span>
                  </div>

                  <div className="flex flex-col gap-8 text-sm sm:text-base text-on-surface leading-relaxed">
                    {/* Clause 1 */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-surface-container text-primary font-mono text-xs rounded">
                          01
                        </span>
                        Definisi &amp; Ruang Lingkup Layanan
                      </h4>
                      <p className="text-on-surface-variant pl-4 sm:pl-8">
                        CV Tunas Abadi Raya (selanjutnya disebut &quot;Perusahaan&quot;) bertindak sebagai penyedia jasa profesional untuk rekayasa perangkat lunak kustom, pengembangan aplikasi berbasis web dan mobile, integrasi antarmuka pemrograman aplikasi (API), serta arsitektur komputasi awan. Seluruh pengerjaan berpedoman ketat pada Dokumen Lingkup Kerja (<em>Scope of Work / SoW</em>) yang disepakati secara tertulis oleh kedua belah pihak sebelum inisiasi proyek dimulai. Penambahan atau perubahan fitur di luar SoW akan diatur melalui mekanisme <em>Change Request Order (CRO)</em> terpisah.
                      </p>
                    </div>

                    {/* Clause 2 */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-surface-container text-primary font-mono text-xs rounded">
                          02
                        </span>
                        Penawaran Harga, Mata Uang &amp; Pembayaran Milestone (IDR)
                      </h4>
                      <p className="text-on-surface-variant pl-4 sm:pl-8">
                        Seluruh estimasi biaya, tagihan, dan transaksi resmi ditetapkan dalam mata uang <strong>Rupiah Indonesia (IDR)</strong>. Pembayaran wajib disalurkan melalui rekening korporasi resmi CV Tunas Abadi Raya atau melalui kanal Payment Gateway berlisensi Bank Indonesia (Xendit) yang ditunjuk secara sah. Setiap tahapan pembayaran terbagi atas milestone termin: <strong>Termin I (30%)</strong> saat persetujuan proposal dan desain, <strong>Termin II (40%)</strong> saat selesainya tahap integrasi dan UAT staging, serta <strong>Termin III (30%)</strong> saat migrasi server produksi dan serah terima aset. Faktur resmi elektronik (e-Invoice) dan faktur pajak diterbitkan pada setiap tagihan termin.
                      </p>
                    </div>

                    {/* Clause 3 */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-surface-container text-primary font-mono text-xs rounded">
                          03
                        </span>
                        Kebijakan Pembatalan Proyek &amp; Pengembalian Dana (Refund Policy)
                      </h4>
                      <p className="text-on-surface-variant pl-4 sm:pl-8">
                        Sesuai dengan standar kepatuhan mitra gerbang pembayaran dan etika perdagangan komersial, permohonan pembatalan proyek sebelum dimulainya proses desain dan rekayasa berhak memperoleh pengembalian dana setelah dipotong biaya inisiasi administratif maksimal 10% dari Termin I. Apabila proyek telah memasuki tahap eksekusi kode, pengembalian dana dilakukan secara proporsional berdasarkan sisa milestone deliverable yang belum dikerjakan dan belum disetujui dalam berita acara serah terima. Milestone yang telah disetujui tidak dapat dibatalkan atau dikembalikan.
                      </p>
                    </div>

                    {/* Clause 4 */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-surface-container text-primary font-mono text-xs rounded">
                          04
                        </span>
                        Hak Kekayaan Intelektual (HAKI) &amp; Kepemilikan Kode Sumber
                      </h4>
                      <p className="text-on-surface-variant pl-4 sm:pl-8">
                        Perusahaan menjamin bahwa setelah pelunasan seluruh kewajiban pembayaran (Termin I, II, dan III), <strong>100% hak kekayaan intelektual atas kode sumber (source code), skema basis data, dan dokumentasi arsitektur beralih mutlak kepada Klien</strong>. CV Tunas Abadi Raya melepaskan segala klaim royalti masa depan atas sistem yang dibangun secara khusus untuk Klien, kecuali modul pustaka pihak ketiga berlisensi sumber terbuka (open-source MIT/Apache) yang diikutsertakan.
                      </p>
                    </div>

                    {/* Clause 5 */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-surface-container text-primary font-mono text-xs rounded">
                          05
                        </span>
                        Kerahasiaan Informasi (NDA) &amp; Keamanan Data
                      </h4>
                      <p className="text-on-surface-variant pl-4 sm:pl-8">
                        Perusahaan berkomitmen menjaga kerahasiaan seluruh informasi bisnis, data mentah, dan rahasia dagang Klien yang diberikan selama masa kontrak kerja sama. Komitmen ini tunduk pada Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022). Perusahaan tidak akan membagikan, menyewakan, atau mendistribusikan kredensial server, data pelanggan, atau akses infrastruktur kepada pihak ketiga manapun tanpa izin tertulis eksplisit dari Klien.
                      </p>
                    </div>

                    {/* Clause 6 */}
                    <div className="flex flex-col gap-2">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-surface-container text-primary font-mono text-xs rounded">
                          06
                        </span>
                        Penyelesaian Sengketa &amp; Yurisdiksi Hukum
                      </h4>
                      <p className="text-on-surface-variant pl-4 sm:pl-8">
                        Perjanjian ini diatur dan ditafsirkan berdasarkan hukum Negara Kesatuan Republik Indonesia. Setiap perselisihan atau perbedaan penafsiran yang timbul dari pelaksanaan kontrak kerja sama diselesaikan terlebih dahulu melalui musyawarah untuk mencapai mufakat dalam jangka waktu 30 (tiga puluh) hari kalender. Apabila musyawarah tidak mencapai mufakat, para pihak sepakat untuk memilih domisili hukum yang tetap dan tidak berubah di <strong>Kepaniteraan Pengadilan Negeri Manado, Sulawesi Utara</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: REFUND */}
              {activeTab === "refund" && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 bg-surface-container-low p-4 rounded-lg border border-border-hairline">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-primary font-semibold">
                        DOC-REF: TAR-LGL-REF-2026-02
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl text-on-surface font-bold">
                        Kebijakan Pengembalian Dana &amp; Pembatalan (Refund Policy)
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 bg-surface text-secondary font-mono text-xs rounded border border-border-hairline">
                      Standar Kepatuhan Payment Gateway
                    </span>
                  </div>

                  <div className="flex flex-col gap-6 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    <p>
                      CV Tunas Abadi Raya menerapkan standar kepatuhan tinggi untuk pemrosesan dana Klien. Sebagai entitas penyedia jasa profesional <em>custom software engineering</em>, kami menetapkan ketentuan pembatalan dan restitusi dana sebagai berikut:
                    </p>

                    <div className="bg-surface-container-low p-5 rounded-xl border border-border-hairline flex flex-col gap-2.5">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-on-surface">
                        1. Pembatalan Pra-Pengerjaan (Tahap Persiapan)
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Apabila Klien mengajukan pembatalan resmi maksimal dalam kurun waktu 3 (tiga) hari kerja sejak pembayaran Termin 1 dilakukan, dan tim teknis belum memulai tahap penyusunan UI/UX atau arsitektur kode, Klien berhak atas pengembalian dana penuh dikurangi biaya administrasi pemrosesan perbankan sebesar 10%.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-5 rounded-xl border border-border-hairline flex flex-col gap-2.5">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-on-surface">
                        2. Pembatalan Selama Masa Pengembangan Aktif
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Jika pembatalan diajukan di tengah siklus pengerjaan, dana yang telah dialokasikan pada milestone yang telah selesai (dan disetujui dalam dokumen Berita Acara UAT) tidak dapat dikembalikan. Sisa dana dari milestone berikutnya yang belum dikerjakan akan dikembalikan ke rekening pengirim awal Klien dalam waktu <strong>7–14 hari kerja bank</strong>.
                      </p>
                    </div>

                    <div className="bg-surface-container-low p-5 rounded-xl border border-border-hairline flex flex-col gap-2.5">
                      <h4 className="font-heading text-base sm:text-lg font-bold text-on-surface">
                        3. Prosedur Klaim Pengembalian Dana
                      </h4>
                      <p className="text-sm text-on-surface-variant">
                        Pengajuan klaim wajib dikirimkan secara tertulis melalui email resmi{" "}
                        <a
                          href="mailto:fayol@tunasabadiraya.cloud"
                          className="text-primary font-semibold hover:underline"
                        >
                          fayol@tunasabadiraya.cloud
                        </a>{" "}
                        dengan melampirkan: (a) Bukti invoice dan receipt pembayaran resmi Xendit/Bank, (b) Surat pengantar pembatalan bertanda tangan penanggung jawab proyek, dan (c) Rekening koran bank yang sesuai dengan nama entitas pembayar.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PRIVACY */}
              {activeTab === "privacy" && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 bg-surface-container-low p-4 rounded-lg border border-border-hairline">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-primary font-semibold">
                        DOC-REF: TAR-LGL-PRV-2026-03
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl text-on-surface font-bold">
                        Kebijakan Privasi &amp; Perlindungan Data Konsumen
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 bg-surface text-secondary font-mono text-xs rounded border border-border-hairline">
                      Kepatuhan UU No. 27/2022 (UU PDP)
                    </span>
                  </div>

                  <div className="flex flex-col gap-6 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    <p>
                      Kebijakan Privasi ini menjelaskan bagaimana CV Tunas Abadi Raya mengumpulkan, menggunakan, melindungi, dan mengelola informasi rahasia serta data transaksi Anda saat mengakses platform <strong>tunasabadiraya.cloud</strong> maupun saat menjalin kerja sama pengembangan aplikasi.
                    </p>

                    <div className="flex flex-col gap-4">
                      <div className="p-4 bg-surface-container-low rounded-lg border border-border-hairline">
                        <h4 className="font-heading text-base font-bold text-on-surface mb-1">
                          Pengumpulan Data Transaksi Komersial
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Kami mengumpulkan nama entitas perusahaan, NPWP, nomor kontak resmi, alamat korespondensi, dan log transaksi pembayaran semata-mata untuk keperluan legalitas faktur e-Invoice dan verifikasi perbankan melalui gerbang pembayaran berizin.
                        </p>
                      </div>

                      <div className="p-4 bg-surface-container-low rounded-lg border border-border-hairline">
                        <h4 className="font-heading text-base font-bold text-on-surface mb-1">
                          Penyimpanan &amp; Kedaulatan Data
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Seluruh repositori dan data pengerjaan Klien disimpan di server dengan enkripsi AES-256 saat istirahat (at-rest) dan TLS 1.3 saat transit. Kami tidak pernah memperjualbelikan atau memberikan profil teknis kepada pihak pengiklan luar.
                        </p>
                      </div>

                      <div className="p-4 bg-surface-container-low rounded-lg border border-border-hairline">
                        <h4 className="font-heading text-base font-bold text-on-surface mb-1">
                          Pemberitahuan Insiden Keamanan
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Dalam skenario anomali atau upaya pelanggaran data terhadap lingkungan staging atau produksi yang dikelola, CV Tunas Abadi Raya berkomitmen memberikan notifikasi formal tertulis kepada Klien dalam kurun waktu tidak lebih dari 3x24 jam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: SLA & HAKI */}
              {activeTab === "sla" && (
                <div className="flex flex-col gap-6 animate-in fade-in duration-200">
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 bg-surface-container-low p-4 rounded-lg border border-border-hairline">
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-primary font-semibold">
                        DOC-REF: TAR-LGL-SLA-2026-04
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl text-on-surface font-bold">
                        Standar Keamanan, Alih Hak Cipta &amp; SLA Operasional
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 bg-surface text-secondary font-mono text-xs rounded border border-border-hairline">
                      Tier-1 Reliability Matrix
                    </span>
                  </div>

                  <div className="flex flex-col gap-6 text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    <p>
                      Komitmen keandalan operasional rekayasa sistem yang dirancang untuk mendukung kontinuitas proses bisnis enterprise:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-5 bg-surface-container-low rounded-xl border border-border-hairline flex flex-col gap-2">
                        <span className="font-mono text-xs text-primary font-bold">
                          UPTIME SLA // 99.9%
                        </span>
                        <h4 className="font-heading text-base font-bold text-on-surface">
                          Ketersediaan Infrastruktur
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Jaminan ketersediaan layanan komputasi awan produksi dengan sistem redundansi multi-zona (Multi-AZ) dan failover otomatis.
                        </p>
                      </div>

                      <div className="p-5 bg-surface-container-low rounded-xl border border-border-hairline flex flex-col gap-2">
                        <span className="font-mono text-xs text-primary font-bold">
                          BUG WARRANTY // 30-90 HARI
                        </span>
                        <h4 className="font-heading text-base font-bold text-on-surface">
                          Garansi Pasca Go-Live
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Dukungan perbaikan bebas biaya untuk kesalahan komputasi logika, crash runtime, atau deviasi fungsi dari dokumen PRD awal.
                        </p>
                      </div>

                      <div className="p-5 bg-surface-container-low rounded-xl border border-border-hairline flex flex-col gap-2">
                        <span className="font-mono text-xs text-primary font-bold">
                          RESPONSE TIME // &lt; 2 JAM
                        </span>
                        <h4 className="font-heading text-base font-bold text-on-surface">
                          Respons Insiden Kritis (P1)
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Eskalasi darurat langsung kepada Senior Cloud Architect untuk mitigasi kegagalan server produksi pada jam kerja operasional.
                        </p>
                      </div>

                      <div className="p-5 bg-surface-container-low rounded-xl border border-border-hairline flex flex-col gap-2">
                        <span className="font-mono text-xs text-primary font-bold">
                          LEGAL ASSIGNMENT // FULL HAKI
                        </span>
                        <h4 className="font-heading text-base font-bold text-on-surface">
                          Surat Alih Hak Cipta
                        </h4>
                        <p className="text-sm text-on-surface-variant">
                          Penerbitan surat keterangan serah terima hak cipta bermaterai yang menyatakan bahwa kode sumber mutlak milik entitas Klien.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Utility & Download Bar inside Reader Panel */}
              <div className="pt-6 mt-4 bg-surface-container-low p-4 sm:p-6 rounded-xl border border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-heading text-sm sm:text-base font-bold text-on-surface">
                      Validasi Dokumen Legal
                    </span>
                    <span className="text-xs text-on-surface-variant">
                      Dokumen ini sah mengikat dan dapat diunduh untuk arsip pengadaan
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handlePrintPdf}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface rounded-lg font-medium text-sm border border-border-hairline shadow-xs transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Cetak / Simpan PDF</span>
                  </button>

                  <a
                    href="mailto:fayol@tunasabadiraya.cloud?subject=Konsultasi%20Kepatuhan%20dan%20Legalitas%20CV%20Tunas%20Abadi%20Raya"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-brand-violet-vivid text-on-primary rounded-lg font-medium text-sm shadow-xs transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Hubungi Legal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
