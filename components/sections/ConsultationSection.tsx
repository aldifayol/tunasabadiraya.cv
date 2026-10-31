"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Globe,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { LeadSubmissionPayload } from "@/types";

export default function ConsultationSection() {
  const [formData, setFormData] = useState<LeadSubmissionPayload>({
    name: "",
    companyName: "",
    email: "",
    whatsapp: "",
    category: "custom_web_erp",
    budgetTier: "tier_growth",
    message: "",
    websiteHoneypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [whatsappFollowUpUrl, setWhatsappFollowUpUrl] = useState<string>(
    "https://wa.me/6282195500236"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        if (result.data?.whatsappFollowUpUrl) {
          setWhatsappFollowUpUrl(result.data.whatsappFollowUpUrl);
        }
      } else {
        setErrorMessage(
          result.error ||
            "Gagal mengirim formulir. Pastikan semua bidang terisi dengan benar."
        );
      }
    } catch {
      setErrorMessage(
        "Terjadi kendala jaringan saat mengirim formulir. Silakan coba kembali atau hubungi via WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      companyName: "",
      email: "",
      whatsapp: "",
      category: "custom_web_erp",
      budgetTier: "tier_growth",
      message: "",
      websiteHoneypot: "",
    });
    setSubmitSuccess(false);
    setErrorMessage(null);
  };

  return (
    <section
      className="w-full py-16 lg:py-24 bg-surface-container-low border-t border-border-hairline"
      id="konsultasi"
    >
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-surface-container-lowest border border-border-hairline rounded self-start">
            <span className="font-mono text-xs text-primary-container uppercase font-bold tracking-wider">
              06 // KONSULTASI &amp; PENGAJUAN PROYEK
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-on-surface font-bold tracking-tight">
            Mulai Diskusi Teknis bersama Tim Rekayasa Tunas Abadi Raya.
          </h2>
          <p className="text-secondary text-sm sm:text-base leading-relaxed">
            Sampaikan kebutuhan sistem atau tantangan operasional perusahaan Anda. Kami akan meninjau spesifikasi dan menyusun estimasi ruang lingkup dalam 1x24 jam kerja.
          </p>
        </div>

        {/* 2-Column Split: Corporate Info + Project Brief Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Corporate Identity Card (5 cols) */}
          <div className="lg:col-span-5 bg-surface-container-lowest border border-border-hairline rounded-xl p-8 shadow-xs flex flex-col gap-6">
            <div className="flex items-center gap-3 pb-4 border-b border-border-hairline">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary shrink-0 shadow-xs">
                <Building2 className="w-5 h-5 text-on-primary" />
              </div>
              <div>
                <div className="font-heading text-base font-bold text-on-surface">
                  Tunas Abadi Raya
                </div>
                <div className="font-mono text-[11px] text-secondary">
                  ID // ENTITAS RESMI TERDAFTAR
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-xs sm:text-sm text-secondary">
              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-on-surface-variant mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-on-surface block">
                    Domain &amp; Infrastruktur:
                  </span>
                  <span className="font-mono text-[12px]">tunasabadiraya.cloud</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-on-surface-variant mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-on-surface block">
                    Surat Elektronik Resmi:
                  </span>
                  <a
                    href="mailto:fayol@tunasabadiraya.cloud"
                    className="text-primary-container font-medium hover:underline font-mono text-[12px]"
                  >
                    fayol@tunasabadiraya.cloud
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-on-surface-variant mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-on-surface block">
                    Kantor Operasional:
                  </span>
                  <span className="leading-relaxed">
                    Malalayang Satu Timur, Kecamatan Malalayang, Kota Manado, Sulawesi Utara, Indonesia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-on-surface-variant mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-on-surface block">
                    Jam Operasional Rekayasa:
                  </span>
                  <span className="leading-relaxed">
                    Senin – Jumat, 08.30 – 17.30 WITA (Respons Email &amp; Tiket &lt; 24 Jam Kerja)
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight NDA Box */}
            <div className="p-4 bg-surface-container-low border border-border-hairline rounded-lg flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-heading text-xs sm:text-sm font-bold">
                <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>Jaminan Kerahasiaan Informasi (NDA)</span>
              </div>
              <p className="text-xs text-secondary leading-relaxed">
                Kami siap menandatangani Non-Disclosure Agreement (NDA) resmi sebelum tim Anda membagikan data proses bisnis mendalam.
              </p>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="pt-2">
              <a
                href="https://wa.me/6282195500236"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-surface-container hover:bg-surface-dim border border-border-hairline text-on-surface font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>Hubungi Langsung via WhatsApp Bisnis</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive Project Brief Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-surface-container-lowest border border-border-hairline rounded-xl p-8 shadow-xs flex flex-col gap-6">
            <div className="flex flex-col gap-1 pb-2 border-b border-border-hairline">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-on-surface">
                Formulir Spesifikasi &amp; Penjadwalan Teknis
              </h3>
              <p className="text-xs sm:text-sm text-secondary">
                Isi rincian awal untuk mendapatkan estimasi ruang lingkup dan timeline kerja yang relevan.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 sm:p-8 flex flex-col gap-5 items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-2 max-w-lg">
                  <h4 className="font-heading text-xl font-bold text-on-surface">
                    Spesifikasi Proyek Berhasil Diterima!
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Terima kasih! Spesifikasi proyek Anda telah tercatat pada sistem operasional Tunas Abadi Raya. Tim Rekayasa kami akan meninjau dokumen teknis ini dan merespons dalam 1x24 jam kerja.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md pt-2">
                  <a
                    href={whatsappFollowUpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Lanjutkan Diskusi via WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 bg-surface-container border border-border-hairline text-on-surface hover:bg-surface-dim font-medium text-xs sm:text-sm rounded-lg transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Kirim Spesifikasi Lain</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="project-brief-form">
                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="websiteHoneypot"
                  value={formData.websiteHoneypot}
                  onChange={handleChange}
                  className="sr-only"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-2.5 text-xs text-red-600 dark:text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="client_name"
                      className="font-medium text-xs sm:text-sm text-on-surface"
                    >
                      Nama Lengkap &amp; Jabatan <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="client_name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Contoh: Budi Santoso (Head of IT)"
                      className="h-10 px-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface placeholder:text-secondary/70 focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company_name"
                      className="font-medium text-xs sm:text-sm text-on-surface"
                    >
                      Nama Perusahaan / Institusi <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company_name"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Contoh: PT Samudera Logistik Prima"
                      className="h-10 px-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface placeholder:text-secondary/70 focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="client_email"
                      className="font-medium text-xs sm:text-sm text-on-surface"
                    >
                      Email Bisnis Resmi <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="client_email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="budi@perusahaan.co.id"
                      className="h-10 px-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface placeholder:text-secondary/70 focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="client_phone"
                      className="font-medium text-xs sm:text-sm text-on-surface"
                    >
                      Nomor Telepon / WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="client_phone"
                      name="whatsapp"
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="+62 812-xxxx-xxxx"
                      className="h-10 px-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface placeholder:text-secondary/70 focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="project_category"
                      className="font-medium text-xs sm:text-sm text-on-surface"
                    >
                      Kategori Layanan Utama
                    </label>
                    <select
                      id="project_category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="h-10 px-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                    >
                      <option value="custom_web_erp">Custom ERP / Web &amp; Sistem Informasi</option>
                      <option value="mobile_app">Pengembangan Mobile App (iOS / Android)</option>
                      <option value="payment_api">Integrasi API &amp; Payment Gateway (IDR)</option>
                      <option value="cloud_devops">Arsitektur Cloud &amp; Dedicated SLA Support</option>
                      <option value="enterprise_squad">Dedicated Squad &amp; Audit Sistem Legacy</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="project_budget"
                      className="font-medium text-xs sm:text-sm text-on-surface"
                    >
                      Estimasi Skala Anggaran (IDR)
                    </label>
                    <select
                      id="project_budget"
                      name="budgetTier"
                      value={formData.budgetTier}
                      onChange={handleChange}
                      className="h-10 px-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                    >
                      <option value="tier_starter">Rp 15.000.000 – Rp 35.000.000 (Paket Starter)</option>
                      <option value="tier_growth">Rp 35.000.000 – Rp 75.000.000 (Sistem Operasional)</option>
                      <option value="tier_enterprise">&gt; Rp 75.000.000 (Solusi Enterprise / By-Order)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="project_desc"
                    className="font-medium text-xs sm:text-sm text-on-surface"
                  >
                    Deskripsi Singkat Kebutuhan Sistem / Tantangan Operasional <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="project_desc"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Jelaskan gambaran sistem yang ingin dibangun, jumlah pengguna, alur proses kerja, atau modul khusus yang diperlukan..."
                    className="p-3 bg-surface border border-border-hairline rounded text-xs sm:text-sm text-on-surface placeholder:text-secondary/70 focus:outline-hidden focus:ring-1 focus:ring-primary-container focus:border-primary-container transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 bg-primary-container hover:bg-brand-violet-vivid text-on-primary font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Memproses Spesifikasi...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Spesifikasi &amp; Jadwalkan Konsultasi Teknis</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[12px] text-secondary text-center mt-3 leading-relaxed">
                    Informasi dan data bisnis Anda dilindungi secara ketat sesuai{" "}
                    <Link
                      href="/kebijakan-privasi"
                      className="underline text-on-surface hover:text-primary-container transition-colors"
                    >
                      Kebijakan Privasi &amp; Data Tunas Abadi Raya
                    </Link>
                    .
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
