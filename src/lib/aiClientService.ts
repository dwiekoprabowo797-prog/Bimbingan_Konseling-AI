import { generateCurriculumDocumentClient, CurriculumFormData } from "./curriculumGenerator";

/**
 * Safe fetch helper that handles static deployments (like GitHub Pages)
 * where backend /api routes return 404 or HTML instead of JSON.
 */
async function safePostJson<T>(endpoint: string, body: any): Promise<{ ok: boolean; data?: T; error?: string }> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      return { ok: false, error: `HTTP ${res.status}: ${res.statusText}` };
    }

    const contentType = res.headers.get("content-type") || "";
    const text = await res.text();

    if (!text || text.trim().startsWith("<") || !contentType.includes("application/json")) {
      // Returned HTML or empty string (typical of static GitHub Pages or 404 handler)
      return { ok: false, error: "Static hosting detected: no backend server response." };
    }

    try {
      const parsed = JSON.parse(text);
      return { ok: true, data: parsed };
    } catch (parseErr: any) {
      return { ok: false, error: `Invalid JSON response: ${parseErr?.message}` };
    }
  } catch (netErr: any) {
    return { ok: false, error: netErr?.message || "Network error" };
  }
}

/**
 * Generates Perangkat Ajar KBM / ACP documents with seamless fallback for GitHub Pages
 */
export async function generatePerangkatAjarKbc(docType: string, formData: CurriculumFormData): Promise<string> {
  const result = await safePostJson<{ status: string; html?: string; message?: string }>(
    "/api/ai/generate-perangkat-ajar-kbc",
    { docType, formData }
  );

  if (result.ok && result.data?.status === "success" && result.data?.html) {
    return result.data.html;
  }

  // Fallback to rich client-side generator (for GitHub Pages & offline use)
  return generateCurriculumDocumentClient(docType, formData);
}

/**
 * Generates Standard Perangkat Ajar AI documents with seamless fallback
 */
export async function generatePerangkatAjar(docType: string, formData: CurriculumFormData): Promise<string> {
  const result = await safePostJson<{ status: string; html?: string; message?: string }>(
    "/api/ai/generate-perangkat-ajar",
    { docType, formData }
  );

  if (result.ok && result.data?.status === "success" && result.data?.html) {
    return result.data.html;
  }

  return generateCurriculumDocumentClient(docType, formData);
}

/**
 * Generates Modul Ajar Deep Learning with seamless fallback
 */
export async function generateModulAjar(form: any): Promise<string> {
  const result = await safePostJson<{ status: string; html?: string; message?: string }>(
    "/api/ai/generate-modul",
    form
  );

  if (result.ok && result.data?.status === "success" && result.data?.html) {
    return result.data.html;
  }

  // Client-side fallback for Modul Ajar
  return generateCurriculumDocumentClient("modul_ajar", {
    schoolName: form.namaSekolah,
    subject: form.mataPelajaran,
    level: `${form.fase} / Kelas ${form.kelas}`,
    year: form.tahunAjaran,
    teacher: form.namaGuru,
    elemenCp: form.topik,
    rumusanTp: form.tujuan || `Peserta didik mampu memahami dan mengaplikasikan ${form.topik} (${form.subTopik}) secara mendalam dan bermakna.`,
    learningModel: form.model,
    sintakModel: "1. Orientasi Masalah, 2. Pengorganisasian Belajar, 3. Penyelidikan Mandiri/Kelompok, 4. Pengembangan & Penyajian Karya, 5. Analisis & Evaluasi",
    jumlahPertemuan: form.jumlahPertemuan || "2",
    jpPerPertemuan: form.waktu || "3"
  });
}

/**
 * Generates Modul Kokurikuler P5 / P3 with seamless fallback
 */
