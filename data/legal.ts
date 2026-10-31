import {
  GovernanceCardItem,
  LegalTabMetaItem,
  LegalTabId,
} from "@/types";

export const GOVERNANCE_CARDS: readonly GovernanceCardItem[] = [
  {
    id: "doc-spec",
    codeBadge: "DOC-SPEC // STANDAR TINGGI",
    iconName: "architecture",
    title: "Arsitektur & Dokumentasi Teknis",
    description:
      "Pondasi terstruktur dengan dokumentasi baku industri untuk kemudahan audit dan transfer pengetahuan.",
    points: [
      "Penyusunan Dokumen PRD (Product Requirement Document) detail dan terukur",
      "Skema Database & Relasi (ERD) dan kamus data komprehensif",
      "API Documentation interaktif (Swagger / OpenAPI 3.0)",
      "Arsitektur Diagram Cloud Topology (AWS, Google Cloud, atau Bare-Metal)",
    ],
    footerNoteLabel: "PENYERAHAN SUMBER:",
    footerNoteValue: "100% Repositori Git & CI/CD",
  },
  {
    id: "billing-milestone",
    codeBadge: "BILLING // MILESTONE-BASED",
    iconName: "payments",
    title: "Mekanisme Pembayaran Resmi (IDR)",
    description:
      "Skema pembayaran bertahap proporsional berdasarkan pencapaian milestone fungsional terverifikasi.",
    termins: [
      {
        label: "Termin 1 · Uang Muka",
        percentage: "30% (IDR)",
        description: "Inisiasi Proyek, Desain UI/UX & Arsitektur Database.",
      },
      {
        label: "Termin 2 · UAT & Staging",
        percentage: "40% (IDR)",
        description:
          "Pengembangan Backend/Frontend & Validasi Staging Lingkungan.",
      },
      {
        label: "Termin 3 · Serah Terima",
        percentage: "30% (IDR)",
        description:
          "Deployment Server Produksi, Pelatihan & Serah Terima Final.",
      },
    ],
    complianceNote: {
      title: "Kepatuhan Gateway & e-Invoice",
      description:
        "Faktur resmi Tunas Abadi Raya diproses via Payment Gateway berlisensi Bank Indonesia (Virtual Account, QRIS & Transfer Perusahaan).",
    },
    footerNoteLabel: "MATA UANG RESMI:",
    footerNoteValue: "Rupiah (IDR) & e-Invoice Pajak",
  },
  {
    id: "warranty-sla",
    codeBadge: "WARRANTY // LEGAL ASSURANCE",
    iconName: "gavel",
    title: "Jaminan Garansi, HAKI & SLA",
    description:
      "Proteksi aset dan operasional enterprise dengan klausul hukum perlindungan kekayaan intelektual penuh.",
    points: [
      "100% Kepemilikan Penuh HAKI: Hak cipta kode sumber dialihkan sepenuhnya kepada klien setelah pelunasan.",
      "Garansi Bug Pasca-Peluncuran: Perbaikan bug fungsional gratis selama 30 hingga 90 hari kalender.",
      "SLA Server Hingga 99.9%: Kontrak pemeliharaan infrastruktur komputasi awan bergaransi operasional tinggi.",
      "Bilateral NDA: Perjanjian kerahasiaan data bisnis & keamanan siber berkekuatan hukum formal.",
    ],
    footerNoteLabel: "PERJANJIAN KERJASAMA:",
    footerNoteValue: "AKTA NOTARIS & MATERAI RESMI",
  },
] as const;

