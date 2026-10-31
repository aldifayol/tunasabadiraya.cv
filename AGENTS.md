# AGENTS.md: Panduan Pengembangan & Operasional CV Tunas Abadi Raya (`tunasabadiraya.cloud`)

> **Wajib dipatuhi oleh setiap sesi Orchestrator / Lead / Coder Agent.** Panduan ini menetapkan standar arsitektur, delegasi subagent, kontrol versi 3-tier, serta kepatuhan kepatuhan rekayasa perangkat lunak untuk **CV Tunas Abadi Raya**.

---

## 1. Ikhtisar Proyek & Peta Arsitektur

Platform web **CV Tunas Abadi Raya** dibangun dengan **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, dan **TypeScript**.

### Struktur Direktori Utama
* **`app/`** — Routing kanonis, layout global, sitemap/robots SEO, endpoint API, dan 5 halaman kepatuhan hukum:
  * `/spesifikasi-legal` — Spesifikasi teknis & kepatuhan SLA.
  * `/syarat-ketentuan` — Syarat & ketentuan layanan enterprise.
  * `/kebijakan-pengembalian` — Kebijakan pengembalian dana & pembatalan milestone.
  * `/kebijakan-privasi` — Kebijakan privasi & perlindungan data (UU PDP).
  * `/standar-sla` — Standar garansi ketersediaan infrastruktur (99.9% uptime SLA).
  * `/api/lead` — Route Handler server-side untuk pengiriman formulir konsultasi & notifikasi lead.
* **`components/layout/`** — Komponen tata letak global:
  * `Navbar.tsx` — Navigasi desktop & drawer mobile dengan theme toggle (light/dark) dan anti-wrapping badge.
  * `Footer.tsx` — Informasi korporat resmi, kontak legal, navigasi footer, dan identitas brand.
  * `FloatingWhatsApp.tsx` — Floating CTA WhatsApp interaktif dengan enkripsi intent link.
* **`components/sections/`** — Seksi landing page berstandar enterprise:
  * `HeroSection.tsx`, `ServicesSection.tsx`, `ChallengesMatrixSection.tsx`, `SprintMethodologySection.tsx`, `ProjectSchemesSection.tsx`, `PortfolioSection.tsx`, `ConsultationSection.tsx`, `LegalCompliancePortal.tsx`.
* **`data/`** — Single Source of Truth untuk data statis & kepatuhan:
  * `company.ts` — Informasi legal korporat, alamat kantor Manado, email resmi, dan skema harga IDR.
  * `legal.ts` — Pasal dan ketentuan hukum komprehensif.
* **`lib/server/`** — Modul komputasi server-only:
  * `telegram.ts` — Dispatcher bot Telegram untuk notifikasi lead.
  * `env.ts` — Validasi variabel lingkungan server dengan proteksi `import 'server-only'`.
* **`types/`** — Definisi tipe TypeScript kanonis (`index.ts`).

---

## 2. Aturan Perencanaan & Delegasi Subagent (WAJIB)

Setiap modifikasi sistem, perbaikan bug, penyempurnaan UI, atau implementasi fitur baru **WAJIB** mengikuti alur kerja berikut:

1. **Tahap Perencanaan (Lead Agent):**
   * Lead Agent **WAJIB** merencanakan langkah implementasi secara mendalam sebelum menulis kode.
   * Identifikasi akar masalah (*root cause*), berkas yang terpengaruh (*blast radius*), tipe data yang relevan, serta potensi *edge cases*.
2. **Tahap Delegasi Tugas (Coder Subagent):**
   * Setelah rencana matang, seluruh tugas implementasi berkategori **🟢 S (Small)** dan **🟡 M (Medium)** yang bersifat eksekusi teknis langsung tanpa perubahan arsitektur mendalam **WAJIB didelegasikan ke Coder Subagent** yang dipanggil dengan **`Model: "flash"` (`Gemini 3.8 Flash`)**.
   * Lead Agent berfokus pada evaluasi hasil kerja subagent, verifikasi build/typecheck, dan penyelarasan standar arsitektur tingkat tinggi.

### Matriks Delegasi & Model

| Ukuran | Jenis Pekerjaan | Pelaksana & Model |
|---|---|---|
| 🟢 **S** | Perbaikan styling CSS/Tailwind, update `.gitignore`, pembaruan data statis (`data/*`), penyesuaian teks/copywriting, SVG fixes | **Coder subagent (`Model: "flash"` — Gemini 3.8 Flash)** |
| 🟡 **M** | Pembuatan seksi landing page baru, formulir konsultasi, perbaikan interaktivitas drawer/navbar, integrasi API route handler, unit tests | **Coder subagent (`Model: "flash"` — Gemini 3.8 Flash)**, direview akhir oleh Lead |
| 🔴 **L** | Restrukturisasi arsitektur sistem, audit kepatuhan Xendit & keamanan tingkat tinggi, resolusi konflik Git lintas-branch | **Lead reasoning agent** |

---

## 3. Kontrol Versi 3-Tier & Pipeline PR (`feat/a -> dev -> main`)

Seluruh perubahan kode dikelola melalui alur branch 3-tier yang ketat:

* **`feat/a`** — Branch kerja pengembangan aktif. **Seluruh commit langsung wajib dilakukan di branch ini.**
* **`dev`** — Branch staging untuk pengujian integrasi (`feat/a ──PR──> dev`).
* **`main`** — Branch produksi kanonis (`dev ──PR──> main`).

