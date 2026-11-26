# Laporan Harian (Android)

Aplikasi Android untuk mengisi Laporan Harian proyek, memotret progres pekerjaan, dan membuat file Excel + PDF yang bisa dibagikan ke Google Drive atau email.

## Cara membuat APK (tanpa Android Studio)
1. Buat repository baru di GitHub (boleh private).
2. Upload SEMUA isi folder ini ke repository, termasuk folder `.github`, `src`, dan `scripts`.
   (Jika upload lewat web tidak mengikutsertakan `.github`, buat file `.github/workflows/build-apk.yml` secara manual lewat "Add file" > "Create new file" dan salin isinya.)
3. Buka tab **Actions** > **Build APK** > **Run workflow**. Tunggu sekitar 5-10 menit sampai hijau.
4. Buka run yang selesai, unduh artifact **Laporan-Harian-APK**, ekstrak zip-nya untuk mendapat `app-debug.apk`.
5. Kirim ke HP, buka, izinkan "instal dari sumber tidak dikenal", lalu pasang.

## Mengubah form
Edit `src/index.html`, commit, dan workflow akan membuat APK baru otomatis.

## Catatan
- APK ini versi debug: cukup untuk dipakai sendiri atau tim. Untuk Google Play diperlukan versi release yang ditandatangani.
- Di aplikasi, tombol Excel, PDF, dan Bagikan membuka menu berbagi Android (pilih Drive, Gmail, WhatsApp, atau Files).
