```
# NextJS CRUD 

Deskripsi singkat tentang apa yang dilakukan aplikasi Anda.

## Table of Contents

- [Prasyarat](#prasyarat)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Fitur](#fitur)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)


## Prasyarat

Pastikan Anda telah menginstal beberapa prasyarat sebelum memulai proyek ini:

1. Node.js - Pastikan Anda telah menginstal Node.js versi terbaru di sistem Anda. Anda bisa mendownloadnya di https://nodejs.org
2. PostgreSQL - Pastikan Anda telah menginstal PostgreSQL dan memiliki database yang siap digunakan. Anda bisa mendownloadnya di https://www.postgresql.org

## Instalasi

Langkah-langkah untuk menginstal aplikasi:

1. Clone repositori ini:

```bash
git clone https://url-repositori-anda.git
cd nama-repositori-anda
```

2. Install dependencies:

```bash
npm install
```

## Konfigurasi

Aplikasi ini membutuhkan beberapa konfigurasi sebelum dijalankan. Pastikan untuk mengisi konfigurasi yang dibutuhkan dalam berkas `.env`. Contoh berkas `.env` bisa dilihat di `.env.example`.

## Menjalankan Aplikasi

Setelah melakukan instalasi dan konfigurasi, jalankan aplikasi dengan perintah berikut:

```bash
npm run dev
```

Aplikasi akan berjalan pada mode pengembangan (development mode) dan dapat diakses di `http://localhost:3000`.

## Fitur

1. **CRUD Operations**: Aplikasi ini memungkinkan Anda untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada data harga penjualan Handphone.

## Struktur Proyek

Penjelasan tentang struktur proyek dan fungsi masing-masing direktori:

```
/
|-- app/                  # Halaman Next.js
    |--api                # Konfigurasi API 
        |--id
    |--products           # Halaman dari CRUD             
|-- public/               # Gambar, ikon, dan berkas statis lainnya
|-- config.js             # Konfigurasi aplikasi
|-- .env                  # Konfigurasi Database
|-- .env.example          # Contoh berkas konfigurasi
|-- package.json          # Informasi proyek dan dependensi
|-- prisma/               # Direktori Prisma
    |-- schema.prisma     # Definisi skema Prisma
    |-- client/           # Kode Prisma Client
```

## Teknologi yang Digunakan

Daftar teknologi dan pustaka utama yang digunakan dalam proyek ini:

- Next.js - Framework React untuk aplikasi web
- PostgreSQL - Basis data relasional
- Prisma - ORM (Object-Relational Mapping) untuk mengatur isi data dari database
- DaisyUI - Pustaka UI untuk Tailwind CSS
- Axios - Pustaka untuk mengakses API HTTP

