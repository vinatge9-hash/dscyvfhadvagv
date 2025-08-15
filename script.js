/* Client-side interactions for La Marisq */

// Menu toggle for mobile
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Reservation modal logic
const reserveBtn = document.getElementById('reserveBtn');
const reserveBtnMobile = document.getElementById('reserveBtnMobile');
const heroReserve = document.getElementById('heroReserve');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const reservationForm = document.getElementById('reservationForm');
const resMessage = document.getElementById('resMessage');

function openModal() {
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}
function closeModalFn() {
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

if (reserveBtn) reserveBtn.addEventListener('click', openModal);
if (reserveBtnMobile) reserveBtnMobile.addEventListener('click', openModal);
if (heroReserve) heroReserve.addEventListener('click', openModal);
if (closeModal) closeModal.addEventListener('click', closeModalFn);
modal?.addEventListener('click', (e) => {
  if (e.target === modal) closeModalFn();
});

if (reservationForm) {
  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simple validation/demo behavior
    if (resMessage) {
      resMessage.classList.remove('hidden');
    }
    reservationForm.reset();
    setTimeout(() => {
      if (resMessage) resMessage.classList.add('hidden');
      closeModalFn();
    }, 2500);
  });
}

// Gallery lightbox (simple)
const gallery = document.getElementById('gallery');
let lightbox;
if (gallery) {
  gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    const largeSrc = img.getAttribute('data-large') || img.src;
    openLightbox(largeSrc);
  });
}

function openLightbox(src) {
  lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4';
  lightbox.innerHTML = `\n    <div class="max-w-none w-full md:w-3/4 lg:w-1/2">\n      <img src="${src}" alt="gallery large" class="w-full h-auto rounded-lg shadow" />\n      <div class=\"flex justify-end\">\n        <button id=\"closeLightbox\" class=\"mt-4 px-4 py-2 bg-white rounded shadow\">Close</button>\n      </div>\n    </div>`;
  document.body.appendChild(lightbox);
  const closeBtn = document.getElementById('closeLightbox');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
}
function closeLightbox() {
  lightbox?.remove();
  lightbox = null;
}

// Year in index footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Simple progressive enhancement: animate elements on load
window.addEventListener('load', () => {
  document.querySelectorAll('section').forEach((s, i) => {
    s.classList.add('opacity-0', 'translate-y-4');
    setTimeout(() => {
      s.classList.remove('opacity-0', 'translate-y-4');
      s.classList.add('transition','duration-700','ease-out');
    }, 80 * i);
  });
});
