const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
btn.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', !expanded);
  menu.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
}); // Fermer le menu quand on clique sur un lien (utile sur mobile) menu.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); iconOpen.classList.remove('hidden'); iconClose.classList.add('hidden'); }); });
const dropdownBtn = document.getElementById("dropdown-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("opacity-0");
  dropdownMenu.classList.toggle("invisible");
});

// Fermer si on clique ailleurs
document.addEventListener("click", (e) => {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("opacity-0", "invisible");
  }
});
