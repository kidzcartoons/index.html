const posts = [
  {
    title: "Lord of Mysteries Season 1",
    category: "Anime",
    tags: ["Hindi Dub", "Amazon Prime Video"],
    image: "https://i.postimg.cc/d0dCvwcX/Lord-of-Mysteries-1.webp",
    thumb: "https://i.postimg.cc/x8dqkSBn/filters-quality-95-format-webp.jpg",
    url: "posts/lord-of-mysteries-season-1.html"
  }
];

const perPage = 12;
let currentPage = 1;

const categoryGroups = [
  { name: "Cartoons", subs: ["Hindi Dub", "Eng Dub"] },
  { name: "Anime", subs: ["Hindi Dub", "Eng Sub"] },
  { name: "Movies", subs: ["Animated Movies", "Anime Movies"] },
  { name: "Tv Rips", subs: ["TataPlay", "JioTV", "Airtel XStream", "DishTv", "SunTv"] },
  { name: "Ott Network", subs: ["Amazon Prime Video", "Netflix", "Crunchyroll", "Disney+", "SonyLiv", "Mx Player", "Apple Tv", "JioCinema", "VootKids", "JioHotstar", "Discovery Plus", "Zee5", "Waves", "YouTube"] }
];

const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const searchBtn = document.getElementById("searchBtn");
const searchbar = document.getElementById("searchbar");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

function openMenu() {
  sidebar.classList.add("open");
  overlay.classList.add("show");
  sidebar.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
  sidebar.setAttribute("aria-hidden", "true");
}

menuBtn && menuBtn.addEventListener("click", openMenu);
closeMenuBtn && closeMenuBtn.addEventListener("click", closeMenu);
overlay && overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".menu-toggle").forEach(btn => {
  btn.addEventListener("click", () => btn.parentElement.classList.toggle("open"));
});

searchBtn && searchBtn.addEventListener("click", () => searchbar.classList.toggle("show"));

function matchesCategory(post, sub) {
  return post.category === sub || (Array.isArray(post.tags) && post.tags.includes(sub));
}

function renderCategoryStrip() {
  const el = document.getElementById("categoryStrip");
  if (!el) return;

  el.innerHTML = categoryGroups.map(group => {
    const activeSubs = group.subs.filter(sub => posts.some(post => matchesCategory(post, sub)));
    return `
      <div class="category-box">
        <strong>${group.name}</strong>
        <span class="soon">${activeSubs.length ? activeSubs.join(" | ") : "Coming Soon"}</span>
      </div>
    `;
  }).join("");
}

function renderSlides() {
  const hero = document.getElementById("heroSlider");
  if (!hero) return;

  hero.innerHTML = posts.slice(0, 6).map(p => `
    <a class="slide-card" href="${p.url}">
      <img src="${p.image}" alt="${p.title}">
      <div class="pad">
        <strong>${p.title}</strong>
        <div class="chip">${p.category}</div>
      </div>
    </a>
  `).join("");
}

function renderPosts(list) {
  const grid = document.getElementById("postGrid");
  if (!grid) return;

  grid.innerHTML = list.map(p => `
    <article class="post-card">
      <img src="${p.thumb || p.image}" alt="${p.title}">
      <div class="pad">
        <h3>${p.title}</h3>
        <div class="chip">${p.category}</div>
        ${(p.tags || []).map(tag => `<div class="chip">${tag}</div>`).join("")}
        <a class="view-btn" href="${p.url}">View Details</a>
      </div>
    </article>
  `).join("");
}

function renderPagination(total) {
  const box = document.getElementById("pagination");
  if (!box) return;

  const pages = Math.ceil(total / perPage);
  box.innerHTML = "";

  for (let i = 1; i <= pages; i++) {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = i;
    if (i === currentPage) a.className = "active";
    a.addEventListener("click", e => {
      e.preventDefault();
      currentPage = i;
      updatePage();
    });
    box.appendChild(a);
  }
}

function updatePage() {
  const term = (searchInput?.value || "").trim().toLowerCase();
  const filtered = posts.filter(p => {
    const titleMatch = p.title.toLowerCase().includes(term);
    const tagMatch = (p.tags || []).some(tag => tag.toLowerCase().includes(term));
    return !term || titleMatch || tagMatch;
  });

  const start = (currentPage - 1) * perPage;
  renderPosts(filtered.slice(start, start + perPage));
  renderPagination(filtered.length);
}

searchForm && searchForm.addEventListener("submit", e => {
  e.preventDefault();
  currentPage = 1;
  updatePage();
});

renderCategoryStrip();
renderSlides();
updatePage();
