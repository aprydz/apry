# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Personal Portfolio Website – Full-Stack Developer

### 1. Project Overview

Membangun website personal portfolio untuk seorang Full-Stack Developer dengan desain modern, minimalis, elegan, dan profesional.

Website mengadaptasi referensi desain yang diberikan dengan pendekatan dark minimalist editorial design.

Website harus menampilkan identitas developer, deskripsi singkat, kemampuan teknis, project yang pernah dikerjakan, pengalaman, serta informasi kontak.

Website bukan sekadar landing page biasa, tetapi menjadi personal branding platform untuk menunjukkan kemampuan developer kepada recruiter, perusahaan teknologi, maupun calon klien.

### 2. Project Objectives

1. Membangun personal branding sebagai Web Developer / Full-Stack Developer.
2. Menampilkan kemampuan teknis dan pengalaman pengembangan aplikasi.
3. Menampilkan project yang telah diselesaikan beserta deskripsinya.
4. Menyediakan informasi kontak dan social media.
5. Menghasilkan website yang responsif, cepat, dan mudah digunakan.
6. Meningkatkan kredibilitas profesional ketika melamar pekerjaan atau magang.

### 3. Target Users

- Recruiter dan HR perusahaan teknologi.
- Software house dan startup.
- Developer profesional.
- Calon klien atau pengguna jasa pengembangan website.
- Komunitas teknologi.

### 4. Technology Stack

Frontend:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion (Framer Motion)
- Lucide React

Development:
- Node.js
- npm
- Git
- GitHub

Deployment:
- Vercel

Optional:
- Supabase untuk database.
- Resend untuk contact form.

### 5. Design System

Visual direction:
- Dark minimalist.
- Editorial portfolio.
- Modern developer aesthetic.
- Clean typography.
- Premium monochrome interface.

Color palette:
- Background: #101010
- Main text: #F5F5F5
- Secondary text: #A0A0A0
- Border: #454545
- Card background: #171717
- Highlight: #FFFFFF

Typography:
- Heading: Space Grotesk.
- Body: Inter.
- Monospace: JetBrains Mono.

Design characteristics:
- Dominasi warna hitam.
- Border tipis berwarna abu-abu.
- Rounded container dengan radius besar.
- Heading berukuran besar.
- Spacing yang luas.
- Decorative circular outlines.
- Minimalist buttons.
- Subtle hover effects.
- Smooth transitions.

Hindari penggunaan gradient berlebihan, warna mencolok, dan komponen UI yang terlalu ramai.

### 6. Website Structure

Website menggunakan konsep single-page portfolio dengan navigasi ke setiap section.

#### A. Header / Navigation

Komponen:
- Logo atau nama developer.
- About.
- Projects.
- Articles (optional).
- Experience.
- Contacts.
- Language switcher (optional).

Fitur:
- Navigasi menggunakan smooth scrolling.
- Sticky navigation ketika halaman digulir.
- Active section indicator.
- Responsive mobile navigation.

#### B. Hero Section

Tujuan:
Memperkenalkan identitas developer secara langsung.

Konten:
- Nama developer.
- Role: Full-Stack Developer.
- Deskripsi singkat.
- Call-to-action Projects.
- Social media links.

Contoh heading:

"Full-Stack
Developer"

Deskripsi:
"I build modern, scalable, and user-friendly digital experiences through clean code and thoughtful engineering."

Social links:
- GitHub
- LinkedIn
- Instagram
- Email
- Telegram (optional)

Fitur:
- Typography oversized.
- Animasi entrance.
- Tombol project dengan arrow icon.
- Hover interaction.

#### C. Featured Projects Section

Tujuan:
Menampilkan project terbaik yang pernah dikembangkan.

Setiap project memiliki:
- Project thumbnail.
- Project title.
- Short description.
- Technology stack.
- Project category.
- Live demo link.
- GitHub repository link.

Contoh project:
1. Student Attendance System.
2. Personal Portfolio Website.
3. Online Fashion Marketplace.
4. Other Web Applications.

Layout:
- Horizontal project carousel.
- Project card dengan gambar.
- Previous dan next navigation.
- Hover effect pada project card.

#### D. About Me Section

Tujuan:
Memberikan informasi mengenai developer.

Konten:
- Profile description.
- Developer background.
- Profile photograph.
- Personal interests.
- Career goals.

Contoh:
"Hello! I'm [Your Name], a developer passionate about building functional, scalable, and user-friendly web applications."

Tampilkan informasi secara ringkas dan profesional.

#### E. Skills & Technologies Section

Kelompokkan kemampuan teknis berdasarkan kategori.

