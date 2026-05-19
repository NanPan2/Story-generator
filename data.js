// Aleria World Generator - Lore Data
// All content drawn from the Aleria world bible. No personal/named characters.

const DATA = {

  // ---------------------------------------------------------------
  // CHARACTER GENERATOR - builds random characters from world parts
  // ---------------------------------------------------------------
  races: [
    { name: "Human", origin: "Kremantin", traits: ["adaptable", "no innate magic", "political", "factional"], coreType: "standard", lifespan: "normal", magicStyle: "reconstructs reality through understanding and incantation" },
    { name: "Elf", origin: "The Northern Expanse", traits: ["long-lived", "fiercely loyal to their own", "high libido", "strong mana affinity"], coreType: "efficient", lifespan: "centuries", magicStyle: "innate channeling with natural talent" },
    { name: "Tenebrim", origin: "Menfor", traits: ["no functional core", "raw physical power", "durable", "hereditary Skills only", "long-lived"], coreType: "absent", lifespan: "long", magicStyle: "none — compensates with extreme physicality" },
    { name: "Devil - Veyrith", origin: "The Underworld", traits: ["balanced mana expression", "third eye", "black sclera", "socially adaptable"], coreType: "integrated", lifespan: "long", magicStyle: "expresses mana directly as real phenomena" },
    { name: "Devil - Kharvex", origin: "The Underworld", traits: ["can absorb cores", "branching veins", "star-shaped eye", "risks identity drift"], coreType: "absorptive", lifespan: "long", magicStyle: "integrates foreign cores into own system" },
    { name: "Devil - Syrakai", origin: "The Underworld", traits: ["stone-textured skin", "heat conversion", "exceptionally stable", "limited illusion"], coreType: "thermal", lifespan: "long", magicStyle: "converts environmental heat into mana output" },
    { name: "Beastkin", origin: "Kremantin (created by 7th Hero)", traits: ["animal features", "enhanced senses", "potent but wild core", "naive"], coreType: "potent-unstable", lifespan: "normal", magicStyle: "instinct-driven physical Skills" },
    { name: "Angelos", origin: "Kremantin", traits: ["white feathered wings", "all-female", "peaceful", "highly vulnerable", "short-lived"], coreType: "standard", lifespan: "short", magicStyle: "minimal — primarily passive" },
    { name: "Equar", origin: "nomadic", traits: ["short (110-130cm)", "fast metabolism", "sharp senses", "blunt", "hedonistic", "family-first"], coreType: "standard", lifespan: "50-60 years", magicStyle: "can learn spells but lacks patience for formal study" },
    { name: "Lizardman", origin: "various", traits: ["scaled", "tailed", "naturally armoured", "clan-based", "martial"], coreType: "standard", lifespan: "normal", magicStyle: "can use spells but favours physical combat" },
    { name: "Narelith", origin: "high-mana zones", traits: ["extremely rare", "begins as bat-like puffball", "malleable core", "evolves into humanoid"], coreType: "permanently incomplete (growing)", lifespan: "unknown", magicStyle: "absorbs ambient mana passively; eventually expresses like a Devil" },
    { name: "Tetrabrachian", origin: "various", traits: ["four arms", "obsidian skin", "pacifist toward people", "brutal toward monsters", "empathetic"], coreType: "standard", lifespan: "normal", magicStyle: "combat intuition rather than spellcasting" },
    { name: "Mellet", origin: "underground/mountains", traits: ["violet skin", "weak to sunlight", "cage mask", "physically weakest", "brilliant scholars"], coreType: "dependent on relics", lifespan: "normal", magicStyle: "cannot cast without relics — uses devices and artifacts instead" },
    { name: "Demi-human", origin: "anywhere", traits: ["mixed heritage", "traits vary by dominant parent", "social outcasts"], coreType: "varies", lifespan: "varies", magicStyle: "depends on heritage blend" },
  ],


  backgrounds: [
    "orphaned young, raised by a Hunter Association outpost on the frontier",
    "grew up in a Crimson Sun Order sanctum as a test subject before escaping",
    "born into a tenebrim clan on Menfor, exiled as Mourak for unknown reasons",
    "former Church Knight who deserted after witnessing something in the lower vaults",
    "raised in an elven geothermal city in the Northern Expanse, left seeking something warmer",
    "a beastkin from a small forest community, wandered too far and never found the way back",
    "survived a Dungeon Break as a child — the only survivor in a village of sixty",
    "an Equar who conned the wrong merchant guild and has been running since",
    "a mellet artificer expelled from their sanctum for 'unauthorized curiosity'",
    "grew up in a Devil city in the Underworld, came to the surface on a diplomatic errand that fell apart",
    "a former slave freed by a conditional pact loophole, still bearing the marks",
    "born during a mana surge near a dungeon entrance — core developed unusually",
    "a lizardman clan warrior sent to the capital as a cultural envoy, stranded by politics",
    "raised by Adventurer Guild parents who died on a contract, inherited their debts",
    "a tetrabrachian who left their community after accidentally killing someone in self-defence",
    "born in the capital of Elysandria to a noble house that no longer exists",
    "a narelith who imprinted on a dying traveller and has been alone since they passed",
    "an angelos sold young, freed by a raid, now navigating a world they were never taught about",
  ],

  occupations: [
    { name: "Hunter (Star-1)", desc: "Takes beast and monster contracts. No escorts, no gathering. Bounty-based, mercenary roots." },
    { name: "Hunter (Star-2)", desc: "Handles multiple low-tier threats or a single Star-3. Quiet professionalism." },
    { name: "Hunter (Star-3)", desc: "Village-level threats. Almost exclusively Hunter territory — adventurers aren't cleared for this." },
    { name: "Adventurer (Bronze)", desc: "Entry-level generalist. Escorts, gathering, minor dungeon runs. Chasing rank." },
    { name: "Adventurer (Silver)", desc: "Reliable mid-tier. Better contracts, access to guild resources. Steady income." },
    { name: "Adventurer (Gold)", desc: "Elite generalist. Prestigious contracts and exclusive jobs. Known by name in their region." },
    { name: "Church Knight", desc: "Disciplined soldier protecting churches and their appraisal devices. Silver-chain armour, radiant headpiece. Hunts criminals threatening the faith." },
    { name: "Crimson Sun Order artificer", desc: "Researcher and builder within the Order. Works with hero-derived knowledge, relics, and ritual instruments." },
    { name: "Mana regulator", desc: "Monitors crystal formations, clears buildup, redirects flow. Essential infrastructure work in the Underworld." },
    { name: "Dungeon harvester", desc: "Extracts crystals, fungi, and plants from living dungeons. Knows how much you can take before the organism retaliates." },
    { name: "Caravan guard", desc: "Protects trade routes between settlements. Intimately familiar with which beast territories to avoid." },
    { name: "Court mage", desc: "Spellcaster attached to a noble house or royal court. Political as much as magical." },
    { name: "Freelance mercenary", desc: "Takes whatever pays. No guild, no association. Operates in the gap between the two." },
    { name: "Underworld diplomat", desc: "Liaison between Devil settlements and surface nations. Exhausting, thankless, necessary." },
    { name: "Relic appraiser", desc: "Evaluates and catalogues relics. Works under the Church's monopoly or outside it, depending on ethics." },
    { name: "Healer (unlicensed)", desc: "Uses healing spells outside official Church sanction. Cheaper, riskier, and always in demand." },
    { name: "Beast tamer", desc: "Forms pacts with beasts. Limited by core strength — most can sustain only weak bonds." },
    { name: "Scavenger", desc: "Picks through ruins, dead dungeons, and battlefields. Finds what others missed or couldn't carry." },
  ],

  motivations: [
    "wants to return to a home that may no longer exist",
    "hunting a specific monster that took something irreplaceable",
    "trying to earn enough to buy someone out of a slave pact",
    "searching for a relic rumoured to fix what's wrong with their core",
    "running from a bounty they may or may not deserve",
    "wants to reach the Underworld's sealed facility and see it for themselves",
    "trying to prove a theory about Lost Magic that the Order suppressed",
    "owes a debt to someone who saved their life and has since disappeared",
    "seeking the truth behind the last Doomsday's early warning signs",
    "wants to build something that outlasts them — a legacy, not a grave",
    "chasing a rumour about Tantser and what actually lives there",
    "trying to break a curse pact that is slowly reshaping their mind",
    "wants to found a settlement in territory no kingdom has claimed",
    "looking for proof that Ucliat is a system, not a god",
    "needs to kill someone powerful and is building toward that single moment",
  ],

  personalityTraits: [
    "quiet and observant, speaks only when certain",
    "loud, blunt, and entirely unapologetic about it",
    "paranoid but correct often enough that people tolerate it",
    "warm to strangers, cold to anyone who gets close",
    "methodical to the point of rigidity — plans everything, adapts poorly",
    "reckless in a way that looks like bravery from a distance",
    "dry humour used as a wall against sincerity",
    "deeply empathetic but terrible at expressing it",
    "cheerful on the surface, hollow underneath",
    "bluntly honest even when it costs them",
    "calculating and patient — never acts without knowing the exit",
    "loyal to a fault, even to people who don't deserve it",
    "curious about everything, careful about nothing",
    "slow to anger, devastating when it arrives",
    "acts indifferent but tracks every slight",
  ],


  // ---------------------------------------------------------------
  // MAGIC SYSTEM GENERATOR
  // ---------------------------------------------------------------
  spellSuffixes: ["Merfo", "Vesti", "Anaxa", "Drelu", "Korin", "Thalas", "Ushir", "Pyrim", "Nalka", "Soren", "Erith", "Volun", "Kasho", "Briel", "Morath"],

  spellTypes: [
    { label: "Healing", effects: ["knits a clean cut closed at speed", "drives infection out of a festering wound", "dulls pain enough to walk briefly", "restores a shaken core to its normal flow pattern", "slows bleeding from a deep wound for several minutes"] },
    { label: "Fire", effects: ["produces a hand-sized flame that holds while concentrating", "throws a directed lash of heat across a few paces", "warms a small enclosed space for an hour", "ignites a surface — will not propagate without continued mana input", "creates a brief wall of heat that discourages approach"] },
    { label: "Water", effects: ["shapes a stream that flows but cannot hydrate", "douses a small fire by smothering it under conjured mass", "holds a thin water-sheet in mid-air as a brief shield", "freezes a puddle's surface into thin ice", "draws moisture from the air into a drinkable sphere — slowly"] },
    { label: "Earth", effects: ["raises a low wall of packed earth across a doorway", "softens floor into thick mud underfoot", "hardens loose ground into stable footing", "draws stone shards from a wall to hover at the caster's signal", "collapses a narrow tunnel entrance behind the caster"] },
    { label: "Wind", effects: ["pushes a sustained gust strong enough to stagger a person", "carries the caster's voice clearly across a battlefield", "muffles all sound in a small bubble around the caster", "redirects an arrow's flight by a hand's width mid-air", "creates a brief updraft strong enough to slow a fall"] },
    { label: "Defence", effects: ["raises a thin mana barrier that holds against one heavy blow", "stiffens clothing into something closer to armour for a minute", "anchors the caster's footing against being knocked off it", "bleeds incoming heat or cold off the caster's skin into the air", "wraps the caster in a shell that absorbs one spell before shattering"] },
    { label: "Illusion", effects: ["makes the caster appear unremarkable to anyone not actively looking", "shows a single false detail in a target's perception", "muffles a memory in the target's mind for minutes", "draws a chosen sound out of empty air at a chosen location", "projects an image of the caster standing still while they move"] },
  ],

  skillNames: [
    "Reflex", "Appealing Presence", "Dismantle", "Quiet Step", "Steady Hand",
    "Iron Stomach", "Long Sight", "Sure Footing", "Bargainer", "Recall",
    "Patient Hunter", "Mender", "Hold Breath", "Cold Read", "Last Stand",
    "Beast Tongue", "Quartermaster", "Cartographer", "Night Eye", "Tough Hide",
    "Pain Threshold", "Scent Trail", "Iron Grip", "Quick Draw", "Second Wind",
    "Danger Sense", "Stone Sleep", "Blood Scent", "Anchor", "Mimic Voice",
  ],

  skillEffects: [
    "sharpens reaction time enough to close the gap between seeing a strike and answering it",
    "subtly biases first impressions toward warmth and trust",
    "gives an instinctive sense of how a constructed object comes apart",
    "deadens the sound of footfalls and clothing in motion",
    "stabilises the hand for fine work under stress, hunger, or fear",
    "allows eating or drinking things that would normally cause illness",
    "extends visual clarity at long range without changing the eyes",
    "keeps the user upright on surfaces and slopes that should drop them",
    "nudges trade negotiations a fair-but-favourable distance toward the user",
    "lets the user feel objects they own within a few paces and pull them to hand",
    "lengthens tolerance for stillness on a stalk — hours feel like minutes",
    "makes minor wounds close cleaner and faster than the body normally manages",
    "doubles how long breath can be held underwater or through smoke",
    "lets the user feel when someone is lying outright, but not what the truth is",
    "grants a brief surge of strength and clarity below a sliver of stamina",
    "allows rough understanding of a beast's intent and mood in close contact",
    "gives a near-perfect mental map of how gear and supplies are packed",
    "imprints terrain walked once into a stable internal map",
    "allows clear sight in near-total darkness at the cost of light sensitivity",
    "toughens the skin against shallow cuts and minor impacts",
    "raises the threshold before pain impairs movement or thought",
    "tracks a creature's path by residual scent for hours after it passed",
    "prevents anything held from being knocked or pulled free",
    "cuts weapon draw time to a fraction of a heartbeat",
    "recovers a burst of stamina after a brief pause, once per day",
    "triggers a spike of awareness just before an unseen threat connects",
    "allows restful sleep on any surface regardless of comfort or noise",
    "detects fresh blood within a moderate radius, even through walls",
    "fixes the user's position against forced movement for several seconds",
    "reproduces any voice heard in the last hour with near-perfect accuracy",
  ],

  skillUnlockHints: [
    "having survived a fall that should have broken bones",
    "having gone three days without sleep while keeping watch",
    "having lost something irreplaceable and kept moving",
    "having killed a beast above your station with the wrong weapon",
    "having repaired a broken object without instruction",
    "having lied convincingly to someone you respected",
    "having forgiven someone who had not asked",
    "having gone hungry to feed a stranger",
    "having walked the same road a hundred times without getting lost once",
    "having held a friend's wound closed long enough for help to arrive",
    "having talked your way out of a fight you would have won",
    "having carried a dying person farther than should have been possible",
    "having been completely alone for longer than a month without losing coherence",
    "having destroyed something you built in order to save someone",
    "having betrayed someone's trust and lived with the weight of it",
  ],

  skillGrades: ["Budding", "Low", "Neutral", "Medium", "High", "Grand", "Master", "Null"],

  skillCosts: [
    "Passive. No mana cost.",
    "Trickle of ambient mana while active. Sustainable for hours.",
    "Modest mana cost per use. Roughly a dozen activations before fatigue.",
    "Heavy mana cost. Two or three uses leave the user lightheaded.",
    "Extreme mana cost. One use cripples the user for the rest of the day.",
    "Cost is not mana. Each use takes something else — stamina, sleep, or memory.",
  ],


  techniqueOrigins: [
    "born from enduring pain beyond what the body should survive",
    "achieved through years of repetitive physical mastery pushed past natural limits",
    "triggered by a single moment of absolute desperation with no other option",
    "developed instinctively during prolonged isolation and sensory deprivation",
    "forced into existence by surviving mana poisoning without medical intervention",
    "earned through destroying one's own body and rebuilding it through willpower alone",
    "the result of fighting the same opponent hundreds of times until the body adapted",
    "unlocked during a near-death experience that rewired the relationship between body and core",
  ],

  pactTypes: [
    { name: "Servant Pact", desc: "Both parties impose conditions; master holds primary authority. Servant can break it at will but faces mana backlash proportional to the bond's strength." },
    { name: "Slave Pact", desc: "One party is completely bound. Anchors to the soul. Breaking it forcefully causes mana corruption, organ damage, or core collapse." },
    { name: "Familiar Bond", desc: "A pact between a person and a tamed beast. Shared senses, minor buffs. Strength limited by the human's core capacity." },
    { name: "Conditional Pact", desc: "Rules define how mana flows between parties. Stable while conditions hold. Broken conditions cause disruption scaled to the bond's depth." },
    { name: "Curse Pact", desc: "Corrupted binding that invades mind or mana flow. Requires negative emotions, connection to target, and sacrifice from the caster. Ends when the caster dies." },
    { name: "Object Pact", desc: "Binding between a person and an inanimate object. The object becomes an extension of the binder's will. Rare outside relic use." },
  ],

  // ---------------------------------------------------------------
  // RELICS
  // ---------------------------------------------------------------
  relicForms: ["ring", "amulet", "earring", "circlet", "cloak pin", "bracelet", "pocket watch", "small mirror", "dagger hilt", "thimble", "signet", "pendant", "brooch", "anklet", "hair clasp"],

  relicMaterials: [
    "tarnished silver", "blackened gold", "veined obsidian", "pale Ancient alloy",
    "bone polished smooth", "crystal grown around old wire", "wood that should not have survived this long",
    "fused glass and iron", "a metal no living smith recognises", "stone worn soft by centuries of mana flow",
  ],

  relicEffects: [
    "muffles the wearer's mana signature completely — sensing methods slide off",
    "stores one spell cast at it and replays that spell perfectly once when willed",
    "stops a single fatal blow per day, crumbles to ash until the next sunrise",
    "translates any spoken language into the wearer's native tongue while they stay silent",
    "lets the wearer recall one personally-touched object to their hand once per week",
    "feeds on ambient mana to maintain comfortable temperature regardless of weather",
    "binds a small flame that lights when the wearer sleeps and dies when they wake",
    "lets the wearer hear what was said in a room within the past hour, once per room",
    "anchors the wearer to one chosen location they can return to instantly — once only",
    "forces anyone touching it to speak only what they believe true for one minute",
    "makes the wearer's next lie completely undetectable by any Skill or spell, once per day",
    "absorbs the pain from one wound and stores it — can be released into a touched target",
    "keeps one small object invisible to everyone except the wearer",
    "allows the wearer to hold their breath indefinitely while the relic has mana charge",
    "records the last ten seconds of the wearer's vision and can replay them as a projection",
  ],

  relicLimits: [
    "Single use. After triggering, the relic is inert ornament.",
    "Limited charges per day; recharges with ambient mana.",
    "Functions only inside or near a high-mana environment.",
    "Functions only outside a high-mana environment.",
    "Demands a drop of the wearer's blood each time it is used.",
    "Only works for one person — the first to bond it. Jewellery to anyone else.",
    "Loses one charge permanently each time it activates. No way to replace them.",
    "Causes mild mana sickness after each use. Stacks if used repeatedly.",
    "Functions only at night. Inert between sunrise and sunset.",
  ],

  relicOrigins: [
    "pulled from the second curl of a deep-Lintur dungeon",
    "found in a Menfor battlefield grave that should have been emptied centuries ago",
    "logged out of an Underworld vault and never logged back in",
    "recovered from a Northern Expanse glacier dungeon",
    "left in a sealed Ancient ruin behind a door that opened to no key",
    "dug from the body of a dead dungeon — the creature had grown around it",
    "traded by a Devil merchant who would not name its previous owner",
    "discovered inside a Crystone's core after it was broken open",
    "washed ashore on Tantser's coast and somehow made it back to Kremantin",
  ],


  // ---------------------------------------------------------------
  // MONSTERS
  // ---------------------------------------------------------------
  monsters: [
    { name: "Crystone", star: 1, summary: "Spherical core creature covered in crystalline spikes around a glowing central eye. Plays dead as a stone, then whips out a tentacle to drain mana. Spins up cutting wind currents. Self-repairs with absorbed mana.", habitat: "roadsides, dungeon entrances, rocky terrain" },
    { name: "Shafo", star: 2, summary: "Small black-furred biped with a single glowing orange eye, white chest patches, one upward horn, and thick clawed arms. Pack leader and common roadside threat.", habitat: "forest edges, trade routes" },
    { name: "Blobooze", star: 2, summary: "A grinning slime that lures victims close before tentacles do the work. Wears a hardened mana-crystal crown it uses as a battering ram.", habitat: "swamps, damp dungeon floors" },
    { name: "Gasgees", star: 2, summary: "Docile waist-high plant-animal hybrid that grazes on Pompas fruit and stores it fermenting in a porous back-pouch. Threaten the pouch and it sprays corrosive slurry up to fifteen feet.", habitat: "swamps, dense forests, near Pompas vines" },
    { name: "Kekali", star: 3, summary: "Lithe fox-like pack monsters with green plate-scaled tails and amber-gold eyes. Four to eight females led by a single chosen male. Imprint on a worthy candidate of any race for life.", habitat: "forested edges, grassy plains" },
    { name: "Drakein", star: 4, summary: "Bipedal obsidian-scaled ambush predator with violet energy along arms and spine. Sickle-claws, tiny purple eye. Climbs walls in mana-charged bursts and delivers electrified slashes.", habitat: "caves, mountain passes, dungeon mid-depths" },
    { name: "Fire Drakein", star: 4, summary: "Spherical body of black volcanic rock laced with molten cracks, mounted on spider-like legs around a single red eye. Rolls through tunnels, spews lava, explodes when threatened.", habitat: "volcanic tunnels, deep dungeon heat zones" },
    { name: "Feaster", star: 4, summary: "Towering bark-hided monster crowned with horn tendrils, golden eyes, and curved claws. Coils its neck inward and vomits a stream of acidic sludge as a wide-area attack.", habitat: "old-growth forests, dungeon mid-depths" },
    { name: "Stalker", star: 4, summary: "Hunched bipedal predator with grey leathery skin, no eyes, long rabbit-like ears, and a maw of sharp teeth. Hunts entirely by hearing inside a memorised 100m-1km territory. Runs at 60 km/h.", habitat: "caves, occasionally forests" },
    { name: "Ritfien", star: 5, summary: "Vents unstable mana through glowing cracks — touching it risks poisoning or core feedback. Rare spawn in the lead-up to a Doomsday.", habitat: "high-mana dungeon zones, ley-line intersections" },
    { name: "Vekrath", star: 5, summary: "Solitary black-plumaged avian on cliff faces. Dive faster than reaction time, almost silent. Hoards mana-rich crystals it cannot tolerate. Open ground is a death sentence.", habitat: "cliff faces overlooking open terrain" },
    { name: "Huliut", star: 5, summary: "Bioengineered humanoid with pearl skin, sutured mouth, external core orb above its head. Senses through mana. Strikes faster than the eye. Produces inferior clones at heavy cost.", habitat: "low-mana zones, ruins, abandoned facilities" },
  ],

  // ---------------------------------------------------------------
  // LOCATIONS
  // ---------------------------------------------------------------
  locations: [
    { name: "Capital of Elysandria", kind: "City", summary: "Grand palace complex intertwined with religious structures, including the summoning chamber. Seat of the Iron Queen and the JOAT sub-branch of the Crimson Sun Order." },
    { name: "Kingdom of Elysandria", kind: "Nation", summary: "Central human nation on Kremantin. Fertile plains, ancient forests, rugged mountains. Absolute monarchy balanced against the Church of Ucliat." },
    { name: "Kremantin", kind: "Continent", summary: "The central continent. Temperate to subtropical, racially mixed. Home to Elysandria and the seat of the Church of Ucliat." },
    { name: "Lintur", kind: "Continent", summary: "Southwestern. Lush, wild, dense magical jungles, megafauna, isolated civilisations. Rumoured to hide ruins from before the Lost Age." },
    { name: "Menfor", kind: "Continent", summary: "Northern. Desert, badland, volcanic range. Sparse, hardy population. Ancestral homeland of the Tenebrim." },
    { name: "Tantser", kind: "Continent", summary: "Southeastern. Largely unexplored, fragmented landmass under permanent storm systems. Few return." },
    { name: "The Northern Expanse", kind: "Continent", summary: "Frigid taiga and glacier in the far northeast. Home of the Gorthon Federation and elven nations. Geothermal-steam-magic technology." },
    { name: "The Underworld", kind: "Subterranean realm", summary: "Vast cavern systems lit by mana-saturated crystals. Devil cities in stable zones, frontier settlements near high-density fronts. The sealed siphoning facility that delays Doomsday." },
    { name: "A Crimson Sun Sanctum", kind: "Underground/mountain", summary: "Order branch researching a specific field. Heavy on relics, ritual instruments, and salvaged hero knowledge. Some genuine, some despicable." },
    { name: "A living dungeon", kind: "Organism", summary: "A massive worm-like creature curled underground. Mouth as entrance. Organic walls hardening over time. Floors are folds of its body. Crystals, fungi, plants, rare relics." },
    { name: "A mana-dead forest", kind: "Wilderness", summary: "Forest where local mana has bled out. Spells degrade, sensing fails. Predators relying on mana signatures are blind here." },
    { name: "A high-mana battlefield", kind: "Ruins", summary: "Old blood-soaked field saturated with mana. Excellent for spells, dangerous for fragile cores." },
    { name: "The Main Church", kind: "Religious site", summary: "Largest church in the capital. Only top-tier appraisal device. Bound to the Pope through Conditional Multi-Pact Anchor, reinforced by Church Knight nodes." },
    { name: "An Underworld border town", kind: "Settlement", summary: "Rough frontier settlement near the high-density mana zones. Practical architecture, beast-riding culture, constant monster pressure." },
    { name: "A Gorthon Federation city", kind: "City", summary: "Elven city blending geothermal power, steam engineering, and refined magic. Insular culture, centuries of accumulated knowledge." },
  ],


  // ---------------------------------------------------------------
  // STORY SCENARIO GENERATOR
  // ---------------------------------------------------------------
  storyHooks: [
    "A dungeon near {location} has begun producing monsters that can survive outside its mana range. The local Hunter Association is calling it a Dungeon Break.",
    "A relic has surfaced in {location} — one that matches no catalogue entry. The Church wants it secured before anyone else examines it.",
    "Trade caravans between {location} and the capital have gone silent. The last message mentioned something in the trees that didn't match any known star-rating.",
    "The mana density in {location} has spiked without explanation. Crystals are growing where they shouldn't be, and the local wildlife is agitated.",
    "A bounty notice has appeared on every guild board in {location}: a criminal with a defective core, nearly invisible to mana-sensing, wanted for a king's ransom.",
    "A Crimson Sun Order sanctum near {location} has gone dark. No communications in three weeks. The Order insists everything is fine.",
    "An Underworld delegation arrived at {location} without warning. They say the siphoning schedule has shifted and surface preparations need to begin.",
    "A Star-5 {monster} has been spotted far outside its usual territory, heading toward {location}. The Adventurer Guild is in over its head.",
    "Someone is killing Hunters in {location}. The bodies show no mana trace, no spell residue, and no wounds consistent with beast attacks.",
    "The Church's appraisal device in {location} gave a reading it was never designed to produce. The Pope has not responded to the report.",
    "A dead dungeon in {location} has started pulsing again. It was harvested dry a decade ago. Nothing should be left alive inside.",
    "An ancient ruin near {location} has opened — a door that has been sealed since before recorded history. Something inside is leaking mana outward.",
    "A narelith has been sighted near {location}, already past its First Phase and growing fast. It has no bonded guardian. Several factions want it.",
    "A conditional pact between two noble houses in {location} has broken violently. The mana backlash injured bystanders. Both sides blame the other.",
    "The Gorthon Federation has sealed its borders to {location}. No explanation given. Refugees are appearing anyway.",
  ],

  storyComplications: [
    "the contract had been re-sold twice — the original signature belongs to someone who should not be involved",
    "the local Church Knights have been pulled from rotation for reasons no one will explain",
    "the monster's behaviour doesn't match its star-rating: it's ignoring easy prey and heading somewhere specific",
    "a Mellet observer is taking notes from a respectful, unwelcome distance",
    "the Adventurer Guild and the Hunter Association are both claiming jurisdiction and neither will yield",
    "the only witness is a tenebrim Mourak who wants paying before talking",
    "someone has already been here — the evidence has been carefully, professionally cleaned",
    "the relic on the table has not been logged in any accessible catalogue",
    "the Crimson Sun Order's symbol is carved into the wall — inverted",
    "the local healer refuses to treat anyone involved and won't say why",
    "a conditional pact was triggered by something that happened here — the backlash hasn't finished propagating",
    "the crystal deposits in the area are growing visibly, which means the mana density is still rising",
    "a second group arrived at the same time with the same contract, issued by a different authority",
    "the path back has closed — the dungeon organism shifted while they were inside",
    "the creature they killed had a core that doesn't match any known species",
  ],

  storyTones: [
    "quiet tension — something is wrong but nobody will name it",
    "frantic urgency — the window is closing and everyone knows it",
    "bitter irony — the solution creates a worse problem",
    "grim professionalism — do the job, get paid, don't ask questions",
    "reluctant cooperation — two parties who hate each other need the same outcome",
    "creeping dread — each new piece of information makes things worse",
    "dark comedy — everything is terrible but someone won't stop making jokes",
    "melancholy — the best possible outcome is still a loss",
  ],


  // ---------------------------------------------------------------
  // WORLD FACTS (shown as flavour / tooltips / lore cards)
  // ---------------------------------------------------------------
  worldFacts: [
    "Mana sinks like cold air. The deeper you go, the denser it becomes.",
    "Devils are not expansionist. They hold the line against mana accumulation so the surface has time to prepare.",
    "The Doomsday hits the Underworld first and hardest. The surface receives the overflow, not the source.",
    "Dungeons are living organisms — massive worm-like creatures. Their 'floors' are folds of their body.",
    "Ucliat is not a god. It is the self-regulating system that allows the world to function.",
    "Hero summoning selects for compatibility, not destiny. The optimised core is structural adjustment, not divine favour.",
    "Pacts enforce themselves through cores. Broken conditions disrupt mana flow the way blocked circulation disrupts blood.",
    "Elemental magic doesn't create matter. It reshapes mana to imitate reality — the imitation degrades at high output.",
    "The 'whale-echo' tinnitus happens when a flow point in the core is disrupted. It's mana feedback screaming.",
    "Relics are items imbued with Lost Magic — magic no one alive can reproduce. Found only in deep dungeons.",
    "Tenebrim have no core. No spells, no passive healing. Their scars never fade. They pay for it with raw power.",
    "A Lumenari is not a race — it's a core failure. Growth past containment. They last maybe a decade before burning out.",
    "The Church's appraisal devices are bound to the Pope's own core through his Skill. Tampering triggers death.",
    "Compressed Tro-Ko casting trades safety for speed. One wrong syllable at that pace means blackout.",
    "A conditional pact cannot stabilise around contradictions. Conflicting conditions prevent formation entirely.",
    "Crystals are the perfect mana container — no leakage, massive capacity. A hand-sized crystal could theoretically birth a Star-1 monster.",
    "Currency: 1000 copper = 100 bronze. 1000 bronze = 10 silver. 1000 silver = 1 gold. A gold crown is a year's income for a labourer.",
    "The Grand Monarch built an empire using tamed beasts. He was stopped by one anonymous person whose name is lost.",
    "Beastkin were created by the 7th Hero. They're not naturally occurring — they're mana-engineered hybrids.",
    "Devils ride beasts rather than vehicles. A bonded companion is loyal and judges situations. A vehicle just breaks.",
  ],

  // ---------------------------------------------------------------
  // CURRENCY for context
  // ---------------------------------------------------------------
  currency: {
    denominations: ["copper (₡)", "bronze (₢)", "silver (₣)", "gold (₤)"],
    rates: "1000₡ = 100₢ | 1000₢ = 10₣ | 1000₣ = 1₤",
    context: "A gold crown is a year's income for a labourer. Most commerce uses silver, bronze, and copper.",
  },
};
