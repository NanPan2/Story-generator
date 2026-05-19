// Aleria World Generator — Application Logic
// Pure vanilla JS. No dependencies. Operates on DATA from data.js.

(function () {
  "use strict";

  // --- Utilities ---
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function pickN(arr, n) {
    const copy = arr.slice();
    const out = [];
    while (out.length < n && copy.length) {
      out.push(copy.splice(Math.floor(Math.random() * copy.length), 1)[0]);
    }
    return out;
  }
  function esc(s) { return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

  function render(container, html) {
    container.innerHTML = html;
    container.classList.add("has-content");
  }

  // --- Navigation ---
  const navBtns = document.querySelectorAll(".nav-btn");
  const sections = document.querySelectorAll(".section");

  function switchSection(name) {
    navBtns.forEach(b => {
      const active = b.dataset.section === name;
      b.classList.toggle("active", active);
      b.setAttribute("aria-pressed", active ? "true" : "false");
    });
    sections.forEach(s => {
      s.classList.toggle("active", s.id === "sec-" + name);
    });
  }

  navBtns.forEach(b => b.addEventListener("click", () => switchSection(b.dataset.section)));


  // --- Populate Selects ---
  function addOptions(select, items, valFn, lblFn) {
    items.forEach(item => {
      const opt = document.createElement("option");
      opt.value = valFn(item);
      opt.textContent = lblFn(item);
      select.appendChild(opt);
    });
  }

  const selCharRace = document.getElementById("char-race");
  const selCharOcc = document.getElementById("char-occupation");
  const selMagicType = document.getElementById("magic-type");
  const selMagicGrade = document.getElementById("magic-grade");
  const selMonsterStar = document.getElementById("monster-star");
  const selWorldType = document.getElementById("world-type");

  addOptions(selCharRace, DATA.races, r => r.name, r => r.name);
  addOptions(selCharOcc, DATA.occupations, o => o.name, o => o.name);
  addOptions(selMagicGrade, DATA.skillGrades, g => g, g => g);

  // --- Helper: star rating HTML ---
  function starsHTML(count, max) {
    let html = '<span class="star-rating">';
    for (let i = 0; i < max; i++) {
      html += `<span class="star${i < count ? "" : " empty"}">&#9733;</span>`;
    }
    html += "</span>";
    return html;
  }

  // --- Helper: tags HTML ---
  function tagsHTML(tags, cls) {
    return '<div class="tag-row">' +
      tags.map(t => `<span class="tag ${cls || ""}">${esc(t)}</span>`).join("") +
      '</div>';
  }


  // ============================
  // CHARACTER GENERATOR
  // ============================
  document.getElementById("btn-character").addEventListener("click", () => {
    const raceVal = selCharRace.value;
    const occVal = selCharOcc.value;

    const race = raceVal ? DATA.races.find(r => r.name === raceVal) : pick(DATA.races);
    const occ = occVal ? DATA.occupations.find(o => o.name === occVal) : pick(DATA.occupations);
    const bg = pick(DATA.backgrounds);
    const motivation = pick(DATA.motivations);
    const personality = pick(DATA.personalityTraits);

    const html = `
      <div class="result-card">
        <span class="card-label">Character</span>
        <h3>${esc(race.name)} ${esc(occ.name)}</h3>
        <p class="card-subtitle">${esc(occ.desc)}</p>
        <div class="card-body">
          <p><strong>Background:</strong> ${esc(cap(bg))}.</p>
          <p><strong>Personality:</strong> ${esc(cap(personality))}.</p>
          <p><strong>Motivation:</strong> ${esc(cap(motivation))}.</p>
        </div>
        <div class="card-section">
          <p class="card-section-title">Race Details</p>
          <div class="card-body">
            <p><strong>Origin:</strong> ${esc(race.origin)}</p>
            <p><strong>Core type:</strong> ${esc(race.coreType)}</p>
            <p><strong>Lifespan:</strong> ${esc(race.lifespan)}</p>
            <p><strong>Magic:</strong> ${esc(race.magicStyle)}</p>
          </div>
          ${tagsHTML(race.traits)}
        </div>
      </div>
    `;
    render(document.getElementById("result-character"), html);
  });


  // ============================
  // MAGIC SYSTEM GENERATOR
  // ============================
  function generateSpell() {
    const type = pick(DATA.spellTypes);
    const suffix = pick(DATA.spellSuffixes);
    const effect = pick(type.effects);

    return `
      <div class="result-card">
        <span class="card-label">Spell — ${esc(type.label)}</span>
        <h3>"${esc(suffix)}"</h3>
        <p class="card-subtitle">Tro-Ko compressed spell</p>
        <div class="card-section">
          <p class="card-section-title">Full Incantation</p>
          <div class="incantation">Trovak enshari korim thalos ${esc(suffix)}!</div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Compressed Form</p>
          <div class="incantation">Tro-Ko ${esc(suffix)}!</div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Effect</p>
          <div class="card-body"><p>${esc(cap(effect))}.</p></div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Note</p>
          <div class="card-body"><p>Compressed casting demands precise mana control. Higher speed and output, but causes mental strain and risks mana exhaustion. Most casters train for years before using the Tro-Ko form reliably.</p></div>
        </div>
        ${tagsHTML([type.label, "mana-constructed", "requires understanding"], "accent")}
      </div>
    `;
  }

  function generateSkill() {
    const grade = selMagicGrade.value || pick(DATA.skillGrades);
    const name = pick(DATA.skillNames);
    const effect = pick(DATA.skillEffects);
    const unlock = pick(DATA.skillUnlockHints);
    const cost = pick(DATA.skillCosts);

    let nullNote = "";
    if (grade === "Null") {
      nullNote = `<p><em>Null-grade Skills defy measurement. Outcomes vary regardless of intent or experience.</em></p>`;
    }

    return `
      <div class="result-card">
        <span class="card-label">Skill — Grade: ${esc(grade)}</span>
        <h3>[${esc(name)}]</h3>
        <p class="card-subtitle">Innate ability — cannot be taught through study</p>
        <div class="card-body">
          <p>${esc(cap(effect))}.</p>
          ${nullNote}
        </div>
        <div class="card-section">
          <p class="card-section-title">Unlock Condition</p>
          <div class="card-body"><p>${esc(cap(unlock))}.</p></div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Cost</p>
          <div class="card-body"><p>${esc(cost)}</p></div>
        </div>
        ${tagsHTML(["activated or passive", "never cast", "cannot be taught"], "gold")}
      </div>
    `;
  }

  function generateTechnique() {
    const origin = pick(DATA.techniqueOrigins);

    return `
      <div class="result-card">
        <span class="card-label">Technique</span>
        <h3>A Breakthrough</h3>
        <p class="card-subtitle">Not magic. Not a Skill. The result of pushing past natural limits.</p>
        <div class="card-body">
          <p><strong>Origin:</strong> ${esc(cap(origin))}.</p>
          <p>Techniques cannot be directly taught. The knowledge or principles behind them can be shared, but the breakthrough must be reached individually. This often involves instinctive mana reinforcement of the body, even in individuals who cannot consciously cast spells.</p>
          <p>Each Technique represents a moment where a person surpassed their normal constraints and stabilised that state into something repeatable.</p>
        </div>
        ${tagsHTML(["individual breakthrough", "body transcendence", "not classified as Skill or Spell"], "crimson")}
      </div>
    `;
  }

  function generatePact() {
    const pact = pick(DATA.pactTypes);

    return `
      <div class="result-card">
        <span class="card-label">Pact Binding</span>
        <h3>${esc(pact.name)}</h3>
        <p class="card-subtitle">Mutual mana-binding between beings or objects</p>
        <div class="card-body">
          <p>${esc(pact.desc)}</p>
          <p>Pacts enforce themselves through cores. Once formed, agreed conditions shape mana flow between parties. Stable while upheld; disrupted when broken — like blood circulation suddenly slowing, stopping, or reversing.</p>
        </div>
        ${tagsHTML(["mana-binding", "core-enforced", "consent required for clean formation"], "teal")}
      </div>
    `;
  }

  document.getElementById("btn-magic").addEventListener("click", () => {
    const type = selMagicType.value;
    let html;
    if (type === "spell") html = generateSpell();
    else if (type === "skill") html = generateSkill();
    else if (type === "technique") html = generateTechnique();
    else if (type === "pact") html = generatePact();
    else html = pick([generateSpell, generateSkill, generateTechnique, generatePact])();
    render(document.getElementById("result-magic"), html);
  });


  // ============================
  // MONSTER ENCOUNTER
  // ============================
  document.getElementById("btn-monster").addEventListener("click", () => {
    const starVal = selMonsterStar.value;
    let pool = DATA.monsters;
    if (starVal) {
      const filtered = pool.filter(m => m.star === Number(starVal));
      if (filtered.length) pool = filtered;
    }
    const m = pick(pool);
    const location = pick(DATA.locations);

    const reportedBy = pick([
      "a passing Hunter who is now overdue",
      "a frantic Adventurer Guild scout",
      "a Church Knight pulled from regular rotation",
      "a tenebrim caravan that didn't stop to file paperwork",
      "a local Equar who wants paying before talking",
      "a Crimson Sun Order observer with very specific notes",
      "a mana regulator whose shift patterns have been disrupted",
      "a dungeon harvester who barely made it back",
    ]);

    const html = `
      <div class="result-card">
        <span class="card-label">Monster — Star-${m.star} ${starsHTML(m.star, 5)}</span>
        <h3>${esc(m.name)}</h3>
        <p class="card-subtitle">${esc(m.habitat)}</p>
        <div class="card-body">
          <p>${esc(m.summary)}</p>
        </div>
        <div class="card-section">
          <p class="card-section-title">Encounter Context</p>
          <div class="card-body">
            <p><strong>Sighted near:</strong> ${esc(location.name)} (${esc(location.kind)})</p>
            <p><strong>Reported by:</strong> ${esc(reportedBy)}.</p>
          </div>
        </div>
        ${tagsHTML(["Star-" + m.star, m.habitat.split(",")[0].trim()], "crimson")}
      </div>
    `;
    render(document.getElementById("result-monster"), html);
  });

  // ============================
  // RELIC GENERATOR
  // ============================
  document.getElementById("btn-relic").addEventListener("click", () => {
    const form = pick(DATA.relicForms);
    const material = pick(DATA.relicMaterials);
    const effect = pick(DATA.relicEffects);
    const limit = pick(DATA.relicLimits);
    const origin = pick(DATA.relicOrigins);

    const html = `
      <div class="result-card">
        <span class="card-label">Relic — Lost Magic</span>
        <h3>A ${esc(material)} ${esc(form)}</h3>
        <p class="card-subtitle">Imbued with magic that can no longer be reproduced</p>
        <div class="card-section">
          <p class="card-section-title">Effect</p>
          <div class="card-body"><p>It ${esc(effect)}.</p></div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Limitation</p>
          <div class="card-body"><p>${esc(limit)}</p></div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Provenance</p>
          <div class="card-body"><p>${esc(cap(origin))}.</p></div>
        </div>
        ${tagsHTML(["Ancient-forged", "Lost Magic", form], "gold")}
      </div>
    `;
    render(document.getElementById("result-relic"), html);
  });


  // ============================
  // STORY SCENARIO
  // ============================
  document.getElementById("btn-story").addEventListener("click", () => {
    const location = pick(DATA.locations);
    const monster = pick(DATA.monsters);
    let hook = pick(DATA.storyHooks);
    hook = hook.replace("{location}", location.name).replace("{monster}", monster.name);
    const complication = pick(DATA.storyComplications);
    const tone = pick(DATA.storyTones);

    const html = `
      <div class="result-card">
        <span class="card-label">Story Scenario</span>
        <h3>${esc(location.name)}</h3>
        <p class="card-subtitle">${esc(location.kind)} — ${esc(tone)}</p>
        <div class="card-section">
          <p class="card-section-title">Hook</p>
          <div class="card-body"><p>${esc(hook)}</p></div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Complication</p>
          <div class="card-body"><p>${esc(cap(complication))}.</p></div>
        </div>
        <div class="card-section">
          <p class="card-section-title">Tone</p>
          <div class="card-body"><p>${esc(cap(tone))}.</p></div>
        </div>
        ${tagsHTML([location.kind, "Star-" + monster.star + " " + monster.name], "accent")}
      </div>
    `;
    render(document.getElementById("result-story"), html);
  });

  // ============================
  // WORLD LORE
  // ============================
  document.getElementById("btn-world").addEventListener("click", () => {
    const type = selWorldType.value;
    let html;

    if (type === "location") {
      const loc = pick(DATA.locations);
      html = `
        <div class="result-card">
          <span class="card-label">Location</span>
          <h3>${esc(loc.name)}</h3>
          <p class="card-subtitle">${esc(loc.kind)}</p>
          <div class="card-body"><p>${esc(loc.summary)}</p></div>
          ${tagsHTML([loc.kind], "teal")}
        </div>
      `;
    } else if (type === "race") {
      const race = pick(DATA.races);
      html = `
        <div class="result-card">
          <span class="card-label">Race</span>
          <h3>${esc(race.name)}</h3>
          <p class="card-subtitle">Origin: ${esc(race.origin)} — Lifespan: ${esc(race.lifespan)}</p>
          <div class="card-body">
            <p><strong>Core type:</strong> ${esc(race.coreType)}</p>
            <p><strong>Magic:</strong> ${esc(race.magicStyle)}</p>
          </div>
          ${tagsHTML(race.traits)}
        </div>
      `;
    } else {
      const facts = pickN(DATA.worldFacts, 3);
      html = `
        <div class="result-card">
          <span class="card-label">World Facts</span>
          <h3>Fragments of Aleria</h3>
          <p class="card-subtitle">Things most people in this world take for granted</p>
          <ul class="card-list">
            ${facts.map(f => `<li>${esc(f)}</li>`).join("")}
          </ul>
          ${tagsHTML(["lore", "world-building"], "gold")}
        </div>
      `;
    }

    render(document.getElementById("result-world"), html);
  });

})();
