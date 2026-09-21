// NOIRLINE catalog: men's underwear only. 50 products.
//
// Image rules:
//   * MEN_IMAGES[i] is the main photo and MEN_HOVER[i] is the hover photo of product i (m1 ... m50).
//   * Every photo appears exactly once across BOTH lists (no product shares a photo, and a
//     product's hover photo is never another product's main photo). This is checked at load time
//     by assertUniquePhotos() below, which logs a console warning if anyone adds a duplicate.
//   * m1-m26 keep the photos and IDs they had before, so nothing already tuned has moved.
//     Only the four hover photos that were duplicates (m12, m19, m23, m26) were replaced.
//   * Practice project: photos are hot-linked, not downloaded.

const px = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=700&h=900&fit=crop&q=78`;
const cdlp = (file, v, w = 900) => `https://cdlp.com/cdn/shop/files/${file}.jpg?v=${v}&width=${w}`;

const menSpecs = [
  ['boxer-brief','Essential Boxer Brief','Cotton Core','Soft stretch boxer brief with a supportive pouch and clean waistband.'],
  ['boxer-brief','Second-Skin Boxer Brief','Everyday Smooth','Close fit and smooth stretch for all-day comfort.'],
  ['boxer-brief','Modal Boxer Brief','Modal Core','Soft modal construction with a flexible fit.'],
  ['boxer-brief','Performance Boxer Brief','Performance','Breathable stretch construction for active days.'],
  ['boxer-brief','Longline Boxer Brief','Performance','Extended leg coverage with a smooth athletic fit.'],
  ['boxer-brief','Rib Boxer Brief','Rib Studio','Textured rib fabric with a secure waistband.'],
  ['boxer-brief','Airlight Boxer Brief','Airlight','Lightweight construction with minimal seams.'],
  ['boxer-brief','Contour Boxer Brief','Contour','Supportive front shape and clean side profile.'],
  ['boxer-brief','Studio Boxer Brief','Studio','A modern everyday boxer brief with a refined finish.'],
  ['boxer-brief','Flex Boxer Brief','Flex','Four-way stretch for unrestricted movement.'],
  ['boxer-brief','Softline Boxer Brief','Softline','Soft hand feel and dependable everyday support.'],
  ['boxer-brief','Core Black Boxer Brief','Core Black','A monochrome essential with a clean waistband.'],
  ['boxer-brief','Core White Boxer Brief','Core White','A crisp white essential in soft stretch fabric.'],
  ['boxer-brief','Graphite Boxer Brief','Graphite','Muted graphite color with a clean athletic silhouette.'],
  ['boxer-brief','Navy Boxer Brief','Navy Core','Deep navy stretch fabric with supportive construction.'],
  ['boxer-brief','Daily Boxer Brief','Everyday','A simple everyday boxer brief for rotation.'],
  ['boxer-brief','Seamless Boxer Brief','Invisible','Low-profile seams for a clean under-clothing finish.'],
  ['boxer-brief','Mesh Performance Boxer','Performance Mesh','Breathable mesh panels with supportive stretch.'],
  ['brief','Classic Cotton Brief','Cotton Core','Classic brief coverage in soft stretch cotton.'],
  ['brief','Minimal Modal Brief','Modal Core','Soft modal with a clean, compact silhouette.'],
  ['brief','Contour Brief','Contour','Supportive pouch and a close athletic fit.'],
  ['brief','Ribbed Brief','Rib Studio','Subtle rib texture with a comfortable waistband.'],
  ['brief','Airlight Brief','Airlight','Lightweight fabric for a barely-there feel.'],
  ['brief','Essential Black Brief','Core Black','Minimal black brief with clean lines.'],
  ['brief','Essential White Brief','Core White','Crisp white brief with soft stretch.'],
  ['brief','Performance Brief','Performance','Supportive stretch brief for training and movement.'],
  ['brief','Softline Brief','Softline','Comfort-first brief for everyday wear.'],
  ['brief','Studio Brief','Studio','Refined silhouette with a clean monochrome finish.'],
  ['brief','Low-Rise Brief','Everyday','Low-rise profile with a supportive pouch.'],
  ['brief','Flex Brief','Flex','Stretch construction for unrestricted movement.'],
  ['trunk','Essential Trunk','Cotton Core','Shorter leg length with soft stretch support.'],
  ['trunk','Modal Trunk','Modal Core','Soft modal and a compact athletic silhouette.'],
  ['trunk','Performance Trunk','Performance','Breathable stretch fabric for active movement.'],
  ['trunk','Rib Trunk','Rib Studio','Textured rib finish with a comfortable fit.'],
  ['trunk','Contour Trunk','Contour','Supportive pouch with a modern short leg.'],
  ['trunk','Airlight Trunk','Airlight','Lightweight stretch with low-profile seams.'],
  ['trunk','Core Black Trunk','Core Black','Monochrome black essential with clean lines.'],
  ['trunk','Navy Trunk','Navy Core','Deep navy fabric with a supportive fit.'],
  ['boxer','Classic Woven Boxer','Woven Core','Relaxed woven boxer with a comfortable waistband.'],
  ['boxer','Cotton Poplin Boxer','Woven Core','Lightweight cotton boxer with a clean, relaxed shape.'],
  ['boxer','Studio Lounge Boxer','Studio','Relaxed boxer designed for home and lounge wear.'],
  ['boxer','Soft Woven Boxer','Softline','Soft woven construction with easy movement.'],
  ['boxer','Everyday Boxer','Everyday','Simple woven boxer for daily rotation.'],
  ['jockstrap','Classic Support Jockstrap','Athletic Support','Supportive pouch and open-back strap construction.'],
  ['jockstrap','Sport Jockstrap','Performance','Athletic jockstrap designed for movement and support.'],
  ['jockstrap','Black Mesh Jockstrap','Mesh Performance','Breathable mesh pouch with supportive straps.'],
  ['jockstrap','Red Performance Jockstrap','Performance','Bold performance jockstrap with a supportive front.'],
  ['performance','Training Base Boxer','Training','Sweat-friendly stretch construction for training days.'],
  ['performance','Active Support Brief','Training','Supportive active brief with breathable stretch.'],
  ['performance','Motion Boxer Brief','Motion','Flexible boxer brief built for movement and recovery.']
];

