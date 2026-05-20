# WITHOUT ME SUPPLY GOODS — Landing Page

**Nama  :** Alfan Shobron Jamal  
**NIM   :** 23.11.5438  
**Mata Kuliah :** Desain Landing Page  

---

## Struktur Folder

```
withoutme-landing/
├── index.html            
├── css/
│   ├── style.css         
│   └── components.css    
├── js/
│   └── main.js           
└── images/               
    ├── logo.png
    ├── ziphodie-black.jpg
    ├── tiedye-hoodie.jpg
    ├── coach-jacket-maroon.jpg
    ├── coach-jacket-black.jpg
    ├── hoodie-beige.jpg
    ├── hoodie-maroon.jpg
    ├── ziphodie-tshirt-print.jpg
    ├── sling-bag.jpg
    ├── wis-bag-navi.jpg
    └── wis-bag.jpg
```

---

## 12 Anatomi Landing Page

| No | Section           | Lokasi di index.html              |
|----|-------------------|-----------------------------------|
| 1  | Navigation Bar    | `<nav class="navbar">`            |
| 2  | Hero Section      | `<section class="hero">`          |
| 3  | USP Bar           | `<div class="usp-bar">`           |
| 4  | Headline / Hook   | `.hero__headline` + `.section__title` |
| 5  | Hero Image        | `.hero__img-grid`                 |
| 6  | Product Showcase  | `<section class="products">`      |
| 7  | PAS Section       | `<section class="pas">`           |
| 8  | Categories        | `<section class="categories">`    |
| 9  | Social Proof      | `<section class="social-proof">`  |
| 10 | Trust / Guarantee | `<section class="guarantee">`     |
| 11 | Call to Action    | `<section class="cta-section">`   |
| 12 | Footer            | `<footer class="footer">`         |

---

## Cara Pakai

1. Salin folder `withoutme-landing/` ke komputer kamu
2. Pindahkan semua foto produk ke folder `images/`
3. Buka `index.html` di browser atau pakai Live Server di VS Code

---

## Font yang Digunakan

Tambahkan link berikut di `<head>` index.html jika belum ada:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
/>
```

---

## Copywriting Framework

- **AIDA** — diterapkan secara keseluruhan (Hero → Produk → Bukti → CTA)
- **PAS** — diterapkan di section `<section class="pas">` (Problem → Agitate → Solution)
