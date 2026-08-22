// Client-side Pedagogical Document Generator for Kurikulum Berbasis Merdeka (KBM) / Kurikulum Merdeka
// Provides high-fidelity, standardized administrative documents offline and on GitHub Pages

export interface CurriculumFormData {
  schoolName?: string;
  kemenagOffice?: string;
  schoolAddress?: string;
  subject?: string;
  singkatanMapel?: string;
  level?: string;
  year?: string;
  totalJp?: string;
  jpPerMinggu?: string;
  teacher?: string;
  nipTeacher?: string;
  cityDate?: string;
  principal?: string;
  nipPrincipal?: string;
  cpRasional?: string;
  cpElemen?: string;
  learningModel?: string;
  sintakModel?: string;
  kodeTp?: string;
  rumusanTp?: string;
  elemenCp?: string;
  jumlahPertemuan?: string;
  jpPerPertemuan?: string;
  topikLokal?: string;
  [key: string]: any;
}

export function generateCurriculumDocumentClient(docType: string, formData: CurriculumFormData): string {
  const {
    schoolName = "SMP NEGERI 10 TARAKAN",
    kemenagOffice = "PEMERINTAH KOTA TARAKAN",
    schoolAddress = "Jl. Amal Lama RT. 4 Kel. Pantai Amal Kec. Tarakan Timur Kota Tarakan",
    subject = "Bimbingan Konseling",
    singkatanMapel = "BK",
    level = "Fase D / Kelas VIII",
    year = "2026/2027",
    totalJp = "72 JP / Tahun",
    jpPerMinggu = "2 JP/Minggu",
    teacher = "Al-Kahpi, S.Pd.",
    nipTeacher = "198208242011011001",
    cityDate = "Tarakan, 14 Juli 2026",
    principal = "IBRAHIM, M.Pd.",
    nipPrincipal = "197802152008011021",
    cpRasional = "Layanan Bimbingan dan Konseling (BK) di SMPN 10 Tarakan mengintegrasikan 6 Dimensi Profil Pelajar Pancasila (P3) serta Kearifan Lokal Pesisir Berbudaya Kota Tarakan sebagai navigasi psikologis dan kesadaran emosional. Melalui pendekatan psikologis yang humanis dan kolaboratif, layanan BK memfasilitasi peserta didik agar mampu mengelola gejolak perkembangan remaja, menumbuhkan empati anti-perundungan lintas suku, serta mengambil keputusan karier masa depan secara bijak demi terwujudnya pribadi yang mandiri, bernalar kritis, dan berakhlak mulia.",
    cpElemen = "",
    learningModel = "Discovery Learning",
    sintakModel = "1. Stimulasi, 2. Identifikasi Masalah, 3. Pengumpulan Data, 4. Pengolahan Data, 5. Pembuktian, 6. Kesimpulan",
    kodeTp = "TP.BK.T10.26.01",
    rumusanTp = "Siswa mampu menerima perubahan pubertas dan mengendalikan emosi diri, mencegah perundungan (bullying), mengelola waktu belajar efektif, serta memetakan minat bakat masa depan.",
    elemenCp = "Bimbingan Pribadi & Sosial",
    jumlahPertemuan = "3",
    jpPerPertemuan = "2",
    topikLokal = "Pelestarian Ekosistem Mangrove & Bekantan (KKMB), Harmoni Remaja Multietnis (Tidung, Dayak, Bugis, Jawa), serta Filosofi Kerja Sama Budaya Iraw Tengkayu Kota Tarakan."
  } = formData;

  const baseStyles = `
    <style>
      .dokumen-kbm {
        font-family: Arial, Helvetica, sans-serif;
        color: #1e293b;
        background: #ffffff;
        padding: 24px;
        line-height: 1.5;
        font-size: 11pt;
      }
      .kop-surat {
        text-align: center;
        border-bottom: 3px double #1e3a8a;
        padding-bottom: 12px;
        margin-bottom: 18px;
      }
      .kop-instansi { font-size: 11pt; font-weight: bold; text-transform: uppercase; color: #334155; margin: 0; }
      .kop-sekolah { font-size: 14pt; font-weight: 800; text-transform: uppercase; color: #1e3a8a; margin: 2px 0; }
      .kop-alamat { font-size: 9pt; color: #64748b; margin: 0; }
      .judul-dokumen { text-align: center; margin: 16px 0 20px 0; }
      .judul-dokumen h2 { font-size: 13pt; font-weight: 800; text-transform: uppercase; color: #0f172a; margin: 0; }
      .judul-dokumen p { font-size: 10pt; color: #475569; margin: 2px 0 0 0; font-weight: 600; }
      .section-title { font-size: 11pt; font-weight: bold; color: #1e3a8a; margin-top: 18px; margin-bottom: 8px; text-transform: uppercase; }
      table.table-kbm { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 9.5pt; }
      table.table-kbm th, table.table-kbm td { border: 1px solid #cbd5e1; padding: 6px 8px; vertical-align: top; }
      table.table-kbm th { background-color: #1a3a5c !important; color: #ffffff !important; font-weight: bold; text-align: center; }
      table.table-kbm tr:nth-child(even) { background-color: #f8fafc; }
      .ttd-box { width: 100%; margin-top: 30px; border-collapse: collapse; }
      .ttd-box td { border: none !important; padding: 4px; vertical-align: top; font-size: 10pt; }
      .badge-dimensi { display: inline-block; background: #e0e7ff; color: #3730a3; padding: 2px 6px; border-radius: 4px; font-size: 8pt; font-weight: bold; margin: 2px; }
      @media print {
        body { margin: 0; padding: 0; background: #fff; }
        .dokumen-kbm { padding: 0; }
      }
    </style>
  `;

  const headerKop = `
    <div class="kop-surat">
      <p class="kop-instansi">${kemenagOffice}</p>
      <h1 class="kop-sekolah">${schoolName}</h1>
      <p class="kop-alamat">${schoolAddress}</p>
    </div>
  `;

  const footerTtd = `
    <table class="ttd-box">
      <tr>
        <td style="width: 50%; text-align: left;">
          Mengetahui,<br/>
          <strong>Kepala Sekolah</strong><br/><br/><br/><br/>
          <strong><u>${principal}</u></strong><br/>
          NIP. ${nipPrincipal}
        </td>
        <td style="width: 50%; text-align: right;">
          ${cityDate}<br/>
          <strong>Guru Mata Pelajaran / BK</strong><br/><br/><br/><br/>
          <strong><u>${teacher}</u></strong><br/>
          NIP. ${nipTeacher}
        </td>
      </tr>
    </table>
  `;

  if (docType === "analisis_cp") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>ANALISIS CAPAIAN PEMBELAJARAN (ACP)</h2>
          <p>Kurikulum Berbasis Merdeka (KBM) | Tahun Pelajaran ${year}</p>
        </div>

        <div class="section-title">A. Identitas Mata Pelajaran & Satuan Pendidikan</div>
        <table class="table-kbm">
          <tr><td style="width: 30%; font-weight: bold; background: #f1f5f9;">Satuan Pendidikan</td><td>${schoolName}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Mata Pelajaran / Layanan</td><td>${subject} (${singkatanMapel})</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Fase / Kelas / Semester</td><td>${level} / Ganjil & Genap</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Tahun Pelajaran</td><td>${year}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Guru Pengampu</td><td>${teacher} (NIP. ${nipTeacher})</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Alokasi Waktu</td><td>${totalJp} (${jpPerMinggu})</td></tr>
        </table>

        <div class="section-title">B. Rasional Mata Pelajaran & Relevansi KBM</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 30%;">Uraian Rasional</th><th>Deskripsi & Kontekstualisasi Sekolah</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td><strong>Pentingnya Layanan & Relevansi KBM</strong></td>
              <td>${cpRasional}</td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td><strong>Kaitan dengan 6 Dimensi Profil Pelajar Pancasila (P3)</strong></td>
              <td>Layanan pembelajaran secara simultan menumbuhkan keimanan, kemandirian emosional, penalaran kritis dalam pemecahan masalah, gotong royong lintas budaya di pesisir Kota Tarakan, kebinekaan global, dan kreativitas eksplorasi karier.</td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td><strong>Orientasi Pembelajaran Bermakna</strong></td>
              <td>Berpusat pada peserta didik (Student-Centered) melalui Deep Learning (Mindful, Meaningful, Joyful Learning) dengan memperhatikan keragaman latar belakang siswa pesisir.</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">C. Tujuan Mata Pelajaran / Layanan BK</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 45%;">Tujuan Pembelajaran Umum</th><th>Indikator Ketercapaian Umum</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td>Mengembangkan pemahaman diri, regulasi emosi, dan kesehatan mental yang tangguh.</td>
              <td>Peserta didik mampu mengidentifikasi potensi diri, mengontrol stres gawai/sosial media, dan beradaptasi dengan masa pubertas.</td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td>Membangun keterampilan sosial yang inklusif, harmonis, dan bebas dari segala bentuk perundungan.</td>
              <td>Peserta didik menerapkan komunikasi asertif, empati multietnis, dan kolaboratif dalam lingkungan sekolah dan masyarakat.</td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td>Merencanakan strategi belajar efektif dan arah karier masa depan sesuai minat dan bakat.</td>
              <td>Peserta didik menyusun jadwal belajar mandiri, mengatasi prokrastinasi, dan mengenali jalur pendidikan lanjutan.</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">D. Karakteristik Mata Pelajaran & Elemen Capaian Pembelajaran</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 25%;">Elemen</th><th style="width: 40%;">Deskripsi Elemen</th><th>Cakupan Konten Utama</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td><strong>Elemen Pribadi</strong></td>
              <td>Mencakup kesadaran diri, penerimaan perubahan fisik/psikologis, regulasi emosi, dan ketahanan diri (resilience).</td>
              <td>Pengenalan diri, konsep diri positif, manajemen stres & kecemasan, etika digital hygiene.</td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td><strong>Elemen Sosial</strong></td>
              <td>Mencakup interaksi antarteman, komunikasi efektif, empati, anti-perundungan, dan toleransi kebinekaan.</td>
              <td>Komunikasi asertif, pencegahan cyberbullying, resolusi konflik damai, harmoni multikultural.</td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td><strong>Elemen Belajar</strong></td>
              <td>Mencakup efikasi diri akademik, gaya belajar, manajemen waktu, dan motivasi berprestasi.</td>
              <td>Teknik belajar efektif, manajemen prioritas, mengatasi kejenuhan belajar, adaptasi teknologi.</td>
            </tr>
            <tr>
              <td style="text-align: center;">4</td>
              <td><strong>Elemen Karier</strong></td>
              <td>Mencakup eksplorasi bakat/minat, wawasan dunia kerja/profesi modern, dan persiapan studi lanjutan.</td>
              <td>Pemetaan bakat, eksplorasi profesi era AI/digital, pengenalan jalur SMA/SMK/MA.</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">E. Capaian Pembelajaran Fase D (${level})</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 15%;">Fase / Kelas</th><th style="width: 45%;">Capaian Pembelajaran (CP)</th><th style="width: 20%;">Kompetensi Kunci</th><th>Konten / Materi Pokok</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center; font-weight: bold;">${level}</td>
              <td>Peserta didik mampu memahami diri dan lingkungannya secara objektif, mengelola emosi dan perilaku secara bertanggung jawab, berinteraksi sosial secara sehat dan bebas perundungan, mengoptimalkan strategi belajar mandiri, serta merintis perencanaan karier masa depan yang selaras dengan nilai-nilai Pancasila.</td>
              <td>Mengidentifikasi (C1), Memahami (C2), Mengaplikasikan (C3), Menganalisis (C4), Mengevaluasi (C5), Mengembangkan (C6)</td>
              <td>Kesehatan Mental, Anti-Bullying, Manajemen Waktu, Eksplorasi Karier Pesisir & Digital</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">F. Penjabaran Kata Kerja Operasional (KKO) HOTS per Elemen</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 25%;">Elemen</th><th>Penjabaran KKO Tingkat Tinggi (HOTS C4-C6) & Target Karakter P3</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td><strong>Elemen Pribadi</strong></td>
              <td><strong>Menganalisis (C4)</strong> faktor pemicu stres pubertas; <strong>Mengevaluasi (C5)</strong> respons emosi diri; <strong>Menciptakan (C6)</strong> rencana aksi pengembangan karakter mandiri dan berintegritas.</td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td><strong>Elemen Sosial</strong></td>
              <td><strong>Membedakan (C4)</strong> relasi sehat vs toxic/bullying; <strong>Menilai (C5)</strong> dampak perilaku diskriminatif; <strong>Merancang (C6)</strong> aksi solidaritas kebinekaan dan perdamaian antarteman.</td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td><strong>Elemen Belajar</strong></td>
              <td><strong>Mendiagnosis (C4)</strong> hambatan belajar pribadi; <strong>Menimbang (C5)</strong> efektivitas jadwal belajar; <strong>Menyusun (C6)</strong> strategi manajemen waktu berbasis tujuan terukur.</td>
            </tr>
            <tr>
              <td style="text-align: center;">4</td>
              <td><strong>Elemen Karier</strong></td>
              <td><strong>Mengorelasikan (C4)</strong> bakat minat dengan peluang profesi; <strong>Memilih (C5)</strong> alternatif jalur pendidikan lanjutan; <strong>Merumuskan (C6)</strong> roadmap karier jangka pendek dan menengah.</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">G. Keterkaitan dengan 6 Dimensi Profil Pelajar Pancasila (P3)</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 30%;">Dimensi Profil Pelajar Pancasila</th><th style="width: 35%;">Elemen Pembelajaran Terkait</th><th style="width: 15%; text-align: center;">Relevansi</th><th style="width: 15%; text-align: center;">Status</th></tr>
          </thead>
          <tbody>
            <tr><td style="text-align: center;">1</td><td>Beriman, Bertakwa kepada Tuhan YME & Berakhlak Mulia</td><td>Elemen Pribadi & Sosial (Akhlak Pribadi, Integritas)</td><td style="text-align: center;">Sangat Tinggi</td><td style="text-align: center; color: green; font-weight: bold;">✔ Terintegrasi</td></tr>
            <tr><td style="text-align: center;">2</td><td>Berkebinekaan Global</td><td>Elemen Sosial (Toleransi Multietnis Tarakan)</td><td style="text-align: center;">Sangat Tinggi</td><td style="text-align: center; color: green; font-weight: bold;">✔ Terintegrasi</td></tr>
            <tr><td style="text-align: center;">3</td><td>Gotong Royong</td><td>Elemen Sosial (Kolaborasi, Empati, Anti-Bullying)</td><td style="text-align: center;">Tinggi</td><td style="text-align: center; color: green; font-weight: bold;">✔ Terintegrasi</td></tr>
            <tr><td style="text-align: center;">4</td><td>Mandiri</td><td>Elemen Pribadi & Belajar (Regulasi Diri, Manajemen Waktu)</td><td style="text-align: center;">Sangat Tinggi</td><td style="text-align: center; color: green; font-weight: bold;">✔ Terintegrasi</td></tr>
            <tr><td style="text-align: center;">5</td><td>Bernalar Kritis</td><td>Elemen Belajar & Pribadi (Literasi Digital, Problem Solving)</td><td style="text-align: center;">Tinggi</td><td style="text-align: center; color: green; font-weight: bold;">✔ Terintegrasi</td></tr>
            <tr><td style="text-align: center;">6</td><td>Kreatif</td><td>Elemen Karier (Eksplorasi Potensi & Proyek Karier)</td><td style="text-align: center;">Tinggi</td><td style="text-align: center; color: green; font-weight: bold;">✔ Terintegrasi</td></tr>
          </tbody>
        </table>

        <div class="section-title">H. Integrasi Nilai Karakter & Kompetensi Universal dalam Pembelajaran</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 30%;">Nilai Karakter Universal</th><th style="width: 35%;">Deskripsi Nilai</th><th>Integrasi dalam Kegiatan Pembelajaran</th></tr>
          </thead>
          <tbody>
            <tr><td style="text-align: center;">1</td><td><strong>Etika & Moralitas</strong></td><td>Menjunjung tinggi kebenaran, kejujuran, dan sopan santun.</td><td>Refleksi diri harian dan pembiasaan etika berkomunikasi baik luring maupun daring.</td></tr>
            <tr><td style="text-align: center;">2</td><td><strong>Kepemimpinan Berkarakter</strong></td><td>Mampu memandu diri sendiri dan orang lain menuju kebaikan.</td><td>Latihan kepemimpinan regu dan tanggung jawab tugas kelompok belajar.</td></tr>
            <tr><td style="text-align: center;">3</td><td><strong>Manajemen Diri (Self-Management)</strong></td><td>Kecakapan mengelola emosi, waktu, dan dorongan impulsif.</td><td>Penyusunan target belajar dan komitmen pengurangan screen time gawai.</td></tr>
            <tr><td style="text-align: center;">4</td><td><strong>Inklusivitas & Anti-Diskriminasi</strong></td><td>Menerima perbedaan latar belakang suku, agama, dan kemampuan.</td><td>Program buddy system dan kampanye ramah sahabat di lingkungan kelas.</td></tr>
            <tr><td style="text-align: center;">5</td><td><strong>Adaptabilitas & Inovasi Digital</strong></td><td>Cakap memanfaatkan teknologi secara positif dan konstruktif.</td><td>Pemanfaatan media digital edukatif untuk asesmen dan portofolio mandiri.</td></tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "tp") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>TUJUAN PEMBELAJARAN (TP)</h2>
          <p>Kurikulum Berbasis Merdeka (KBM) | Tahun Pelajaran ${year}</p>
        </div>

        <div class="section-title">A. Identitas Mata Pelajaran</div>
        <table class="table-kbm">
          <tr><td style="width: 30%; font-weight: bold; background: #f1f5f9;">Satuan Pendidikan</td><td>${schoolName}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Mata Pelajaran</td><td>${subject} (${singkatanMapel})</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Fase / Kelas</td><td>${level}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Tahun Pelajaran</td><td>${year}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Total Alokasi Waktu</td><td>${totalJp}</td></tr>
        </table>

        <div class="section-title">B. Panduan Kodifikasi Tujuan Pembelajaran</div>
        <p style="font-size: 9.5pt; color: #475569; margin-bottom: 8px;">
          Format Kode: <code>[SINGKATAN]-[FASE]-[ELEMEN]-[NOMOR_URUT]</code><br/>
          Contoh: <strong>${singkatanMapel}-D-PRIB-01</strong> (Elemen Pribadi Nomor 1)
        </p>

        <div class="section-title">C. Daftar Rumusan Tujuan Pembelajaran</div>
        <table class="table-kbm">
          <thead>
            <tr>
              <th style="width: 5%;">No</th>
              <th style="width: 18%;">Kode TP</th>
              <th style="width: 20%;">Elemen CP</th>
              <th style="width: 37%;">Rumusan Tujuan Pembelajaran</th>
              <th style="width: 12%;">Dimensi P3</th>
              <th style="width: 8%;">JP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td><strong>${singkatanMapel}-D-PRIB-01</strong></td>
              <td>Elemen Pribadi</td>
              <td>Peserta didik mampu mengidentifikasi perubahan fisik-psikologis masa pubertas dan merancang strategi regulasi emosi positif.</td>
              <td>Mandiri, Berakhlak Mulia</td>
              <td style="text-align: center;">6 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td><strong>${singkatanMapel}-D-PRIB-02</strong></td>
              <td>Elemen Pribadi</td>
              <td>Peserta didik mampu menerapkan prinsip kebersihan mental digital (digital hygiene) guna mencegah kecanduan gawai dan stres media sosial.</td>
              <td>Bernalar Kritis, Mandiri</td>
              <td style="text-align: center;">6 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td><strong>${singkatanMapel}-D-SOS-01</strong></td>
              <td>Elemen Sosial</td>
              <td>Peserta didik mampu membangun komunikasi asertif dan empati sosial antarteman sebaya yang multietnis di lingkungan sekolah.</td>
              <td>Berkebinekaan Global</td>
              <td style="text-align: center;">8 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">4</td>
              <td><strong>${singkatanMapel}-D-SOS-02</strong></td>
              <td>Elemen Sosial</td>
              <td>Peserta didik mampu menganalisis dampak bahaya perundungan (bullying & cyberbullying) serta mempraktikkan resolusi konflik damai.</td>
              <td>Gotong Royong, Berakhlak Mulia</td>
              <td style="text-align: center;">8 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">5</td>
              <td><strong>${singkatanMapel}-D-BEL-01</strong></td>
              <td>Elemen Belajar</td>
              <td>Peserta didik mampu mengenali gaya belajar dominan dan merancang jadwal manajemen waktu belajar yang realistis serta disiplin.</td>
              <td>Mandiri, Bernalar Kritis</td>
              <td style="text-align: center;">8 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">6</td>
              <td><strong>${singkatanMapel}-D-BEL-02</strong></td>
              <td>Elemen Belajar</td>
              <td>Peserta didik mampu mengevaluasi faktor penyebab prokrastinasi dan mengimplementasikan teknik konsentrasi belajar efektif.</td>
              <td>Mandiri</td>
              <td style="text-align: center;">6 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">7</td>
              <td><strong>${singkatanMapel}-D-KAR-01</strong></td>
              <td>Elemen Karier</td>
              <td>Peserta didik mampu mengeksplorasi bakat, minat, dan peluang profesi modern di era digital serta potensi lokal pesisir Tarakan.</td>
              <td>Kreatif, Bernalar Kritis</td>
              <td style="text-align: center;">8 JP</td>
            </tr>
            <tr>
              <td style="text-align: center;">8</td>
              <td><strong>${singkatanMapel}-D-KAR-02</strong></td>
              <td>Elemen Karier</td>
              <td>Peserta didik mampu menyusun peta perencanaan studi lanjutan (SMA/SMK/MA) yang selaras dengan cita-cita dan kapasitas diri.</td>
              <td>Kreatif, Mandiri</td>
              <td style="text-align: center;">8 JP</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">D. Rekapitulasi Alokasi Waktu per Elemen</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 40%;">Elemen CP</th><th style="width: 20%;">Jumlah TP</th><th style="width: 20%;">Total JP</th><th>Persentase</th></tr>
          </thead>
          <tbody>
            <tr><td style="text-align: center;">1</td><td>Elemen Pribadi</td><td style="text-align: center;">2 TP</td><td style="text-align: center;">12 JP</td><td style="text-align: center;">24%</td></tr>
            <tr><td style="text-align: center;">2</td><td>Elemen Sosial</td><td style="text-align: center;">2 TP</td><td style="text-align: center;">16 JP</td><td style="text-align: center;">32%</td></tr>
            <tr><td style="text-align: center;">3</td><td>Elemen Belajar</td><td style="text-align: center;">2 TP</td><td style="text-align: center;">14 JP</td><td style="text-align: center;">28%</td></tr>
            <tr><td style="text-align: center;">4</td><td>Elemen Karier</td><td style="text-align: center;">2 TP</td><td style="text-align: center;">16 JP</td><td style="text-align: center;">32%</td></tr>
            <tr style="font-weight: bold; background: #e2e8f0;"><td colspan="2" style="text-align: center;">TOTAL KESELURUHAN</td><td style="text-align: center;">8 TP</td><td style="text-align: center;">58 JP (+14 JP Cadangan = 72 JP)</td><td style="text-align: center;">100%</td></tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "atp") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>ALUR TUJUAN PEMBELAJARAN (ATP)</h2>
          <p>Kurikulum Berbasis Merdeka (KBM) | Fase D (${level}) | Tahun Pelajaran ${year}</p>
        </div>

        <div class="section-title">A. Diagram Alur Progresi Pembelajaran</div>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; margin-bottom: 16px; text-align: center; font-size: 9pt; font-weight: bold;">
          <span style="background: #1e3a8a; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-PRIB-01</span> &rarr;
          <span style="background: #1e3a8a; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-PRIB-02</span> &rarr;
          <span style="background: #0284c7; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-SOS-01</span> &rarr;
          <span style="background: #0284c7; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-SOS-02</span> &rarr;
          <span style="background: #0d9488; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-BEL-01</span> &rarr;
          <span style="background: #0d9488; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-BEL-02</span> &rarr;
          <span style="background: #d97706; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-KAR-01</span> &rarr;
          <span style="background: #d97706; color: #fff; padding: 4px 8px; border-radius: 4px;">TP-KAR-02</span>
        </div>

        <div class="section-title">B. Matriks Alur Tujuan Pembelajaran</div>
        <table class="table-kbm">
          <thead>
            <tr>
              <th style="width: 4%;">No</th>
              <th style="width: 14%;">Kode TP</th>
              <th style="width: 14%;">Elemen</th>
              <th style="width: 28%;">Tujuan Pembelajaran</th>
              <th style="width: 18%;">Materi Pokok</th>
              <th style="width: 14%;">Dimensi P3 & NKU</th>
              <th style="width: 8%;">JP / Sem</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td><strong>TP-PRIB-01</strong></td>
              <td>Pribadi</td>
              <td>Mengidentifikasi pubertas dan regulasi emosi sehat.</td>
              <td>Kesehatan Mental Remaja & Pubertas</td>
              <td>Mandiri, Etika Moral</td>
              <td style="text-align: center;">6 JP (Sem 1)</td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td><strong>TP-PRIB-02</strong></td>
              <td>Pribadi</td>
              <td>Menerapkan etika digital dan menjaga kesehatan mental dari FOMO.</td>
              <td>Digital Hygiene & Anti Adiksi Gawai</td>
              <td>Bernalar Kritis, Manajemen Diri</td>
              <td style="text-align: center;">6 JP (Sem 1)</td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td><strong>TP-SOS-01</strong></td>
              <td>Sosial</td>
              <td>Membangun komunikasi asertif dan empati antarteman heterogen.</td>
              <td>Komunikasi Asertif & Harmoni Tarakan</td>
              <td>Berkebinekaan, Toleransi</td>
              <td style="text-align: center;">8 JP (Sem 1)</td>
            </tr>
            <tr>
              <td style="text-align: center;">4</td>
              <td><strong>TP-SOS-02</strong></td>
              <td>Sosial</td>
              <td>Mencegah perundungan dan melakukan mediasi resolusi konflik damai.</td>
              <td>Anti-Bullying & Sahabat Damai</td>
              <td>Gotong Royong, Inklusivitas</td>
              <td style="text-align: center;">8 JP (Sem 1)</td>
            </tr>
            <tr>
              <td style="text-align: center;">5</td>
              <td><strong>TP-BEL-01</strong></td>
              <td>Belajar</td>
              <td>Memetakan gaya belajar dan menyusun jadwal manajemen waktu efektif.</td>
              <td>Gaya Belajar & Manajemen Waktu</td>
              <td>Mandiri, Integritas</td>
              <td style="text-align: center;">8 JP (Sem 2)</td>
            </tr>
            <tr>
              <td style="text-align: center;">6</td>
              <td><strong>TP-BEL-02</strong></td>
              <td>Belajar</td>
              <td>Mengatasi prokrastinasi dan meningkatkan daya juang akademik.</td>
              <td>Fokus Belajar & Efikasi Diri</td>
              <td>Bernalar Kritis, Daya Juang</td>
              <td style="text-align: center;">6 JP (Sem 2)</td>
            </tr>
            <tr>
              <td style="text-align: center;">7</td>
              <td><strong>TP-KAR-01</strong></td>
              <td>Karier</td>
              <td>Mengeksplorasi bakat, minat, dan profesi masa depan era AI.</td>
              <td>Eksplorasi Potensi & Karir Pesisir</td>
              <td>Kreatif, Adaptabilitas</td>
              <td style="text-align: center;">8 JP (Sem 2)</td>
            </tr>
            <tr>
              <td style="text-align: center;">8</td>
              <td><strong>TP-KAR-02</strong></td>
              <td>Karier</td>
              <td>Merancang perencanaan studi lanjutan dan pohon cita-cita.</td>
              <td>Pemilihan Jalur Lanjutan SMA/SMK</td>
              <td>Kreatif, Kepemimpinan</td>
              <td style="text-align: center;">8 JP (Sem 2)</td>
            </tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "prota") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>PROGRAM TAHUNAN (PROTA)</h2>
          <p>Kurikulum Berbasis Merdeka | ${subject} | ${level} | Tahun Pelajaran ${year}</p>
        </div>

        <div class="section-title">A. Distribusi Alokasi Waktu Efektif Kalender Pendidikan</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 15%;">Semester</th><th style="width: 35%;">Bulan</th><th style="width: 15%;">Minggu Kalender</th><th style="width: 15%;">Minggu Efektif</th><th>Alokasi JP</th></tr>
          </thead>
          <tbody>
            <tr><td rowspan="6" style="text-align: center; font-weight: bold;">Semester 1 (Ganjil)</td><td>Juli</td><td style="text-align: center;">4</td><td style="text-align: center;">2</td><td style="text-align: center;">4 JP</td></tr>
            <tr><td>Agustus</td><td style="text-align: center;">5</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>September</td><td style="text-align: center;">4</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>Oktober</td><td style="text-align: center;">4</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>November</td><td style="text-align: center;">5</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>Desember</td><td style="text-align: center;">4</td><td style="text-align: center;">0 (PAS & Libur)</td><td style="text-align: center;">0 JP</td></tr>
            <tr style="background: #f1f5f9; font-weight: bold;"><td colspan="2" style="text-align: center;">Jumlah Semester Ganjil</td><td style="text-align: center;">26</td><td style="text-align: center;">18</td><td style="text-align: center;">36 JP</td></tr>

            <tr><td rowspan="6" style="text-align: center; font-weight: bold;">Semester 2 (Genap)</td><td>Januari</td><td style="text-align: center;">4</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>Februari</td><td style="text-align: center;">4</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>Maret</td><td style="text-align: center;">4</td><td style="text-align: center;">3</td><td style="text-align: center;">6 JP</td></tr>
            <tr><td>April</td><td style="text-align: center;">4</td><td style="text-align: center;">3</td><td style="text-align: center;">6 JP</td></tr>
            <tr><td>Mei</td><td style="text-align: center;">5</td><td style="text-align: center;">4</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td>Juni</td><td style="text-align: center;">4</td><td style="text-align: center;">0 (PAT & Libur)</td><td style="text-align: center;">0 JP</td></tr>
            <tr style="background: #f1f5f9; font-weight: bold;"><td colspan="2" style="text-align: center;">Jumlah Semester Genap</td><td style="text-align: center;">25</td><td style="text-align: center;">18</td><td style="text-align: center;">36 JP</td></tr>
            <tr style="background: #e2e8f0; font-weight: bold;"><td colspan="2" style="text-align: center;">TOTAL 1 TAHUN AJARAN</td><td style="text-align: center;">51 Minggu</td><td style="text-align: center;">36 Minggu</td><td style="text-align: center;">72 JP</td></tr>
          </tbody>
        </table>

        <div class="section-title">B. Distribusi Program Materi Tahunan</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 15%;">Kode TP</th><th style="width: 45%;">Tujuan Pembelajaran & Topik Bahasan</th><th style="width: 15%;">Elemen</th><th style="width: 10%;">Semester</th><th style="width: 10%;">JP</th></tr>
          </thead>
          <tbody>
            <tr><td style="text-align: center;">1</td><td>TP-PRIB-01</td><td>Masa Pubertas & Regulasi Emosi Remaja</td><td>Pribadi</td><td style="text-align: center;">Ganjil</td><td style="text-align: center;">6 JP</td></tr>
            <tr><td style="text-align: center;">2</td><td>TP-PRIB-02</td><td>Digital Hygiene & Pengelolaan Stres Medsos</td><td>Pribadi</td><td style="text-align: center;">Ganjil</td><td style="text-align: center;">6 JP</td></tr>
            <tr><td style="text-align: center;">3</td><td>TP-SOS-01</td><td>Komunikasi Asertif & Toleransi Multikultural</td><td>Sosial</td><td style="text-align: center;">Ganjil</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td style="text-align: center;">4</td><td>TP-SOS-02</td><td>Pencegahan Perundungan & Resolusi Konflik</td><td>Sosial</td><td style="text-align: center;">Ganjil</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td style="text-align: center;">5</td><td>Cadangan 1</td><td>Asesmen Diagnostik Awal & Refleksi Semester Ganjil</td><td>Umum</td><td style="text-align: center;">Ganjil</td><td style="text-align: center;">8 JP</td></tr>

            <tr><td style="text-align: center;">6</td><td>TP-BEL-01</td><td>Gaya Belajar & Manajemen Waktu Belajar</td><td>Belajar</td><td style="text-align: center;">Genap</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td style="text-align: center;">7</td><td>TP-BEL-02</td><td>Mengatasi Prokrastinasi & Motivasi Berprestasi</td><td>Belajar</td><td style="text-align: center;">Genap</td><td style="text-align: center;">6 JP</td></tr>
            <tr><td style="text-align: center;">8</td><td>TP-KAR-01</td><td>Eksplorasi Bakat Minat & Profesi Era Digital</td><td>Karier</td><td style="text-align: center;">Genap</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td style="text-align: center;">9</td><td>TP-KAR-02</td><td>Perencanaan Studi Lanjutan SMA/SMK</td><td>Karier</td><td style="text-align: center;">Genap</td><td style="text-align: center;">8 JP</td></tr>
            <tr><td style="text-align: center;">10</td><td>Cadangan 2</td><td>Pekan Konseling Karier & Evaluasi Akhir Tahun</td><td>Umum</td><td style="text-align: center;">Genap</td><td style="text-align: center;">6 JP</td></tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "prosem") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>PROGRAM SEMESTER (PROSEM)</h2>
          <p>Kurikulum Berbasis Merdeka | ${subject} | ${level} | Semester Ganjil & Genap ${year}</p>
        </div>

        <div class="section-title">Matriks Distribusi Pembelajaran Mingguan</div>
        <table class="table-kbm" style="font-size: 8.5pt;">
          <thead>
            <tr>
              <th rowspan="2" style="width: 4%;">No</th>
              <th rowspan="2" style="width: 14%;">Kode TP</th>
              <th rowspan="2" style="width: 32%;">Tujuan Pembelajaran / Materi Pokok</th>
              <th rowspan="2" style="width: 6%;">JP</th>
              <th colspan="5">Bulan 1</th>
              <th colspan="5">Bulan 2</th>
              <th colspan="5">Bulan 3</th>
              <th colspan="5">Bulan 4</th>
              <th colspan="5">Bulan 5</th>
              <th colspan="5">Bulan 6</th>
            </tr>
            <tr>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
              <th>1</th><th>2</th><th>3</th><th>4</th><th>5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td>TP-PRIB-01</td>
              <td>Masa Pubertas & Regulasi Emosi Diri</td>
              <td style="text-align: center;">6</td>
              <td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td>TP-PRIB-02</td>
              <td>Digital Hygiene & Pengelolaan Stres Medsos</td>
              <td style="text-align: center;">6</td>
              <td></td><td></td><td></td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td>
              <td style="background: #dbeafe;">2</td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td>TP-SOS-01</td>
              <td>Komunikasi Asertif & Toleransi Multikultural</td>
              <td style="text-align: center;">8</td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td style="text-align: center;">4</td>
              <td>TP-SOS-02</td>
              <td>Anti-Bullying & Resolusi Konflik Damai</td>
              <td style="text-align: center;">8</td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td style="background: #dbeafe;">2</td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="text-align: center;">5</td>
              <td>Evaluasi</td>
              <td>Asesmen Sumatif Tengah & Akhir Semester</td>
              <td style="text-align: center;">8</td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td style="background: #fef08a;">PTS</td>
              <td></td><td></td><td></td><td></td><td></td>
              <td></td><td></td><td></td><td></td><td style="background: #fecaca;">PAS</td>
              <td style="background: #e2e8f0;" colspan="5">Libur Semester</td>
            </tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "kktp") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>KRITERIA KETERCAPAIAN TUJUAN PEMBELAJARAN (KKTP)</h2>
          <p>Kurikulum Berbasis Merdeka | ${subject} | ${level} | Tahun Pelajaran ${year}</p>
        </div>

        <div class="section-title">A. Deskripsi Level Capaian & Ambang Batas Ketuntasan</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 15%;">Level Ketercapaian</th><th style="width: 15%;">Rentang Nilai</th><th style="width: 40%;">Deskripsi Umum Kinerja</th><th>Tindak Lanjut Pedagogis</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: bold; color: #dc2626;">Level 1: Mulai Berkembang</td>
              <td style="text-align: center;">0 - 55</td>
              <td>Peserta didik baru menunjukkan sebagian kecil kompetensi awal dan masih membutuhkan bimbingan intensif.</td>
              <td>Remedial individual secara terbimbing dari guru BK/Mata Pelajaran.</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #d97706;">Level 2: Layak (✓ KKTP)</td>
              <td style="text-align: center;">56 - 70</td>
              <td>Peserta didik telah mencapai kriteria minimum kompetensi target pembelajaran dengan cukup baik.</td>
              <td>Penguatan mandiri dan latihan aplikatif sederhana.</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #0284c7;">Level 3: Cakap</td>
              <td style="text-align: center;">71 - 85</td>
              <td>Peserta didik menguasai kompetensi target secara utuh, mandiri, dan mampu menyelesaikan masalah kontekstual.</td>
              <td>Pemberian materi pengayaan dan tutor sebaya.</td>
            </tr>
            <tr>
              <td style="font-weight: bold; color: #16a34a;">Level 4: Mahir</td>
              <td style="text-align: center;">86 - 100</td>
              <td>Peserta didik menguasai kompetensi secara mendalam, kreatif, dan mampu menjadi teladan bagi rekan lainnya.</td>
              <td>Proyek kepemimpinan dan pengembangan inovasi mandiri.</td>
            </tr>
          </tbody>
        </table>

        <div class="section-title">B. Rubrik KKTP per Indikator Tujuan Pembelajaran</div>
        <table class="table-kbm">
          <thead>
            <tr>
              <th style="width: 25%;">Tujuan Pembelajaran</th>
              <th style="width: 18%;">Mulai Berkembang (0-55)</th>
              <th style="width: 18%;">Layak (56-70) ✓ KKTP</th>
              <th style="width: 19%;">Cakap (71-85)</th>
              <th style="width: 20%;">Mahir (86-100)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Regulasi Emosi & Pubertas</strong></td>
              <td>Belum mampu mengenali pemicu emosi pubertas.</td>
              <td>Mampu menyebutkan tanda pubertas dan cara mengendalikan emosi dasar.</td>
              <td>Mampu mengaplikasikan teknik regulasi emosi secara konsisten saat tertekan.</td>
              <td>Mampu menginspirasi dan membantu teman mengelola konflik emosional secara bijak.</td>
            </tr>
            <tr>
              <td><strong>Anti-Perundungan (Bullying)</strong></td>
              <td>Pasif atau belum memahami bahaya cyberbullying.</td>
              <td>Memahami jenis perundungan dan tidak terlibat dalam tindakan bully.</td>
              <td>Mampu bersikap asertif menolak bully dan melaporkan dengan tepat.</td>
              <td>Menjadi pelopor agen perdamaian (upstander) aktif di kelas dan media sosial.</td>
            </tr>
            <tr>
              <td><strong>Manajemen Waktu Belajar</strong></td>
              <td>Sering menunda tugas tanpa jadwal teratur.</td>
              <td>Memiliki jadwal belajar meskipun terkadang belum konsisten.</td>
              <td>Menjalankan jadwal belajar secara tertib dan mandiri.</td>
              <td>Mengevaluasi efisiensi belajar dan mencapai prestasi seimbang.</td>
            </tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "modul_ajar") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>MODUL AJAR DEEP LEARNING (KBM)</h2>
          <p>Tujuan Pembelajaran: ${kodeTp} | Tahun Pelajaran ${year}</p>
        </div>

        <div class="section-title">BAGIAN A — INFORMASI UMUM</div>
        <table class="table-kbm">
          <tr><td style="width: 25%; font-weight: bold; background: #f1f5f9;">Nama Penyusun</td><td>${teacher} (NIP. ${nipTeacher})</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Satuan Pendidikan</td><td>${schoolName}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Mata Pelajaran / Layanan</td><td>${subject} (${singkatanMapel})</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Fase / Kelas / Semester</td><td>${level} / Ganjil</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Topik / Elemen</td><td>${elemenCp}</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Alokasi Waktu</td><td>${jumlahPertemuan} Pertemuan x ${jpPerPertemuan} JP (${Number(jpPerPertemuan) * 45} Menit)</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Model Pembelajaran</td><td>${learningModel} (Sintak: ${sintakModel})</td></tr>
          <tr><td style="font-weight: bold; background: #f1f5f9;">Konteks Muatan Lokal</td><td>${topikLokal}</td></tr>
        </table>

        <div class="section-title">BAGIAN B — KOMPONEN INTI & LANGKAH PEMBELAJARAN</div>
        <div style="background: #f8fafc; border-left: 4px solid #1e3a8a; padding: 12px; margin-bottom: 14px;">
          <strong style="color: #1e3a8a;">1. Rumusan Tujuan Pembelajaran:</strong>
          <p style="margin: 4px 0 0 0; font-size: 10pt;">${rumusanTp}</p>
        </div>

        <div style="background: #f8fafc; border-left: 4px solid #0284c7; padding: 12px; margin-bottom: 14px;">
          <strong style="color: #0284c7;">2. Pemahaman Bermakna (Mindful & Meaningful Learning):</strong>
          <p style="margin: 4px 0 0 0; font-size: 10pt;">Setiap individu memiliki hak untuk merasa aman, dihargai, dan berkembang tanpa diskriminasi. Pengendalian diri dan empati adalah kunci utama kedewasaan karakter generasi emas bangsa.</p>
        </div>

        <div class="section-title">Skenario Kegiatan Pembelajaran Pertemuan 1 s.d. ${jumlahPertemuan}</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 15%;">Tahapan</th><th style="width: 40%;">Aktivitas Guru</th><th style="width: 45%;">Aktivitas Peserta Didik</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="font-weight: bold; background: #f1f5f9;">Pendahuluan<br/>(15 Menit)</td>
              <td>1. Memberi salam pembuka, memandu doa bersama, dan presensi.<br/>2. Membangun suasana riang (Joyful Learning) dan apersepsi kontekstual.<br/>3. Menyampaikan tujuan pembelajaran dan indikator keberhasilan.</td>
              <td>1. Menjawab salam dan berdoa dengan khusyuk (Berakhlak Mulia).<br/>2. Menyimak video/studi kasus pemantik tentang dinamika remaja pesisir.<br/>3. Merespons pertanyaan pemantik dari guru secara asertif.</td>
            </tr>
            <tr>
              <td style="font-weight: bold; background: #f1f5f9;">Kegiatan Inti<br/>(${Number(jpPerPertemuan) * 45 - 30} Menit)<br/><em>${learningModel}</em></td>
              <td>1. <strong>Stimulasi:</strong> Menyajikan gambar/narasi konflik komunikasi di media sosial.<br/>2. <strong>Identifikasi Masalah:</strong> Membimbing peserta didik merumuskan masalah anti-bullying.<br/>3. <strong>Pengumpulan Data:</strong> Mengarahkan diskusi kelompok dan LKPD.<br/>4. <strong>Pengolahan & Pembuktian:</strong> Memfasilitasi presentasi kelompok dan feedback.<br/>5. <strong>Kesimpulan:</strong> Menegaskan nilai toleransi dan integritas.</td>
              <td>1. Mengamati fenomena dan mendiskusikan bersama teman sebaya.<br/>2. Mengisi LKPD eksploratif secara kolaboratif (Gotong Royong).<br/>3. Mengumpulkan data melalui wawancara dan kajian pustaka ringkas.<br/>4. Menyajikan hasil analisis di depan kelas dengan percaya diri.<br/>5. Menarik kesimpulan aksi nyata pencegahan kekerasan di sekolah.</td>
            </tr>
            <tr>
              <td style="font-weight: bold; background: #f1f5f9;">Penutup<br/>(15 Menit)</td>
              <td>1. Memandu refleksi bersama atas pengalaman belajar hari ini.<br/>2. Memberikan penguatan karakter dan tindak lanjut tugas mandiri.<br/>3. Menutup kegiatan dengan doa dan pesan motivasi.</td>
              <td>1. Menyampaikan insight dan perasaan belajar hari ini (Mindful).<br/>2. Menuliskan komitmen perubahan diri pada lembar refleksi.<br/>3. Berdoa bersama dan saling menghargai antarteman.</td>
            </tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "lkpd") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>LEMBAR KERJA PESERTA DIDIK (LKPD)</h2>
          <p>Mata Pelajaran: ${subject} | ${level} | TP: ${kodeTp}</p>
        </div>

        <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px; margin-bottom: 16px; background: #f8fafc;">
          <table style="width: 100%; border: none; font-size: 10pt;">
            <tr><td style="width: 20%; font-weight: bold;">Nama Kelompok</td><td style="width: 30%;">: ___________________________</td><td style="width: 15%; font-weight: bold;">Kelas</td><td>: ${level}</td></tr>
            <tr><td style="font-weight: bold;">Anggota Kelompok</td><td colspan="3">: 1. ____________________ 2. ____________________ 3. ____________________ 4. ____________________</td></tr>
          </table>
        </div>

        <div class="section-title">A. Petunjuk Pengerjaan</div>
        <p style="font-size: 9.5pt; color: #475569; margin: 0 0 12px 0;">
          1. Bacalah setiap instruksi dengan saksama bersama teman sekelompokmu.<br/>
          2. Diskusikan solusi secara terbuka, saling menghargai pendapat, dan bebas perundungan.<br/>
          3. Tuliskan hasil jawaban pada kolom yang telah disediakan.
        </p>

        <div class="section-title">B. Studi Kasus & Eksplorasi Masalah</div>
        <div style="background: #fff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; font-size: 9.5pt; margin-bottom: 12px;">
          <em>"Di sebuah grup media sosial kelas, seorang siswa diejek karena aksen bicaranya yang kental dengan budaya daerah pesisir. Siswa tersebut menjadi minder dan takut untuk berbicara di depan kelas."</em>
        </div>

        <div class="section-title">C. Lembar Analisis & Solusi Kelompok</div>
        <table class="table-kbm">
          <thead>
            <tr><th style="width: 5%;">No</th><th style="width: 35%;">Pertanyaan Pemantik</th><th>Jawaban Kelompok</th></tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: center;">1</td>
              <td>Menurut kelompokmu, apakah tindakan tersebut termasuk perundungan (bullying)? Mengapa?</td>
              <td style="height: 60px;"></td>
            </tr>
            <tr>
              <td style="text-align: center;">2</td>
              <td>Bagaimana dampak psikologis tindakan tersebut terhadap korban dan suasana kelas?</td>
              <td style="height: 60px;"></td>
            </tr>
            <tr>
              <td style="text-align: center;">3</td>
              <td>Tindakan nyata apa yang dapat kamu lakukan sebagai sahabat penolong (upstander)?</td>
              <td style="height: 60px;"></td>
            </tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  if (docType === "rubrik") {
    return `
      ${baseStyles}
      <div class="dokumen-kbm">
        ${headerKop}
        <div class="judul-dokumen">
          <h2>RUBRIK PENILAIAN FORMATIF & SUMATIF</h2>
          <p>Kurikulum Berbasis Merdeka | ${subject} | ${level} | TP: ${kodeTp}</p>
        </div>

        <div class="section-title">A. Rubrik Penilaian Kinerja Formatif Diskusi & Presentasi</div>
        <table class="table-kbm">
          <thead>
            <tr>
              <th style="width: 20%;">Aspek Penilaian</th>
              <th style="width: 20%;">Sangat Berkembang (4)</th>
              <th style="width: 20%;">Berkembang Sesuai Harapan (3)</th>
              <th style="width: 20%;">Mulai Berkembang (2)</th>
              <th style="width: 20%;">Perlu Bimbingan (1)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Keterlibatan Diskusi</strong></td>
              <td>Sangat aktif, memimpin ide solutif, dan menghargai semua anggota kelompok.</td>
              <td>Aktif berpendapat dan menghargai rekan dalam kelompok.</td>
              <td>Cukup aktif jika diminta atau diarahkan guru/teman.</td>
              <td>Pasif dan membutuhkan dorongan intensif dari guru.</td>
            </tr>
            <tr>
              <td><strong>Komunikasi Asertif</strong></td>
              <td>Menyampaikan pendapat dengan santun, jelas, terstruktur, dan persuasif.</td>
              <td>Menyampaikan pendapat dengan santun dan jelas.</td>
              <td>Menyampaikan pendapat namun kurang percaya diri.</td>
              <td>Belum mampu mengemukakan argumen secara teratur.</td>
            </tr>
            <tr>
              <td><strong>Sikap Anti-Bullying</strong></td>
              <td>Menjadi inisiator pembelaan teman dan mencegah konflik antarsuku.</td>
              <td>Menolak perundungan dan bersikap inklusif.</td>
              <td>Mengetahui bahaya perundungan namun bersikap pasif.</td>
              <td>Perlu pembinaan mendalam mengenai etika pertemanan.</td>
            </tr>
          </tbody>
        </table>

        ${footerTtd}
      </div>
    `;
  }

  // Generic fallback document
  return `
    ${baseStyles}
    <div class="dokumen-kbm">
      ${headerKop}
      <div class="judul-dokumen">
        <h2>DOKUMEN ADMINISTRASI PERANGKAT AJAR</h2>
        <p>${subject} | ${level} | Tahun Pelajaran ${year}</p>
      </div>
      <table class="table-kbm">
        <tr><td style="width: 30%; font-weight: bold;">Satuan Pendidikan</td><td>${schoolName}</td></tr>
        <tr><td style="font-weight: bold;">Mata Pelajaran</td><td>${subject}</td></tr>
        <tr><td style="font-weight: bold;">Guru Pengampu</td><td>${teacher}</td></tr>
        <tr><td style="font-weight: bold;">Kepala Sekolah</td><td>${principal}</td></tr>
      </table>
      <div class="section-title">Isi Dokumen</div>
      <p style="font-size: 10pt;">Dokumen ${docType.toUpperCase()} berhasil disusun sesuai panduan Kurikulum Merdeka SMP Negeri 10 Tarakan.</p>
      ${footerTtd}
    </div>
  `;
}
