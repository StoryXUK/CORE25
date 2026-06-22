const ACCENTS = {
  orange: "#FF5A1F",
  aqua: "#25D7D9",
  lavender: "#D7A7F4",
  lime: "#E6FF2E",
  blue: "#2488D4",
  green: "#34C987",
};

const icons = {
  arrow: '<svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" /></svg>',
  dumbbell: '<svg viewBox="0 0 24 24"><path d="M14.4 14.4 9.6 9.6M18.657 21.485l2.828-2.828M21.5 21.5l-1.4-1.4M18.657 2.515l2.828 2.828M21.5 2.5l-1.4 1.4M5.343 21.485l-2.828-2.828M2.5 21.5l1.4-1.4M5.343 2.515 2.515 5.343M2.5 2.5l1.4 1.4M7 8l9 9M8 7l9 9" /></svg>',
  heartPulse: '<svg viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" /><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" /></svg>',
  sparkles: '<svg viewBox="0 0 24 24"><path d="m12 3-1.9 5.8L4 10.7l6.1 1.9L12 18l1.9-5.4 6.1-1.9-6.1-1.9Z" /><path d="M5 3v4M3 5h4M19 17v4M17 19h4" /></svg>',
  graduation: '<svg viewBox="0 0 24 24"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /></svg>',
  building: '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" /></svg>',
  network: '<svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><path d="m8.5 7.5 2.5 7M15.5 7.5l-2.5 7M9 6h6" /></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path d="m9 16 2 2 4-4" /></svg>',
  creditCard: '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>',
  smartphone: '<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>',
  barChart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V8M17 16v-9" /></svg>'
};

const sectors = [
  { title: "Fitness, Sport & Active Lifestyles", short: "PTs, coaches, gyms, clubs, racquets, golf and sport operators.", accent: ACCENTS.orange, icon: "dumbbell", examples: ["Personal trainers", "Sports coaches", "Group exercise", "Yoga & Pilates", "Golf professionals", "Tennis coaches", "Martial arts & boxing", "Gym owners", "Studio managers", "Racquets clubs", "Sports clubs", "Multi-site operators"] },
  { title: "Wellness, Therapy & Health", short: "Massage, physio, therapists, wellness and appointment-led services.", accent: ACCENTS.aqua, icon: "heartPulse", examples: ["Massage therapists", "Physiotherapists", "Wellness practitioners", "Therapists", "Health coaches", "Treatment providers", "Rehab / recovery", "Appointment-led services"] },
  { title: "Beauty, Spa & Hospitality", short: "Salons, spas, hotel experiences, treatment rooms and packages.", accent: ACCENTS.lavender, icon: "sparkles", examples: ["Spa therapists", "Beauty therapists", "Salon owners", "Spa managers", "Hotel spas", "Treatment rooms", "Retreat operators", "Experience packages"] },
  { title: "Education, Training & Content", short: "Tutors, course providers, creators, training companies and educators.", accent: ACCENTS.lime, icon: "graduation", examples: ["Tutors", "Teachers", "Training providers", "Course creators", "Education partners", "Instructor training", "Professional development", "Live + on-demand educators"] },
  { title: "Community & Public Sector", short: "Councils, active partnerships, NHS, NGBs and participation programmes.", accent: ACCENTS.blue, icon: "building", examples: ["Local authorities", "NHS / social care", "Community wellbeing", "Active partnerships", "NGBs", "Schools & colleges", "Participation schemes", "Regional networks"] },
  { title: "Marketplaces & Networks", short: "Franchises, partner networks, multi-provider models and ecosystems.", accent: ACCENTS.green, icon: "network", examples: ["Multi-provider marketplaces", "Franchise models", "Partner networks", "White-label programmes", "Brand ecosystems", "Corporate wellbeing", "National programmes", "Regional programmes"] },
];

