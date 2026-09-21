// Fabric guide data. Three groups: cotton, linen, and other fabrics.
// NOTE: compositions are typical figures for each fabric type, assigned from each style's name and purpose.
// Replace ASSIGN / TYPES values with your real supplier specs before selling anything.

export const GROUPS = {
  cotton: {
    key: 'cotton', name: 'Cotton', tagline: 'The everyday classic.',
    intro: 'Cotton is a natural fibre from the fluffy seed hairs of the cotton plant. In underwear it is usually knitted into soft jersey or rib with a little elastane (often 3–8%), so it stretches and keeps its shape.',
    made: [
      'Harvest and gin: the cotton bolls are picked and the fibre is separated from the seeds.',
      'Clean and comb: the fibre is cleaned and combed. Combed or ring-spun cotton removes short fibres, which gives a smoother, stronger yarn.',
      'Spin and knit: the fibre is spun into yarn (often twisted around a thin elastane core) and knitted on circular machines into jersey or rib.',
      'Finish and sew: the fabric is washed, dyed and softened, then cut and sewn. Flat seams and a soft waistband make the biggest difference to comfort.'
    ],
    wear: [
      'Best for everyday wear, sleep and relaxed days at home.',
      'Keep a cotton gusset (the inner crotch layer) in mind even when you choose styles made from other fabrics.',
      'Change after heavy sweating. Cotton absorbs moisture and dries slowly.',
      'Wash before first wear; cotton can shrink slightly, so wash cool and dry gently.'
    ],
    skin: [
      'Soft, breathable and rarely irritating, which is why cotton is the usual first choice for sensitive skin, children and daily wear.',
      'Look for tag-free labels and flat seams, and wash with a fragrance-free detergent if your skin reacts easily.',
      'Because it holds moisture, cotton is less ideal for long, very sweaty workouts.'
    ],
    care: 'Wash at 30–40 °C with similar colours. Tumble dry low or air dry; high heat wears out the elastane.',
    best: 'Everyday, sensitive skin, sleep, kids, older adults',
    meters: { breath: 4, soft: 4, moisture: 3, stretch: 2 }
  },
  linen: {
    key: 'linen', name: 'Linen', tagline: 'Cool, airy and long-lasting.',
    intro: 'Linen is made from the stem fibres of the flax plant, one of the oldest textiles in the world. In underwear it usually appears as a linen-cotton blend that keeps the airiness of linen and adds softness.',
    made: [
      'Grow and pull: flax is pulled up by the roots (not cut) to keep the fibres as long as possible.',
      'Ret: the stems are left to soften so the fibres separate from the woody core.',
      'Scutch and hackle: the woody parts are beaten away and the long fibres are combed into smooth strands.',
      'Spin and weave or knit: strands are spun into yarn (often wet-spun for smoothness), then woven or knitted, usually blended with cotton for underwear.',
      'Wash and soften: enzyme or stone washing takes off the crisp, stiff feel.'
    ],
    wear: [
      'Best in warm weather, hot climates and at home.',
      'Relaxed shapes such as woven boxers suit linen best.',
      'Expect a slightly crisp, textured feel at first that softens with every wash.',
      'Natural creasing is normal and part of the look.'
    ],
    skin: [
      'Very breathable and quick to dry, so skin tends to stay fresher in heat.',
      'Long, smooth fibres, but the texture can feel firm at first. Blends with cotton are gentler on very sensitive skin.',
      'Linen has little stretch of its own, so choose your size carefully or pick a blend with elastane.'
    ],
    care: 'Wash gently at 30–40 °C, avoid bleach, and air dry or tumble on low. Linen gets softer with age.',
    best: 'Hot weather, lounging, travel, people who run warm',
    meters: { breath: 5, soft: 3, moisture: 4, stretch: 1 }
  },
  other: {
    key: 'other', name: 'Other fabrics', tagline: 'Modal, lyocell, seamless knits, mesh and performance fabrics.',
    intro: 'Not every job suits cotton. Regenerated and synthetic fibres (modal, lyocell, nylon, polyester and elastane) are engineered for silkiness, invisibility under clothes, moisture wicking or support.',
    made: [
      'Modal and lyocell: wood pulp is dissolved, pushed through fine nozzles into filaments, washed, spun and knitted. Lyocell uses a closed-loop process that recycles its solvent.',
      'Nylon and polyester: a polymer is melted, extruded into filaments and stretched for strength, then knitted. Elastane (spandex) is added for stretch and recovery.',
      'Seamless: circular knitting machines produce the whole garment as one tube, so there are no side seams to rub.',
      'Mesh: fine yarns are knitted on mesh machines into an open structure that lets air pass through, then cut and trimmed.'
    ],
    wear: [
      'Pick by purpose: modal or lyocell for silky everyday comfort, seamless for under fitted clothes, performance fabrics for training.',
      'Look for a cotton or modal gusset for all-day wear.',
      'Change promptly after workouts, since damp synthetics can irritate.'
    ],
    skin: [
      'Modal and lyocell feel smooth and cool and absorb moisture well, so they are gentle on most skin.',
      'Synthetics dry quickly but breathe less. They suit active or shorter days; choose a natural-fibre lining if your skin is sensitive.',
      'Elastic and trims can rub, so check the waistband and try the size before a long day.'
    ],
    care: 'Wash cool, inside out, in a laundry bag. Avoid high heat and wringing; air dry.',
    best: 'Sport, under fitted clothing, silky everyday comfort',
    meters: { breath: 3, soft: 4, moisture: 4, stretch: 5 }
  }
};

