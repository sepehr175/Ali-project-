const W = [
  'https://images.pexels.com/photos/8732111/pexels-photo-8732111.jpeg?cs=srgb&dl=pexels-cottonbro-8732111.jpg&fm=jpg',
  'https://images.pexels.com/photos/9162885/pexels-photo-9162885.jpeg?cs=srgb&dl=pexels-victorcandiani-9162885.jpg&fm=jpg',
  'https://images.pexels.com/photos/8732117/pexels-photo-8732117.jpeg?cs=srgb&dl=pexels-cottonbro-8732117.jpg&fm=jpg',
  'https://images.pexels.com/photos/6195441/pexels-photo-6195441.jpeg?cs=srgb&dl=pexels-toni-6195441.jpg&fm=jpg',
  'https://images.pexels.com/photos/5253440/pexels-photo-5253440.jpeg?cs=srgb&dl=pexels-antonius-ferret-5253440.jpg&fm=jpg',
  'https://images.pexels.com/photos/16903006/pexels-photo-16903006.png?cs=srgb&dl=pexels-uriel-venegas-176524868-16903006.jpg&fm=jpg',
  'https://images.pexels.com/photos/5253425/pexels-photo-5253425.jpeg?cs=srgb&dl=pexels-antonius-ferret-5253425.jpg&fm=jpg',
  'https://images.pexels.com/photos/14192242/pexels-photo-14192242.jpeg?cs=srgb&dl=pexels-brunounreal-14192242.jpg&fm=jpg',
  'https://images.pexels.com/photos/7264262/pexels-photo-7264262.jpeg?cs=srgb&dl=pexels-toni-7264262.jpg&fm=jpg',
  'https://images.pexels.com/photos/16902981/pexels-photo-16902981.png?cs=srgb&dl=pexels-uriel-venegas-176524868-16902981.jpg&fm=jpg',
  'https://images.pexels.com/photos/9356539/pexels-photo-9356539.jpeg?cs=srgb&dl=pexels-victorcandiani-9356539.jpg&fm=jpg',
  'https://images.pexels.com/photos/9162889/pexels-photo-9162889.jpeg?cs=srgb&dl=pexels-victorcandiani-9162889.jpg&fm=jpg',
  'https://images.pexels.com/photos/19046384/pexels-photo-19046384.jpeg?cs=srgb&dl=pexels-vika-glitter-392079-19046384.jpg&fm=jpg',
  'https://images.pexels.com/photos/40901/lingerie-girl-sexy-beauty-40901.jpeg?cs=srgb&dl=pexels-pixabay-40901.jpg&fm=jpg',
  'https://images.pexels.com/photos/5253422/pexels-photo-5253422.jpeg?cs=srgb&dl=pexels-antonius-ferret-5253422.jpg&fm=jpg',
  'https://images.pexels.com/photos/8732122/pexels-photo-8732122.jpeg?cs=srgb&dl=pexels-cottonbro-8732122.jpg&fm=jpg',
  'https://images.pexels.com/photos/7264263/pexels-photo-7264263.jpeg?cs=srgb&dl=pexels-toni-7264263.jpg&fm=jpg',
  'https://images.pexels.com/photos/5253436/pexels-photo-5253436.jpeg?cs=srgb&dl=pexels-antonius-ferret-5253436.jpg&fm=jpg',
  'https://images.pexels.com/photos/26968036/pexels-photo-26968036.jpeg?cs=srgb&dl=pexels-brunounreal-26968036.jpg&fm=jpg',
  'https://images.pexels.com/photos/12458078/pexels-photo-12458078.jpeg?cs=srgb&dl=pexels-anastasia-ilina-makarova-140436704-12458078.jpg&fm=jpg',
  'https://images.pexels.com/photos/9784230/pexels-photo-9784230.jpeg?cs=srgb&dl=pexels-cottonbro-9784230.jpg&fm=jpg',
  'https://images.pexels.com/photos/6045708/pexels-photo-6045708.jpeg?cs=srgb&dl=pexels-skylar-kang-6045708.jpg&fm=jpg'
];

