/* ============================================================
   js/main.js
   WITHOUT ME SUPPLY GOODS — Landing Page Scripts
   Nama : Alfan Shobron Jamal  |  NIM : 23.11.5438
============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. NAVBAR SCROLL EFFECT ─────────────────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ── 2. SCROLL REVEAL ────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');
  const observer  = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));

  /* ── 3. MOBILE NAV ───────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  let   mobileNav = document.querySelector('.mobile-nav');

  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.innerHTML = `
      <button class="mobile-nav__close" id="mobileClose">✕</button>
      <a href="#produk"   onclick="closeMobileNav()">PRODUK</a>
      <a href="#koleksi"  onclick="closeMobileNav()">KOLEKSI</a>
      <a href="#tentang"  onclick="closeMobileNav()">TENTANG</a>
      <a href="#kontak"   onclick="closeMobileNav()">KONTAK</a>
      <a href="#cta" class="btn btn--primary" onclick="closeMobileNav()">SHOP NOW</a>
    `;
    document.body.appendChild(mobileNav);
  }

  window.closeMobileNav = () => mobileNav.classList.remove('open');

  hamburger?.addEventListener('click', () => mobileNav.classList.add('open'));
  document.getElementById('mobileClose')?.addEventListener('click', closeMobileNav);

  /* ── 4. CTA FORM SUBMIT ──────────────────────────────── */
  const ctaForm = document.getElementById('ctaForm');
  ctaForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    ctaForm.classList.add('submitted');

    let msg = document.querySelector('.success-msg');
    if (!msg) {
      msg = document.createElement('p');
      msg.className = 'success-msg';
      msg.textContent = '✓ BERHASIL DIDAFTARKAN! CEK EMAIL KAMU.';
      ctaForm.insertAdjacentElement('afterend', msg);
    }
    msg.classList.add('show');
  });

  /* ── 5. PRODUCT CARD OVERLAY BUTTONS ────────────────── */
  document.querySelectorAll('.product-card').forEach((card) => {
    if (!card.querySelector('.product-card__overlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'product-card__overlay';
      overlay.innerHTML = `<button class="product-card__overlay-btn">LIHAT PRODUK</button>`;
      card.appendChild(overlay);
    }
  });

});