const businessDetails = {
  "Personal trainers": { product: "CORE", text: "Sell sessions, take payments, manage clients and grow repeat income from one place." },
  "Sports coaches": { product: "CORE", text: "Promote sessions, manage bookings and keep clients moving without spreadsheet admin." },
  "Group exercise": { product: "CORE / GALAXY", text: "Fill classes, manage attendance, take payments and keep schedules live." },
  "Yoga & Pilates": { product: "CORE / GALAXY", text: "Run classes, courses, packs and memberships with a simple customer booking journey." },
  "Golf professionals": { product: "CORE", text: "Package lessons, clinics and programmes while making bookings and payments easier." },
  "Tennis coaches": { product: "CORE", text: "Manage coaching slots, courses and client payments without message-chasing." },
  "Martial arts & boxing": { product: "CORE / GALAXY", text: "Run classes, gradings, memberships, student records and payments in one flow." },
  "Gym owners": { product: "GALAXY", text: "Run memberships, timetables, staff, payments, bookings and marketing from one operating system." },
  "Studio managers": { product: "GALAXY", text: "Keep classes, instructors, capacity, bookings and payments connected." },
  "Racquets clubs": { product: "GALAXY / ENTERPRISE", text: "Manage courts, coaching, memberships, events and utilisation in one connected system." },
  "Sports clubs": { product: "GALAXY", text: "Book spaces, collect payments, manage programmes and improve member participation." },
  "Multi-site operators": { product: "ENTERPRISE", text: "Standardise operations, reporting, governance and bookings across locations." },
  "Massage therapists": { product: "CORE", text: "Take bookings while you work, reduce no-shows and manage payments professionally." },
  "Physiotherapists": { product: "CORE / GALAXY", text: "Run appointment-led services with bookings, client records, reminders and payments connected." },
  "Wellness practitioners": { product: "CORE", text: "Sell services, programmes and packages while keeping admin light." },
  "Therapists": { product: "CORE", text: "Manage appointments, confirmations and payments through one simple system." },
  "Health coaches": { product: "CORE / PULSAR", text: "Sell coaching, programmes, live sessions and on-demand support." },
  "Treatment providers": { product: "CORE / GALAXY", text: "Package treatments, manage availability and give clients a cleaner booking experience." },
  "Rehab / recovery": { product: "CORE / GALAXY", text: "Coordinate programmes, sessions, attendance and repeat participation." },
  "Appointment-led services": { product: "CORE", text: "Make availability visible, bookable and paid without admin becoming the job." },
  "Spa therapists": { product: "CORE", text: "Sell treatments, packages and repeat services with bookings and payments connected." },
  "Beauty therapists": { product: "CORE", text: "Let customers book, pay and return with less chasing and more polish." },
  "Salon owners": { product: "GALAXY", text: "Manage staff, bookings, services, customers, payments and promotions together." },
  "Spa managers": { product: "GALAXY", text: "Coordinate treatment rooms, therapists, packages and bookings in one system." },
  "Hotel spas": { product: "GALAXY / ENTERPRISE", text: "Connect experiences, rooms, treatments, capacity and reporting." },
  "Treatment rooms": { product: "GALAXY", text: "Make space, staff and appointment availability easy to manage and sell." },
  "Retreat operators": { product: "PULSAR / ENTERPRISE", text: "Package live experiences, programmes, content and bookings into a joined-up offer." },
  "Experience packages": { product: "GALAXY / PULSAR", text: "Bundle services, content, events and payments into sellable experiences." },
  "Tutors": { product: "PULSAR", text: "Sell live lessons, courses, guides and on-demand content with access control." },
  "Teachers": { product: "PULSAR", text: "Package expertise into bookable, repeatable learning products." },
  "Training providers": { product: "PULSAR / ENTERPRISE", text: "Run cohorts, courses, content libraries, bookings and programme access." },
  "Course creators": { product: "PULSAR", text: "Turn knowledge into courses, memberships, live sessions and repeatable revenue." },
  "Education partners": { product: "ENTERPRISE", text: "Support learners with commercial tools, reporting and partner-led growth pathways." },
  "Instructor training": { product: "PULSAR / ENTERPRISE", text: "Package certification, content, live delivery and graduate support." },
  "Professional development": { product: "PULSAR", text: "Sell structured learning, live training and on-demand libraries." },
  "Live + on-demand educators": { product: "PULSAR", text: "Deliver live sessions, replays, libraries and subscription content." },
  "Local authorities": { product: "ENTERPRISE", text: "Manage bookings, participation, reporting and multi-site delivery at scale." },
  "NHS / social care": { product: "ENTERPRISE", text: "Support wellbeing programmes, access, reporting and trusted delivery partners." },
  "Community wellbeing": { product: "ENTERPRISE", text: "Connect local activity providers, bookings, outcomes and participation data." },
  "Active partnerships": { product: "ENTERPRISE", text: "Coordinate programmes, providers, regional participation and reporting." },
  "NGBs": { product: "ENTERPRISE", text: "Support national programmes, local delivery, data visibility and partner activity." },
  "Schools & colleges": { product: "ENTERPRISE", text: "Manage lettings, programmes, learner pathways and bookable facilities." },
  "Participation schemes": { product: "ENTERPRISE", text: "Make programmes easier to find, book, manage, measure and grow." },
  "Regional networks": { product: "ENTERPRISE", text: "Run multi-provider delivery with local flexibility and central visibility." },
  "Multi-provider marketplaces": { product: "ENTERPRISE", text: "Connect supply and demand across providers, customers, bookings and payments." },
  "Franchise models": { product: "ENTERPRISE", text: "Central governance with local autonomy for locations, staff and offers." },
  "Partner networks": { product: "ENTERPRISE", text: "Coordinate providers, permissions, reporting and shared infrastructure." },
  "White-label programmes": { product: "ENTERPRISE", text: "Launch branded experiences on fibodo infrastructure without building from scratch." },
  "Brand ecosystems": { product: "ENTERPRISE", text: "Connect offers, audiences, partners and activity-based campaigns." },
  "Corporate wellbeing": { product: "ENTERPRISE", text: "Deliver bookable wellbeing services, reporting and partner access for teams." },
  "National programmes": { product: "ENTERPRISE", text: "Scale delivery, governance, data and reporting across a national network." },
  "Regional programmes": { product: "ENTERPRISE", text: "Run local delivery with consistent standards and central visibility." }
};