Frontend:
- HTML
- CSS
- JavaScript
- TypeScript
- React
- Next.js
- Tailwind CSS

Backend:
- Node.js
- Express.js
- PHP
- Laravel
- REST API

Database:
- MySQL
- PostgreSQL
- MongoDB
- Supabase

Tools:
- Git
- GitHub
- VS Code
- Postman
- Docker (jika dikuasai)

Catatan:
Skills harus mudah diperbarui dan tidak boleh menampilkan teknologi yang belum benar-benar dikuasai.

#### F. Work Experience Section

Tujuan:
Menampilkan pengalaman kerja, organisasi, internship, atau pengalaman project.

Informasi:
- Company / Organization.
- Position.
- Employment period.
- Responsibilities.
- Technologies used.

Layout:
- Horizontal timeline atau list.
- Minimalist border separator.
- Hover highlight.
- Date dan posisi ditampilkan dengan jelas.

Jika belum memiliki pengalaman kerja formal, gunakan bagian Experience & Activities atau Project Experience.

#### G. Contact Section

Tujuan:
Mempermudah recruiter dan calon klien menghubungi developer.

Informasi:
- Email.
- LinkedIn.
- GitHub.
- Instagram.
- Location (optional).

Fitur:
- Contact form.
- Name input.
- Email input.
- Message textarea.
- Submit button.
- Success/error feedback.

Contact form harus memiliki validasi input. Jangan menampilkan form yang seolah-olah mengirim pesan jika backend belum dikonfigurasi.

#### H. Footer

Konten:
- Developer name.
- Copyright.
- Social media links.
- Back to top button.

### 7. Interaction & Animation

Gunakan Motion untuk membuat interaksi yang halus.

Animasi yang diperlukan:
- Hero entrance animation.
- Fade-in ketika section masuk viewport.
- Stagger animation pada project cards.
- Smooth scrolling.
- Button hover animation.
- Arrow movement animation.
- Subtle image reveal.
- Navigation transition.

Ketentuan:
- Animasi tidak boleh mengganggu keterbacaan.
- Hindari animasi berlebihan.
- Hormati prefers-reduced-motion.
- Pastikan performa tetap optimal.

### 8. Responsive Design

Website harus mendukung:

- Desktop: 1440px.
- Laptop: 1024px.
- Tablet: 768px.
- Mobile: 375px dan 390px.

Ketentuan:
- Desktop mempertahankan komposisi desain referensi.
- Mobile menggunakan layout satu kolom.
- Navigasi berubah menjadi mobile menu.
- Project carousel tetap mudah digunakan.
- Typography menyesuaikan ukuran layar.
- Tidak boleh terjadi horizontal overflow.

### 9. Non-Functional Requirements

Performance:
- Optimasi gambar.
- Lazy loading.
- Minimalkan JavaScript yang tidak diperlukan.
- Gunakan Next.js Image.
- Hindari layout shift.

SEO:
- Metadata title dan description.
- Open Graph metadata.
- Semantic HTML.
- Sitemap.
- Robots.txt.

Accessibility:
- Kontras warna yang baik.
- Keyboard navigation.
- Alt text pada gambar.
- Label pada form.
- Accessible buttons.

Code Quality:
- Component-based architecture.
- Reusable components.
- TypeScript types.
- Konsisten dalam penamaan.
- Tidak menggunakan kode duplikat yang tidak diperlukan.

### 10. Project Structure

Buat struktur project yang terorganisasi:

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── ProjectCard.tsx
│       ├── SocialLinks.tsx
│       └── SectionHeading.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── experience.ts
│
├── lib/
│   └── utils.ts
│
└── types/
    └── index.ts

public/
├── images/
├── projects/
└── icons/

### 11. Acceptance Criteria

Website dinyatakan selesai apabila:

1. Semua section dapat ditampilkan dengan benar.
2. Navigasi bekerja dengan baik.
3. Desain menyerupai referensi yang diberikan.
4. Website responsif pada desktop, tablet, dan mobile.
5. Semua tombol dan link memiliki fungsi nyata.
6. Project carousel dapat digunakan.
7. Animasi berjalan dengan smooth.
8. Contact form memiliki validasi.
9. Tidak ada error pada browser console.
10. Tidak terdapat broken image atau broken link.
11. Website dapat dijalankan secara lokal.
12. Website berhasil di-deploy ke Vercel.

### 12. Expected Result

Hasil akhir adalah website personal portfolio Full-Stack Developer dengan desain dark minimalist, tampilan profesional, interaksi modern, struktur kode yang rapi, serta performa yang optimal.

Website harus terasa seperti portfolio developer profesional, bukan template landing page generik.