### Aturan Alur Kerja & Non-Interactive PR
1. **Dilarang keras commit langsung ke `main` atau `dev`.**
2. **Quality Gates Sebelum Setiap Commit:**
   ```bash
   pnpm typecheck && pnpm lint && pnpm build
   ```
   Ketiga pemeriksaan wajib lulus (`exit code 0`) tanpa kompromi.
3. **Format Pesan Commit (Conventional Commits):**
   * Pola: `<type>(<scope>): <ringkasan deskriptif>`
   * Tipe yang diizinkan: `feat`, `fix`, `docs`, `chore`, `refactor`, `style`, `perf`, `test`.
4. **Alur Promosi Branch & Non-Interactive Merge (Anti-Hang):**
   * **Langkah 1 (Push ke `feat/a`):**
     ```bash
     git push -u origin feat/a
     ```
   * **Langkah 2 (PR & Merge `feat/a -> dev`):**
     ```bash
     gh pr create --base dev --head feat/a --title "feat: <ringkasan>" --body "Pembaruan terverifikasi pada feat/a"
     gh pr merge feat/a --merge
     ```
   * **Langkah 3 (PR & Merge `dev -> main`):**
     ```bash
     gh pr create --base main --head dev --title "release: <ringkasan>" --body "Promosi dev ke produksi"
     gh pr merge dev --merge
     ```
   * **Langkah 4 (Sinkronisasi `feat/a` Lokal):**
     ```bash
     git checkout feat/a && git pull origin feat/a && git merge origin/main && git push origin feat/a
     ```
   *(Selalu sertakan argumen branch/PR eksplisit pada `gh pr merge` untuk mencegah prompt interaktif yang menggantung sesi agent).*

---

## 4. Kebijakan Deployment Vercel & Build Ignore Rules

Untuk menghemat kuota build minutes serta menjaga stabilitas pipeline rilis produksi:
* **Blokir Build Otomatis `feat/a` dan `dev`:**
  Branch `feat/a` dan `dev` diblokir secara ketat dari pemicuan build/deployment di Vercel melalui konfigurasi `vercel.json`:
  ```json
  {
    "$schema": "https://openapi.vercel.sh/vercel.json",
    "git": {
      "deploymentEnabled": {
        "feat/a": false,
        "dev": false
      }
    }
  }
  ```
* **Hanya `main` yang Memicu Deployment Produksi:**
  Seluruh deployment aktif ke domain kanonis produksi (`tunasabadiraya.cloud`) hanya dieksekusi saat kode berhasil dipromosikan dan di-merge ke branch `main`.
* **Konfigurasi Vercel Dashboard Ignored Build Step:**
  Jika dikonfigurasikan melalui antarmuka Vercel Dashboard (*Project Settings > Git > Ignored Build Step*), perintah kanonis yang digunakan adalah:
  ```bash
  [ "$VERCEL_GIT_COMMIT_REF" = "main" ]
  ```
  *(Perintah bash ini menghasilkan exit code `1` pada commit branch `main` sehingga Vercel melanjutkan proses build, dan menghasilkan exit code `0` pada branch `feat/a` maupun `dev` untuk membatalkan proses build secara aman tanpa menghabiskan kuota build minutes).*

---

## 5. Aturan Rekayasa & Kepatuhan Mutlak (Non-Negotiable Rules)

1. **Kepatuhan Risiko & Verifikasi Xendit:**
   * **Nama Entitas Resmi:** Wajib selalu tertulis konsisten sebagai `CV Tunas Abadi Raya` di seluruh header, footer, metadata, dan dokumen legal.
   * **Email Resmi:** Seluruh korespondensi korporat mengarah ke `fayol@tunasabadiraya.cloud`.
   * **Alamat Fisik Lengkap:** Alamat kantor resmi di Manado wajib tercantum jelas di Footer (`Malalayang Satu Timur, Kecamatan Malalayang, Kota Manado, Sulawesi Utara, Indonesia`).
   * **Transparansi Skema Biaya:** Skema harga proyek wajib dinyatakan secara transparan dalam mata uang IDR dengan termin berbasis milestone terukur.
   * **Kontak WhatsApp:** Tombol WhatsApp disediakan melalui floating component (`FloatingWhatsApp.tsx`); nomor telepon mentah tidak ditampilkan langsung di teks statis Footer untuk mitigasi scraping.
   * **5 Route Legal Kanonis:** Rute `/spesifikasi-legal`, `/syarat-ketentuan`, `/kebijakan-pengembalian`, `/kebijakan-privasi`, dan `/standar-sla` wajib aktif dan dapat diakses publik.
2. **Isolasi Rahasia Sisi Server (*Server-Side Secret Isolation*):**
   * Kredensial sensitif seperti `TELEGRAM_BOT_TOKEN` dan `TELEGRAM_CHAT_ID` dilarang keras menggunakan prefix `NEXT_PUBLIC_` atau diimpor di komponen klien (`"use client"`).
   * Modul yang mengakses kredensial ini wajib berada di `lib/server/` dan dilindungi dengan `import 'server-only'`.
3. **Pencegahan Teks Membungkus (*Anti-Wrapping UI*):**
   * Seluruh tautan navigasi horizontal di Navbar dan badge status wajib menyertakan kelas Tailwind `whitespace-nowrap shrink-0` agar label Bahasa Indonesia multi-kata (seperti *"Skema Proyek"* dan *"Legal & SLA"*) tidak pernah terpecah menjadi 2 baris pada resolusi desktop maupun tablet.
4. **Kebersihan Aset Desain (*Raw Assets Hygiene*):**
   * Direktori `/raw-resources/` dan berkas mentah ekspor Google Stitch dilarang di-commit ke repositori Git (wajib masuk `.gitignore`). Hanya aset teroptimasi yang boleh disimpan di `public/`.