const platformBlocks = [
  { title: "Bookings", icon: "calendar", copy: "Sessions, classes, appointments, events and programmes." },
  { title: "Payments", icon: "creditCard", copy: "PAYG, packs, memberships, vouchers and renewals." },
  { title: "Customer apps", icon: "smartphone", copy: "Give people an easy way to find, book, pay and return." },
  { title: "Reporting", icon: "barChart", copy: "See what fills, what earns and where growth is happening." },
];

const products = [
  ["CORE", "Independent providers", "Sessions, services, clients and payments.", ACCENTS.orange],
  ["GALAXY", "Gyms, studios and clubs", "Timetables, memberships, staff and payments.", ACCENTS.green],
  ["PULSAR", "Creators and educators", "Content, courses, live and on-demand delivery.", ACCENTS.lavender],
  ["ENTERPRISE", "Complex organisations", "Scale, governance, reporting and integrations.", ACCENTS.blue],
];

const slugify = text => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function renderSectorCards() {
  document.getElementById("sectorCards").innerHTML = sectors.map(sector => `
    <a class="sector-card" href="#${slugify(sector.title)}" style="--accent:${sector.accent}">
      <div class="card-top">
        <div class="icon-box">${icons[sector.icon]}</div>
        <div class="arrow-icon">${icons.arrow}</div>
      </div>
      <h3>${sector.title}</h3>
      <p>${sector.short}</p>
      <div class="card-link">See examples</div>
    </a>
  `).join("");
}

function renderBusinessGroups() {
  document.getElementById("businessGroups").innerHTML = sectors.map(sector => `
    <section class="business-group" id="${slugify(sector.title)}" style="--accent:${sector.accent}">
      <h3 class="business-title"><i></i>${sector.title}</h3>
      <div class="business-list">
        ${sector.examples.map(item => `
          <button class="business-button" type="button" data-item="${item}" data-accent="${sector.accent}">
            <span><i></i>${item}</span>${icons.arrow}
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderPlatformBlocks() {
  document.getElementById("platformBlocks").innerHTML = platformBlocks.map(block => `
    <article class="platform-card">
      ${icons[block.icon]}
      <h3>${block.title}</h3>
      <p>${block.copy}</p>
    </article>
  `).join("");
}

function renderProducts() {
  document.getElementById("productCards").innerHTML = products.map(([product, who, copy, color]) => `
    <article class="product-card">
      <div class="product-name" style="color:${color}">${product}</div>
      <h3>${who}</h3>
      <p>${copy}</p>
      <div class="product-link">Explore ${product} →</div>
    </article>
  `).join("");
}

function updateSelected(item, accent) {
  const details = businessDetails[item] || { product: "CORE", text: "A connected way to get booked, get paid and grow." };
  const firstProduct = details.product.split(" / ")[0].toLowerCase();

  document.getElementById("selectedTitle").textContent = item;
  document.getElementById("selectedText").textContent = details.text;
  document.getElementById("selectedAccent").style.background = accent || ACCENTS.orange;

  const badge = document.getElementById("productBadge");
  badge.textContent = `${details.product} by fibodo`;
  badge.className = `product-badge product-${firstProduct}`;

  document.querySelectorAll(".business-button").forEach(button => {
    button.classList.toggle("is-active", button.dataset.item === item);
  });
}

function bindBusinessButtons() {
  document.querySelectorAll(".business-button").forEach(button => {
    const activate = () => updateSelected(button.dataset.item, button.dataset.accent);
    button.addEventListener("mouseenter", activate);
    button.addEventListener("focus", activate);
    button.addEventListener("click", activate);
  });

  const initial = document.querySelector('[data-item="Personal trainers"]');
  if (initial) updateSelected("Personal trainers", initial.dataset.accent);
}

renderSectorCards();
renderBusinessGroups();
renderPlatformBlocks();
renderProducts();
bindBusinessButtons();