const M = [
  'https://images.pexels.com/photos/8874933/pexels-photo-8874933.jpeg?cs=srgb&dl=pexels-mike-jones-8874933.jpg&fm=jpg',
  'https://images.pexels.com/photos/17510799/pexels-photo-17510799.jpeg?cs=srgb&dl=pexels-modelstma-17510799.jpg&fm=jpg',
  'https://images.pexels.com/photos/17885546/pexels-photo-17885546.jpeg?cs=srgb&dl=pexels-modelstma-17885546.jpg&fm=jpg',
  'https://images.pexels.com/photos/17510795/pexels-photo-17510795.jpeg?cs=srgb&dl=pexels-modelstma-17510795.jpg&fm=jpg',
  'https://images.pexels.com/photos/17510796/pexels-photo-17510796.jpeg?cs=srgb&dl=pexels-modelstma-17510796.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874670/pexels-photo-8874670.jpeg?cs=srgb&dl=pexels-mike-jones-8874670.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874678/pexels-photo-8874678.jpeg?cs=srgb&dl=pexels-mike-jones-8874678.jpg&fm=jpg',
  'https://images.pexels.com/photos/20203365/pexels-photo-20203365.jpeg?cs=srgb&dl=pexels-insta1-20203365.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874930/pexels-photo-8874930.jpeg?cs=srgb&dl=pexels-mike-jones-8874930.jpg&fm=jpg',
  'https://images.pexels.com/photos/8875173/pexels-photo-8875173.jpeg?cs=srgb&dl=pexels-mike-jones-8875173.jpg&fm=jpg',
  'https://images.pexels.com/photos/17864093/pexels-photo-17864093.jpeg?cs=srgb&dl=pexels-modelstma-17864093.jpg&fm=jpg',
  'https://images.pexels.com/photos/17864094/pexels-photo-17864094.jpeg?cs=srgb&dl=pexels-modelstma-17864094.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874682/pexels-photo-8874682.jpeg?cs=srgb&dl=pexels-mike-jones-8874682.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874906/pexels-photo-8874906.jpeg?cs=srgb&dl=pexels-mike-jones-8874906.jpg&fm=jpg',
  'https://images.pexels.com/photos/5301653/pexels-photo-5301653.jpeg?cs=srgb&dl=pexels-armin-rimoldi-5301653.jpg&fm=jpg',
  'https://images.pexels.com/photos/20337699/pexels-photo-20337699.jpeg?cs=srgb&dl=pexels-blanxybuilding-20337699.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874674/pexels-photo-8874674.jpeg?cs=srgb&dl=pexels-mike-jones-8874674.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874910/pexels-photo-8874910.jpeg?cs=srgb&dl=pexels-mike-jones-8874910.jpg&fm=jpg',
  'https://images.pexels.com/photos/4519148/pexels-photo-4519148.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-4519148.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874904/pexels-photo-8874904.jpeg?cs=srgb&dl=pexels-mike-jones-8874904.jpg&fm=jpg',
  'https://images.pexels.com/photos/8875171/pexels-photo-8875171.jpeg?cs=srgb&dl=pexels-mike-jones-8875171.jpg&fm=jpg',
  'https://images.pexels.com/photos/29718127/pexels-photo-29718127.jpeg?cs=srgb&dl=pexels-renato-athayde-2147706045-29718127.jpg&fm=jpg',
  'https://images.pexels.com/photos/5175665/pexels-photo-5175665.jpeg?cs=srgb&dl=pexels-anntarazevich-5175665.jpg&fm=jpg',
  'https://images.pexels.com/photos/5301557/pexels-photo-5301557.jpeg?cs=srgb&dl=pexels-armin-rimoldi-5301557.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874882/pexels-photo-8874882.jpeg?cs=srgb&dl=pexels-mike-jones-8874882.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874701/pexels-photo-8874701.jpeg?cs=srgb&dl=pexels-mike-jones-8874701.jpg&fm=jpg',
  'https://images.pexels.com/photos/17864092/pexels-photo-17864092.jpeg?cs=srgb&dl=pexels-modelstma-17864092.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874867/pexels-photo-8874867.jpeg?cs=srgb&dl=pexels-mike-jones-8874867.jpg&fm=jpg',
  'https://images.pexels.com/photos/30765820/pexels-photo-30765820.jpeg?cs=srgb&dl=pexels-monirathnak-30765820.jpg&fm=jpg',
  'https://images.pexels.com/photos/4746705/pexels-photo-4746705.jpeg?cs=srgb&dl=pexels-ketut-subiyanto-4746705.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874909/pexels-photo-8874909.jpeg?cs=srgb&dl=pexels-mike-jones-8874909.jpg&fm=jpg',
  'https://images.pexels.com/photos/17956266/pexels-photo-17956266.jpeg?cs=srgb&dl=pexels-mohammad-ubaid-584981963-17956266.jpg&fm=jpg',
  'https://images.pexels.com/photos/8874684/pexels-photo-8874684.jpeg?cs=srgb&dl=pexels-mike-jones-8874684.jpg&fm=jpg'
];

