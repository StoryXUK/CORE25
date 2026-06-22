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
  users: '<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" /></svg>',
  barChart: '<svg viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="M7 16v-5M12 16V8M17 16v-9" /></svg>'
};

const sectors = [
  { title: "Fitness, Sport & Active Lifestyles", short: "For PTs, coaches, instructors, clubs and active lifestyle providers.", accent: ACCENTS.orange, icon: "dumbbell", examples: ["Personal trainers", "Sports coaches", "Group exercise", "Yoga & Pilates", "Golf professionals", "Tennis coaches", "Martial arts & boxing", "Gym owners"] },
  { title: "Wellness, Therapy & Health", short: "For appointment-led wellbeing, therapy, recovery and coaching services.", accent: ACCENTS.aqua, icon: "heartPulse", examples: ["Massage therapists", "Physiotherapists", "Wellness practitioners", "Therapists", "Health coaches", "Treatment providers", "Rehab / recovery", "Appointment-led services"] },
  { title: "Beauty, Spa & Experiences", short: "For services, treatments, packages and bookable experiences.", accent: ACCENTS.lavender, icon: "sparkles", examples: ["Spa therapists", "Beauty therapists", "Salon owners", "Treatment rooms", "Retreat operators", "Experience packages", "Mobile services", "Pop-up events"] },
  { title: "Education, Training & Content", short: "For tutors, course creators and providers selling knowledge or programmes.", accent: ACCENTS.lime, icon: "graduation", examples: ["Tutors", "Teachers", "Training providers", "Course creators", "Instructor training", "Professional development", "Live educators", "On-demand educators"] },
  { title: "Community & Workplace Wellbeing", short: "For wellbeing programmes, community delivery and workplace activity.", accent: ACCENTS.blue, icon: "building", examples: ["Community wellbeing", "Corporate wellbeing", "Staff activities", "Participation schemes", "Schools & colleges", "Local programmes", "NHS / social care", "Regional networks"] },
  { title: "Networks & Multi-provider Models", short: "For providers who work with partners, venues, teams or multiple services.", accent: ACCENTS.green, icon: "network", examples: ["Partner networks", "Franchise models", "Multi-provider marketplaces", "Brand ecosystems", "Venue partners", "Multi-site operators", "Regional programmes", "National programmes"] },
];

const businessDetails = {
  "Personal trainers": "Sell sessions, take payments, manage clients and grow repeat income from one place.",
  "Sports coaches": "Promote sessions, manage bookings and keep clients moving without spreadsheet admin.",
  "Group exercise": "Fill classes, manage attendance, take payments and keep schedules live.",
  "Yoga & Pilates": "Run classes, courses, packs and memberships with a simple customer booking journey.",
  "Golf professionals": "Package lessons, clinics and programmes while making bookings and payments easier.",
  "Tennis coaches": "Manage coaching slots, courses and client payments without message-chasing.",
  "Martial arts & boxing": "Run classes, student records, bookings and payments in one flow.",
  "Gym owners": "Create a bookable online presence for classes, sessions, memberships and customers.",
  "Massage therapists": "Take bookings while you work, reduce no-shows and manage payments professionally.",
  "Physiotherapists": "Run appointment-led services with bookings, client records, reminders and payments connected.",
  "Wellness practitioners": "Sell services, programmes and packages while keeping admin light.",
  "Therapists": "Manage appointments, confirmations and payments through one simple system.",
  "Health coaches": "Sell coaching, programmes, live sessions and ongoing support.",
  "Treatment providers": "Package treatments, manage availability and give clients a cleaner booking experience.",
  "Rehab / recovery": "Coordinate programmes, sessions, attendance and repeat participation.",
  "Appointment-led services": "Make availability visible, bookable and paid without admin becoming the job."
};

const features = [
  { title: "Bookings", icon: "calendar", copy: "Sessions, classes, appointments, events and programmes made easy to book." },
  { title: "Payments", icon: "creditCard", copy: "Take payments for services, packs, memberships, vouchers and repeat bookings." },
  { title: "Customers", icon: "users", copy: "Keep client details, attendance and communications organised in one platform." },
  { title: "Your web presence", icon: "globe", copy: "Use your own fibodo URL and tailor your setup around your sector." },
  { title: "Scheduling", icon: "calendar", copy: "Manage availability, timetables and bookable services without spreadsheet admin." },
  { title: "Reporting", icon: "barChart", copy: "Understand bookings, payments and participation so you can make better decisions." },
  { title: "Content ready", icon: "sparkles", copy: "Support blogs, plans and useful resources as your offer grows." },
  { title: "Upgrade path", icon: "arrow", copy: "Start with CORE, then add more capability when your business needs it." },
];

const slugify = text => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function runHeroTitleGlitch() {
  const title = document.getElementById("heroTitle");
  if (!title) return;

  const finalText = "Only £25 a month.";

  window.setTimeout(() => {
    title.dataset.text = title.textContent;
    title.classList.add("is-glitching");

    window.setTimeout(() => {
      title.textContent = finalText;
      title.dataset.text = finalText;
    }, 260);

    window.setTimeout(() => {
      title.classList.remove("is-glitching");
    }, 760);
  }, 1500);
}

function renderFeatureCards() {
  const featureCards = document.getElementById("featureCards");
  if (!featureCards) return;

  featureCards.innerHTML = features.map(feature => `
    <article class="feature-card">
      ${icons[feature.icon]}
      <h3>${feature.title}</h3>
      <p>${feature.copy}</p>
    </article>
  `).join("");
}

function renderSectorCards() {
  const sectorCards = document.getElementById("sectorCards");
  if (!sectorCards) return;

  sectorCards.innerHTML = sectors.map(sector => `
    <a class="sector-card" href="#${slugify(sector.title)}" style="--accent:${sector.accent}">
      <div class="card-top">
        <div class="icon-box">${icons[sector.icon]}</div>
        <div class="arrow-icon">${icons.arrow}</div>
      </div>
      <h3>${sector.title}</h3>
      <p>${sector.short}</p>
      <div class="card-link">Included with CORE</div>
    </a>
  `).join("");
}

function renderBusinessGroups() {
  const businessGroups = document.getElementById("businessGroups");
  if (!businessGroups) return;

  businessGroups.innerHTML = sectors.map(sector => `
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

function updateSelected(item, accent) {
  const selectedTitle = document.getElementById("selectedTitle");
  const selectedText = document.getElementById("selectedText");
  const selectedAccent = document.getElementById("selectedAccent");

  if (selectedTitle) selectedTitle.textContent = item;
  if (selectedText) selectedText.textContent = businessDetails[item] || "Use CORE to create a professional booking, payment and customer journey tailored to this type of business.";
  if (selectedAccent) selectedAccent.style.background = accent || ACCENTS.orange;

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

function initPage() {
  runHeroTitleGlitch();
  renderFeatureCards();
  renderSectorCards();
  renderBusinessGroups();
  bindBusinessButtons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}
