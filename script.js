const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Filter menu: item yang belum memiliki data kategori tidak ditampilkan
// pada filter tertentu sampai kategori produknya dikonfirmasi.
const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;

    menuCards.forEach(card => {
      const matches = selected === 'semua' || card.dataset.category === selected;
      card.classList.toggle('hidden', !matches);
    });
  });
});

// Pesan otomatis berisi nama menu saat tombol pesan pada kartu diklik.
const whatsappNumber = '6288211770143';
document.querySelectorAll('.order-link').forEach(link => {
  const product = link.dataset.product;
  const message = `Halo Dimsum Gen Z, saya ingin memesan ${product}. Apakah masih tersedia?`;
  link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener';
});

document.querySelector('#year').textContent = new Date().getFullYear();