export const LEGAL_TABS_META: Record<LegalTabId, LegalTabMetaItem> = {
  tos: {
    id: "tos",
    label: "Syarat & Ketentuan Layanan",
    docRef: "DOC-REF: TAR-LGL-TOS-2025-01",
    revision: "Revisi: Januari 2025",
    badge: "Kepatuhan Hukum Kontrak Perangkat Lunak",
    iconName: "description",
  },
  refund: {
    id: "refund",
    label: "Kebijakan Pengembalian Dana",
    docRef: "DOC-REF: TAR-LGL-REF-2025-02",
    revision: "Revisi: Januari 2025",
    badge: "Standar Kepatuhan Payment Gateway",
    iconName: "currency_exchange",
  },
  privacy: {
    id: "privacy",
    label: "Kebijakan Privasi & Data",
    docRef: "DOC-REF: TAR-LGL-PRV-2025-03",
    revision: "Revisi: Januari 2025",
    badge: "Kepatuhan UU No. 27/2022",
    iconName: "security",
  },
  sla: {
    id: "sla",
    label: "Standar Keamanan, HAKI & SLA",
    docRef: "DOC-REF: TAR-LGL-SLA-2025-04",
    revision: "Revisi: Januari 2025",
    badge: "Tier-1 Reliability Matrix",
    iconName: "verified_user",
  },
};

export interface LegalClause {
  number?: string;
  title: string;
  content: string;
  badge?: string;
}

export interface LegalDocumentContent {
  id: LegalTabId;
  docRef: string;
  title: string;
  revision: string;
  badge: string;
  leadParagraph?: string;
  clauses: LegalClause[];
}

