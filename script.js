const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('formMessage');
  msg.textContent = 'Thanks — your enquiry is ready to be connected to REHERO.';
});


const candidateForm = document.getElementById('candidateForm');
const candidateFormMessage = document.getElementById('candidateFormMessage');

if (candidateForm) {
  candidateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    candidateFormMessage.textContent = 'Thank you. Your profile is ready to be connected to the REHERO recruitment inbox.';
    candidateForm.reset();
  });
}
