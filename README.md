# Anatomi Learning - Aplikasi Belajar Anatomi FK Semester 1

Aplikasi web statis untuk membantu mahasiswi kedokteran semester 1 belajar anatomi dengan metode flashcard, kuis, dan kasus klinis.

## 📋 Fitur

1. **Mode Flashcard**
   - Kartu bisa di-flip dengan animasi mulus
   - Tombol "Hafal" / "Belum Hafal"
   - Spaced repetition: kartu yang belum hafal muncul lebih sering

2. **Mode Kuis Pilihan Ganda**
   - 10 soal per sesi
   - 4 opsi jawaban
   - Skor + pembahasan tiap soal
   - Riwayat skor tersimpan di localStorage

3. **Mode Kuis Kasus (PBL)**
   - Soal berbasis skenario klinis
   - 20 kasus klinis tersedia
   - Pembahasan lengkap

4. **Kategori**
   - Tulang (Osteologi) - 30 kartu
   - Otot (Miologi) - 25 kartu
   - Organ (Viscera) - 25 kartu
   - Istilah Dasar - 20 kartu
   - Kasus Klinis - 20 soal

5. **Statistik**
   - Total kartu dipelajari
   - Akurasi per kategori
   - Kartu tersulit
   - Riwayat skor kuis

6. **Pencarian Istilah**
   - Cari berdasarkan kata kunci
   - Filter per kategori

## 🚀 Cara Menggunakan

### Opsi 1: Buka Langsung di Browser
1. Buka file `index.html` di browser (double-click)
2. Aplikasi langsung siap dipakai!

### Opsi 2: Pakai Local Server (Recommended untuk testing)
```bash
# Masuk ke folder
cd anatomi-app

# Jalankan server lokal
python3 -m http.server 8080

# Buka browser ke:
# http://localhost:8080
```

## 📱 Fitur Tambahan

- **Mobile-Friendly**: Responsive design untuk HP
- **Offline Capable**: Semua data tersimpan di localStorage
- **No Backend Needed**: HTML/CSS/JS statis saja

## 📂 Struktur File

```
anatomi-app/
├── index.html      # Halaman utama
├── styles.css      # Styling dan animasi
├── data.js         # Data materi (100 kartu + 20 kasus)
├── app.js          # Logic aplikasi
└── README.md       # Dokumentasi ini
```

## 📊 Total Materi

- ✅ 30 kartu Tulang (Latin → Indonesia + letak/fungsi)
- ✅ 25 kartu Otot (Latin → Indonesia + gerakan)
- ✅ 25 kartu Organ (Latin → Indonesia + fungsi)
- ✅ 20 kartu Istilah Dasar anatomi
- ✅ 20 soal Kasus Klinis PBL

**Total: 120 kartu materi**

## 🎨 Desain

- Tema medis bersih (putih + biru/teal)
- Font mudah dibaca
- Tombol besar untuk mobile
- Animasi flip kartu yang smooth
- Transisi halus antar mode

## 💾 Data Storage

Semua progress disimpan di **localStorage** browser:
- Kartu yang sudah dipelajari
- Kartu yang sudah dikuasai
- Kartu yang sulit
- Riwayat skor kuis
- Statistik per kategori

## 🔄 Reset Data

Klik tombol "Reset Semua Data" di halaman Statistik untuk menghapus semua progress.

---

**Dibuat untuk mahasiswi FK semester 1 angkatan pertama** 🩺📚