// Main photos, one per product (m1-m26 = previously approved set, m27-m50 = new).
const MEN_IMAGES = [
  px(20203365),    // m1  Essential Boxer Brief
  px(8874436),     // m2  Second-Skin Boxer Brief
  px(17864093),    // m3  Modal Boxer Brief
  px(17864094),    // m4  Performance Boxer Brief
  px(5301650),     // m5  Longline Boxer Brief
  px(8874933),     // m6  Rib Boxer Brief
  px(8874670),     // m7  Airlight Boxer Brief
  px(8875156),     // m8  Contour Boxer Brief
  px(19112107),    // m9  Classic Cotton Brief
  px(8874879),     // m10 Minimal Modal Brief
  px(27126039),    // m11 Contour Brief
  px(19607415),    // m12 Ribbed Brief
  px(10036419),    // m13 Airlight Brief
  px(8874906),     // m14 Essential Black Brief
  px(17510799),    // m15 Essential Trunk
  px(17510795),    // m16 Modal Trunk
  px(17885546),    // m17 Performance Trunk
  px(20337698),    // m18 Rib Trunk
  px(20337699),    // m19 Classic Woven Boxer
  px(5301551),     // m20 Cotton Poplin Boxer
  px(10036396),    // m21 Studio Lounge Boxer
  px(20337684),    // m22 Classic Support Jockstrap
  px(8874682),     // m23 Sport Jockstrap
  px(8874672),     // m24 Black Mesh Jockstrap
  px(17956261),    // m25 Training Base Boxer
  px(5301653),     // m26 Active Support Brief
  px(20574034),    // m27 Studio Boxer Brief
  px(8874912),     // m28 Flex Boxer Brief
  px(8874703),     // m29 Softline Boxer Brief
  px(17864091),    // m30 Core Black Boxer Brief
  px(5301540),     // m31 Core White Boxer Brief
  px(14314744),    // m32 Graphite Boxer Brief
  px(8874708),     // m33 Navy Boxer Brief
  px(8874695),     // m34 Daily Boxer Brief
  px(5301552),     // m35 Seamless Boxer Brief
  px(8874904),     // m36 Mesh Performance Boxer
  px(17885545),    // m37 Essential White Brief
  px(15889854),    // m38 Performance Brief
  px(8874700),     // m39 Softline Brief
  px(29124823),    // m40 Studio Brief
  px(8874875),     // m41 Low-Rise Brief
  px(17750859),    // m42 Flex Brief
  px(8875228),     // m43 Contour Trunk
  px(18036975),    // m44 Airlight Trunk
  px(32735440),    // m45 Core Black Trunk
  px(30765821),    // m46 Navy Trunk
  px(30765819),    // m47 Soft Woven Boxer
  px(11193322),    // m48 Everyday Boxer
  px(7365481),     // m49 Red Performance Jockstrap
  px(5601165),     // m50 Motion Boxer Brief
];

