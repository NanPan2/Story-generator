// Aleria - Fantasy Story Generator
// Pure vanilla JS, no build step. Operates on the DATA object from data.js.

(function () {
  "use strict";

  // ----------------------------------------------------------- helpers
  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  function pickN(arr, n) {
    const copy = arr.slice();
    const out = [];
    while (out.length < n && copy.length) {
      const i = Math.floor(Math.random() * copy.length);
      out.push(copy.splice(i, 1)[0]);
    }
    return out;
  }
  function escape(text) {
    return String(text)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }
  function el(html) {
    const d = document.createElement("div");
    d.innerHTML = html;
    return d;
  }
  function findChar(id) {
    return DATA.characters.find((c) => c.id === id);
  }

  // ----------------------------------------------------------- tabs
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");

  function activate(name) {
    tabs.forEach((t) => {
      const on = t.dataset.tab === name;
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((p) => {
      p.hidden = p.dataset.panel !== name;
    });
  }

  tabs.forEach((t) =>
    t.addEventListener("click", () => activate(t.dataset.tab))
  );

  // Initial active panel
  activate("story");

  // ----------------------------------------------------------- populate selects
  const selects = {
    storyLead: document.getElementById("story-lead"),
    storyAlly: document.getElementById("story-ally"),
    char: document.getElementById("char-select"),
    skillGrade: document.getElementById("skill-grade"),
    spellType: document.getElementById("spell-type"),
    race: document.getElementById("race-select"),
    location: document.getElementById("location-select"),
  };

  function addOptions(select, items, valueFn, labelFn) {
    items.forEach((item) => {
      const opt = document.createElement("option");
      opt.value = valueFn(item);
      opt.textContent = labelFn(item);
      select.appendChild(opt);
    });
  }

  addOptions(selects.storyLead, DATA.characters, (c) => c.id, (c) => c.name);
  addOptions(selects.storyAlly, DATA.characters, (c) => c.id, (c) => c.name);
  addOptions(selects.char, DATA.characters, (c) => c.id, (c) => c.name);
  addOptions(selects.skillGrade, DATA.skillGrades, (g) => g, (g) => g);
  addOptions(selects.spellType, DATA.spellTypes, (t) => t.label, (t) => t.label);
  addOptions(selects.race, DATA.races, (r) => r.name, (r) => r.name);
  addOptions(selects.location, DATA.locations, (l) => l.name, (l) => l.name);

  // ----------------------------------------------------------- STORY
  function generateStory() {
    const tpl = pick(DATA.storyTemplates);

    // Resolve characters
    const leadId = selects.storyLead.value;
    const allyId = selects.storyAlly.value;
    let lead = leadId ? findChar(leadId) : pick(DATA.characters);
    let ally = allyId ? findChar(allyId) : null;

    if (!ally) {
      const candidates = DATA.characters.filter((c) => c.id !== lead.id);
      ally = pick(candidates);
    } else if (ally.id === lead.id) {
      // resolve clash
      const candidates = DATA.characters.filter((c) => c.id !== lead.id);
      ally = pick(candidates);
    }

    const antagonistPool = DATA.characters.filter((c) =>
      c.tags && c.tags.includes("Crimson Sun Order")
    );
    const antagonist = pick(antagonistPool);

    const slotValues = {
      char: lead.name,
      ally: ally.name,
      antagonist: antagonist.name,
      location: pick(DATA.locations).name,
      monster: pick(DATA.monsters).name,
      complication: pick(DATA.storyComplications),
    };

    let body = tpl.template;
    Object.keys(slotValues).forEach((key) => {
      body = body.replaceAll("{" + key + "}", slotValues[key]);
    });

    // Capitalise first letter after sentence-final period if a complication
    // started a sentence with a lowercase word.
    body = body.replace(/(\.\s+)([a-z])/g, (_, pre, ch) => pre + ch.toUpperCase());

    const html = `
      <p class="story-title">${escape(tpl.title)}</p>
      <div class="story-body"><p>${escape(body)}</p></div>
      <hr class="divider" />
      <div class="tag-row">
        <span class="tag">Lead: ${escape(lead.name)}</span>
        <span class="tag">With: ${escape(ally.name)}</span>
      </div>
    `;
    document.getElementById("story-result").innerHTML = html;
  }
  document.getElementById("story-generate").addEventListener("click", generateStory);

  // ----------------------------------------------------------- CHARACTER
  function renderCharacter(c) {
    const tags = (c.tags || [])
      .map((t) => `<span class="tag">${escape(t)}</span>`)
      .join("");
    const details = c.details.map((d) => `<li>${escape(d)}</li>`).join("");
    const voice = (c.voice || []).map((v) => `<li>${escape(v)}</li>`).join("");

    return `
      <h3>${escape(c.name)}</h3>
      <p class="role">${escape(c.role)} - ${escape(c.race)}</p>
      <div class="tag-row">${tags}</div>
      <p>${escape(c.summary)}</p>
      <h4>Details</h4>
      <ul>${details}</ul>
      <h4>Voice</h4>
      <ul>${voice}</ul>
    `;
  }

  document.getElementById("char-generate").addEventListener("click", () => {
    const id = selects.char.value;
    const c = id ? findChar(id) : pick(DATA.characters);
    document.getElementById("char-result").innerHTML = renderCharacter(c);
  });

  // ----------------------------------------------------------- SKILL
  function generateSkill() {
    const grade =
      selects.skillGrade.value || pick(DATA.skillGrades);
    const baseName = pick(DATA.skillNames);
    const effect = pick(DATA.skillEffects);
    const unlock = pick(DATA.skillUnlockHints);
    const cost = pick(DATA.skillCosts);

    let nullNote = "";
    if (grade === "Null") {
      nullNote = `
        <p><em>Null-grade Skills defy measurement. Outcomes vary regardless of intent or
        experience.</em></p>
      `;
    }

    document.getElementById("skill-result").innerHTML = `
      <h3>[${escape(baseName)}]</h3>
      <p class="role">Skill - Grade: ${escape(grade)}</p>
      <p>${escape(capitalise(effect))}.</p>
      <h4>Unlock condition</h4>
      <p>${escape(capitalise(unlock))}.</p>
      <h4>Cost</h4>
      <p>${escape(cost)}</p>
      ${nullNote}
      <hr class="divider" />
      <div class="tag-row">
        <span class="tag">activated or passive, never cast</span>
        <span class="tag">cannot be taught</span>
      </div>
    `;
  }
  document.getElementById("skill-generate").addEventListener("click", generateSkill);

  // ----------------------------------------------------------- SPELL
  function generateSpell() {
    const typeLabel = selects.spellType.value;
    const type = typeLabel
      ? DATA.spellTypes.find((t) => t.label === typeLabel)
      : pick(DATA.spellTypes);
    const suffix = pick(DATA.spellSuffixes);
    const effect = pick(type.effects);

    document.getElementById("spell-result").innerHTML = `
      <h3>${escape(type.label)} - "${escape(suffix)}"</h3>
      <p class="role">Spell</p>
      <h4>Full incantation</h4>
      <div class="incantation">Trovak enshari korim thalos ${escape(suffix)}!</div>
      <h4>Compressed (Tro-Ko)</h4>
      <div class="incantation">Tro-Ko ${escape(suffix)}!</div>
      <h4>Effect</h4>
      <p>${escape(capitalise(effect))}.</p>
      <hr class="divider" />
      <p>
        Compressed casting demands precise mana control and risks mana exhaustion. Standard among
        skilled casters such as Seraya, Ren-Ro, and Grand Priest Kuger. Apprentices stay on the
        full incantation.
      </p>
    `;
  }
  document.getElementById("spell-generate").addEventListener("click", generateSpell);

  // ----------------------------------------------------------- MONSTER
  function generateMonster() {
    const star = document.getElementById("monster-star").value;
    let pool = DATA.monsters;
    if (star) {
      pool = DATA.monsters.filter((m) => m.star === Number(star));
      if (!pool.length) pool = DATA.monsters;
    }
    const m = pick(pool);
    const place = pick(DATA.locations);
    const complication = pick(DATA.storyComplications);

    const reportedBy = pick([
      "a passing Hunter, who is now overdue",
      "a frantic Adventurer Guild scout",
      "a Church Knight returning from rotation",
      "a tenebrim caravan that did not stop to file paperwork",
      "a local Equar who wants paying first",
      "a Crimson Sun Order observer with very specific notes",
    ]);

    document.getElementById("monster-result").innerHTML = `
      <h3>${escape(m.name)}</h3>
      <p class="role">Star-${m.star} threat</p>
      <p>${escape(m.summary)}</p>
      <h4>Encounter</h4>
      <p>Sighted near ${escape(place.name)}. Reported by ${escape(reportedBy)}.</p>
      <h4>Complication</h4>
      <p>${escape(capitalise(complication))}.</p>
    `;
  }
  document.getElementById("monster-generate").addEventListener("click", generateMonster);

  // ----------------------------------------------------------- RELIC
  function generateRelic() {
    const form = pick(DATA.relicForms);
    const material = pick(DATA.relicMaterials);
    const effect = pick(DATA.relicEffects);
    const limit = pick(DATA.relicLimits);
    const dungeonOrigin = pick([
      "pulled from the second curl of a deep-Lintur dungeon",
      "found in a Menfor battlefield grave that should have been emptied centuries ago",
      "logged out of an Underworld vault and never logged back in",
      "recovered from a Northern Expanse glacier dungeon",
      "left in a sealed Ancient ruin near the capital, behind a door that opened to no key",
    ]);

    document.getElementById("relic-result").innerHTML = `
      <h3>A ${escape(material)} ${escape(form)}</h3>
      <p class="role">Relic - Lost Magic</p>
      <h4>Effect</h4>
      <p>It ${escape(effect)}.</p>
      <h4>Limit</h4>
      <p>${escape(limit)}</p>
      <h4>Provenance</h4>
      <p>${escape(capitalise(dungeonOrigin))}.</p>
      <hr class="divider" />
      <div class="tag-row">
        <span class="tag gold">forged with magic that can no longer be reproduced</span>
      </div>
    `;
  }
  document.getElementById("relic-generate").addEventListener("click", generateRelic);

  // ----------------------------------------------------------- RACE
  function showRace() {
    const name = selects.race.value;
    const r = name ? DATA.races.find((x) => x.name === name) : pick(DATA.races);
    const tags = (r.tags || [])
      .map((t) => `<span class="tag">${escape(t)}</span>`)
      .join("");
    document.getElementById("race-result").innerHTML = `
      <h3>${escape(r.name)}</h3>
      <p class="role">Race</p>
      <p>${escape(r.summary)}</p>
      <div class="tag-row">${tags}</div>
    `;
  }
  document.getElementById("race-generate").addEventListener("click", showRace);

  // ----------------------------------------------------------- LOCATION
  function showLocation() {
    const name = selects.location.value;
    const l = name
      ? DATA.locations.find((x) => x.name === name)
      : pick(DATA.locations);
    document.getElementById("location-result").innerHTML = `
      <h3>${escape(l.name)}</h3>
      <p class="role">${escape(l.kind)}</p>
      <p>${escape(l.summary)}</p>
    `;
  }
  document.getElementById("location-generate").addEventListener("click", showLocation);

  // ----------------------------------------------------------- utils
  function capitalise(s) {
    if (!s) return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
})();