// Each type: group, label, typical composition, how it is made (short), skin note, best use, feel meters (1–5).
export const TYPES = {
  'cotton-jersey': { group: 'cotton', label: 'Stretch cotton', comp: '95% cotton · 5% elastane', made: 'Combed cotton yarn knitted into single jersey with a little elastane.', skin: 'Soft, breathable and gentle; a safe pick for sensitive skin.', best: 'Everyday wear', meters: { breath: 4, soft: 4, moisture: 3, stretch: 3 } },
  'cotton-rib': { group: 'cotton', label: 'Ribbed cotton', comp: '94% cotton · 6% elastane', made: 'Cotton knitted in a rib structure that stretches sideways and springs back.', skin: 'Soft with a gentle texture; the rib flexes with the body instead of pinching.', best: 'Everyday, lounging', meters: { breath: 4, soft: 4, moisture: 3, stretch: 4 } },
  'cotton-poplin': { group: 'cotton', label: 'Cotton poplin', comp: '100% cotton (woven)', made: 'Cotton yarns woven tightly in a plain weave for a light, crisp fabric.', skin: 'Light and airy with no elastic bulk; comfortable in warm weather.', best: 'Relaxed boxers, warm days', meters: { breath: 5, soft: 3, moisture: 3, stretch: 1 } },
  'linen-blend': { group: 'linen', label: 'Linen-cotton blend', comp: '55% linen · 45% cotton', made: 'Flax and cotton yarns blended, then woven or knitted and enzyme-washed to soften.', skin: 'Very airy and quick-drying; softens with washing. Cotton in the blend keeps it kind to skin.', best: 'Hot weather, lounging', meters: { breath: 5, soft: 3, moisture: 4, stretch: 1 } },
  modal: { group: 'other', label: 'Modal', comp: '92% modal · 8% elastane', made: 'Beech wood pulp dissolved and spun into smooth cellulose fibre, then knitted.', skin: 'Silky, smooth and absorbent; resists pilling and feels gentle on skin.', best: 'Silky everyday comfort, sleep', meters: { breath: 4, soft: 5, moisture: 4, stretch: 3 } },
  lyocell: { group: 'other', label: 'Lyocell', comp: '93% lyocell · 7% elastane', made: 'Wood pulp dissolved in a closed-loop process and spun into fine, smooth filaments.', skin: 'Cool, smooth and moisture-managing; gentle on sensitive skin.', best: 'Warm days, barely-there feel', meters: { breath: 5, soft: 5, moisture: 4, stretch: 3 } },
  seamless: { group: 'other', label: 'Seamless knit', comp: '80% nylon · 20% elastane', made: 'Knitted as a single tube on a circular machine, so there are no side seams.', skin: 'No seams to rub, so it is smooth against skin; less breathable than natural fibres.', best: 'Under fitted clothes', meters: { breath: 2, soft: 4, moisture: 3, stretch: 5 } },
  microfiber: { group: 'other', label: 'Smooth microfibre', comp: '85% nylon · 15% elastane', made: 'Very fine nylon filaments knitted into a dense, smooth fabric.', skin: 'Silky and smooth with light support; best with a breathable lining.', best: 'Smooth lines, light support', meters: { breath: 2, soft: 4, moisture: 3, stretch: 4 } },
  performance: { group: 'other', label: 'Performance polyester', comp: '88% polyester · 12% elastane', made: 'Polyester filaments engineered to pull sweat to the surface so it dries fast.', skin: 'Keeps skin drier during exercise; change soon after, as damp synthetics can irritate.', best: 'Training, running', meters: { breath: 3, soft: 3, moisture: 5, stretch: 5 } },
  mesh: { group: 'other', label: 'Open mesh', comp: '90% polyester · 10% elastane', made: 'Polyester yarns knitted into an open structure that lets air pass through.', skin: 'Maximum airflow and very light; texture is firmer than jersey.', best: 'Sport, hot days', meters: { breath: 5, soft: 2, moisture: 5, stretch: 4 } },
  blend: { group: 'other', label: 'Fabric blend', comp: 'See product label', made: 'A blend of fibres chosen for the style.', skin: 'Check the care label for exact fibre content.', best: 'General use', meters: { breath: 3, soft: 3, moisture: 3, stretch: 3 } }
};