export const LEGAL_DOCUMENT_CONTENTS: Record<LegalTabId, LegalDocumentContent> = {
  tos: {
    id: "tos",
    docRef: "DOC-REF: TAR-LGL-TOS-2025-01",
    title: "Syarat & Ketentuan Layanan Rekayasa Perangkat Lunak",
    revision: "Revisi: Januari 2025",
    badge: "Standar Kontrak B2B",
    leadParagraph:
      "Syarat dan ketentuan ini mengatur hubungan kontraktual antara Tunas Abadi Raya dan Klien dalam pelaksanaan pengadaan dan rekayasa perangkat lunak berbadan hukum Indonesia.",
    clauses: [
      {
        number: "01",
        title: "Definisi & Ruang Lingkup Layanan",
        content:
          "Tunas Abadi Raya (selanjutnya disebut 'Perusahaan') bertindak sebagai penyedia jasa profesional untuk rekayasa perangkat lunak kustom, pengembangan aplikasi berbasis web dan mobile, integrasi antarmuka pemrograman aplikasi (API), serta arsitektur komputasi awan. Seluruh pengerjaan berpedoman ketat pada Dokumen Lingkup Kerja (Scope of Work / SoW) yang disepakati secara tertulis oleh kedua belah pihak sebelum inisiasi proyek dimulai. Penambahan atau perubahan fitur di luar SoW akan diatur melalui mekanisme Change Request Order (CRO) terpisah.",
      },
      {
        number: "02",
        title: "Penawaran Harga, Mata Uang & Pembayaran Milestone (IDR)",
        content:
          "Seluruh estimasi biaya, tagihan, dan transaksi resmi ditetapkan dalam mata uang Rupiah Indonesia (IDR). Pembayaran wajib disalurkan melalui rekening korporasi resmi Tunas Abadi Raya atau melalui kanal Payment Gateway berlisensi Bank Indonesia (Xendit) yang ditunjuk secara sah. Setiap tahapan pembayaran terbagi atas milestone termin: Termin I (30%) saat persetujuan proposal dan desain, Termin II (40%) saat selesainya tahap integrasi dan UAT staging, serta Termin III (30%) saat migrasi server produksi dan serah terima aset. Faktur resmi elektronik (e-Invoice) dan faktur pajak diterbitkan pada setiap tagihan termin.",
      },
      {
        number: "03",
        title: "Kebijakan Pembatalan Proyek & Pengembalian Dana (Refund Policy)",
        content:
          "Sesuai dengan standar kepatuhan mitra gerbang pembayaran dan etika perdagangan komersial, permohonan pembatalan proyek sebelum dimulainya proses desain dan rekayasa berhak memperoleh pengembalian dana setelah dipotong biaya inisiasi administratif maksimal 10% dari Termin I. Apabila proyek telah memasuki tahap eksekusi kode, pengembalian dana dilakukan secara proporsional berdasarkan sisa milestone deliverable yang belum dikerjakan dan belum disetujui dalam berita acara serah terima. Milestone yang telah disetujui tidak dapat dibatalkan atau dikembalikan.",
      },
      {
        number: "04",
        title: "Hak Kekayaan Intelektual (HAKI) & Kepemilikan Kode Sumber",
        content:
          "Perusahaan menjamin bahwa setelah pelunasan seluruh kewajiban pembayaran (Termin I, II, dan III), 100% hak kekayaan intelektual atas kode sumber (source code), skema basis data, dan dokumentasi arsitektur beralih mutlak kepada Klien. Tunas Abadi Raya melepaskan segala klaim royalti masa depan atas sistem yang dibangun secara khusus untuk Klien, kecuali modul pustaka pihak ketiga berlisensi sumber terbuka (open-source MIT/Apache) yang diikutsertakan.",
      },
      {
        number: "05",
        title: "Kerahasiaan Informasi (NDA) & Keamanan Data",
        content:
          "Perusahaan berkomitmen menjaga kerahasiaan seluruh informasi bisnis, data mentah, dan rahasia dagang Klien yang diberikan selama masa kontrak kerja sama. Komitmen ini tunduk pada Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27 Tahun 2022). Perusahaan tidak akan membagikan, menyewakan, atau mendistribusikan kredensial server, data pelanggan, atau akses infrastruktur kepada pihak ketiga manapun tanpa izin tertulis eksplisit dari Klien.",
      },
      {
        number: "06",
        title: "Penyelesaian Sengketa & Yurisdiksi Hukum",
        content:
          "Perjanjian ini diatur dan ditafsirkan berdasarkan hukum Negara Kesatuan Republik Indonesia. Setiap perselisihan atau perbedaan penafsiran yang timbul dari pelaksanaan kontrak kerja sama diselesaikan terlebih dahulu melalui musyawarah untuk mencapai mufakat dalam jangka waktu 30 (tiga puluh) hari kalender. Apabila musyawarah tidak mencapai mufakat, para pihak sepakat untuk memilih domisili hukum yang tetap dan tidak berubah di Kepaniteraan Pengadilan Negeri Manado, Sulawesi Utara.",
      },
    ],
  },
  refund: {
    id: "refund",
    docRef: "DOC-REF: TAR-LGL-REF-2025-02",
    title: "Kebijakan Pengembalian Dana & Pembatalan (Refund Policy)",
    revision: "Revisi: Januari 2025",
    badge: "Standar Kepatuhan Payment Gateway",
    leadParagraph:
      "Tunas Abadi Raya menerapkan standar kepatuhan tinggi untuk pemrosesan dana Klien. Sebagai entitas penyedia jasa profesional custom software engineering, kami menetapkan ketentuan pembatalan dan restitusi dana sebagai berikut:",
    clauses: [
      {
        number: "01",
        title: "Pembatalan Pra-Pengerjaan (Tahap Persiapan)",
        content:
          "Apabila Klien mengajukan pembatalan resmi maksimal dalam kurun waktu 3 (tiga) hari kerja sejak pembayaran Termin 1 dilakukan, dan tim teknis belum memulai tahap penyusunan UI/UX atau arsitektur kode, Klien berhak atas pengembalian dana penuh dikurangi biaya administrasi pemrosesan perbankan sebesar 10%.",
      },
      {
        number: "02",
        title: "Pembatalan Selama Masa Pengembangan Aktif",
        content:
          "Jika pembatalan diajukan di tengah siklus pengerjaan, dana yang telah dialokasikan pada milestone yang telah selesai (dan disetujui dalam dokumen Berita Acara UAT) tidak dapat dikembalikan. Sisa dana dari milestone berikutnya yang belum dikerjakan akan dikembalikan ke rekening pengirim awal Klien dalam waktu 7-14 hari kerja bank.",
      },
      {
        number: "03",
        title: "Prosedur Klaim Pengembalian Dana",
        content:
          "Pengajuan klaim wajib dikirimkan secara tertulis melalui email resmi fayol@tunasabadiraya.cloud dengan melampirkan: (a) Bukti invoice dan receipt pembayaran resmi Xendit/Bank, (b) Surat pengantar pembatalan bertanda tangan penanggung jawab proyek, dan (c) Rekening koran bank yang sesuai dengan nama entitas pembayar.",
      },
    ],
  },
  privacy: {
    id: "privacy",
    docRef: "DOC-REF: TAR-LGL-PRV-2025-03",
    title: "Kebijakan Privasi & Perlindungan Data Konsumen",
    revision: "Revisi: Januari 2025",
    badge: "Kepatuhan UU No. 27/2022",
    leadParagraph:
      "Kebijakan Privasi ini menjelaskan bagaimana Tunas Abadi Raya mengumpulkan, menggunakan, melindungi, dan mengelola informasi rahasia serta data transaksi Anda saat mengakses platform tunasabadiraya.cloud maupun saat menjalin kerja sama pengembangan aplikasi.",
    clauses: [
      {
        number: "01",
        title: "Pengumpulan Data Transaksi Komersial",
        content:
          "Kami mengumpulkan nama entitas perusahaan, NPWP, nomor kontak resmi, alamat korespondensi, dan log transaksi pembayaran semata-mata untuk keperluan legalitas faktur e-Invoice dan verifikasi perbankan melalui gerbang pembayaran berizin.",
      },
      {
        number: "02",
        title: "Penyimpanan & Kedaulatan Data",
        content:
          "Seluruh repositori dan data pengerjaan Klien disimpan di server dengan enkripsi AES-256 saat istirahat (at-rest) dan TLS 1.3 saat transit. Kami tidak pernah memperjualbelikan atau memberikan profil teknis kepada pihak pengiklan luar.",
      },
      {
        number: "03",
        title: "Pemberitahuan Insiden Keamanan",
        content:
          "Dalam skenario anomali atau upaya pelanggaran data terhadap lingkungan staging atau produksi yang dikelola, Tunas Abadi Raya berkomitmen memberikan notifikasi formal tertulis kepada Klien dalam kurun waktu tidak lebih dari 3x24 jam.",
      },
    ],
  },
  sla: {
    id: "sla",
    docRef: "DOC-REF: TAR-LGL-SLA-2025-04",
    title: "Standar Keamanan, Alih Hak Cipta & SLA Operasional",
    revision: "Revisi: Januari 2025",
    badge: "Tier-1 Reliability Matrix",
    leadParagraph:
      "Komitmen keandalan operasional rekayasa sistem yang dirancang untuk mendukung kontinuitas proses bisnis enterprise:",
    clauses: [
      {
        number: "01",
        badge: "UPTIME SLA // 99.9%",
        title: "Ketersediaan Infrastruktur",
        content:
          "Jaminan ketersediaan layanan komputasi awan produksi dengan sistem redundansi multi-zona (Multi-AZ) dan failover otomatis.",
      },
      {
        number: "02",
        badge: "BUG WARRANTY // 30-90 HARI",
        title: "Garansi Pasca Go-Live",
        content:
          "Dukungan perbaikan bebas biaya untuk kesalahan komputasi logika, crash runtime, atau deviasi fungsi dari dokumen PRD awal.",
      },
      {
        number: "03",
        badge: "RESPONSE TIME // < 2 JAM",
        title: "Respons Insiden Kritis (P1)",
        content:
          "Eskalasi darurat langsung kepada Senior Cloud Architect untuk mitigasi kegagalan server produksi pada jam kerja operasional.",
      },
      {
        number: "04",
        badge: "LEGAL ASSIGNMENT // FULL HAKI",
        title: "Surat Alih Hak Cipta",
        content:
          "Penerbitan surat keterangan serah terima hak cipta bermaterai yang menyatakan bahwa kode sumber mutlak milik entitas Klien.",
      },
    ],
  },
};
