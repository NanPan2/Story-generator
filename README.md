# Aleria - Fantasy Story Generator

A static, single-page fantasy generator bound to one specific world (the Aleria
world bible). Every option, character, race, monster, place, Skill, Spell, and
relic produced by this site is grounded in that lore. Nothing is invented from
outside it, and no characters appear other than the named canonical cast.

## Generators

- **Story** - scene templates that combine the canonical cast (Erdan, Mira,
  Night, Nare, Seraya, Rei, Ren-Ro, Pope Almert, Grand Priests Kuger / Kurr /
  Kumer, Queen Elisabeth) with established places, monsters, and complications.
- **Character** - canonical profile of any named cast member.
- **Skill** - generates a Skill with one of the eight Grades (Budding, Low,
  Neutral, Medium, High, Grand, Master, Null), an obscure unlock condition, an
  effect, and a cost.
- **Spell** - generates both the full incantation
  (`Trovak enshari korim thalos <suffix>`) and the high-risk compressed Tro-Ko
  form, scoped to one of the canonical spell categories.
- **Monster** - canonical monster with star-rating, encounter setting, and a
  story-relevant complication.
- **Relic** - Lost Magic item with form, material, effect, limit, and
  provenance.
- **Race** - lore description of any canonical race or Devil subtype.
- **Location** - canonical place: continent, the Underworld, a dungeon, the
  capital, the main church, a Crimson Sun Sanctum, etc.

## Running it

It is a plain static site. Open `index.html` in a browser, or serve the folder
from any static file server, for example:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

- `index.html` - page structure and tabs.
- `styles.css` - dark-fantasy theme (crimson + violet + parchment-on-ink).
- `data.js` - all lore data (characters, races, monsters, locations, story
  templates, skill / spell / relic banks).
- `app.js` - generator logic and UI wiring.