const J = [
  'https://cdn.media.amplience.net/i/frasersdev/42318803_o_a10.jpg?v=20240417082012',
  'https://www.lgbtqoutpost.com/cdn/shop/files/BAS304BLU_Classic_Jock_Blue_PDC_resize_2000x._46ee946a-e1fc-4e41-aaba-bd065acc2193.jpg?v=1771371691&width=1024',
  'https://www.bikeathletic.com/cdn/shop/files/BAS303_BLACK_003_38330135-8a73-49f6-979d-ce2310d541c0_grande.jpg?v=1771355742',
  'https://www.bikeathletic.com/cdn/shop/files/BAS305_RED_3ff9973f-0ef2-477f-b3ac-ea0d11fde538_grande.jpg?v=1771355996',
  'https://imagescdn.simons.ca/images/10467-24302-19-A1_2/logo-waist-solid-jockstrap.jpg?__=3'
];

const womenSpecs = [
  ['bra','Sculpt Wireless Bra','Studio Soft','A smooth everyday bra with a clean neckline and soft support.'],
  ['bra','Second-Skin T-Shirt Bra','Everyday Smooth','Minimal seams and a soft silhouette designed for everyday layering.'],
  ['bra','Contour Plunge Bra','Contour','A refined plunge shape with supportive cups and a polished finish.'],
  ['bra','Cloud Triangle Bra','Cloud Modal','Lightweight triangle construction with a soft hand feel.'],
  ['bra','Lace Demi Bra','Lace Atelier','Delicate lace coverage with a modern demi shape.'],
  ['bra','Essential Cotton Bralette','Cotton Core','Stretch cotton bralette for simple, comfortable daily wear.'],
  ['bra','Soft Rib Bralette','Soft Rib','Textured rib fabric with an easy pull-on fit.'],
  ['bra','Satin Trim Bra','Satin Edit','Clean satin trim and smooth cups for a refined finish.'],
  ['bra','Everyday Support Bra','Everyday Smooth','Reliable support with a soft elastic underband.'],
  ['bra','Airlight Bralette','Airlight','Breathable, barely-there construction for warm days.'],
  ['bra','Studio Lace Bralette','Lace Studio','A soft lace layer with a modern minimal shape.'],
  ['bra','Invisible Seam Bra','Invisible','Smooth edges designed to disappear under clothing.'],
  ['panty','Essential Cotton Brief','Cotton Core','High-comfort cotton brief with a clean waistband.'],
  ['panty','Second-Skin Brief','Everyday Smooth','Soft stretch brief with a barely-there finish.'],
  ['panty','High-Rise Sculpt Brief','Contour','Higher coverage with smooth shaping through the waist.'],
  ['panty','Cloud Modal Brief','Cloud Modal','Soft modal fabric with a relaxed everyday fit.'],
  ['panty','Lace Edge Brief','Lace Atelier','Clean brief silhouette finished with delicate lace.'],
  ['panty','Invisible Brief','Invisible','Smooth edges and lightweight fabric for a seamless look.'],
  ['panty','Ribbed High-Cut Brief','Soft Rib','High-cut leg and soft rib texture for a modern profile.'],
  ['panty','Daily Mid-Rise Brief','Essential Cotton','Balanced coverage and a soft cotton feel.'],
  ['panty','Softline Brief','Softline','A simple brief built for everyday rotation.'],
  ['panty','Minimal Full Brief','Minimal','Fuller coverage with a clean monochrome finish.'],
  ['panty','Airlight Brief','Airlight','Lightweight stretch construction with minimal seams.'],
  ['panty','Studio Brief','Studio','A refined everyday brief with a clean edge.'],
  ['bikini','Essential Bikini','Cotton Core','Classic bikini coverage in soft stretch fabric.'],
  ['bikini','Seamless Bikini','Invisible','Smooth seamless bikini designed for low visibility.'],
  ['bikini','Lace Bikini','Lace Atelier','Delicate lace details with a comfortable bikini cut.'],
  ['bikini','Contour Bikini','Contour','Clean lines and a slightly higher waist for definition.'],
  ['bikini','Soft Rib Bikini','Soft Rib','Textured rib fabric with an easy everyday fit.'],
  ['bikini','Cloud Bikini','Cloud Modal','Lightweight modal construction with soft stretch.'],
  ['bikini','High-Cut Bikini','Studio','A high-cut leg creates a modern, elongated profile.'],
  ['bikini','Daily Bikini','Everyday Smooth','A reliable everyday bikini with soft edges.'],
  ['thong','Second-Skin Thong','Everyday Smooth','Minimal coverage and smooth stretch for invisible layering.'],
  ['thong','Lace Thong','Lace Atelier','Fine lace construction with a clean front.'],
  ['thong','Seamless Thong','Invisible','Bonded-feel edges for a smooth silhouette.'],
  ['thong','Cotton Stretch Thong','Cotton Core','Soft cotton stretch with a simple modern cut.'],
  ['thong','Contour Thong','Contour','A clean contour fit designed for low visibility.'],
  ['thong','Airlight Thong','Airlight','Lightweight fabric and minimal seams for everyday wear.'],
  ['hipster','Soft Modal Hipster','Cloud Modal','Soft modal with comfortable hip coverage.'],
  ['hipster','Lace Hipster','Lace Studio','Lace texture and a balanced low-rise shape.'],
  ['hipster','Essential Hipster','Cotton Core','A dependable everyday hipster in soft stretch cotton.'],
  ['hipster','Invisible Hipster','Invisible','Smooth bonded edges for a seamless look.'],
  ['boyshort','Studio Boyshort','Studio Rib','Soft coverage with a clean boyshort silhouette.'],
  ['boyshort','Lace Boyshort','Lace Atelier','A delicate lace boyshort with comfortable coverage.'],
  ['boyshort','Cotton Boyshort','Cotton Core','Stretch cotton and fuller coverage for everyday comfort.'],
  ['lace','Signature Lace Set','Lace Atelier','A coordinated lace bra-and-panty visual for the editorial collection.'],
  ['lace','Noir Lace Brief','Lace Studio','Black lace texture with a refined minimal finish.'],
  ['lace','Soft Lace Triangle','Lace Studio','Light lace texture with a modern triangle silhouette.'],
  ['stockings','Sheer Studio Stockings','Studio Hosiery','Sheer hosiery with a clean, minimal finish.'],
  ['stockings','Everyday Sheer Stockings','Everyday Hosiery','Lightweight stockings designed to complement the underwear collection.']
];

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

