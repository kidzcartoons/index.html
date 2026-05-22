const posts = [
  {
    title: "Lord Of Mysteries S01",
    category: "Anime",
    tags: ["Hindi Dub", "Amazon Prime Video"],
    image: "https://i.postimg.cc/d0dCvwcX/Lord-of-Mysteries-1.webp",
    thumb: "https://i.postimg.cc/x8dqkSBn/filters-quality-95-format-webp.jpg",
    url: "posts/lord-of-mysteries-season-1.html"
  }
];

const perPage = 12;
let currentPage = 1;
let filteredPosts = [...posts];

const categoryGroups = [
  { name: "Cartoons", subs: ["Hindi Dub", "Eng Dub"] },
  { name: "Anime", subs: ["Hindi Dub", "Eng Sub"] },
  { name: "Movies", subs: ["Animated Movies", "Anime Movies"] },
  { name: "Tv Rips", subs: ["TataPlay", "JioTV", "Airtel XStream", "Dish TV", "SunTV"] },
  { name: "Ott Network", subs: ["Amazon Prime Video", "Netflix", "Crunchyroll", "Disney+", "SonyLiv", "MX Player", "Apple Tv+", "JioCinema", "VootKids", "JioHotstar", "Discovery Plus", "ZEE5", "Waves", "YouTube"] }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleSearch() {
  const wrap = document.getElementById("searchWrap");
  if (!wrap) return;
  wrap.style.display = wrap.style.display === "none" ? "block" : "none";
}

function showMain(which, el) {
  ["home", "contact", "dmca"].forEach(name => {
    const box = document.getElementById("main-" + name);
    if (box) box.style.display = "none";
  });

  ["cartoons", "anime", "movies", "tvrips", "ott"].forEach(name => {
    const row = document.getElementById("submenu-" + name);
    if (row) row.classList.remove("active");
  });

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  if (el) el.classList.add("active");

  if (which === "home") {
    const box = document.getElementById("main-home");
    if (box) box.style.display = "block";
  } else if (which === "contact") {
    const box = document.getElementById("main-contact");
    if (box) box.style.display = "block";
  } else if (which === "dmca") {
    const box = document.getElementById("main-dmca");
    if (box) box.style.display = "block";
  } else {
    const row = document.getElementById("submenu-" + which);
    if (row) row.classList.add("active");
    const box = document.getElementById("main-home");
    if (box) box.style.display = "block";
  }
}

function filterByTag(tag) {
  const q = tag.toLowerCase().trim();
  filteredPosts = posts.filter(p => {
    const title = (p.title || "").toLowerCase();
    const cat = (p.category || "").toLowerCase();
    const tags = (p.tags || []).join(" ").toLowerCase();
    return title.includes(q) || cat.includes(q) || tags.includes(q);
  });
  currentPage = 1;
  renderPage();
}

function createCard(post) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${post.thumb || post.image || ''}" alt="${post.title || ''}">
    <div class="card-info">
      <div class="tag-row">
        <span class="tag">${post.category || ''}</span>
        ${(post.tags || []).slice(0,2).map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <h3>${post.title || ''}</h3>
      <div class="view-btn">VIEW DETAILS</div>
    </div>
  `;
  card.onclick = () => window.location.href = post.url;
  return card;
}

function renderPage() {
  const grid = document.getElementById("postGrid");
  const noResults = document.getElementById("noResults");
  const pagination = document.getElementById("pagination");
  if (!grid) return;

  grid.innerHTML = "";
  filteredPosts.forEach(post => grid.appendChild(createCard(post)));

  if (noResults) {
    noResults.style.display = filteredPosts.length ? "none" : "block";
  }

  if (pagination) pagination.innerHTML = "";
}

function searchFilter() {
  const input = document.getElementById("searchInput");
  if (!input) return;
  const q = input.value.toLowerCase().trim();

  filteredPosts = posts.filter(p => {
    const title = (p.title || "").toLowerCase();
    const cat = (p.category || "").toLowerCase();
    const tags = (p.tags || []).join(" ").toLowerCase();
    return !q || title.includes(q) || cat.includes(q) || tags.includes(q);
  });

  renderPage();
}

function setupSearch() {
  const input = document.getElementById("searchInput");
  if (input) input.addEventListener("input", searchFilter);
}

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("copyrightYear");
  if (y) y.textContent = new Date().getFullYear();
  renderPage();
  setupSearch();
});
