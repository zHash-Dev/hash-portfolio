/* Projects individuais */
const projects = [
  {
    title: 'Combat Abilities',
    year: '2026',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a31c0cb&is=6a306f4b&hm=b66777fda47a5647a3709a551c8ba5d4e7f197b44f8308798921127b17e24867&=&format=webp&quality=lossless',
  },
  {
    title: 'Transformations',
    year: '2025',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a31c13c&is=6a306fbc&hm=77cba5742f865cb3a25a41d453bf30dde694121ddaf133d6db252a95176938f5&=&format=webp&quality=lossless',
  },
  {
    title: 'Progression System',
    year: '2024',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a31c0cb&is=6a306f4b&hm=b66777fda47a5647a3709a551c8ba5d4e7f197b44f8308798921127b17e24867&=&format=webp&quality=lossless',
  },
  {
    title: 'Custom Entities',
    year: '2023',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a31c13c&is=6a306fbc&hm=77cba5742f865cb3a25a41d453bf30dde694121ddaf133d6db252a95176938f5&=&format=webp&quality=lossless',
  },
  {
    title: 'Combat Rework',
    year: '2022',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1515831175539851284/image.png?ex=6a31c0cb&is=6a306f4b&hm=b66777fda47a5647a3709a551c8ba5d4e7f197b44f8308798921127b17e24867&=&format=webp&quality=lossless',
  },
  {
    title: 'Legacy Pack',
    year: '999+',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1515831652008591440/image.png?ex=6a31c13c&is=6a306fbc&hm=77cba5742f865cb3a25a41d453bf30dde694121ddaf133d6db252a95176938f5&=&format=webp&quality=lossless',
  },
]

/* Team Projects */
const teamProjects = [
  {
    title: 'Boss Battle Arena',
    year: '999+',
    img: '/img/team-project.png',
    desc: 'Mapa de batalha contra boss épico construído em colaboração com uma equipe de criadores.',
    role: 'Texturizador',
  },
  {
    title: 'RPG Adventure Map',
    year: '999+',
    img: '/img/project-transform.png',
    desc: 'Aventura RPG completa com quests, NPCs e progressão — desenvolvida em time.',
    role: 'Scripter',
  },
  {
    title: 'Anime Universe Pack',
    year: '999+',
    img: '/img/project-combat.png',
    desc: 'Addon colaborativo recriando um universo anime com habilidades e personagens.',
    role: 'Texturizador & UI',
  },
]

/* UI projects */
const uiProjects = [
  {
    title: 'Combat HUD',
    year: '999+',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1516225094115004627/image.png?ex=6a31de28&is=6a308ca8&hm=d152c080e5e372225c2863be50d8041dabb3814041b95f4eac5b7887ee4a65ea&=&format=webp&quality=lossless&width=1536&height=864',
  },
  {
    title: 'Main Menu',
    year: '999+',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1516225094115004627/image.png?ex=6a31de28&is=6a308ca8&hm=d152c080e5e372225c2863be50d8041dabb3814041b95f4eac5b7887ee4a65ea&=&format=webp&quality=lossless&width=1536&height=864',
  },
  {
    title: 'Skill Tree UI',
    year: '999+',
    img: 'https://media.discordapp.net/attachments/1175920811169820804/1516225094115004627/image.png?ex=6a31de28&is=6a308ca8&hm=d152c080e5e372225c2863be50d8041dabb3814041b95f4eac5b7887ee4a65ea&=&format=webp&quality=lossless&width=1536&height=864',
  },
]

const FALLBACK_IMG = '/img/not-found.png'

/* Renderização */
function imgTag(src, alt) {
  const safeSrc = src || FALLBACK_IMG
  return `<img src="${safeSrc}" alt="${alt}" loading="lazy"
    onerror="this.onerror=null;this.src='${FALLBACK_IMG}'" />`
}

/* Card de projeto individual */
function renderProjects(container) {
  container.innerHTML = projects
    .map(
      (p) => `
      <article class="card" tabindex="0" role="link"
        aria-label="${p.title}" data-link="${p.link}">
        <span class="card-badge">${p.year}</span>
        <div class="card-image">${imgTag(p.img)}</div>
      </article>`
    )
    .join('')
}

/* Card de team project */
function renderTeam(container) {
  container.innerHTML = teamProjects
    .map(
      (p) => `
      <article class="card" tabindex="0" role="link"
        aria-label="${p.title}" data-link="${p.link}">
        <span class="card-badge">${p.year}</span>
        <div class="card-image">${imgTag(p.img, p.title)}</div>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.desc}</p>
          <span class="card-role"><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i>${p.role}</span>
        </div>
      </article>`
    )
    .join('')
}

/* Card de UI */
function renderUI(container) {
  container.innerHTML = uiProjects
    .map(
      (p) => `
      <article class="card" tabindex="0" role="link"
        aria-label="${p.title}" data-link="${p.link}">
        <span class="card-badge">${p.year}</span>
        <div class="card-image">${imgTag(p.img, p.title)}</div>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
        </div>
      </article>`
    )
    .join('')
}

/* Menu mobile */
function enableMobileNav() {
  const toggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.nav-links')
  if (!toggle || !links) return

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(open))
  })

  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
    })
  )
}

/* Link ativo conforme a seção visível */
function enableScrollSpy() {
  const navLinks = [...document.querySelectorAll('.nav-links a')]
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove('active'))
          const active = navLinks.find(
            (l) => l.getAttribute('href') === `#${entry.target.id}`
          )
          if (active) active.classList.add('active')
        }
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )

  sections.forEach((s) => observer.observe(s))
}

/* Contador animado das stats */
function animateStats() {
  const counters = document.querySelectorAll('.stats strong[data-count]')
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        const target = Number(el.dataset.count)
        const suffix = el.dataset.suffix || ''
        const duration = 2000
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 1.2)
          el.textContent = Math.floor(eased * target) + (progress === 1 ? suffix : '')
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        obs.unobserve(el)
      })
    },
    { threshold: 0.6 }
  )
  counters.forEach((c) => observer.observe(c))
}

/* ScrollReveal */
function enableScrollReveal() {
  if (typeof ScrollReveal === 'undefined') return
  const sr = ScrollReveal({ reset: false })

  sr.reveal('.hero-tag, .hero-title', { distance: '40px', origin: 'top', duration: 700, interval: 100 })
  sr.reveal('.hero-subtitle, .stats', {
    distance: '40px', origin: 'bottom', duration: 700, interval: 120,
  })
  sr.reveal('.section-head', { distance: '30px', origin: 'bottom', duration: 600 })
  sr.reveal('.card', { distance: '50px', origin: 'bottom', interval: 90, duration: 500 })
  sr.reveal('.about-content p', { distance: '30px', origin: 'bottom', interval: 80, duration: 500 })
  sr.reveal('.socials a', { distance: '30px', origin: 'bottom', interval: 120, duration: 500 })
}

/* Init */
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(document.getElementById('projects-grid'))
  renderTeam(document.getElementById('team-grid'))
  renderUI(document.getElementById('ui-grid'))

  enableMobileNav()
  enableScrollSpy()
  animateStats()
  enableScrollReveal()
})
