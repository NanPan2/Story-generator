// Aleria lore data. Only canonical characters and lore are used here.
// Source of truth: the world bible provided by the user.

const DATA = {
  // -----------------------------------------------------------
  // CHARACTERS - only the named examples from the lore
  // -----------------------------------------------------------
  characters: [
    {
      id: "erdan",
      name: "Erdan Kernt",
      role: "The 33rd Hero",
      race: "Human (summoned)",
      tags: ["hero", "protagonist"],
      summary:
        "A reluctant young man with dark skin, short afro hair, rectangular black glasses, and a slim 170 cm frame. Awkward, introverted, and sarcastic in a low-key way, he dreams of an easy life rather than heroism but adapts as the world forces him to.",
      details: [
        "Summoned from Earth into Aleria, given an artificially enlarged and optimized core by Ucliat.",
        "Wears grey cargo pants and a red polo shirt from his original world.",
        "Empathetic and forgiving; treats Mira with respect rather than exploiting her.",
        "Constantly leaks ambient mana strong enough to passively sustain Nare nearby.",
        "Locked into Yosuke Minato's Hero's System, experiencing past lives and memories of dead heroes as a side-effect of the imperfect Conditional Pact.",
      ],
      voice: ["mumbles", "deflects with a dry joke", "overthinks the answer before giving it"],
    },
    {
      id: "mira",
      name: "Mira (Ilivia)",
      role: "Erdan's bonded tenebrim",
      race: "Tenebrim",
      tags: ["companion"],
      summary:
        "A petite tenebrim with short silver hair, small black horns (one broken roughly in half), and light-brown skin. 42 years old but looks late-teens. Toned and lithe, with old scars across her chest and lower abdomen.",
      details: [
        "Her tribe was attacked and her memory wiped by the previous hero, Yosuke Minato.",
        "Has no functional core; cannot cast spells, scars never fade, illnesses hit harder.",
        "Reads minds passively, picking up only stray surface thoughts unless she focuses.",
        "Personality shifts with environment from the memory damage: submissive and quiet one moment, leading and teasing the next.",
        "Calls Erdan 'Master' out of reflex but is slowly learning to live with freedom.",
      ],
      voice: ["flat, reserved, simple direct sentences", "quiet observations", "sudden decisive action when Erdan is in danger"],
    },
    {
      id: "night",
      name: "Night",
      role: "Erdan's bonded fenrir",
      race: "Dark Clan Fenrir",
      tags: ["companion", "beast"],
      summary:
        "Currently a small, puppy-sized Dark Clan fenrir with sleek black fur, jagged white streaks, and steady crimson eyes. Sturdy, athletic, fiercely loyal to Erdan.",
      details: [
        "His size scales with Erdan's strength and will grow back to his true form (a dire wolf taller than most humans at the shoulder) over time.",
        "Can take a humanoid form by consuming concentrated mana crystals: a tall lean young man around 19 with black-and-white hair, crimson eyes, wolf ears, fangs, and a bushy tail. Still cannot speak human words.",
        "Tolerates Nare climbing onto his back; their cores loosely resonate through repeated contact with Erdan.",
        "Shows affection through tail wags, belly-up rolling, leaning, and gentle bumps. In combat, intervenes with his body.",
      ],
      voice: ["does not speak", "whuffs, growls, low rumbles", "communicates through posture and contact"],
    },
    {
      id: "nare",
      name: "Nare",
      role: "Erdan's bonded narelith",
      race: "Narelith (First Phase)",
      tags: ["companion", "narelith"],
      summary:
        "A round, bat-like puffball about the size of a softball. One huge shiny white eye dominates her face. Soft dark fur, leathery wing-flaps, stubby legs, tiny clinging claws.",
      details: [
        "Imprinted absolutely on Erdan; views him as her entire world.",
        "Growing faster than typical narelith because she feeds on Erdan's leaking core mana.",
        "Beginning to adopt aspects of Erdan's mana signature; carries devil-traits mixed with elven ones and more than one eye in later phases.",
        "Shares Erdan's mind closely enough that his suppressed thoughts surface in her behaviour - she is loud, clinging, and shameless about wanting contact.",
        "Will eventually evolve into a humanoid form shorter than Erdan.",
      ],
      voice: ["chirps contentedly", "whimpers when frightened", "no human speech yet"],
    },
    {
      id: "seraya",
      name: "Seraya",
      role: "Former priestess of the Crimson Sun Order",
      race: "Elf",
      tags: ["ally"],
      summary:
        "An elven priestess raised her entire life in an isolated underground sanctum. Pale skin, long silver hair, vivid violet eyes, sharp delicate elven features, white-and-silver robes.",
      details: [
        "Most of her knowledge comes from unrestricted Order archives; encyclopaedic on paper, naive in practice.",
        "Privately fascinated by romance and explicit material she found in those archives, which she has no real outlet for.",
        "Speaks analytically and confidently when explaining lore, magic, or ritual; flusters and stammers around anything personal.",
        "Brave under pressure - casts decisively despite the risk.",
        "Captivated by Erdan's dark skin and his refusal to fit any heroic archetype she was taught.",
      ],
      voice: ["clinical when lecturing", "apologetic and stammering when personal", "quiet awe when something is new to her"],
    },
    {
      id: "rei",
      name: "Rei",
      role: "Wanted criminal, defective core",
      race: "Human (defective core)",
      tags: ["antagonist"],
      summary:
        "Choppy, short, messy pale hair. Tomboyish lean build, toned. Faded scar from temple across cheek and jaw, burn marks down one side of her neck, near-colourless eyes. A crude metal hook prosthetic in place of one arm. 22 years old.",
      details: [
        "Born with a core that rejects spells and skills entirely; ambient mana acts on her as poison.",
        "Dresses as a practical scavenger: patched leather, chain scraps, dark hooded cloak, a ragged bandolier of knives and dried meat.",
        "Survived a mana-resistance sickness by amputating her own affected limbs through sheer willpower.",
        "Her Technique, Core Theft, lets her tear out a victim's core and briefly wield its Skills, mana, and healing as her own. Each use scales in cost with the quality of the core.",
        "Ambushes in low-mana zones - sewers, dead forests, old battlefields. Mages are her favourite prey.",
        "Bounty worth a king's ransom; nearly invisible to mana-sensing methods.",
      ],
      voice: ["blunt", "genuinely confused by horror at her actions", "treats killing as a logistics problem"],
    },
    {
      id: "yosuke",
      name: "Yosuke Minato",
      role: "The 32nd Hero (deceased)",
      race: "Human (summoned)",
      tags: ["historical", "antagonist-shaped"],
      summary:
        "The hero who came before Erdan. Selfish, narcissistic, intelligent, and pragmatic. Foresaw the future and engineered hardships into the next hero's path so his own work would not be wasted.",
      details: [
        "Wielded [Implant], [Mind Sight], and [Foresight].",
        "Used [Implant] and [Mind Sight] together to construct the videogame-like Hero's System the next hero would inherit.",
        "Bound the system to a Conditional Pact through the entire flow of mana, forcing the next hero to earn their Skills.",
        "Personally responsible for wiping and altering Mira's memory after attacking her tribe.",
        "Hired Ren-Ro to test Erdan's survival on the road from the Sanctum.",
      ],
      voice: ["does not appear in person", "his fingerprints are on every system Erdan now relies on"],
    },
    {
      id: "ren-ro",
      name: "Ren-Ro",
      role: "Elite mercenary assassin and sniper",
      race: "Elf",
      tags: ["antagonist", "neutral professional"],
      summary:
        "Tall elf with long silver hair tied back, pointed ears, face partially concealed by a wrapped leather scarf. Wears a streaked grey-green camouflage cloak.",
      details: [
        "Wields a custom long-barrelled rifle of dark wood and steel: mana-silent, undetectable by magical senses, capable of thumb-width penetrative shots at over 200 paces.",
        "Carries a backup throwing knife and operates with cold professionalism.",
        "Hired by Yosuke Minato to test the next hero. Failed - the test was the point.",
        "Methodical positioning, patient execution, pragmatic retreat when outmatched.",
      ],
      voice: ["minimal speech", "professional, never personal", "report-style cadence over comms"],
    },
    {
      id: "pope",
      name: "Pope Almert Ten Forbatch Keyil the Merciful",
      role: "Head of the Church of Ucliat",
      race: "Human",
      tags: ["religious power"],
      summary:
        "Tall, gaunt man in his late sixties. Pale skin, luminous grey eyes, cropped white hair, a thin silver beard along the jaw. Plain white robes edged in gold, a single heavy pectoral medallion bearing Ucliat's radiant sun.",
      details: [
        "Straight-backed, deliberate, low calm voice that carries absolute certainty.",
        "Eccentric in private and public alike - the same man either way.",
        "Holds the Skill [Conditional Multi-Pact Anchor], which lets him form simultaneous conditional pacts with many living beings and inanimate objects at once.",
        "Every major appraisal device in every major church is bound to him personally; tampering is essentially impossible.",
      ],
      voice: ["measured, low, certain", "speaks as if your sins have already been weighed"],
    },
    {
      id: "kuger",
      name: "Grand Priest Kuger",
      role: "Grand Priest of the JOAT sub-branch",
      race: "Mellet",
      tags: ["antagonist", "Crimson Sun Order"],
      summary:
        "Tall mellet wearing a silver cage mask that conceals his lower face. Lean build, ornate red-and-silver Crimson Sun robes with high-rank embroidery.",
      details: [
        "Cold, pragmatic, fanatically devoted to the Order's survival doctrine against the Doomsday.",
        "Treats morality as secondary to necessity. Justifies experiments on living beings as 'forging tools for survival.'",
        "Holds calculated respect for heroes - essential, but never irreplaceable.",
        "Authoritative, unyielding, philosophical about the world's impending doom.",
      ],
      voice: ["measured, detached", "speeches with a doom-prophecy edge", "never raises his voice"],
    },
    {
      id: "kurr",
      name: "Grand Priest Kurr",
      role: "Grand Priest of the JOAT sub-branch",
      race: "Mellet",
      tags: ["antagonist", "Crimson Sun Order"],
      summary:
        "Mellet with coarse violet skin, a metal mask shaped like a snout, robed attire matching his rank. Carries a staff with a glowing tip.",
      details: [
        "Relies entirely on relic magic rather than physical strength.",
        "Arrogant, taunting, deeply prejudiced - especially against tenebrim like Mira.",
        "Summons creatures such as the Feaster for combat.",
        "Verbose and lecturing even in defeat. Justifies atrocities as control over 'dangerous' elements.",
      ],
      voice: ["mocking", "lectures the room while fighting it", "calls people by what they are, not who"],
    },
    {
      id: "kumer",
      name: "Grand Priest Kumer",
      role: "Grand Priest of the JOAT sub-branch",
      race: "Mellet",
      tags: ["antagonist", "Crimson Sun Order"],
      summary:
        "Mellet with coarse violet skin, initially looking frail and trembling under his robes and mask. An orange pendant hangs at his chest as a focus.",
      details: [
        "Feigns fragility and incompetence - high-pitched voice, clumsy steps - to make enemies underestimate him.",
        "[Blessing of Irma] melts his mask and engulfs his body in mana-flames, vastly increasing his fire-magic aptitude.",
        "Wields fire as whips, shields, and walls.",
        "Frustrated by personal vendettas; controlled in combat to preserve knowledge and infrastructure.",
      ],
      voice: ["timid stutter at first", "shifts into a seething, lecturing tone once provoked"],
    },
    {
      id: "queen",
      name: "Queen Elisabeth Bernt Ravenshield III",
      role: "The Iron Queen of Elysandria",
      race: "Human",
      tags: ["political power"],
      summary:
        "Sovereign of the Kingdom of Elysandria. Took the throne through decisive purges after a brutal succession conflict and restored stability through strict reforms.",
      details: [
        "Tolerates the Church's influence because crushing it would destabilise the kingdom rather than free it.",
        "Identified Night personally as a Dark Clan fenrir.",
        "Holds power through a restructured nobility, a disciplined military, and a careful balance with the Church of Ucliat.",
        "Aware that the Underworld's siphoning facility exists - a knowledge most of her subjects will never have.",
      ],
      voice: ["measured court speech", "no wasted words", "treats sentiment as a luxury she cannot afford"],
    },
  ],

  // -----------------------------------------------------------
  // RACES
  // -----------------------------------------------------------
  races: [
    {
      name: "Human",
      summary:
        "The most populous and diverse race. No inherent magical or physical advantages, but highly adaptable. Manipulate mana by reconstructing approximations of reality through incantation and understanding.",
      tags: ["spellcaster (learned)", "factional", "dominant in politics and faith"],
    },
    {
      name: "Demi-human",
      summary:
        "Mixed human and non-human ancestry. Traits and lifespans vary; the dominant parent's core usually decides which heritage shows through. The discrimination they face is social, not biological.",
      tags: ["mixed heritage", "edge of two communities"],
    },
    {
      name: "Beastkin",
      summary:
        "Engineered hybrids created by the 7th Hero. Animal features, enhanced senses, strong instincts, potent but hard-to-control mana cores. Live in small secluded tribal communities and tend to favour physical Skills over Spells.",
      tags: ["engineered", "physical Skills", "naive about outsiders"],
    },
    {
      name: "Beastkin - Angelos",
      summary:
        "An all-female beastkin sub-type with white feathered wings. Highly fertile, masochistic by nervous-system design, short lifespans, peaceful nature. Heavily protected because of how vulnerable they are.",
      tags: ["beastkin sub-type", "rare", "protected"],
    },
    {
      name: "Tenebrim",
      summary:
        "Dark-skinned, horned humanoids from Menfor. No functional core. No spells, no passive healing - they pay for that with raw physical power, durability, and unique hereditary Skills. Long-lived. Mourak are tenebrim who have left the continent.",
      tags: ["no core", "physical specialists", "vulnerable to slave pacts"],
    },
    {
      name: "Elf",
      summary:
        "Long-lived, pointy-eared humanoids from the Northern Expanse with strong solidarity inside their own race. Powerful spellcasters, high libido (especially for partners outside their race), and not necessarily graceful or kind.",
      tags: ["spellcaster (innate)", "long-lived", "fiercely loyal to their own"],
    },
    {
      name: "Equar",
      summary:
        "Short, wiry humanoids (110-130 cm) built for speed and tight spaces. Fast metabolism, sharp senses, blunt and hedonistic. Drawn to scouting, spying, gambling, and 'legal bandit' loopholes. Family is the only social structure that matters to them.",
      tags: ["small", "fast", "family-first", "morally flexible"],
    },
    {
      name: "Lizardman",
      summary:
        "Scaled, tailed, reptilian humanoids. Physically powerful, naturally armoured, clan-based and martial. Can use Spells but tend to favour physical combat and inherited Skills.",
      tags: ["clan-based", "martial culture"],
    },
    {
      name: "Devil - Veyrith",
      summary:
        "The most common, most socially adaptable Devil subtype. Two horizontal forehead horns flanking a yellow-irised third eye, two small coloured nodes below it, black-sclera eyes, balanced and stable mana expression.",
      tags: ["Devil", "balanced", "default subtype most people mean"],
    },
    {
      name: "Devil - Kharvex",
      summary:
        "Pale-skinned Devil subtype with branching veins and large upward-curving horns. A single star-shaped eye sits between two normal eyes. Can absorb other beings' cores - a power that scales toward instability and identity drift the more it is used.",
      tags: ["Devil", "core absorption", "stigmatised"],
    },
    {
      name: "Devil - Syrakai",
      summary:
        "Stone-textured Devils whose skin glows along faint cracks when their internal heat conversion is active. Convert environmental heat into usable energy, exceptionally stable under pressure, structurally limited at illusion. Built to hold ground.",
      tags: ["Devil", "endurance", "environmental conversion"],
    },
    {
      name: "Narelith",
      summary:
        "Extremely rare. Begin as one-eyed bat-like puffballs with malleable, permanently-incomplete cores. Grow by absorbing ambient mana over years, eventually reaching humanoid forms with unique colouring. Fragile early, world-class once stabilised.",
      tags: ["rare", "core remains malleable", "imprints on guardians"],
    },
    {
      name: "Tetrabrachian",
      summary:
        "Towering four-armed humanoids with obsidian-like skin. Calm, quiet, instinctively pacifist toward people, brutal toward monsters. Communicate mostly in gestures. Empathetic, emotionally steady, almost never malicious.",
      tags: ["four arms", "pacifist by nature", "highly empathetic"],
    },
    {
      name: "Mellet",
      summary:
        "Violet-skinned, weak to sunlight, faces lower-half hidden behind enchanted cage masks. Physically the weakest race. Cannot cast Spells or use Skills without Relics, but produce the Order's greatest scholars, artificers, and ritualists.",
      tags: ["scholarly", "religious vestments", "low libido and fertility"],
    },
    {
      name: "Lumenari",
      summary:
        "Not a race but a failure mode. A core grown beyond its capacity to regulate mana. Tall featureless figures of obsidian or marble, glowing cracks pulsing across their bodies, drifting rather than walking. Calm, detached, devastatingly powerful, and short-lived.",
      tags: ["unstable", "rare (centuries apart)", "regional catastrophe"],
    },
    {
      name: "Ancients",
      summary:
        "The pre-Cataclysm civilisation that wielded Lost Magic and built heavy steam-and-mana technology. No heroes were summoned in their era. Only ruins remain, and the dungeons their work seems to have left behind.",
      tags: ["historical", "Lost Magic", "ruins only"],
    },
  ],

  // -----------------------------------------------------------
  // LOCATIONS / NATIONS / CONTINENTS
  // -----------------------------------------------------------
  locations: [
    {
      name: "Capital of Elysandria",
      kind: "Capital city, Kremantin",
      summary:
        "Built around a grand palace complex intertwined with religious structures, including the summoning chamber. Seat of Queen Elisabeth's reign and home to the JOAT sub-branch of the Crimson Sun Order.",
    },
    {
      name: "Kingdom of Elysandria",
      kind: "Human kingdom, Kremantin",
      summary:
        "Central human nation on Kremantin and primary seat of the Church of Ucliat. Fertile plains, ancient forests, rugged mountains. An absolute monarchy held together by purges, reforms, and a careful balance with the Church.",
    },
    {
      name: "Kremantin",
      kind: "Continent",
      summary:
        "The central continent of Aleria. Temperate to subtropical, racially mixed, home to Elysandria and the seat of the Church of Ucliat. Site of every Hero summoning.",
    },
    {
      name: "Lintur",
      kind: "Continent",
      summary:
        "The southwestern continent. Lush, wild, dense magical jungles, megafauna, and isolated civilisations. Rumoured to hide ruins from before the Lost Age.",
    },
    {
      name: "Menfor",
      kind: "Continent",
      summary:
        "The northern continent. Desert, badland, and volcanic range. Sparse, hard population, and the ancestral home of the Tenebrim.",
    },
    {
      name: "Tantser",
      kind: "Continent",
      summary:
        "The southeastern continent. Largely unexplored, charted as a fragmented landmass under permanent storm systems. The few who sail there mostly do not come back.",
    },
    {
      name: "The Northern Expanse",
      kind: "Continent",
      summary:
        "Frigid taiga and glacier in the far northeast. Home to the Gorthon Federation and the elven nations. Geothermal and steam technology blended with magic; technologically ahead of most human kingdoms.",
    },
    {
      name: "The Underworld",
      kind: "Subterranean realm",
      summary:
        "Vast cavern systems lit by mana-saturated crystals. Fully developed Devil cities in the long-settled zones, rougher frontier settlements near high-density mana fronts. Site of the sealed siphoning facility that delays the Doomsday.",
    },
    {
      name: "A Crimson Sun Order Sanctum",
      kind: "Underground or mountain branch",
      summary:
        "Underground or mountain sanctum operated by the Order. Each researches a different field; some genuine, some despicable. Heavy on relics, ritual instruments, and salvaged hero knowledge.",
    },
    {
      name: "A dungeon",
      kind: "Living organism",
      summary:
        "A massive worm-like living creature curled underground, its mouth functioning as the entrance. Walls feel organic, then harden over time. Floors are folds of its body, not engineered levels. Drops crystals, fungi, plants, and rare relics.",
    },
    {
      name: "A high-mana battlefield",
      kind: "Outdoor",
      summary:
        "An old, blood-soaked field where mana has saturated the soil. Excellent for spells, dangerous for fragile cores, and exactly the kind of place Rei avoids.",
    },
    {
      name: "A mana-dead forest",
      kind: "Outdoor",
      summary:
        "A forest where the local mana has bled out. Spells degrade, sensing methods fall short, and predators that rely on mana signatures are blind. Rei's preferred ambush ground.",
    },
    {
      name: "The capital's main church",
      kind: "Religious site",
      summary:
        "The largest church in the capital, and the only one outfitted with a top-tier appraisal device. Bound to Pope Almert through his Conditional Multi-Pact Anchor and reinforced by Church Knights serving as living nodes.",
    },
  ],

  // -----------------------------------------------------------
  // MONSTERS
  // -----------------------------------------------------------
  monsters: [
    {
      name: "Crystone",
      star: 1,
      summary:
        "A spherical core creature covered in crystalline spikes around a glowing central eye. Plays dead as a stone, then whips out a tentacle to drain mana. Spins up cutting wind currents. Repairs itself with absorbed mana.",
    },
    {
      name: "Shafo",
      star: 2,
      summary:
        "A small black-furred biped with a single glowing orange eye, white chest patches, one upward horn, and thick clawed arms. Pack leader and common roadside threat.",
    },
    {
      name: "Blobooze",
      star: 2,
      summary:
        "A grinning slime that lures victims in close before tentacles do the work. Wears a hardened mana-crystal crown it uses as a battering ram.",
    },
    {
      name: "Gasgees",
      star: 2,
      summary:
        "A docile waist-high plant-animal hybrid that grazes on Pompas fruit and stores it fermenting in a porous back-pouch. Threaten the pouch and it sprays a corrosive slurry up to fifteen feet.",
    },
    {
      name: "Kekali",
      star: 3,
      summary:
        "Lithe fox-like pack monsters with green plate-scaled tails and amber-gold eyes. Four to eight females led by a single chosen male. Imprint on a worthy candidate of any race for life - and expect everything that comes with that.",
    },
    {
      name: "Drakein",
      star: 4,
      summary:
        "Bipedal obsidian-scaled ambush predator with violet energy along its arms and spine, sickle-claws, and a tiny purple eye. Climbs walls in mana-charged bursts and delivers electrified slashes.",
    },
    {
      name: "Fire Drakein",
      star: 4,
      summary:
        "A spherical body of black volcanic rock laced with molten cracks, mounted on spider-like legs around a single red eye. Rolls through tunnels, spews lava, explodes when threatened.",
    },
    {
      name: "Feaster",
      star: 4,
      summary:
        "Towering, bark-hided, horn-tendrilled monster with golden eyes and curved claws. Coils its neck inward, opens its maw wide, and vomits a stream of acidic sludge as a wide-area attack.",
    },
    {
      name: "Stalker",
      star: 4,
      summary:
        "Hunched bipedal predator with grey leathery skin, no eyes, long rabbit-like ears, and a maw of sharp teeth. Hunts entirely by hearing inside a meticulously memorised territory and runs at up to 60 km/h.",
    },
    {
      name: "Ritfien",
      star: 5,
      summary:
        "Vents unstable mana through glowing cracks that risk poisoning or core feedback to anything that touches them. Mid-boss of high-mana dungeon zones and a rare spawn in the lead-up to a Doomsday.",
    },
    {
      name: "Vekrath",
      star: 5,
      summary:
        "Solitary black-plumaged avian that nests on cliff faces over open terrain. Its dive is faster than reaction time and almost silent. Hoards mana-rich crystals it cannot tolerate prolonged exposure to. Open ground engagements are nearly unsurvivable.",
    },
    {
      name: "Huliut",
      star: 5,
      summary:
        "A bioengineered humanoid with pearl skin, sutured mouth, and an external core orb suspended above its head. Senses entirely through mana, prefers low-mana zones, strikes faster than the eye, and can produce inferior clones at a heavy cost.",
    },
  ],

  // -----------------------------------------------------------
  // RELIC TEMPLATES (Lost Magic items)
  // -----------------------------------------------------------
  relicForms: ["ring", "amulet", "earring", "circlet", "cloak pin", "bracelet", "pocket watch", "small mirror", "dagger hilt", "thimble", "signet"],
  relicMaterials: [
    "tarnished silver",
    "blackened gold",
    "veined obsidian",
    "pale Ancient alloy",
    "bone polished smooth",
    "crystal grown around old wire",
    "wood that should not have survived this long",
  ],
  relicEffects: [
    "muffles the wearer's mana signature so completely that mana-sensing methods slide off them",
    "stores one spell that has been cast at it and replays that exact spell once, perfectly, when the wearer wills it",
    "stops a single fatal blow per day, then crumbles to ash for the next sunrise",
    "translates any spoken language into the wearer's native tongue, but only while they are silent",
    "lets the wearer recall any single object they have personally touched, to their hand, once per week",
    "feeds on ambient mana to keep the wearer at a comfortable temperature regardless of weather",
    "binds a small flame to the wearer that lights when they sleep and goes out when they wake",
    "lets the wearer hear what was said in a room within the past hour, once per room",
    "anchors the wearer to a single chosen location they can return to instantly - but only the once",
    "forces anyone touching it to speak only what they believe to be true for the next minute",
  ],
  relicLimits: [
    "Single use. After triggering, the relic is inert ornament.",
    "Limited charges per day; recharges with ambient mana.",
    "Functions only inside or near a high-mana environment.",
    "Functions only outside a high-mana environment.",
    "Demands a drop of the wearer's blood each time it is used.",
    "Only works for one person, the first to bond it. The relic is jewellery to anyone else.",
    "Loses one charge permanently each time it activates. No way to replace them.",
  ],

  // -----------------------------------------------------------
  // SKILL GENERATOR DATA
  // -----------------------------------------------------------
  skillNames: [
    "Reflex",
    "Appealing Presence",
    "Dismantle",
    "Quiet Step",
    "Steady Hand",
    "Iron Stomach",
    "Long Sight",
    "Sure Footing",
    "Bargainer",
    "Recall",
    "Patient Hunter",
    "Mender",
    "Hold Breath",
    "Cold Read",
    "Last Stand",
    "Beast Tongue",
    "Quartermaster",
    "Cartographer",
  ],
  skillEffects: [
    "sharpens reaction time enough to shave the gap between seeing a strike and answering it",
    "subtly biases first impressions toward warmth and trust",
    "gives the user an instinctive sense of how a constructed object comes apart",
    "deadens the sound of the user's footfalls and clothing in motion",
    "stabilises the user's hand for fine work under stress, hunger, or fear",
    "lets the user eat or drink things that would normally make them ill, within reason",
    "extends the clarity of the user's sight at long range without changing their eyes",
    "keeps the user upright on surfaces and slopes that should drop them",
    "nudges trade negotiations a fair-but-favourable distance toward the user",
    "lets the user call any object they own and have personally handled to their hand from a few paces away",
    "lengthens the user's tolerance for stillness on a stalk - hours feel like minutes",
    "makes minor wounds close cleaner and faster than the body would normally manage",
    "doubles how long the user can hold their breath underwater or through smoke",
    "lets the user feel when someone is lying outright, but not what the truth is",
    "grants a brief surge of strength and clarity when the user is below a sliver of stamina",
    "lets the user roughly understand a beast's intent and mood in close contact",
    "gives the user a near-perfect mental map of how their gear and supplies are packed",
    "imprints terrain the user has walked once into a stable internal map",
  ],
  skillUnlockHints: [
    "having survived a fall that should have broken bones",
    "having gone three days without sleep on watch",
    "having lost something irreplaceable and kept moving anyway",
    "having killed a beast above your station with the wrong weapon",
    "having repaired a broken object without instruction",
    "having lied convincingly to someone you respected",
    "having forgiven someone who had not asked",
    "having gone hungry to feed a stranger",
    "having walked the same road a hundred times",
    "having held a friend's wound closed long enough for help to arrive",
  ],
  skillGrades: ["Budding", "Low", "Neutral", "Medium", "High", "Grand", "Master", "Null"],
  skillCosts: [
    "Passive. No mana cost.",
    "Trickle of ambient mana while active. Sustainable for hours.",
    "Modest mana cost per use. Roughly a dozen activations before fatigue sets in.",
    "Heavy mana cost. Two or three uses leave the caster lightheaded.",
    "Extreme mana cost. Cripples the caster for the rest of the day after one use.",
    "Cost is not mana. Each use takes something else - stamina, sleep, memory.",
  ],

  // -----------------------------------------------------------
  // SPELL GENERATOR DATA (Tro-Ko system)
  // -----------------------------------------------------------
  // Full incantation: "Trovak enshari korim thalos" + suffix word for the spell.
  // Compressed casters (Seraya, Mernel, Ren, Kuger style): "Tro-Ko" + suffix.
  spellSuffixes: ["Merfo", "Vesti", "Anaxa", "Drelu", "Korin", "Thalas", "Ushir", "Pyrim", "Nalka", "Soren"],
  spellTypes: [
    {
      label: "Healing (informally 'light')",
      effects: [
        "knits a clean cut closed at speed",
        "drives infection out of a wound that has begun to fester",
        "dulls pain enough for the target to walk, briefly",
        "restores a shaken core to its normal flow pattern",
      ],
    },
    {
      label: "Fire (reconstructed)",
      effects: [
        "produces a hand-sized flame that holds while the caster concentrates",
        "throws a directed lash of heat across a few paces",
        "warms a small enclosed space to comfortable temperature for an hour",
        "ignites a prepared surface; will not propagate without continued mana",
      ],
    },
    {
      label: "Water (reconstructed)",
      effects: [
        "shapes a stream of water that flows but cannot hydrate the body",
        "douses a small fire by smothering it under conjured mass",
        "holds a thin sheet of water in mid-air as a momentary shield",
        "freezes the surface of a still puddle into thin ice",
      ],
    },
    {
      label: "Earth (reconstructed)",
      effects: [
        "raises a low wall of packed earth across a doorway",
        "softens a section of floor into thick mud underfoot",
        "hardens loose ground into a stable footing for a small group",
        "draws stone shards out of a wall to hover at the caster's signal",
      ],
    },
    {
      label: "Wind (reconstructed)",
      effects: [
        "pushes a sustained gust strong enough to stagger a person",
        "carries the caster's voice clearly across a battlefield",
        "muffles all sound in a small bubble around the caster",
        "redirects an arrow's flight by a hand's width mid-air",
      ],
    },
    {
      label: "Defence",
      effects: [
        "raises a thin mana barrier that holds against one heavy blow",
        "stiffens the caster's clothing into something closer to armour for a minute",
        "anchors the caster's footing against being knocked off it",
        "bleeds incoming heat or cold off the caster's skin into the air",
      ],
    },
    {
      label: "Illusion / mind (informally 'dark')",
      effects: [
        "lets the caster appear unremarkable to anyone not actively looking for them",
        "shows a single false detail in a chosen target's perception",
        "muffles a memory in the target's mind for a few minutes",
        "draws a chosen sound out of empty air at a chosen location",
      ],
    },
  ],

  // -----------------------------------------------------------
  // STORY TEMPLATES
  // -----------------------------------------------------------
  storyTemplates: [
    {
      title: "An assignment from the Crown",
      // {char} {ally} {location} {monster} {complication}
      template:
        "Queen Elisabeth's court had a problem they preferred to hand off, and {char} drew the work. {ally} came along, because of course {ally} did. The trail led to {location}, where a {monster} had been the official answer for three weeks running. The unofficial answer was {complication}, and that was the part nobody had bothered to write into the contract.",
      slots: ["char", "ally", "location", "monster", "complication"],
    },
    {
      title: "An evaluation in the capital",
      template:
        "Marcel walked {char} into the main church in the capital under the polite fiction of a re-evaluation. The appraisal device, bound to Pope Almert through his [Conditional Multi-Pact Anchor], lit up in a way the attending Church Knights had clearly not been briefed for. {ally} watched from the edge of the consecrated floor, expression unreadable. The Pope himself was not there. He had not needed to be. {complication}.",
      slots: ["char", "ally", "complication"],
    },
    {
      title: "A garden after the questioning",
      template:
        "After the healing and the questioning, {char} found Seraya in a garden behind the keep. She was crouched by a flowerbed with both hands in the wet earth, looking at the mud the way most people looked at jewellery. The Crimson Sun Order's sanctum, she said quietly, had not had much in the way of plant life. {complication}.",
      slots: ["char", "complication"],
    },
    {
      title: "An ambush in low-mana ground",
      template:
        "The trail through {location} thinned out and went quiet in the way that only mana-dead places do. {char} noticed it half a step before {ally} did. Rei was somewhere ahead - the tracker had said as much that morning, and the bounty notice had said worse. {complication}.",
      slots: ["char", "ally", "location", "complication"],
    },
    {
      title: "A test from the previous hero",
      template:
        "On the road from the Sanctum, {char} took a round from a rifle that should not have made a sound. Ren-Ro was already withdrawing by the time {ally} found the firing position - a clean angle, no powder smell, no mana trace. Yosuke Minato had wanted to know whether the next hero would survive the road, and his Foresight had told him the answer. The test was the point. {complication}.",
      slots: ["char", "ally", "complication"],
    },
    {
      title: "A Crimson Sun sub-branch's project",
      template:
        "The lower halls of {location} smelled of lamp oil, ozone, and something none of them wanted to name. Grand Priest {antagonist} explained the project in a voice that made it sound reasonable. {char} let the explanation finish before answering. {ally} did not. {complication}.",
      slots: ["char", "ally", "antagonist", "location", "complication"],
    },
    {
      title: "Down the mouth of a living dungeon",
      template:
        "The dungeon's entrance pulsed faintly under {char}'s boot - not loud, just there, the way a sleeping animal's flank moves. {ally} went in first. The walls were soft for the first dozen paces, then hardened into something that felt almost like bone. A {monster} was already waiting in the second curl of the worm's body. {complication}.",
      slots: ["char", "ally", "monster", "complication"],
    },
    {
      title: "Doomsday preparation",
      template:
        "The next Doomsday was decades out, in theory. Theory, {char} had recently learned, was for people who were not the hero. The briefing in {location} centred on a {monster} sighting - rare, far above its usual range, and exactly the kind of early sign the Order's records flagged. {ally} watched the map with the expression of someone already counting losses. {complication}.",
      slots: ["char", "ally", "monster", "location", "complication"],
    },
    {
      title: "A quiet evening in the inn",
      template:
        "{char} had wanted, very specifically, one quiet evening. The inn at the edge of {location} should have been ideal. Mira had taken the corner seat without being asked. Night was a warm weight against {char}'s leg, and Nare was wrapped around {char}'s wrist like an aggressively soft bracelet. {complication}.",
      slots: ["char", "location", "complication"],
    },
  ],

  storyComplications: [
    "the contract had been re-sold twice before reaching them, and the original signature was the Iron Queen's",
    "Seraya recognised the ritual pattern carved into the stone and went very still",
    "Mira's reading caught a stray thought that was not meant to be there",
    "Night growled at something none of the others could see, and refused to stop",
    "Nare clung tighter and chirped a warning none of them could ignore",
    "the bounty board had a new fragment of sketch that looked far too much like Rei",
    "a Mellet observer was taking notes from a respectful, unwelcome distance",
    "the appraisal device gave a reading the Order had not approved for public release",
    "Ren-Ro's calling card - a single notched bullet - was on the table when they returned",
    "the Underworld's siphoning schedule had shifted, and someone in the room knew why",
    "the local Hunter on file had been declared missing the previous winter",
    "an Adventurer Guild representative was already there, and was not happy to see Hunters arrive first",
    "a Church Knight had been pulled from regular rotation specifically to watch this meeting",
    "the relic on the table had not been logged in any catalogue any of them had access to",
    "the Crimson Sun Order's symbol was scratched into the wall - inverted",
  ],
};
