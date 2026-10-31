"use client";

import * as React from "react";
import { Headset } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/6282195500236?text=Halo%20Tim%20Rekayasa%20CV%20Tunas%20Abadi%20Raya%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pengembangan%20sistem.";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat Konsultasi Teknis via WhatsApp"
        className="bg-[#0F172A] dark:bg-[#111827] border border-[#1E293B] hover:border-[#7C3AED] rounded-full text-white shadow-xl transition-transform hover:-translate-y-0.5 px-4 py-2.5 flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-sm font-semibold tracking-wide">
          Chat Konsultasi Teknis
        </span>
        <Headset className="w-4 h-4 text-emerald-400 transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
}