// Hover photos, one per product.
const MEN_HOVER = [
  'https://images.rawpixel.com/image_social_portrait/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI2LTAxL3NyLWltYWdlLTI1MTIyNS1iYm0wMy1zLTc0MC5qcGc.jpg', // m1  Essential Boxer Brief      white  (your original photo)
  cdlp('boxer-brief-349257', 1727350309),                              // m2  Second-Skin Boxer Brief   black, no model
  cdlp('boxer-brief-415448', 1766054725),                              // m3  Modal Boxer Brief         black, no model
  cdlp('boxer-brief-921041', 1727350309),                              // m4  Performance Boxer Brief   black, no model
  'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1669344465-82ac50e2_e8bf.jpg?crop=0.867xw%3A0.867xh%3B0.0657xw%2C0.0994xh&resize=980%3A*', // m5  Longline Boxer Brief       gray   (your original photo)
  cdlp('boxer-brief-683409', 1768472324),                              // m6  Rib Boxer Brief           white, no model
  'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V8102DPR_SP25_MEN_S_ECOMM_ACCESSORIES_FLAT_LAY_1.png?v=1782942569&width=900', // m7  Airlight Boxer Brief      Vuori "Lifestyle Boxer Brief" flat lay, Sky Grey, no model
  'https://cdn.shopify.com/s/files/1/0022/4008/6074/files/V8102DPR_SP25_MENS_ECOMM_ACCESSORIES_FLAT_LAY_1.jpg?v=1736363074&width=900', // m8  Contour Boxer Brief       retailer photo (kept as previously approved)
  cdlp('boxer-brief-207021', 1727350309),                              // m9  Classic Cotton Brief      black
  cdlp('boxer-brief-9374220', 1784332108),                             // m10 Minimal Modal Brief       grey
  cdlp('boxer-brief-7752231', 1784332110),                             // m11 Contour Brief             grey
  px(30454619),                                                        // m12 Ribbed Brief                red & white underwear (replaces a duplicate of m22)
  cdlp('boxer-brief-321589', 1727350310),                              // m13 Airlight Brief            white
  cdlp('boxer-brief-1335438', 1784332109),                             // m14 Essential Black Brief     grey
  cdlp('boxer-brief-847571', 1727350309),                              // m15 Essential Trunk           black
  cdlp('boxer-brief-512286', 1727350310),                              // m16 Modal Trunk               white
  cdlp('boxer-brief-8653806', 1784332110),                             // m17 Performance Trunk         grey
  'https://www.mytheresa.com/image/1094/1238/100/cb/P00712777.jpg',    // m18 Rib Trunk                 mytheresa retailer photo (kept as it was; not re-checked)
  px(5301548),                                                         // m19 Classic Woven Boxer         white boxer shorts (replaces a duplicate of m1)
  cdlp('boxer-brief-123575', 1766056194),                              // m20 Cotton Poplin Boxer       white
  'https://anmore.com.tw/image/cache/catalog/820321/820321-10-1280x1280.jpg', // m21 Studio Lounge Boxer        blue   (your original photo)
  'https://i.pinimg.com/originals/5f/76/1d/5f761d77d242a32534df88ea8ad6a01f.png', // m22 Classic Support Jockstrap  red    (your original photo)
  px(8875224),                                                         // m23 Sport Jockstrap             gray underwear (replaces a duplicate of m5)
  cdlp('boxer-brief-3384085', 1784332111),                             // m24 Black Mesh Jockstrap      grey
  cdlp('boxer-brief-998329', 1727350310),                              // m25 Training Base Boxer       white
  px(8874859),                                                         // m26 Active Support Brief        studio portrait (replaces a duplicate of m7)
  px(8874674),                                                         // m27 Studio Boxer Brief
  px(8874678),                                                         // m28 Flex Boxer Brief
  px(8874684),                                                         // m29 Softline Boxer Brief
  px(6799554),                                                         // m30 Core Black Boxer Brief      black underwear
  px(11531187),                                                        // m31 Core White Boxer Brief      white brief
  px(8874887),                                                         // m32 Graphite Boxer Brief        gray underwear
  px(8874709),                                                         // m33 Navy Boxer Brief            blue brief
  px(8874701),                                                         // m34 Daily Boxer Brief
  px(8874867),                                                         // m35 Seamless Boxer Brief
  px(8874882),                                                         // m36 Mesh Performance Boxer
  px(8035081),                                                         // m37 Essential White Brief       white brief
  px(8874909),                                                         // m38 Performance Brief
  px(8874910),                                                         // m39 Softline Brief
  px(8874930),                                                         // m40 Studio Brief
  px(8875171),                                                         // m41 Low-Rise Brief
  px(8875173),                                                         // m42 Flex Brief
  px(17510796),                                                        // m43 Contour Trunk
  px(17864092),                                                        // m44 Airlight Trunk
  px(5175671),                                                         // m45 Core Black Trunk            black underwear
  px(8875188),                                                         // m46 Navy Trunk                  blue shorts
  px(5301557),                                                         // m47 Soft Woven Boxer
  px(3554398),                                                         // m48 Everyday Boxer
  px(5376954),                                                         // m49 Red Performance Jockstrap   red underwear
  px(7365273),                                                         // m50 Motion Boxer Brief
];