export async function generateModulKokurikuler(formData: any): Promise<string> {
  const result = await safePostJson<{ status: string; html?: string; message?: string }>(
    "/api/ai/generate-modul-kokurikuler",
    { formData }
  );

  if (result.ok && result.data?.status === "success" && result.data?.html) {
    return result.data.html;
  }

  // Rich fallback template for Modul Kokurikuler
  const {
    schoolName = "SMP NEGERI 10 TARAKAN",
    tema = "Bangunlah Jiwa dan Raganya",
    topik = "Sahabat Sehat, Jiwa Kuat: Cegah Perundungan di Era Digital",
    fase = "Fase D (Kelas VII - IX)",
    alokasiWaktu = "36 JP",
    teacher = "Al-Kahpi, S.Pd.",
    principal = "IBRAHIM, M.Pd.",
    cityDate = "Tarakan, 14 Juli 2026"
  } = formData || {};

  return `
    <style>
      .dokumen-kokurikuler { font-family: Arial, sans-serif; color: #1e293b; padding: 24px; font-size: 11pt; line-height: 1.5; }
      .kop { text-align: center; border-bottom: 3px double #1e3a8a; padding-bottom: 12px; margin-bottom: 16px; }
      .table-k { width: 100%; border-collapse: collapse; margin-bottom: 14px; font-size: 9.5pt; }
      .table-k th, .table-k td { border: 1px solid #cbd5e1; padding: 6px 8px; }
      .table-k th { background: #1a3a5c; color: #fff; text-align: center; }
    </style>
    <div class="dokumen-kokurikuler">
      <div class="kop">
        <h2 style="margin: 0; color: #1e3a8a;">${schoolName.toUpperCase()}</h2>
        <p style="margin: 4px 0 0 0; color: #64748b; font-size: 9pt;">MODUL PROYEK PENGUATAN PROFIL PELAJAR PANCASILA (P5)</p>
      </div>
      <h3 style="text-align: center; margin: 14px 0; color: #0f172a;">MODUL KOKURIKULER: ${tema.toUpperCase()}</h3>
      <table class="table-k">
        <tr><td style="width: 30%; font-weight: bold; background: #f8fafc;">Tema Proyek</td><td>${tema}</td></tr>
        <tr><td style="font-weight: bold; background: #f8fafc;">Topik Proyek</td><td>${topik}</td></tr>
        <tr><td style="font-weight: bold; background: #f8fafc;">Fase / Sasaran</td><td>${fase}</td></tr>
        <tr><td style="font-weight: bold; background: #f8fafc;">Alokasi Waktu</td><td>${alokasiWaktu}</td></tr>
        <tr><td style="font-weight: bold; background: #f8fafc;">Koordinator</td><td>${teacher}</td></tr>
      </table>
      <h4 style="color: #1e3a8a; margin-top: 14px;">A. Dimensi & Elemen Profil Pelajar Pancasila</h4>
      <table class="table-k">
        <thead><tr><th>Dimensi</th><th>Elemen</th><th>Sub-Elemen & Target Capaian</th></tr></thead>
        <tbody>
          <tr><td>Beriman & Berakhlak Mulia</td><td>Akhlak Pribadi & Kepada Sesama</td><td>Merawat diri secara fisik dan mental serta mengutamakan persamaan dengan orang lain.</td></tr>
          <tr><td>Gotong Royong</td><td>Kolaborasi & Kepedulian</td><td>Kerja sama dan tanggap terhadap lingkungan sosial untuk mencegah bullying.</td></tr>
          <tr><td>Bernalar Kritis</td><td>Refleksi Pemikiran</td><td>Menganalisis dan mengevaluasi informasi digital secara objektif.</td></tr>
        </tbody>
      </table>
      <h4 style="color: #1e3a8a; margin-top: 14px;">B. Tahapan Alur Aktivitas Proyek</h4>
      <table class="table-k">
        <thead><tr><th>Tahap</th><th>Aktivitas Utama</th><th>JP</th></tr></thead>
        <tbody>
          <tr><td>1. Pengenalan</td><td>Eksplorasi isu kesehatan mental remaja dan fenomena cyberbullying di media sosial.</td><td>8 JP</td></tr>
          <tr><td>2. Kontekstualisasi</td><td>Observasi iklim pertemanan di sekolah dan identifikasi faktor risiko perundungan.</td><td>10 JP</td></tr>
          <tr><td>3. Aksi</td><td>Merancang kampanye "Duta Sahabat Damai" dan pembuatan poster/video edukasi kreatif.</td><td>12 JP</td></tr>
          <tr><td>4. Refleksi & Tindak Lanjut</td><td>Pameran karya (Gelar Karya P5) dan deklarasi komitmen bersama anti-kekerasan.</td><td>6 JP</td></tr>
        </tbody>
      </table>
      <table style="width: 100%; margin-top: 24px; border: none;">
        <tr>
          <td style="width: 50%;">Mengetahui,<br/><strong>Kepala Sekolah</strong><br/><br/><br/><br/><strong><u>${principal}</u></strong></td>
          <td style="width: 50%; text-align: right;">${cityDate}<br/><strong>Koordinator Proyek</strong><br/><br/><br/><br/><strong><u>${teacher}</u></strong></td>
        </tr>
      </table>
    </div>
  `;
}

/**
 * Generates Exam Questions (Soal Ujian) with seamless fallback
 */
