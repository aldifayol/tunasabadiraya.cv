import {
  CompanyProfile,
  ClientPartner,
  ServiceItem,
  ChallengeMatrixItem,
  SprintStepItem,
  PortfolioCaseItem,
  ProjectTierItem,
} from "@/types";

export const COMPANY_PROFILE: CompanyProfile = {
  brandName: "Tunas Abadi Raya",
  shortName: "Tunas Abadi Raya",
  domain: "tunasabadiraya.cloud",
  primaryDomain: "https://tunasabadiraya.cloud",
  email: "fayol@tunasabadiraya.cloud",
  whatsappDisplay: "+62 821-9550-0236",
  whatsappE164: "6282195500236",
  whatsappUrl:
    "https://wa.me/6282195500236?text=Halo%20Tim%20Rekayasa%20Tunas%20Abadi%20Raya%2C%20saya%20ingin%20berkonsultasi%20mengenai%20pengembangan%20sistem.",
  address: {
    street: "Malalayang Satu Timur, Kecamatan Malalayang",
    city: "Kota Manado",
    province: "Sulawesi Utara",
    country: "Indonesia",
    full: "Malalayang Satu Timur, Kecamatan Malalayang, Kota Manado, Sulawesi Utara, Indonesia",
  },
  operatingHours:
    "Senin – Jumat, 08.30 – 17.30 WITA (Respons Email & Tiket < 24 Jam Kerja)",
  badge: "ID · B2B TECH PARTNER",
  tagline:
    "Rekayasa Perangkat Lunak & Arsitektur Sistem Enterprise untuk Akselerasi Bisnis Modern.",
  description:
    "Tunas Abadi Raya merancang, membangun, dan mengelola sistem informasi kustom, aplikasi web & mobile berkinerja tinggi, serta infrastruktur cloud yang aman, terukur, dan siap mendukung pertumbuhan skala korporasi.",
};

export const INDUSTRY_SECTORS: readonly string[] = [
  "Logistik & Rantai Pasok",
  "Perdagangan & Distribusi B2B",
  "Keuangan & Pembayaran Digital",
  "Manufaktur & Inventori",
  "Layanan Kesehatan & RS",
  "Agribisnis & Komoditas",
] as const;

export const TRUSTED_CLIENTS: readonly ClientPartner[] = [
  { name: "Manado Siar", logo: "/manadosiar.png" },
  { name: "Wealthy People Indonesia", logo: "/wealthypeople.png" },
  { name: "Harvest Agro Nusantara", logo: "/orispices.png" },
  { name: "Utuxia Photo", logo: "/utuxia.png" },
  { name: "Blessing Vanilla Indonesia", logo: "/blessing.png" },
  { name: "Mayesa Cocopro Indonesia", logo: "/mayesa.png" },
] as const;

export const SERVICES_DATA: readonly ServiceItem[] = [
  {
    id: "custom_web_erp",
    indexLabel: "01/04",
    badge: "CORE SYSTEM",
    title: "Custom Web & Enterprise Info Systems",
    persona:
      '"Untuk korporasi & bisnis berkembang yang ingin mendigitalisasi operasional inti"',
    description:
      "Pembangunan sistem ERP terintegrasi, inventori multi-gudang, CRM terdistribusi, portal pengadaan B2B, serta executive real-time dashboard.",
    tags: ["Custom ERP/CRM", "Multi-Role RBAC", "Audit Trail"],
    categoryValue: "custom_web_erp",
  },
  {
    id: "mobile_app",
    indexLabel: "02/04",
    badge: "MOBILE APPS",
    title: "Mobile Application Development",
    persona:
      '"Untuk bisnis dengan tim lapangan, kurir logistik, atau interaksi pelanggan"',
    description:
      "Pengembangan aplikasi mobile multi-platform (React Native/Flutter) dan native dengan sinkronisasi online-offline, geolokasi presisi, dan performa tinggi.",
    tags: ["iOS & Android", "Offline Data Sync", "Push Engine"],
    categoryValue: "mobile_app",
  },
  {
    id: "payment_api",
    indexLabel: "03/04",
    badge: "INTEGRATION & API",
    title: "API Integration & Payment Gateway",
    persona:
      '"Untuk perusahaan yang ingin otomasi pembayaran & integrasi antar-aplikasi"',
    description:
      "Integrasi RESTful API, webhook, kanal pembayaran resmi (VA, QRIS, Kartu Kredit), perbankan korporat, serta otomasi pencatatan pembukuan digital.",
    tags: ["Payment Gateway", "Webhook Middleware", "Auto Invoicing"],
    categoryValue: "payment_api",
  },
  {
    id: "cloud_devops",
    indexLabel: "04/04",
    badge: "CLOUD & SLA",
    title: "Cloud DevOps & Managed SLA",
    persona:
      '"Untuk organisasi dengan kebutuhan keandalan server & garansi SLA tinggi"',
    description:
      "Arsitektur cloud AWS/GCP/VPS, containerization, otomatisasi deployment pipeline CI/CD, backup terkelola, serta pemantauan uptime 24/7 bergaransi.",
    tags: ["Cloud Arch", "CI/CD Hardening", "Dedicated SLA"],
    categoryValue: "cloud_devops",
  },
] as const;

