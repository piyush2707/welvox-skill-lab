let skills = [];
let tier = "listed";
let cat = "All";

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text) e.textContent = text;
  return e;
}

function updateStats() {
  document.getElementById("n-total").textContent = skills.length;
  document.getElementById("n-listed").textContent = skills.filter(s => s.tier === "listed").length;
  document.getElementById("n-cand").textContent = skills.filter(s => s.tier === "candidate").length;
}

function buildChips() {
  const box = document.getElementById("chips");
  box.textContent = "";
  const inTier = skills.filter(s => s.tier === tier);
  const cats = ["All", ...new Set(inTier.map(s => s.category))];
  if (!cats.includes(cat)) cat = "All";
  cats.forEach(name => {
    const b = el("button", "chip" + (name === cat ? " on" : ""), name);
    b.onclick = () => { cat = name; buildChips(); render(); };
    box.appendChild(b);
  });
}

function render() {
  const q = document.getElementById("q").value.toLowerCase();
  const grid = document.getElementById("grid");
  grid.textContent = "";
  const list = skills.filter(s =>
    s.tier === tier &&
    (cat === "All" || s.category === cat) &&
    (s.name + " " + s.summary).toLowerCase().includes(q)
  );
  if (!list.length) {
    grid.appendChild(el("p", "empty", "No skills found."));
    return;
  }
  list.forEach(s => {
    const c = el("div", "card " + s.tier);
    c.appendChild(el("h3", null, s.name));
    c.appendChild(el("p", null, s.summary));

    const tags = el("div", "tags");
    tags.appendChild(el("span", "tag", s.license));
    tags.appendChild(el("span", "tag", s.category));
    if (!s.license_verified) tags.appendChild(el("span", "tag warn", "License to confirm"));
    if (s.needs_computer) tags.appendChild(el("span", "tag", "Needs a computer"));
    if (s.source_url.indexOf("http") !== 0) tags.appendChild(el("span", "tag orig", "Welvox original"));
    c.appendChild(tags);

    const a = el("a", "go", "View source");
    a.href = s.source_url;
    a.target = "_blank";
    a.rel = "noopener";
    c.appendChild(a);
    grid.appendChild(c);
  });
}

document.getElementById("tabs").addEventListener("click", e => {
  const t = e.target.closest(".tab");
  if (!t) return;
  tier = t.dataset.tier;
  cat = "All";
  document.querySelectorAll(".tab").forEach(b => b.classList.toggle("on", b === t));
  buildChips();
  render();
});

document.getElementById("q").addEventListener("input", render);

fetch("data/skills.json")
  .then(r => r.json())
  .then(d => { skills = d.skills; updateStats(); buildChips(); render(); })
  .catch(() => {
    document.getElementById("grid").appendChild(el("p", "empty", "Could not load skills."));
  });