// Products m1-m26 are the styles that shipped before (their photos are matched to them by position),
// then the remaining 24 styles from menSpecs follow as m27-m50.
const pickCategorySpecs = (specs, limits) => {
  const seen = {};
  return specs.filter(([category]) => {
    seen[category] = (seen[category] || 0) + 1;
    return seen[category] <= (limits[category] || 0);
  });
};

const firstBatch = pickCategorySpecs(menSpecs, {
  'boxer-brief': 8, brief: 6, trunk: 4, boxer: 3, jockstrap: 3, performance: 2
});
const orderedSpecs = [...firstBatch, ...menSpecs.filter((s) => !firstBatch.includes(s))];

const CATEGORY_ORDER = ['boxer-brief', 'brief', 'trunk', 'boxer', 'jockstrap', 'performance'];

const colorOf = (name) =>
  /red/i.test(name) ? 'Red' :
  /white/i.test(name) ? 'White' :
  /black/i.test(name) ? 'Black' :
  /navy/i.test(name) ? 'Navy' :
  /graphite/i.test(name) ? 'Graphite' : 'As shown';

const built = orderedSpecs.map(([category, name, collection, description], i) => ({
  id: `m${i + 1}`,
  gender: 'Men',
  name, category, collection,
  price: 19 + ((i * 4) % 20),
  description,
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  image: MEN_IMAGES[i],
  images: [MEN_IMAGES[i]],
  hoverImage: MEN_HOVER[i],
  color: colorOf(name),
  badge: i === 0 ? 'BEST SELLER' : i === 5 ? 'NEW' : ''
}));

// Show the shop grouped by silhouette (stable sort keeps the original order inside each group).
const menProductsRaw = [...built].sort(
  (a, b) => CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
);

// Dev safety net: warn if any photo is used twice or the catalog is not 50 items.
const photoKey = (url) => {
  const pexels = url.match(/pexels\.com\/photos\/(\d+)\//);
  if (pexels) return `pexels:${pexels[1]}`;
  const cdlpFile = url.match(/cdlp\.com\/cdn\/shop\/files\/([^.?]+)/);
  if (cdlpFile) return `cdlp:${cdlpFile[1]}`;
  return url.split('?')[0];
};
const assertUniquePhotos = (items) => {
  const seen = new Map();
  items.forEach((p) => [['image', p.image], ['hover', p.hoverImage]].forEach(([kind, url]) => {
    const key = photoKey(url);
    if (seen.has(key)) console.warn(`[catalog] duplicate photo: ${p.id} (${kind}) reuses ${seen.get(key)}`);
    else seen.set(key, `${p.id} (${kind})`);
  }));
  if (items.length !== 50) console.warn(`[catalog] expected 50 products, found ${items.length}`);
};
assertUniquePhotos(menProductsRaw);

export const products = menProductsRaw;
export const menProducts = menProductsRaw;