export const CHALLENGES_MATRIX: readonly ChallengeMatrixItem[] = [
  {
    id: "data-silo",
    challenge:
      "Data operasional tersebar di ratusan spreadsheet manual yang rawan selisih, tumpang tindih input, dan berisiko kebocoran data.",
    solution:
      "Single Source of Truth Database terpusat dengan validasi transaksi otomatis, pencegahan duplikasi, dan hierarki hak akses berjenjang (RBAC).",
  },
  {
    id: "saas-limitation",
    challenge:
      "SaaS generik membatasi kustomisasi alur bisnis, sementara biaya lisensi tahunan per-user membengkak tajam seiring pertambahan staf.",
    solution:
      "Arsitektur sistem tailor-made 100% milik perusahaan, bebas biaya lisensi per-pengguna, dan sepenuhnya fleksibel untuk penambahan fitur di masa depan.",
  },
  {
    id: "manual-reconciliation",
    challenge:
      "Proses penagihan, konfirmasi pembayaran, dan pembuatan faktur memakan waktu hingga hitungan hari, memperlambat perputaran kas bisnis.",
    solution:
      "Integrasi payment gateway resmi (VA & QRIS) dengan otomatisasi rekonsiliasi faktur seketika dalam mata uang Rupiah (IDR).",
  },
  {
    id: "legacy-lag",
    challenge:
      "Aplikasi warisan (legacy) mengalami lag parah, rawan crash saat jam sibuk, dan sulit diintegrasikan dengan aplikasi modern lainnya.",
    solution:
      "Desain arsitektur modern berbasis modular service, caching pintar, dan auto-scaling cloud yang siap menampung lonjakan beban kerja tanpa kendala.",
  },
] as const;

export const SPRINT_STEPS: readonly SprintStepItem[] = [
  {
    number: "01",
    phase: "FASE DISCOVERY",
    title: "Discovery & System Architecture Blueprint",
    description:
      "Penyelarasan kebutuhan bisnis, pemetaan alur proses bisnis, perancangan skema relasi database (ERD), dan perumusan spesifikasi teknis (PRD).",
    deliverableLabel: "Deliverable Tahap 01:",
    deliverableValue: "Dokumen PRD, ERD & Milestone Timeline",
  },
  {
    number: "02",
    phase: "FASE DESAIN",
    title: "UI/UX Prototyping & Interactive Wireframe",
    description:
      "Perancangan desain antarmuka intuitif, alur navigasi pengguna (user flow), desain sistem terstandarisasi, dan purwarupa interaktif untuk validasi klien.",
    deliverableLabel: "Deliverable Tahap 02:",
    deliverableValue: "High-Fidelity Design & Clickable Prototype",
  },
  {
    number: "03",
    phase: "FASE SPRINT REKAYASA",
    title: "Agile Engineering & QA Testing",
    description:
      "Penulisan kode clean-code secara modular, integrasi API sistem, pengujian fungsional ketat, security scanning, serta User Acceptance Testing (UAT).",
    deliverableLabel: "Deliverable Tahap 03:",
    deliverableValue: "Staging Environment & Laporan UAT",
  },
  {
    number: "04",
    phase: "FASE DEPLOYMENT",
    title: "Production Deployment & SLA Support",
    description:
      "Peluncuran sistem ke server produksi dengan sertifikat SSL resmi, serah terima kode sumber lengkap, dokumentasi operasional, dan garansi SLA.",
    deliverableLabel: "Deliverable Tahap 04:",
    deliverableValue: "Live Production, Source Code & SLA",
  },
] as const;