// Pexels CDN resizing keeps the browser payload small while preserving an exact 273x350 card image.
const optimize = (url) => {
  if (url.includes('images.pexels.com')) {
    return url.replace(/\?.*$/, '') + '?auto=compress&cs=tinysrgb&w=273&h=350&fit=crop&q=72';
  }
  if (url.includes('cdn.media.amplience.net')) {
    return url.split('?')[0] + '?w=273&h=350&sm=c&fmt=jpg&q=72';
  }
  if (url.includes('/cdn/shop/')) {
    return url.match(/[?&]width=\d+/) ? url.replace(/([?&])width=\d+/, '$1width=273') : url + '&width=273';
  }
  return url;
};

const W_OPT = W.map(optimize);
const M_OPT = M.map(optimize);
const J_OPT = J.map(optimize);

// Exactly 50 distinct hero images are used across the 100-product catalog.
// Remaining products reuse only after those 50 unique images are exhausted.
const WOMEN_IMAGES = W_OPT;
// Keep only the 26 distinct men's images requested: 23 men's catalog photos + 3 dedicated jockstrap photos.
const MEN_IMAGES = [...[0,1,2,5,7,8,9,10,12,14,15,16,18,19,20,21,22,23,24,25,26,27,28].map(i=>M_OPT[i]), ...J_OPT.slice(0,3)];

const pickCategorySpecs = (specs, limits) => {
  const seen = {};
  return specs.filter(([category]) => {
    seen[category] = (seen[category] || 0) + 1;
    return seen[category] <= (limits[category] || 0);
  });
};

// 22 women + 26 men. Every catalog product receives one unique photo; no product image is reused.
const womenCatalogSpecs = pickCategorySpecs(womenSpecs, {
  bra: 6, panty: 5, bikini: 3, thong: 2, hipster: 2, boyshort: 1, lace: 1, stockings: 2
});
const menCatalogSpecs = pickCategorySpecs(menSpecs, {
  'boxer-brief': 8, brief: 6, trunk: 4, boxer: 3, jockstrap: 3, performance: 2
});

const make = (specs, gender, prefix, imagePool) => specs.map((s, i) => {
  const [category, name, collection, description] = s;
  const img = imagePool[i];
  return {
    id: `${prefix}${i + 1}`,
    gender, name, category, collection,
    price: gender === 'Women' ? 18 + ((i * 3) % 18) : 19 + ((i * 4) % 20),
    description,
    sizes: gender === 'Women' ? ['XS','S','M','L','XL'] : ['S','M','L','XL','XXL'],
    image: img,
    images: [img],
    color: /red/i.test(name) ? 'Red' : /white/i.test(name) ? 'White' : /black/i.test(name) ? 'Black' : /navy/i.test(name) ? 'Navy' : 'As shown',
    badge: i === 0 ? 'BEST SELLER' : i === 5 ? 'NEW' : ''
  };
});

const womenProductsRaw = make(womenCatalogSpecs, 'Women', 'w', WOMEN_IMAGES);
const menProductsRaw = make(menCatalogSpecs, 'Men', 'm', MEN_IMAGES);

export const products = [...womenProductsRaw, ...menProductsRaw];
export const womenProducts = womenProductsRaw;
export const menProducts = menProductsRaw;

