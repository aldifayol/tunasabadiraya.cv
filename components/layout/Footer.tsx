import * as React from "react";
import Link from "next/link";
import { MapPin, Mail } from "lucide-react";
import TarLogo from "@/components/tarLogo";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] dark:bg-[#060911] text-slate-300 border-t border-[#1E293B] transition-colors duration-200">
      <div className="max-w-[1340px] mx-auto px-4 lg:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1 (4 cols): Brand identity & Corporate contacts */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-[#532792] dark:bg-[#6D35BC] flex items-center justify-center p-1.5 text-white shadow-sm ring-1 ring-white/15 shrink-0 transition-transform group-hover:scale-105">
                <TarLogo className="w-full h-full" />
              </div>
              <span className="font-jakarta font-bold text-base xl:text-lg tracking-tight text-white leading-tight whitespace-nowrap">
                CV Tunas Abadi Raya
              </span>
            </Link>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Mitra rekayasa perangkat lunak enterprise, modernisasi arsitektur komputasi awan, dan transformasi digital berstandar global dengan keandalan operasional tingkat tinggi.
            </p>

            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" />
                <span className="leading-snug">
                  Malalayang Satu Timur, Kecamatan Malalayang, Kota Manado, Sulawesi Utara, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="mailto:fayol@tunasabadiraya.cloud"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  fayol@tunasabadiraya.cloud
                </a>
              </div>
            </div>
          </div>

          {/* Col 2 (3 cols): 01 // LAYANAN & SOLUSI */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              01 // LAYANAN &amp; SOLUSI
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#layanan"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Custom Web &amp; Sistem Informasi
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#layanan"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Pengembangan Aplikasi Mobile
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#layanan"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Integrasi API &amp; Payment Gateway
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/spesifikasi-legal"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Infrastruktur Cloud &amp; DevOps SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 (2 cols): 02 // PERUSAHAAN */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              02 // PERUSAHAAN
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#keunggulan"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Keunggulan Rekayasa
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#metodologi"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Metodologi Sprint
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#portofolio"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Studi Kasus &amp; Portofolio
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#skema-proyek"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Skema &amp; Estimasi Proyek
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/#konsultasi"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Konsultasi Teknis
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): 03 // KEPATUHAN & LEGAL */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-4">
              03 // KEPATUHAN &amp; LEGAL
            </div>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/syarat-ketentuan"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Syarat &amp; Ketentuan Layanan
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/kebijakan-pengembalian"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Kebijakan Pengembalian Dana &amp; Pembatalan
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/kebijakan-privasi"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Kebijakan Privasi &amp; Data
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-600">—</span>
                <Link
                  href="/standar-sla"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Standar Keamanan &amp; SLA Operasional
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            © 2026 CV Tunas Abadi Raya. Seluruh Hak Cipta Dilindungi Undang-Undang. Terdaftar Resmi di Indonesia.
          </p>
          <div className="flex items-center gap-4 text-slate-500 font-mono text-[11px]">
            <span>REGION // ID-SULUT</span>
            <span>SECURE ARCHITECTURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
