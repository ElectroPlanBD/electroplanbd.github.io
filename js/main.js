// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

// Language: applies translations from i18n.js if a Bangla version exists
function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!el.dataset.en) el.dataset.en = el.textContent;
    const text = lang === 'bn' && I18N.bn[key] ? I18N.bn[key] : el.dataset.en;
    el.textContent = text;
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}
let saved = 'en';
try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
if (saved === 'bn') setLang('bn');