const ASSIGN = {
  m1: 'cotton-jersey', m2: 'seamless', m3: 'modal', m4: 'performance', m5: 'cotton-jersey', m6: 'cotton-rib',
  m7: 'lyocell', m8: 'microfiber', m9: 'cotton-jersey', m10: 'modal', m11: 'microfiber', m12: 'cotton-rib',
  m13: 'lyocell', m14: 'cotton-jersey', m15: 'cotton-jersey', m16: 'modal', m17: 'performance', m18: 'cotton-rib',
  m19: 'linen-blend', m20: 'cotton-poplin', m21: 'linen-blend', m22: 'microfiber', m23: 'performance', m24: 'mesh',
  m25: 'performance', m26: 'performance', m27: 'cotton-jersey', m28: 'microfiber', m29: 'modal', m30: 'cotton-jersey',
  m31: 'cotton-jersey', m32: 'modal', m33: 'microfiber', m34: 'cotton-jersey', m35: 'seamless', m36: 'mesh',
  m37: 'cotton-jersey', m38: 'performance', m39: 'modal', m40: 'lyocell', m41: 'cotton-jersey', m42: 'microfiber',
  m43: 'microfiber', m44: 'lyocell', m45: 'cotton-jersey', m46: 'cotton-jersey', m47: 'linen-blend', m48: 'cotton-poplin',
  m49: 'performance', m50: 'performance'
};

export const fabricOf = (p) => {
  const type = TYPES[ASSIGN[p.id]] ? ASSIGN[p.id] : 'blend';
  return { type, ...TYPES[type], groupName: GROUPS[TYPES[type].group].name };
};

// "What do you need?" quick chooser on the fabric guide.
export const NEEDS = [
  { label: 'Everyday comfort', types: ['cotton-jersey', 'cotton-rib', 'modal'], why: 'Soft, breathable cotton and modal are easy to wear all day and simple to wash.' },
  { label: 'Sensitive skin', types: ['cotton-jersey', 'modal', 'lyocell'], why: 'Smooth natural and regenerated fibres with flat seams are the gentlest place to start.' },
  { label: 'Hot weather', types: ['linen-blend', 'cotton-poplin', 'lyocell', 'mesh'], why: 'Airy fabrics let heat and moisture escape, so you stay fresher.' },
  { label: 'Workouts', types: ['performance', 'mesh'], why: 'Moisture-wicking synthetics dry fast and stay put while you move.' },
  { label: 'Sleep and lounge', types: ['modal', 'linen-blend', 'cotton-rib', 'cotton-poplin'], why: 'Soft, relaxed fabrics with no tight elastic let you rest comfortably.' },
  { label: 'Under fitted clothes', types: ['seamless', 'microfiber'], why: 'Seamless and smooth knits leave no visible lines under trousers.' }
];