export async function generateSoalUjian(payload: any): Promise<string> {
  const result = await safePostJson<{ status: string; html?: string; message?: string }>(
    "/api/ai/generate-soal-ujian",
    payload
  );

  if (result.ok && result.data?.status === "success" && result.data?.html) {
    return result.data.html;
  }

  // Dynamic fallback for Exam Question generator
  const mapel = payload?.mapel || "Bimbingan Konseling";
  const kelas = payload?.kelas || "Kelas VII";
  const materi = payload?.materi || "Kesehatan Mental & Anti-Bullying";
  const jumlahSoal = payload?.jumlahSoal || 5;

  let soalHtml = "";
  for (let i = 1; i <= jumlahSoal; i++) {
    soalHtml += `
      <div style="margin-bottom: 16px; page-break-inside: avoid;">
        <p style="font-weight: bold; margin-bottom: 4px;">${i}. Peserta didik yang mampu mengenali perubahan emosi saat masa pubertas dan meresponsnya secara tenang mencerminkan dimensi profil:</p>
        <div style="margin-left: 18px; line-height: 1.6;">
          <div>A. Gotong royong dan kepedulian</div>
          <div>B. Mandiri dan regulasi emosi diri</div>
          <div>C. Kreativitas tanpa batas</div>
          <div>D. Penalaran abstrak murni</div>
        </div>
        <p style="font-size: 8.5pt; color: #16a34a; margin-top: 4px; font-weight: bold;">Kunci Jawaban: B | Pembahasan: Regulasi emosi dan kesadaran diri adalah perwujudan dimensi Mandiri.</p>
      </div>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #1e293b;">
      <h2 style="text-align: center; margin-bottom: 4px; text-transform: uppercase;">NASKAH SOAL ASESMEN / UJIAN</h2>
      <p style="text-align: center; color: #64748b; font-size: 10pt; margin-top: 0;">Mata Pelajaran: ${mapel} | ${kelas} | Materi: ${materi}</p>
      <hr style="border: 1px solid #cbd5e1; margin-bottom: 18px;" />
      ${soalHtml}
    </div>
  `;
}

/**
 * Generates Question Cards (Kartu Soal) with seamless fallback
 */
export async function generateKartuSoal(payload: any): Promise<string> {
  const result = await safePostJson<{ status: string; html?: string; message?: string }>(
    "/api/ai/generate-kartu-soal",
    payload
  );

  if (result.ok && result.data?.status === "success" && result.data?.html) {
    return result.data.html;
  }

  const {
    schoolName = "SMP NEGERI 10 TARAKAN",
    subject = "Bimbingan Konseling",
    level = "Kelas VII",
    teacher = "Al-Kahpi, S.Pd."
  } = payload || {};

  return `
    <div style="font-family: Arial, sans-serif; padding: 16px; color: #1e293b;">
      <h3 style="text-align: center; color: #1e3a8a; margin-bottom: 12px;">KARTU SOAL ASESMEN SUMATIF</h3>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 9.5pt;">
        <tr><td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold; width: 25%;">Satuan Pendidikan</td><td style="border: 1px solid #cbd5e1; padding: 6px;">${schoolName}</td></tr>
        <tr><td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">Mata Pelajaran</td><td style="border: 1px solid #cbd5e1; padding: 6px;">${subject} (${level})</td></tr>
        <tr><td style="border: 1px solid #cbd5e1; padding: 6px; font-weight: bold;">Penyusun</td><td style="border: 1px solid #cbd5e1; padding: 6px;">${teacher}</td></tr>
      </table>
      <table style="width: 100%; border-collapse: collapse; font-size: 9.5pt;">
        <thead>
          <tr style="background: #1a3a5c; color: #fff;">
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 8%;">No</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 32%;">Capaian Pembelajaran / Indikator</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 45%;">Butir Soal & Opsi</th>
            <th style="border: 1px solid #cbd5e1; padding: 6px; width: 15%;">Kunci & Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center;">1</td>
            <td style="border: 1px solid #cbd5e1; padding: 6px;">Peserta didik mampu mengidentifikasi tindakan pencegahan perundungan di kelas.</td>
            <td style="border: 1px solid #cbd5e1; padding: 6px;">Ketika melihat teman diejek di grup media sosial, tindakan terbaik seorang sahabat adalah:<br/>A. Ikut tertawa<br/>B. Menjadi pembela dan melaporkan santun<br/>C. Keluar dari grup<br/>D. Membalas dengan mengejek</td>
            <td style="border: 1px solid #cbd5e1; padding: 6px; text-align: center; font-weight: bold; color: #16a34a;">Kunci: B<br/>Level: C3</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

/**
 * Chat Assistant AI with seamless fallback
 */
export async function chatAsisten(messages: any[], modelName?: string): Promise<string> {
  const result = await safePostJson<{ status: string; reply?: string; message?: string }>(
    "/api/ai/chat-asisten",
    { messages, modelName }
  );

  if (result.ok && result.data?.status === "success" && result.data?.reply) {
    return result.data.reply;
  }

  const lastUserMsg = messages[messages.length - 1]?.text || "";
  return `Halo Bapak/Ibu Guru! Saya Asisten AI Bimbingan Konseling & Kurikulum Merdeka. 
Mengenai pertanyaan Anda: "${lastUserMsg.slice(0, 100)}...", 
Prinsip utama dalam layanan Bimbingan Konseling Kurikulum Merdeka adalah pembelajaran berpusat pada peserta didik (Student-Centered), penguatan 6 Dimensi Profil Pelajar Pancasila (P3), serta pendekatan deep learning yang mindful, meaningful, dan joyful. 
Silakan manfaatkan menu Generator Perangkat Ajar, Modul Ajar AI, dan Laporan BK untuk mendukung administrasi pembelajaran Anda.`;
}