export const PORTFOLIO_CASES: readonly PortfolioCaseItem[] = [
  {
    category: "ERP & LOGISTICS",
    projectCode: "ID // PROJ-091",
    impactLabel: "DAMPAK OPERASIONAL:",
    impactMetric: "Efisiensi Rekonsiliasi Stok +68% & Akurasi 99.4%",
    title: "Sistem Manajemen Distribusi & Inventori Multi-Gudang Terpadu",
    description:
      "Platform ERP kustom untuk mengelola transfer stok antar 14 cabang gudang regional secara real-time, penerbitan surat jalan otomatis, dan integrasi barcode scanning kurir.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    image: "/portfolio/erp-logistics.png",
  },
  {
    category: "B2B COMMERCE & FINTECH",
    projectCode: "ID // PROJ-044",
    impactLabel: "DAMPAK OPERASIONAL:",
    impactMetric: "Verifikasi Faktur dari 24 Jam ke <5 Detik Real-Time",
    title: "Platform Pemesanan B2B & Otomasi Pembayaran Faktur Korporasi",
    description:
      "Portal transaksi grosir skala besar dengan pembuatan Virtual Account otomatis per faktur, batas kredit berjenjang per mitra, dan rekonsiliasi kas bank tanpa cek mutasi manual.",
    stack: ["Node.js", "React", "Payment API", "Redis"],
    image: "/portfolio/b2b-commerce-fintech.png",
  },
  {
    category: "MOBILE & FIELD OPS",
    projectCode: "ID // PROJ-118",
    impactLabel: "DAMPAK OPERASIONAL:",
    impactMetric: "100% Digitalisasi Laporan Lapangan Tanpa Kertas",
    title: "Aplikasi Mobile Monitoring Operasional & Armada Lapangan",
    description:
      "Aplikasi mobile operasional untuk verifikasi tanda terima digital, absensi berbasis radius geofencing, dokumentasi foto kondisi fisik barang, dan pelaporan kendala rute.",
    stack: ["React Native", "Go Microservices", "Maps SDK", "PostGIS"],
    image: "/portfolio/mobile-field-ops.png",
  },
] as const;

export const PROJECT_TIERS: readonly ProjectTierItem[] = [
  {
    tierCode: "TIER 01 // STARTER SYSTEM",
    badge: "MVP PHASE",
    recommended: false,
    title: "Paket MVP & Digitalisasi Awal",
    subtitle:
      "Solusi tepat untuk digitalisasi proses manual spesifik atau peluncuran sistem versi pertama.",
    priceLabel: "Estimasi Investasi Mulai:",
    priceValue: "Rp 15.000.000",
    timeline: "3 – 5 Minggu Kerja (Milestone billing)",
    features: [
      "Analisis Kebutuhan & Perancangan UI/UX Responsif",
      "Aplikasi Web Kustom / Portal Manajemen Dasar (Hingga 5 Modul Inti)",
      "Dashboard Admin & Manajemen Pengguna (Role-Based Access)",
      "Deployment ke Cloud Server & Konfigurasi SSL Resmi",
      "Garansi Bug-Fix & Dukungan Teknis 30 Hari Pasca-Rilis",
    ],
    ctaText: "Ajukan Konsultasi Paket Starter",
    budgetValue: "tier_starter",
  },
  {
    tierCode: "TIER 02 // GROWTH SYSTEM",
    badge: "BEST VALUE",
    recommended: true,
    recommendedBadge: "PALING BANYAK DIPILIH · REKOMENDASI KORPORASI",
    title: "Paket Sistem Operasional Bisnis",
    subtitle:
      "Sistem informasi lengkap untuk operasional perusahaan yang membutuhkan efisiensi otomatis.",
    priceLabel: "Estimasi Investasi Mulai:",
    priceValue: "Rp 35.000.000",
    timeline: "6 – 10 Minggu Kerja (Sesuai modul & integrasi)",
    features: [
      "Arsitektur Sistem Kustom Full-Stack (Web App dan/atau Mobile App)",
      "Integrasi API Pihak Ketiga & Payment Gateway Resmi (IDR VA, QRIS)",
      "Dashboard Analitik Eksekutif & Ekspor Laporan Otomatis (PDF/Excel)",
      "Pengujian Beban (Load Testing), UAT & Pelatihan Tim Pengguna",
      "Garansi Pemeliharaan & Dukungan Teknis SLA 90 Hari",
    ],
    ctaText: "Diskusikan Ruang Lingkup Proyek",
    budgetValue: "tier_growth",
  },
  {
    tierCode: "TIER 03 // ENTERPRISE ARCHITECTURE",
    badge: "BY-ORDER",
    recommended: false,
    title: "Solusi Enterprise & Dedicated Squad",
    subtitle:
      "Kemitraan rekayasa komprehensif untuk korporasi besar, konglomerasi, dan institusi publik.",
    priceLabel: "Skema Pembiayaan:",
    priceValue: "Proposal Kustom",
    timeline: "Sesuai Roadmap Proyek / Kontrak Tahunan",
    features: [
      "Arsitektur Microservices, High-Availability Cloud & Multi-AZ Sync",
      "Integrasi Sistem Legacy / ERP Korporasi & Audit Keamanan Ketat",
      "Dedicated Squad (Project Manager, Senior Engineers, QA, DevOps)",
      "Perjanjian Tingkat Layanan (SLA 99.9%) & Respon Prioritas 24/7",
      "100% Hak Kekayaan Intelektual & Dokumentasi Arsitektur Lengkap",
    ],
    ctaText: "Jadwalkan Sesi Arsitektur Enterprise",
    budgetValue: "tier_enterprise",
  },
] as const;
