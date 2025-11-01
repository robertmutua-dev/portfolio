// Dark / Light Mode Toggle
const toggleBtn = document.getElementById('mode-toggle')
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  toggleBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙'
})

// Scroll animation for sections
const sections = document.querySelectorAll('.fade-in')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  },
  { threshold: 0.2 }
)
sections.forEach((section) => observer.observe(section))

// Responsive Navigation Toggle
const menuToggle = document.getElementById('menu-toggle')
const navMenu = document.querySelector('nav ul')

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active')
  menuToggle.textContent = navMenu.classList.contains('active') ? '✖' : '☰'
})

// Close menu on link click
document.querySelectorAll('nav a').forEach((link) =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('active')
    menuToggle.textContent = '☰'
  })
)
