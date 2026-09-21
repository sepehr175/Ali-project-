// Articles. Inline links use [text](/path) and are turned into router links by the <Rich/> component in main.jsx.
// picks = product ids shown under each article; fabrics = fabric groups linked from it.

export const ARTICLES = [
  {
    slug: 'when-to-start-wearing-underwear',
    title: 'At what age should people start wearing underwear?',
    topic: 'Life stages',
    excerpt: 'There is no single age. Here is how underwear fits into each stage, from toilet training to the teenage years.',
    intro: `Parents, teens and adults all ask the same question: when does underwear actually begin? The honest answer is that there is no fixed age, and no rule that says everyone must wear it. What changes over time is the reason we wear it: hygiene, comfort, support or simply preference.`,
    sections: [
      { h: 'Babies and toddlers: diapers first', p: [
        `Babies wear diapers, which do the job that underwear does later. Most children move into underwear when they begin toilet training, often somewhere between about two and three years old, although healthy children start earlier or later.`,
        `Readiness matters more than the calendar. Staying dry for longer stretches, noticing when they need to go and wanting to wear big-kid underwear are all good signs. Training pants can bridge the gap, and many families switch to regular cotton underwear once accidents become rare.`,
        `Our guide to [choosing underwear for kids](/articles/underwear-for-kids) covers sizes, seams and fabrics for this stage.`
      ] },
      { h: 'School age: comfort comes first', p: [
        `By primary school, children usually wear underwear every day. At this age soft cotton, flat seams and a waistband that does not dig in matter more than any style.`,
        `Children also grow quickly, so check the fit every few months. This is a good moment to teach simple hygiene habits, such as a fresh pair every day and a change after messy play or swimming.`
      ] },
      { h: 'Puberty: needs change', p: [
        `During puberty, bodies change and so do underwear needs. Many boys move from simple briefs toward boxer briefs or trunks that give more support during sport and growth spurts, and start to care more about fit and feel.`,
        `This can be a sensitive time, so let teens choose styles they feel comfortable in. Comfort and confidence go together, and a good fit helps with both.`
      ] },
      { h: 'Adults and beyond', p: [
        `As adults, most people wear underwear for hygiene, support and to protect their clothing. Life then adds new reasons: workouts, work clothes, special evenings and, later, ease of dressing. See [the right underwear for sports](/articles/underwear-for-sports) and [underwear for older adults](/articles/underwear-for-older-adults).`,
        `There is also no medical requirement to wear underwear at any age, and some people prefer to skip it in bed or at home. That is a personal choice. If you do wear it, breathable fabrics such as [cotton](/fabrics/cotton) are a dependable default.`
      ] }
    ],
    checklist: ['There is no single right age: follow readiness, not the calendar.', 'Toddlers: choose soft cotton and easy pull-up shapes.', 'Check the size every few months during growth spurts.', 'Teens: let them choose for comfort and confidence.', 'Change into a fresh pair every day at any age.'],
    picks: ['m1', 'm9', 'm34', 'm15'], fabrics: ['cotton'],
    related: ['underwear-for-kids', 'underwear-size-and-fit', 'choosing-underwear-fabric']
  },
  {
    slug: 'underwear-for-older-adults',
    title: 'The best underwear for older adults',
    topic: 'Life stages',
    excerpt: 'Soft fabrics, easy-on shapes and gentle waistbands: what to look for as comfort and skin needs change.',
    intro: `As we age, skin becomes thinner and more sensitive, joints can make dressing harder, and comfort matters more than ever. The right underwear makes daily life noticeably easier. The good news is that the features that help most are simple: soft fabric, a gentle fit and shapes that are easy to put on.`,
    sections: [
      { h: 'Choose soft, breathable fabrics', p: [
        `Fine, smooth fabrics are kinder to thinner skin. [Cotton](/fabrics/cotton) is a dependable everyday choice, while modal and lyocell, found in our [other fabrics](/fabrics/other), feel silky and absorb moisture well.`,
        `Avoid rough seams, scratchy lace edges and stiff labels. Tag-free, flat-seam styles reduce rubbing and red marks.`
      ] },
      { h: 'Look for a gentle, non-binding fit', p: [
        `A waistband that is too tight can leave marks and feel uncomfortable when sitting for long periods. Wide, soft waistbands and leg openings that do not pinch are a better fit.`,
        `If you have swelling in your legs or circulation concerns, ask your doctor or nurse whether elastic is a problem for you. Briefs and boxer briefs with a slightly higher, softer waistband can feel warm and secure, and give extra coverage across the lower belly.`
      ] },
      { h: 'Make dressing easy', p: [
        `Stretchy fabrics, generous leg openings and shapes that pull up without twisting help people with stiff joints or arthritis. Sitting down to dress is safer than standing on one leg.`,
        `Soft briefs and boxer briefs with a comfortable pouch stay in place better than loose boxers, while relaxed [linen or cotton boxers](/fabrics/linen) suit warm days at home.`
      ] },
      { h: 'Managing moisture and leaks', p: [
        `Some people experience light bladder leakage as they age. It is very common and often treatable, so speak to a doctor or nurse. Specialist absorbent underwear and pads are designed for this and work better than ordinary underwear.`,
        `Change promptly when damp, dry the skin well, and wash with a fragrance-free detergent to keep skin comfortable.`
      ] },
      { h: 'Keep skin happy', p: [
        `Change underwear daily, dry the skin fully after washing, and rotate several pairs. If redness, rashes or soreness do not go away, get it checked rather than just changing brands.`,
        `For sizing tips read [getting the right size and fit](/articles/underwear-size-and-fit), and for washing advice see [underwear care and replacement](/articles/underwear-care-and-replacement).`
      ] }
    ],
    checklist: ['Choose soft, flat-seam, tag-free styles.', 'Pick wide, gentle waistbands that do not leave marks.', 'Look for stretchy, easy pull-on shapes and sit down to dress.', 'Ask a doctor or nurse about leakage or circulation concerns.', 'Change daily and use fragrance-free detergent.'],
    picks: ['m10', 'm3', 'm39', 'm20'], fabrics: ['cotton', 'other'],
    related: ['choosing-underwear-fabric', 'underwear-size-and-fit', 'underwear-care-and-replacement']
  },
  {
    slug: 'underwear-for-kids',
    title: 'Choosing underwear for kids',
    topic: 'Life stages',
    excerpt: 'Soft cotton, flat seams and the right size: a simple guide for toddlers to teens.',
    intro: `Children's skin is delicate, and they notice every scratchy tag and tight elastic. Good underwear should feel like nothing at all. A few simple rules make it easy to choose well, whether you are shopping for a toddler in toilet training or a teenager with strong opinions.`,
    note: 'Our range is in adult sizes. The styles below show the kinds of fabric to look for when shopping for kids.',
    sections: [
      { h: 'Start with cotton', p: [
        `[Cotton](/fabrics/cotton) is soft, breathable and gentle, so it is the usual recommendation for children, especially those with sensitive skin or eczema. Look for cotton-rich fabrics with just a little elastane for comfort and shape.`,
        `Wash new underwear before the first wear to remove any finishing residue.`
      ] },
      { h: 'Check seams, tags and prints', p: [
        `Flat or tag-free seams avoid rubbing, which matters for children who wear underwear all day at school.`,
        `Bright prints are fun, but choose ones that feel smooth on the inside and avoid stiff plastic decorations close to the skin.`
      ] },
      { h: 'Get the fit right', p: [
        `Underwear that is too tight leaves marks and restricts movement, while pairs that are too loose bunch up and cause chafing. The waistband should sit comfortably without digging in, and leg openings should not pinch.`,
        `Children grow fast, so recheck the size every few months. For general tips see [getting the right size and fit](/articles/underwear-size-and-fit).`
      ] },
      { h: 'Toilet training and accidents', p: [
        `During toilet training, easy pull-up shapes help children manage on their own. Keep several spare pairs handy, because accidents are normal and part of learning.`,
        `Stay calm and patient; children pick up the routine at different speeds. Read more about [when children usually start](/articles/when-to-start-wearing-underwear).`
      ] },
      { h: 'As they get older', p: [
        `Older children and teens often choose their own style, such as briefs, boxer briefs or trunks. For sport, moisture-wicking fabrics are worth it, as explained in [the right underwear for sports](/articles/underwear-for-sports).`,
        `Teach simple habits: a fresh pair every day, and a change after swimming or sport.`
      ] }
    ],
    checklist: ['Choose soft cotton or cotton-rich fabrics.', 'Prefer flat seams and tag-free labels.', 'Check that the waistband and leg openings do not pinch or slip.', 'Buy spare pairs for toilet training.', 'Wash new pairs before first wear with gentle detergent.'],
    picks: ['m1', 'm9', 'm15', 'm34'], fabrics: ['cotton'],
    related: ['when-to-start-wearing-underwear', 'choosing-underwear-fabric', 'underwear-care-and-replacement']
  },
  {
    slug: 'first-date-underwear',
    title: 'What underwear to wear on a first date',
    topic: 'Occasions',
    excerpt: 'Comfort beats everything. How to choose underwear that stays put, hides no lines and lets you relax.',
    intro: `First dates are full of small worries, and underwear should not be one of them. The best choice is not the fanciest pair; it is the pair you forget you are wearing. Comfort and confidence go together, and a few simple choices help you feel at ease from start to finish.`,
    sections: [
      { h: 'Wear what you already know', p: [
        `A first date is not the time to test brand-new underwear. Choose a pair you have worn before that stays in place and does not ride up or roll down. If you want to wear something new, try it on at home for an evening first.`,
        `Make sure it is clean and in good condition, with elastic that still holds its shape.`
      ] },
      { h: 'Pick breathable fabrics for nerves', p: [
        `Nerves and warm restaurants can mean sweating. Breathable fabrics such as cotton, modal and lyocell help you stay fresh, while very tight synthetic pieces can feel hot. Our guide to [choosing your underwear fabric](/articles/choosing-underwear-fabric) explains the differences.`,
        `A soft [modal or lyocell](/fabrics/other) style with a gentle waistband works well for a long evening.`
      ] },
      { h: 'Match the outfit and avoid visible lines', p: [
        `Slim trousers can show seams and elastic lines. Seamless styles smooth things out, and a trunk or boxer brief with a longer leg helps prevent thigh chafing.`,
        `A well-fitted boxer brief or trunk keeps everything comfortable under slim trousers, and a good pouch keeps things supported without adjusting.`
      ] },
      { h: 'Fit matters more than style', p: [
        `Whatever the style, the fit should feel secure without digging in. If you spend the evening adjusting, you are less relaxed. See [getting the right size and fit](/articles/underwear-size-and-fit) if you are unsure of your size.`
      ] },
      { h: 'Dress for you', p: [
        `Underwear should never be chosen to meet someone else's expectations or because you feel pressured. Pick what makes you feel comfortable and confident, and let the evening unfold naturally.`,
        `If you will be active, for example dancing or walking a lot, consider [underwear made for movement](/articles/underwear-for-sports).`
      ] }
    ],
    checklist: ['Choose a pair you have already worn and trust.', 'Prefer breathable fabrics such as cotton, modal or lyocell.', 'Pick seamless styles under fitted clothing.', 'Check the fit: no digging, riding up or rolling.', 'Choose for your own comfort, not anyone else\'s expectations.'],
    picks: ['m35', 'm3', 'm7', 'm40'], fabrics: ['other', 'cotton'],
    related: ['briefs-boxer-briefs-trunks-boxers', 'underwear-size-and-fit', 'underwear-for-sports']
  },
  {
    slug: 'underwear-for-sports',
    title: 'The right underwear for sports and workouts',
    topic: 'Occasions',
    excerpt: 'Moisture-wicking fabrics, snug fits and anti-chafe tips for running, the gym, yoga and more.',
    intro: `During exercise, underwear works harder than you might expect. It has to move with you, manage sweat and avoid rubbing for as long as you train. The right pair can be the difference between a great session and a sore one, so it is worth choosing with the activity in mind.`,
    sections: [
      { h: 'Choose moisture-wicking fabrics for hard sessions', p: [
        `Performance fabrics such as polyester or nylon blended with elastane pull sweat away from the skin and dry quickly. They are the best choice for running, gym sessions and any sport that makes you sweat heavily. You will find them in our [other fabrics](/fabrics/other) group.`,
        `Cotton absorbs moisture and dries slowly, so it can feel damp and cause rubbing during long, sweaty workouts. It is fine for gentle activity such as walking or yoga.`
      ] },
      { h: 'Prioritise a snug, seam-free fit', p: [
        `Underwear for sport should be snug enough not to shift, but not so tight that it restricts movement. Flat seams or seamless construction reduce chafing.`,
        `Longer leg lengths, such as longline boxer briefs, help prevent thigh rubbing when running or cycling.`
      ] },
      { h: 'Support matters', p: [
        `A supportive pouch or a jockstrap helps during running, contact sport and gym sessions. Boxer briefs with a snug pouch and flat seams suit most training days.`,
        `Cyclists who wear padded shorts usually skip underwear, since the padding does the job and extra seams only add friction.`
      ] },
      { h: 'Prevent chafing and irritation', p: [
        `Long runs and hot days call for a little extra care. An anti-chafe balm can help where skin rubs, and staying hydrated and clean helps too.`,
        `Change out of damp underwear as soon as you can, because staying wet is a common cause of irritation.`
      ] },
      { h: 'Wash after every workout', p: [
        `Sweaty underwear should be washed after each wear. Use cool water and avoid high heat, which can damage stretch fibres.`,
        `For more, read [underwear care and replacement](/articles/underwear-care-and-replacement) and [choosing the right fabric](/articles/choosing-underwear-fabric).`
      ] }
    ],
    checklist: ['Use moisture-wicking synthetics for heavy sweating.', 'Save cotton for gentle activity such as yoga or walking.', 'Choose a snug fit with flat or seamless construction.', 'Pick longer legs for running or cycling.', 'Change out of damp underwear quickly and wash after each session.'],
    picks: ['m4', 'm17', 'm25', 'm36'], fabrics: ['other'],
    related: ['choosing-underwear-fabric', 'underwear-care-and-replacement', 'underwear-size-and-fit']
  },
  {
    slug: 'briefs-boxer-briefs-trunks-boxers',
    title: 'Briefs, boxer briefs, trunks or boxers: which style is right for you?',
    topic: 'Fabric, fit & care',
    excerpt: 'A side-by-side look at every silhouette in our range, with what each is best at.',
    intro: `Choosing between briefs, boxer briefs, trunks and boxers comes down to three things: how much support you want, how long you want the leg, and what you are wearing over the top. Here is a plain comparison of every style in our range.`,
    sections: [
      { h: 'Briefs: maximum support', p: [
        `[Briefs](/shop/men?category=brief) give the closest, most supportive fit and the least fabric. They suit slim trousers, warm weather and anyone who likes a secure hold.`,
        `They leave the legs free, which some people love and others find less comfortable when walking a lot.`
      ] },
      { h: 'Boxer briefs: the all-rounder', p: [
        `[Boxer briefs](/shop/men?category=boxer-brief) combine the support of a brief with a longer leg that stops thighs rubbing. They are the most popular everyday choice and work for sport, work and long days.`,
        `Longline versions add even more leg coverage for running and cycling.`
      ] },
      { h: 'Trunks: short and compact', p: [
        `[Trunks](/shop/men?category=trunk) sit between briefs and boxer briefs, with a shorter leg. They stay in place, look neat under fitted clothing and feel light in summer.`
      ] },
      { h: 'Boxers: relaxed and airy', p: [
        `[Woven boxers](/shop/men?category=boxer) are loose and airy, perfect for home, sleep and hot days. Because they are relaxed, they offer the least support, so many people save them for lounging.`
      ] },
      { h: 'Jockstraps and performance styles', p: [
        `[Jockstraps](/shop/men?category=jockstrap) offer open-back support for sport, while our [performance styles](/shop/men?category=performance) use moisture-wicking fabric for training. Read [the right underwear for sports](/articles/underwear-for-sports) for more.`,
        `Whatever you choose, match the fabric to your day with our [fabric guide](/fabrics), and check the size with [getting the right size and fit](/articles/underwear-size-and-fit).`
      ] }
    ],
    checklist: ['Briefs: most support, least fabric.', 'Boxer briefs: support plus a longer leg.', 'Trunks: short, compact and neat under clothing.', 'Boxers: relaxed and airy for home and heat.', 'Jockstraps and performance styles: for training and sport.'],
    picks: ['m9', 'm1', 'm15', 'm19'], fabrics: ['cotton', 'other'],
    related: ['underwear-size-and-fit', 'choosing-underwear-fabric', 'underwear-for-sports']
  },
  {
    slug: 'choosing-underwear-fabric',
    title: 'Cotton, linen or modal? How to choose your underwear fabric',
    topic: 'Fabric, fit & care',
    excerpt: 'A plain-language comparison of the fabrics in our range, and which one suits which situation.',
    intro: `The fabric touching your skin all day matters more than the cut or the colour. Each material breathes, stretches and dries differently, so the best choice depends on what your day looks like. Here is a quick comparison of the fabrics used across our range.`,
    sections: [
      { h: 'Cotton: the dependable default', p: [
        `[Cotton](/fabrics/cotton) is soft, breathable and easy to wash. It suits everyday wear, sleep and sensitive skin.`,
        `Its one weakness is that it dries slowly after heavy sweating.`
      ] },
      { h: 'Linen: for heat', p: [
        `[Linen](/fabrics/linen) is the airiest option and dries quickly, so it shines in summer and hot climates.`,
        `It feels crisp at first and softens with washing. Blends with cotton are softer from the start.`
      ] },
      { h: 'Modal, lyocell and synthetics', p: [
        `Modal and lyocell are silky, smooth and absorbent. Seamless nylon knits disappear under clothes, and polyester performance fabrics wick sweat during exercise.`,
        `Explore all of them in our [other fabrics](/fabrics/other) section.`
      ] },
      { h: 'Match the fabric to the situation', p: [
        `Use cotton for every day, linen or lyocell for heat, seamless for fitted outfits and performance fabrics for workouts.`,
        `Our [fabric guide](/fabrics) has a quick chooser that lists matching styles for your situation.`
      ] },
      { h: 'Read the label', p: [
        `Composition is printed on the care label. Look for a cotton or modal gusset, and remember that a little elastane is normal and helps the garment keep its shape.`,
        `For fit advice read [getting the right size and fit](/articles/underwear-size-and-fit).`
      ] }
    ],
    checklist: ['Everyday and sensitive skin: cotton.', 'Hot weather: linen or lyocell.', 'Under fitted clothes: seamless knits.', 'Workouts: performance polyester.', 'Always check the care label for the real composition.'],
    picks: ['m1', 'm19', 'm3', 'm4'], fabrics: ['cotton', 'linen', 'other'],
    related: ['underwear-size-and-fit', 'underwear-care-and-replacement', 'underwear-for-sports']
  },
  {
    slug: 'underwear-size-and-fit',
    title: 'Getting the right underwear size and fit',
    topic: 'Fabric, fit & care',
    excerpt: 'How to tell if a pair is too tight or too loose, and which shape suits which need.',
    intro: `The most comfortable fabric in the world will not help if the size is wrong. Underwear that is too tight or too loose is the main reason a good pair feels bad. A few quick checks will help you find the right one.`,
    sections: [
      { h: 'Measure, do not guess', p: [
        `Use a tape measure around your natural waist and the fullest part of your hips, then compare with the size chart on the product page. Sizes vary between styles, so check each time.`,
        `If you are between sizes, choose the larger for woven or non-stretch fabrics and the smaller for very stretchy knits.`
      ] },
      { h: 'Signs it is too tight', p: [
        `Red marks, digging waistbands, rolled edges and pinching leg openings all mean the pair is too small. Tight underwear can also feel hot and restrict movement.`
      ] },
      { h: 'Signs it is too loose', p: [
        `Bunching, sagging and riding up point to a size that is too big. Loose fabric can cause rubbing and shift during movement.`
      ] },
      { h: 'Different shapes for different needs', p: [
        `Briefs give full support and coverage, boxer briefs add leg length to prevent rubbing, trunks sit between the two, boxers are relaxed and airy, and jockstraps offer open-back support for sport. Our guide to [briefs, boxer briefs, trunks or boxers](/articles/briefs-boxer-briefs-trunks-boxers) compares them side by side.`,
        `Match the shape to your clothing and activity. See [the right underwear for sports](/articles/underwear-for-sports) for examples.`
      ] },
      { h: 'Recheck regularly', p: [
        `Bodies change with age, fitness and growth. Recheck your size every year or so, and after any big change. Read [choosing your underwear fabric](/articles/choosing-underwear-fabric) to pair the right size with the right material.`
      ] }
    ],
    checklist: ['Measure waist and hips and compare with the size chart.', 'Red marks or rolled edges: size up.', 'Bunching or sagging: size down.', 'Match the shape to your outfit and activity.', 'Recheck your size about once a year.'],
    picks: ['m1', 'm5', 'm15', 'm41'], fabrics: ['cotton'],
    related: ['choosing-underwear-fabric', 'underwear-care-and-replacement', 'underwear-for-kids']
  },
  {
    slug: 'underwear-care-and-replacement',
    title: 'How to wash underwear and when to replace it',
    topic: 'Fabric, fit & care',
    excerpt: 'Simple washing habits keep underwear soft and supportive, and clear signs tell you when it is time for new pairs.',
    intro: `Underwear is the hardest working item in your wardrobe, so a little care goes a long way. Good washing habits keep fabric soft, elastic supportive and skin comfortable. They also tell you when a pair has done its time.`,
    sections: [
      { h: 'Wash after every wear', p: [
        `Underwear should be washed after each wear. Sweat, skin oils and everyday moisture build up in the fabric and are best removed promptly.`
      ] },
      { h: 'Use gentle products', p: [
        `Wash at 30–40 °C with a mild, fragrance-free detergent, especially if your skin is sensitive. Wash lace and seamless pieces inside out in a laundry bag, and keep delicate items away from zips and hooks.`,
        `Check the care label, and see the [fabric guide](/fabrics) for tips on each material.`
      ] },
      { h: 'Dry with care', p: [
        `Air drying is best, since high heat wears out elastane over time. If you use a tumble dryer, choose a low setting.`
      ] },
      { h: 'When to replace it', p: [
        `Replace underwear when the elastic stretches out, the fabric turns thin or see-through, holes appear or odours remain after washing. With a daily rotation, many pairs last around six to twelve months, though this varies with fabric and wear.`
      ] },
      { h: 'Build a rotation', p: [
        `Owning enough pairs to rotate spreads out the wear so each lasts longer. Read [getting the right size and fit](/articles/underwear-size-and-fit) before you restock, and [choosing your underwear fabric](/articles/choosing-underwear-fabric) to choose the right material.`
      ] }
    ],
    checklist: ['Wash after every wear.', 'Use mild, fragrance-free detergent at 30–40 °C.', 'Air dry, or tumble on low.', 'Replace when elastic, fabric or odour shows wear.', 'Keep a rotation of several pairs.'],
    picks: ['m1', 'm3', 'm9', 'm45'], fabrics: ['cotton', 'other'],
    related: ['choosing-underwear-fabric', 'underwear-size-and-fit', 'underwear-for-sports']
  }
];

export const articleBySlug = (slug) => ARTICLES.find(a => a.slug === slug);

const wordsOf = (a) => [a.intro, ...a.sections.flatMap(s => s.p), ...(a.checklist || [])].join(' ').split(/\s+/).length;
export const readMinutes = (a) => Math.max(1, Math.round(wordsOf(a) / 200));
