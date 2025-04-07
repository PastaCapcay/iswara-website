# Iswara - Website Produk Pertanian Premium

![Iswara Logo](public/logo.png)

Website resmi untuk produk pertanian premium Iswara dari Gunung Telomoyo. Website ini menampilkan produk berkualitas tinggi seperti kopi, vanili, dan produk pertanian lainnya yang dibudidayakan dengan penuh dedikasi oleh Pak Is di lereng Gunung Telomoyo.

## 📋 Deskripsi

Iswara adalah merek produk pertanian premium yang mengutamakan kualitas dan keberlanjutan. Website ini dibuat untuk menampilkan produk-produk Iswara kepada calon pembeli dengan tampilan yang menarik dan responsif.

Fitur utama website:
- Tampilan produk premium (kopi, vanili, dan lainnya)
- Informasi tentang proses produksi 
- Kontak dan lokasi kebun
- Tampilan responsif untuk semua ukuran perangkat
- Integrasi dengan WhatsApp untuk pemesanan

## 🚀 Teknologi

Website ini dibangun menggunakan:
- [Next.js 14](https://nextjs.org/) - Framework React untuk aplikasi web
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS untuk desain cepat
- [TypeScript](https://www.typescriptlang.org/) - JavaScript dengan tipe data
- [React](https://reactjs.org/) - Library JavaScript untuk UI

## 💻 Instalasi dan Penggunaan

### Prasyarat
- Node.js (versi 18 atau lebih baru)
- npm atau yarn

### Langkah-langkah

1. Clone repository ini
```bash
git clone https://github.com/PastaCapcay/iswara-website.git
cd iswara-website
```

2. Install dependencies
```bash
npm install
# atau
yarn install
```

3. Jalankan server pengembangan
```bash
npm run dev
# atau
yarn dev
```

4. Buka [http://localhost:3000](http://localhost:3000) di browser Anda

### Build untuk Produksi

```bash
npm run build
npm run start
```

## 📁 Struktur Proyek

```
iswara-website/
├── public/                 # Aset publik (gambar, favicon, dll)
│   └── gambar/             # Gambar produk dan lokasi
├── src/                    # Kode sumber
│   ├── app/                # Komponen dan halaman aplikasi
│   │   └── page.tsx        # Halaman utama
│   ├── components/         # Komponen React yang dapat digunakan kembali
│   └── styles/             # File CSS global
├── .gitignore              # File yang diabaikan Git
├── next.config.mjs         # Konfigurasi Next.js
├── package.json            # Dependencies dan skrip
├── postcss.config.mjs      # Konfigurasi PostCSS
├── tailwind.config.js      # Konfigurasi Tailwind CSS
└── tsconfig.json           # Konfigurasi TypeScript
```

## 🌐 Deployment

Website ini dapat di-deploy ke layanan hosting seperti Vercel, Netlify, atau layanan hosting statis lainnya.

```bash
# Build statis untuk deployment
npm run build
```

## 📝 Lisensi

[MIT](https://choosealicense.com/licenses/mit/)

## 📞 Kontak

Untuk informasi lebih lanjut, silakan hubungi [info@iswara.com](mailto:info@iswara.com) atau melalui WhatsApp di +62 812 3456 7890.

---

&copy; 2025 Iswara. Hak Cipta Dilindungi.
