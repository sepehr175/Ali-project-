import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom";
import { Search, ShoppingBag, UserRound, Menu, X, ArrowRight, ChevronDown, Minus, Plus, Trash2, CreditCard, CheckCircle2, Instagram, Mail, MapPin, Truck, CalendarDays, Home as HomeIcon, Sparkles } from "lucide-react";
import { products } from "./products";
import "./index.css";

const money = (n) => `€${n.toFixed(2)}`;
const CATALOG_VERSION = "underwear-only-v10";

// Stop the browser from restoring the previous scroll position on its own; we control it below.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Every navigation (product, menu link, mobile bar, search, back/forward, even re-clicking the
// current link) shows the new page from the very top. useLayoutEffect runs BEFORE the browser
// paints, so the user never sees the new page at the old scroll position or scrolling up.
function ScrollToTop() {
  const { key } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0; // iOS Safari / older browsers
    document.body.scrollTop = 0;
  }, [key]);
  return null;
}

function useReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("is-visible")), { threshold: .12 });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, deps);
}

function App() {
  const [cart, setCart] = useState(() => {
    if (localStorage.getItem("noirline-catalog-version") !== CATALOG_VERSION) {
      localStorage.removeItem("noirline-cart");
      localStorage.setItem("noirline-catalog-version", CATALOG_VERSION);
      return [];
    }
    return JSON.parse(localStorage.getItem("noirline-cart") || "[]");
  });
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [account, setAccount] = useState(false);
  const [profile, setProfile] = useState(() => JSON.parse(localStorage.getItem("noirline-profile") || "null"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menu]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearch(params.get("q") || "");
  }, [location.pathname, location.search]);

  useEffect(() => localStorage.setItem("noirline-cart", JSON.stringify(cart)), [cart]);

  const add = (product, size) => setCart(prev => {
    const key = `${product.id}-${size}`;
    const found = prev.find(x => x.key === key);
    return found ? prev.map(x => x.key === key ? {...x, qty:x.qty+1} : x) : [...prev, {key, product, size, qty:1}];
  });
  const update = (key, qty) => setCart(prev => qty <= 0 ? prev.filter(x => x.key !== key) : prev.map(x => x.key === key ? {...x, qty} : x));
  const clear = () => setCart([]);
  const count = cart.reduce((s,x)=>s+x.qty,0);
  const subtotal = cart.reduce((s,x)=>s+x.product.price*x.qty,0);

  return <div className="min-h-screen bg-[#050505] text-white">
    <ScrollToTop/>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="hidden md:flex h-16 items-center justify-between px-6 lg:px-10">
        <Link to="/" className="text-lg font-black tracking-[.35em]">NOIRLINE</Link>
        <nav className="flex items-center gap-8 text-[11px] uppercase tracking-[.18em]">
          <Link className="underline-grow" to="/">Home</Link>
          <Link className="underline-grow" to="/shop/women">Women</Link>
          <Link className="underline-grow" to="/shop/men">Men</Link>
          <Link className="underline-grow" to="/orders">Orders</Link>
          <Link className="underline-grow" to="/raffle">Raffle</Link>
          <Link className="underline-grow" to="/about">About</Link>
          <Link className="underline-grow" to="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <form onSubmit={e=>{e.preventDefault(); const q=search.trim(); navigate(q?`/search?q=${encodeURIComponent(q)}`:'/search');}} className="flex items-center border-b border-white/30">
            <button type="submit" aria-label="Search"><Search size={16}/></button>
            <input aria-label="Search products" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search" className="w-32 bg-transparent px-2 py-2 text-xs outline-none"/>
          </form>
          <button onClick={()=>setAccount(v=>!v)} aria-label="Account" className="flex items-center gap-2">
            {profile ? <><span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">{profile.name.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}</span><span className="max-w-[150px] truncate text-[10px] text-white/70">{profile.email}</span></> : <UserRound size={18}/>}
          </button>
          <Link to="/cart" className="relative" aria-label="Cart"><ShoppingBag size={18}/>{count>0&&<span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[9px] text-black">{count}</span>}</Link>
        </div>
      </div>

      <div className="flex h-16 items-center justify-between px-4 md:hidden">
        <button onClick={()=>setMenu(v=>!v)} aria-label={menu ? "Close menu" : "Open menu"} className="relative z-[60] flex h-10 w-10 items-center justify-center">{menu?<X/>:<Menu/>}</button>
        <Link to="/" onClick={()=>setMenu(false)} className="text-sm font-black tracking-[.32em]">NOIRLINE</Link>
        <Link to="/cart" onClick={()=>setMenu(false)} className="relative z-[60] flex h-10 w-10 items-center justify-center"><ShoppingBag size={20}/>{count>0&&<span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[9px] text-black">{count}</span>}</Link>
      </div>

      {menu && <div className="mobile-menu-overlay fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto bg-black px-6 py-10 md:hidden">
        <div className="flex min-h-full flex-col">
          <div className="grid gap-7 text-sm uppercase tracking-[.2em]">
            <Link onClick={()=>setMenu(false)} to="/">Home</Link>
            <Link onClick={()=>setMenu(false)} to="/shop/women">Women</Link>
            <Link onClick={()=>setMenu(false)} to="/shop/men">Men</Link>
            <Link onClick={()=>setMenu(false)} to="/orders">Orders</Link>
            <Link onClick={()=>setMenu(false)} to="/raffle">Raffle</Link>
            <Link onClick={()=>setMenu(false)} to="/about">About</Link>
            <Link onClick={()=>setMenu(false)} to="/contact">Contact</Link>
            <Link onClick={()=>setMenu(false)} to="/account">Sign In</Link>
            <Link onClick={()=>setMenu(false)} to="/account?mode=register">Register</Link>
          </div>
        </div>
      </div>}
    </header>

    {account && <div className="fixed right-6 top-20 z-50 w-[min(22rem,calc(100vw-2rem))] border border-white/15 bg-neutral-950 p-6 shadow-2xl">
      <p className="text-xs uppercase tracking-[.2em] text-white/50">Account</p>
      {profile ? <><div className="mt-4 flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-bold text-black">{profile.name.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}</span><div><p className="font-semibold">{profile.name}</p><p className="text-xs text-white/45">{profile.email}</p></div></div><p className="mt-4 text-sm text-white/55">Thank you, {profile.name}. Your profile is active across the NOIRLINE storefront.</p><Link to="/account" onClick={()=>setAccount(false)} className="mt-5 block border border-white px-4 py-3 text-center text-xs uppercase tracking-[.18em]">See Your Account</Link><button onClick={()=>{localStorage.removeItem("noirline-profile");setProfile(null);setAccount(false);navigate("/")}} className="mt-2 w-full border border-white/10 px-4 py-3 text-xs uppercase tracking-[.18em] text-white/60">Log out</button></> : <><h3 className="mt-2 text-xl">Welcome to NOIRLINE</h3><p className="mt-3 text-sm leading-6 text-white/60">Sign in or register to show your name and email across the storefront.</p><div className="mt-5 grid grid-cols-2 gap-2"><Link to="/account" onClick={()=>setAccount(false)} className="border border-white px-4 py-3 text-center text-xs uppercase tracking-[.18em]">Sign In</Link><Link to="/account?mode=register" onClick={()=>setAccount(false)} className="border border-white/10 px-4 py-3 text-center text-xs uppercase tracking-[.18em] text-white/70">Register</Link></div></>}
    </div>}

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop/:gender" element={<Shop/>}/>
      <Route path="/product/:id" element={<Product add={add}/>}/>
      <Route path="/search" element={<SearchPage add={add}/>}/>
      <Route path="/cart" element={<Cart cart={cart} update={update} subtotal={subtotal} clear={clear}/>}/>
      <Route path="/checkout" element={<Checkout cart={cart} subtotal={subtotal} clear={clear}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/account" element={<Account profile={profile} setProfile={setProfile}/>}/>
      <Route path="/order-dashboard" element={<OrderDashboard/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/raffle" element={<Raffle/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>

    <Footer/>
    <MobileBar count={count}/>
  </div>
}

function Home() {
  useReveal(["home"]);
  return <>
    <section className="relative min-h-[78vh] overflow-hidden">
      <img src={products[1].image} className="hero-pulse absolute inset-0 h-full w-full object-cover opacity-55" alt="NOIRLINE editorial fashion"/>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/45 to-black/10"/>
      <div className="relative flex min-h-[78vh] max-w-7xl items-end px-5 pb-16 md:px-10 md:pb-24">
        <div className="max-w-2xl fade-up">
          <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-white/60">NOIRLINE / 001 — UNDERWEAR, REFRAMED</p>
          <h1 className="text-5xl font-black uppercase leading-[.88] tracking-[-.04em] md:text-8xl">Nothing<br/>extra.</h1>
          <p className="mt-7 max-w-md text-sm leading-6 text-white/70 md:text-base">Modern essentials for every body. Quiet silhouettes, considered fabrics, and a monochrome point of view.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop/women" className="group flex items-center gap-5 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[.18em] text-black">Shop women <ArrowRight size={16} className="transition group-hover:translate-x-1"/></Link>
            <Link to="/shop/men" className="group flex items-center gap-5 border border-white/50 px-6 py-4 text-xs font-bold uppercase tracking-[.18em]">Shop men <ArrowRight size={16} className="transition group-hover:translate-x-1"/></Link>
          </div>
        </div>
      </div>
    </section>

    <div className="overflow-hidden border-y border-white/10 py-4 text-[10px] uppercase tracking-[.32em] text-white/55">
      <div className="marquee flex w-max gap-12"><span>SOFT / SHARP / SIMPLE</span><span>48 ESSENTIALS</span><span>BLACK & WHITE</span><span>DESIGNED FOR EVERYDAY</span><span>SOFT / SHARP / SIMPLE</span><span>48 ESSENTIALS</span><span>BLACK & WHITE</span><span>DESIGNED FOR EVERYDAY</span></div>
    </div>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-8 md:grid-cols-2">
        <EditorialTile title="Women / Underwear" to="/shop/women" image={products[7].image} kicker="Soft lace / seamless / cotton"/>
        <EditorialTile title="My Underwear" to="/shop/men" image={products.find(p=>p.gender === "Men")?.image} kicker="Men / boxer briefs / briefs / jockstraps"/>
      </div>
    </section>

    <section className="border-y border-white/10">
      <div className="mx-auto grid max-w-7xl md:grid-cols-3">
        {[
          ["01","Engineered comfort","Every silhouette is built around movement, softness and clean lines."],
          ["02","One monochrome world","A strictly black-and-white visual system keeps the collection focused."],
          ["03","Made to rotate","48 core styles across women's and men's underwear categories."]
        ].map(([n,t,d])=><div key={n} className="reveal border-b border-white/10 p-7 md:border-b-0 md:border-r md:p-10 last:md:border-r-0"><span className="text-xs text-white/40">{n}</span><h3 className="mt-12 text-2xl font-semibold">{t}</h3><p className="mt-4 text-sm leading-6 text-white/55">{d}</p></div>)}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[.28em] text-white/45">THE EDIT</p><h2 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">Our products.</h2></div><Link to="/shop/women" className="hidden text-xs uppercase tracking-[.2em] md:block">View all →</Link></div>
      <ProductGrid items={products.slice(0,6)} />
    </section>

    <section className="border-y border-white/10 bg-white text-black">
      <div className="mx-auto grid max-w-7xl gap-0 md:grid-cols-[1.05fr_.95fr]">
        <div className="reveal flex min-h-[420px] flex-col justify-between p-8 md:p-14">
          <div><p className="text-[10px] uppercase tracking-[.3em] text-black/45">THE NOIRLINE ROUTINE</p><h2 className="mt-4 max-w-xl text-5xl font-black uppercase leading-[.9] tracking-[-.05em] md:text-7xl">Build your<br/>daily rotation.</h2><p className="mt-7 max-w-lg text-sm leading-7 text-black/60">Choose a few essentials, keep the palette simple, and make getting dressed easier. Explore the collection by wardrobe or by silhouette.</p></div>
          <div className="mt-10 flex flex-wrap gap-3"><Link to="/shop/women" className="bg-black px-6 py-4 text-xs font-bold uppercase tracking-[.18em] text-white">Women</Link><Link to="/shop/men" className="border border-black px-6 py-4 text-xs font-bold uppercase tracking-[.18em]">Men</Link></div>
        </div>
        <div className="grid grid-cols-2 border-t border-black/10 md:border-l md:border-t-0">
          {[['01','Everyday','Soft essentials for the daily rotation.'],['02','Statement','Lace, mesh and sharper silhouettes.'],['03','Minimal','Clean lines with no unnecessary detail.'],['04','Performance','Supportive pieces for movement.']].map(([n,t,d])=><div key={n} className="reveal border-b border-black/10 p-7 last:border-b-0 even:border-l md:p-10"><span className="text-xs text-black/35">{n}</span><h3 className="mt-12 text-2xl font-semibold">{t}</h3><p className="mt-4 text-sm leading-6 text-black/55">{d}</p></div>)}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/shop/women" className="reveal group border border-white/10 p-7 transition hover:-translate-y-2 hover:border-white/40"><Sparkles size={18}/><h3 className="mt-16 text-2xl font-semibold">New silhouettes</h3><p className="mt-3 text-sm leading-6 text-white/45">Discover the newest pieces in the women’s and men’s edits.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em]">Explore <ArrowRight size={14}/></span></Link>
        <Link to="/shop/men" className="reveal group border border-white/10 p-7 transition hover:-translate-y-2 hover:border-white/40"><Truck size={18}/><h3 className="mt-16 text-2xl font-semibold">Easy delivery</h3><p className="mt-3 text-sm leading-6 text-white/45">A simple demo checkout followed by a clear delivery dashboard.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em]">Shop men <ArrowRight size={14}/></span></Link>
        <Link to="/about" className="reveal group border border-white/10 p-7 transition hover:-translate-y-2 hover:border-white/40"><CheckCircle2 size={18}/><h3 className="mt-16 text-2xl font-semibold">Made to rotate</h3><p className="mt-3 text-sm leading-6 text-white/45">48 focused styles, split cleanly across the two wardrobes.</p><span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.18em]">About NOIRLINE <ArrowRight size={14}/></span></Link>
      </div>
    </section>
  </>
}

function EditorialTile({title,to,image,kicker}) {
  return <Link to={to} className="editorial-float group image-zoom relative block aspect-[4/5] overflow-hidden bg-neutral-900">
    <img src={image} alt="" className="h-full w-full object-cover opacity-80"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent"/>
    <div className="absolute inset-x-0 bottom-0 p-7 md:p-10"><p className="text-[9px] uppercase tracking-[.3em] text-white/55">{kicker}</p><h3 className="mt-3 text-3xl font-semibold">{title}</h3><span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[.18em]">Explore <ArrowRight size={14}/></span></div>
  </Link>
}

function Shop() {
  const {gender: rawGender} = useParams();
  const gender = rawGender?.toLowerCase() === "men" ? "men" : "women";
  const [category,setCategory]=useState("all");
  const [sort,setSort]=useState("featured");
  useEffect(()=>setCategory("all"),[gender]);
  const genderItems=useMemo(()=>products.filter(p=>p.gender.toLowerCase()===gender),[gender]);
  const items=useMemo(()=>{
    let x=category==="all" ? [...genderItems] : genderItems.filter(p=>p.category===category);
    if(sort==="price-low") x.sort((a,b)=>a.price-b.price);
    if(sort==="price-high") x.sort((a,b)=>b.price-a.price);
    return x;
  },[genderItems,category,sort]);
  const cats=[...new Set(genderItems.map(p=>p.category))];
  useReveal([gender, category, sort, items.length]);
  return <main className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
    <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end">
      <div><p className="text-[10px] uppercase tracking-[.3em] text-white/45">SHOP / {gender}</p><h1 className="mt-3 text-5xl font-black uppercase tracking-[-.04em] md:text-7xl">{gender}'s underwear</h1><p className="mt-5 max-w-xl text-sm leading-6 text-white/55">A dedicated {gender}'s catalog. This page only queries {gender}'s products, so women and men never mix in the category view.</p></div>
      <div className="flex items-center gap-3"><span className="text-xs text-white/45">{items.length} styles</span><select value={sort} onChange={e=>setSort(e.target.value)} className="border border-white/15 bg-black px-4 py-3 text-xs uppercase tracking-[.12em] outline-none"><option value="featured">Featured</option><option value="price-low">Price: low</option><option value="price-high">Price: high</option></select></div>
    </div>
    <div className="no-scrollbar flex gap-2 overflow-x-auto py-6">
      <FilterButton active={category==="all"} onClick={()=>setCategory("all")}>All</FilterButton>
      {cats.map(c=><FilterButton key={c} active={category===c} onClick={()=>setCategory(c)}>{c.replaceAll('-', ' ')}</FilterButton>)}
    </div>
    <ProductGrid items={items}/>
  </main>
}

function FilterButton({active,onClick,children}) { return <button onClick={onClick} className={`whitespace-nowrap border px-4 py-2 text-[10px] uppercase tracking-[.16em] transition ${active?"border-white bg-white text-black":"border-white/15 text-white/60 hover:border-white/50 hover:text-white"}`}>{children}</button> }

function ProductGrid({items}) {
  return <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 md:gap-y-14">
    {items.map((p,i)=><ProductCard key={p.id} p={p} i={i}/>)}
  </div>
}
function ProductCard({p,i}) {
  return <Link to={`/product/${p.id}`} className="reveal group block" style={{transitionDelay:`${(i%4)*70}ms`}}>
    <div className="product-media image-zoom relative overflow-hidden bg-white product-card-media">
      <img
        src={p.image}
        alt={p.name}
        loading="lazy"
        decoding="async"
        width="273"
        height="350"
        className="product-primary-image h-full w-full object-cover opacity-95"
        style={{objectPosition:p.gender === "Men" ? "50% 72%" : "50% 50%"}}
        onError={e=>{e.currentTarget.style.display="none"; e.currentTarget.parentElement.classList.add("image-failed")}}
      />
      {p.hoverImage && <img
        src={p.hoverImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        width="273"
        height="350"
        className="product-hover-image absolute inset-0 h-full w-full object-cover"
        onError={e=>{e.currentTarget.style.display="none"}}
      />}
      <span className="product-hover-label pointer-events-none absolute left-3 bottom-3 bg-white/95 px-2 py-1 text-[8px] font-bold uppercase tracking-[.16em] text-black">Product view</span>
      {p.badge && <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[8px] font-bold tracking-[.15em] text-black">{p.badge}</span>}
      <span className="absolute bottom-3 right-3 translate-y-2 bg-black px-3 py-2 text-[9px] uppercase tracking-[.14em] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">Quick view</span>
    </div>
    <div className="pt-4"><div className="flex justify-between gap-2"><h3 className="text-xs font-medium md:text-sm">{p.name}</h3><span className="text-xs text-white/70">{money(p.price)}</span></div><p className="mt-2 text-[9px] uppercase tracking-[.16em] text-white/35">{p.collection} · {p.category}</p></div>
  </Link>
}

function Product({add}) {
  const {id}=useParams(); const p=products.find(x=>x.id===id); const [size,setSize]=useState(p?.sizes[2]||p?.sizes[0]); const [added,setAdded]=useState(false); const [activeImage,setActiveImage]=useState(0);
  useEffect(()=>setActiveImage(0),[id]);
  if(!p) return <NotFound/>;
  const gallery=p.images?.length ? p.images : [p.image];
  return <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
    <div className="grid gap-10 md:grid-cols-[1.15fr_.85fr] md:gap-16">
      <div>
        <div className="image-zoom product-main-image overflow-hidden bg-white"><img src={gallery[activeImage]} alt={p.name} loading="eager" decoding="async" width="273" height="350" className="h-auto w-full object-cover" style={{objectPosition:p.gender === "Men" ? "50% 72%" : "50% 50%"}} onError={e=>{e.currentTarget.style.display="none"}}/></div>
        <div className="mt-3 grid grid-cols-3 gap-3">{gallery.map((img,i)=><button key={img} onClick={()=>setActiveImage(i)} className={`overflow-hidden border ${activeImage===i?'border-white':'border-white/10 opacity-60 hover:opacity-100'}`}><img src={img} alt={`${p.name} view ${i+1}`} loading="lazy" decoding="async" width="273" height="350" className="aspect-[273/350] w-full object-cover bg-white" style={{objectPosition:p.gender === "Men" ? "50% 72%" : "50% 50%"}}/></button>)}</div>
      </div>
      <div className="md:sticky md:top-28 md:self-start">
        <Link to={`/shop/${p.gender.toLowerCase()}`} className="text-[9px] uppercase tracking-[.25em] text-white/40">← {p.gender}'s underwear</Link>
        <div className="mt-8 flex items-start justify-between gap-5"><div><p className="text-[10px] uppercase tracking-[.25em] text-white/45">{p.collection}</p><h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{p.name}</h1></div><span className="text-lg">{money(p.price)}</span></div>
        <p className="mt-7 max-w-lg text-sm leading-7 text-white/60">{p.description}</p>
        <div className="mt-9 border-y border-white/10 py-7"><div className="mb-4 flex items-center justify-between"><span className="text-[10px] uppercase tracking-[.2em]">Select size</span><span className="text-[10px] uppercase tracking-[.15em] text-white/40">Color: {p.color}</span></div><div className="grid grid-cols-5 gap-2">{p.sizes.map(s=><button key={s} onClick={()=>setSize(s)} className={`border py-3 text-xs transition ${size===s?"border-white bg-white text-black":"border-white/15 hover:border-white/60"}`}>{s}</button>)}</div></div>
        <button onClick={()=>{add(p,size);setAdded(true);setTimeout(()=>setAdded(false),1600)}} className="mt-7 flex w-full items-center justify-center gap-3 bg-white py-5 text-xs font-bold uppercase tracking-[.2em] text-black hover:bg-white/90">{added?<><CheckCircle2 size={17}/> Added to cart</>:<>Add to cart <ShoppingBag size={16}/></>}</button>
        <div className="mt-8 grid grid-cols-3 border border-white/10"><div className="p-4 text-center text-[9px] uppercase tracking-[.14em] text-white/45">Soft touch</div><div className="border-x border-white/10 p-4 text-center text-[9px] uppercase tracking-[.14em] text-white/45">Easy returns</div><div className="p-4 text-center text-[9px] uppercase tracking-[.14em] text-white/45">Secure demo</div></div>
      </div>
    </div>
  </main>
}

function SearchPage({add}) {
  const [params] = useSearchParams();
  const q = (params.get("q") || "").trim();
  const needle = q.toLowerCase();
  const results = needle
    ? products.filter(p=>`${p.name} ${p.category} ${p.collection} ${p.gender} ${p.description}`.toLowerCase().includes(needle))
    : products;
  useReveal([q, results.length]);
  return <main className="mx-auto min-h-[60vh] max-w-7xl px-5 py-12 md:px-10 md:py-20">
    <p className="text-[10px] uppercase tracking-[.3em] text-white/45">SEARCH / {q || "ALL PRODUCTS"}</p>
    <div className="mt-3 flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
      <div><h1 className="text-5xl font-black md:text-7xl">{q ? `“${q}”` : "Search products"}</h1><p className="mt-5 text-sm text-white/45">{results.length} matching products. Women and men keep their original catalog identity and image.</p></div>
      <Link to="/shop/women" className="text-[10px] uppercase tracking-[.18em] text-white/50 hover:text-white">Women / Men collections →</Link>
    </div>
    {results.length ? <ProductGrid items={results}/> : <div className="py-24 text-center text-white/45"><Search className="mx-auto mb-5 opacity-30"/><p>No matches for “{q}”.</p><p className="mt-3 text-xs">Try cotton, brief, boxer, bra, lace, seamless, jockstrap or stockings.</p></div>}
  </main>
}

function Cart({cart,update,subtotal,clear}) {
  const navigate=useNavigate();
  return <main className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20"><div className="flex items-end justify-between border-b border-white/10 pb-8"><div><p className="text-[10px] uppercase tracking-[.3em] text-white/45">BAG</p><h1 className="mt-3 text-5xl font-black tracking-tight">Your cart.</h1></div>{cart.length>0&&<button onClick={clear} className="text-[10px] uppercase tracking-[.15em] text-white/40 hover:text-white">Clear all</button>}</div>
    {!cart.length?<div className="py-28 text-center"><ShoppingBag className="mx-auto mb-5 opacity-30"/><p className="text-white/50">Your bag is empty.</p><Link to="/shop/women" className="mt-6 inline-block border border-white px-6 py-4 text-xs uppercase tracking-[.18em]">Shop the collection</Link></div>
    :<div className="grid gap-12 pt-10 lg:grid-cols-[1fr_360px]"><div className="divide-y divide-white/10">{cart.map(x=><div key={x.key} className="flex gap-5 py-5 first:pt-0"><img src={x.product.image} alt="" className="h-32 w-24 object-contain bg-white"/><div className="flex flex-1 justify-between gap-5"><div><p className="text-sm">{x.product.name}</p><p className="mt-2 text-[10px] uppercase tracking-[.16em] text-white/40">{x.product.gender} · Size {x.size}</p><div className="mt-5 flex items-center border border-white/15"><button onClick={()=>update(x.key,x.qty-1)} className="p-2"><Minus size={12}/></button><span className="w-8 text-center text-xs">{x.qty}</span><button onClick={()=>update(x.key,x.qty+1)} className="p-2"><Plus size={12}/></button></div></div><div className="text-right"><p className="text-sm">{money(x.product.price*x.qty)}</p><button onClick={()=>update(x.key,0)} className="mt-5 text-white/35 hover:text-white"><Trash2 size={15}/></button></div></div></div>)}</div>
      <div className="h-fit border border-white/10 p-6"><p className="text-[10px] uppercase tracking-[.2em] text-white/45">Summary</p><div className="mt-7 flex justify-between text-sm"><span>Subtotal</span><span>{money(subtotal)}</span></div><div className="mt-3 flex justify-between text-sm text-white/45"><span>Shipping</span><span>Free</span></div><div className="my-6 border-t border-white/10"/><div className="flex justify-between text-lg font-semibold"><span>Total</span><span>{money(subtotal)}</span></div><button onClick={()=>navigate("/checkout")} className="mt-7 w-full bg-white py-4 text-xs font-bold uppercase tracking-[.18em] text-black">Proceed to checkout</button><p className="mt-4 text-center text-[9px] uppercase tracking-[.13em] text-white/30">Demo payment — no real charge</p></div>
    </div>}
  </main>
}

function Checkout({cart,subtotal,clear}) {
  const [form,setForm]=useState({email:"",name:"",card:"",expiry:"",cvc:""});
  const [done,setDone]=useState(false);
  const [order,setOrder]=useState(null);
  const [error,setError]=useState("");

  const sanitizeLetters = (value) => value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g, "");
  const sanitizeDigits = (value, max) => value.replace(/\D/g, "").slice(0,max);
  const formatCard = (value) => sanitizeDigits(value,16).replace(/(\d{4})(?=\d)/g,"$1 ");
  const formatExpiry = (value) => { const d=sanitizeDigits(value,4); return d.length>2 ? `${d.slice(0,2)} / ${d.slice(2)}` : d; };
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(form.email);

  const submit=(e)=>{
    e.preventDefault();
    if(!validEmail){setError("Enter a valid email address.");return;}
    if(form.name.trim().length<2 || /\d/.test(form.name)){setError("Cardholder name must contain letters only.");return;}
    if(form.card.replace(/\s/g,"").length!==16){setError("Enter a valid 16-digit demo card number.");return;}
    if(form.expiry.replace(/\D/g,"").length!==4){setError("Enter expiry as 4 numbers: MMYY.");return;}
    if(form.cvc.length!==3){setError("CVV must contain 3 numbers.");return;}
    const delivery=new Date(); delivery.setDate(delivery.getDate()+7);
    const created=new Date();
    const newOrder={id:`NL-${Date.now().toString().slice(-8)}`,email:form.email,name:form.name.trim(),country:"United States",createdAt:created.toISOString(),deliveryDate:delivery.toISOString(),deliveryWindow:"10:00 AM – 2:00 PM",items:cart.map(x=>({...x, product:{...x.product}})),total:subtotal};
    const raffleIntent = localStorage.getItem("noirline-raffle-intent") === "true";
    newOrder.raffleChance = raffleIntent;
    if (raffleIntent) localStorage.removeItem("noirline-raffle-intent");
    let previousOrders = JSON.parse(localStorage.getItem("noirline-orders") || "[]");
    const legacyLastOrder = JSON.parse(localStorage.getItem("noirline-last-order") || "null");
    if (!previousOrders.length && legacyLastOrder?.id && legacyLastOrder.id !== newOrder.id) previousOrders = [legacyLastOrder];
    const nextOrders = [newOrder, ...previousOrders.filter(x => x.id !== newOrder.id)];
    localStorage.setItem("noirline-orders",JSON.stringify(nextOrders));
    localStorage.setItem("noirline-last-order",JSON.stringify(newOrder));
    setOrder(newOrder); setDone(true); clear();
  };

  if(done) return <main className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-24"><section className="rounded-[2rem] bg-emerald-500 px-7 py-16 text-center text-black md:px-16 md:py-24"><CheckCircle2 size={56} className="mx-auto"/><p className="mt-7 text-[10px] font-bold uppercase tracking-[.3em]">Payment Reviewed</p><h1 className="mt-4 text-5xl font-black uppercase tracking-[-.05em] md:text-7xl">Payment Reviewed.</h1><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/70">Your demo payment has been reviewed successfully. Your product is scheduled to arrive within one week.</p>{order?.raffleChance && <p className="mx-auto mt-5 max-w-xl rounded-full border border-black/20 px-5 py-3 text-xs font-bold uppercase tracking-[.14em]">You have 1 chance in the PS5 raffle.</p>}<div className="mt-10 flex flex-wrap justify-center gap-3"><Link to="/order-dashboard" className="inline-flex items-center gap-2 bg-black px-7 py-4 text-xs font-bold uppercase tracking-[.18em] text-white">Delivery dashboard <ArrowRight size={15}/></Link><Link to="/" className="inline-flex items-center gap-2 border border-black/30 px-7 py-4 text-xs font-bold uppercase tracking-[.18em]">Home <HomeIcon size={15}/></Link></div></section></main>;
  if(!cart.length) return <main className="mx-auto max-w-2xl px-5 py-24 text-center"><h1 className="text-4xl font-bold">Nothing to checkout.</h1><Link to="/shop/women" className="mt-7 inline-block underline">Continue shopping</Link></main>;
  return <main className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20"><div className="mb-10"><p className="text-[10px] uppercase tracking-[.3em] text-white/45">SECURE CHECKOUT / DEMO</p><h1 className="mt-3 text-5xl font-black">Payment.</h1></div><div className="grid gap-10 lg:grid-cols-[1fr_360px]"><form onSubmit={submit} className="border border-white/10 p-6 md:p-8"><div className="flex items-center gap-3 border-b border-white/10 pb-6"><CreditCard size={18}/><span className="text-xs uppercase tracking-[.18em]">Demo card gateway</span></div><div className="mt-7 grid gap-5">
    <Field label="Email"><input required type="email" autoComplete="email" inputMode="email" value={form.email} onChange={e=>{setError("");setForm({...form,email:e.target.value})}} placeholder="you@example.com"/></Field>
    <Field label="Cardholder name"><input required autoComplete="cc-name" inputMode="text" value={form.name} onChange={e=>{setError("");setForm({...form,name:sanitizeLetters(e.target.value)})}} placeholder="Alex Morgan"/></Field>
    <Field label="Card number (demo only)"><input required autoComplete="cc-number" inputMode="numeric" pattern="[0-9 ]{19}" maxLength="19" placeholder="4242 4242 4242 4242" value={form.card} onChange={e=>{setError("");setForm({...form,card:formatCard(e.target.value)})}}/></Field>
    <div className="grid grid-cols-2 gap-5"><Field label="Expiry"><input required autoComplete="cc-exp" inputMode="numeric" pattern="[0-9 /]{7}" maxLength="7" placeholder="MM / YY" value={form.expiry} onChange={e=>{setError("");setForm({...form,expiry:formatExpiry(e.target.value)})}}/></Field><Field label="CVV"><input required autoComplete="cc-csc" inputMode="numeric" pattern="[0-9]{3}" maxLength="3" placeholder="123" value={form.cvc} onChange={e=>{setError("");setForm({...form,cvc:sanitizeDigits(e.target.value,3)})}}/></Field></div></div>{error&&<p className="mt-5 border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200">{error}</p>}<button className="mt-8 w-full bg-white py-5 text-xs font-bold uppercase tracking-[.2em] text-black">Pay {money(subtotal)} — Demo</button><p className="mt-4 text-center text-[9px] leading-5 text-white/30">Demo only. No card data is transmitted or charged.</p></form><div className="h-fit border border-white/10 p-6"><p className="text-[10px] uppercase tracking-[.2em] text-white/45">Order summary</p>{cart.map(x=><div key={x.key} className="mt-5 flex justify-between gap-4 text-xs"><span className="text-white/65">{x.product.name} × {x.qty}</span><span>{money(x.product.price*x.qty)}</span></div>)}<div className="my-6 border-t border-white/10"/><div className="flex justify-between font-semibold"><span>Total</span><span>{money(subtotal)}</span></div><div className="mt-6 border-t border-white/10 pt-6 text-xs text-white/50">Shipping country: <span className="text-white">United States</span></div></div></div></main>
}

function getOrders(){
  const saved = JSON.parse(localStorage.getItem("noirline-orders") || "[]");
  if(saved.length) return saved;
  const last = JSON.parse(localStorage.getItem("noirline-last-order") || "null");
  return last ? [last] : [];
}

function OrderSummaryCard({order, compact=false}){
  const date = new Date(order.deliveryDate);
  const created = new Date(order.createdAt);
  return <section className="border border-white/10 p-7 md:p-8">
    <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end">
      <div><p className="text-[10px] uppercase tracking-[.25em] text-white/40">ORDER / {order.id}</p><h2 className="mt-2 text-2xl font-bold">Purchase dashboard</h2><p className="mt-2 text-xs text-white/45">Placed {created.toLocaleString("en-US",{dateStyle:"medium",timeStyle:"short"})}</p></div>
      <div className="text-left md:text-right"><p className="text-[10px] uppercase tracking-[.2em] text-white/40">Total</p><p className="mt-1 text-2xl font-semibold">{money(order.total)}</p></div>
    </div>
    <div className="mt-7 grid gap-4 md:grid-cols-3">
      <div className="border border-white/10 p-5"><CalendarDays size={17}/><p className="mt-5 text-[10px] uppercase tracking-[.2em] text-white/40">Delivery date</p><p className="mt-2 text-lg font-semibold">{date.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"})}</p></div>
      <div className="border border-white/10 p-5"><Truck size={17}/><p className="mt-5 text-[10px] uppercase tracking-[.2em] text-white/40">Delivery window</p><p className="mt-2 text-lg font-semibold">{order.deliveryWindow}</p></div>
      <div className="border border-white/10 p-5"><MapPin size={17}/><p className="mt-5 text-[10px] uppercase tracking-[.2em] text-white/40">Destination</p><p className="mt-2 text-lg font-semibold">{order.country}</p></div>
    </div>
    {order.raffleChance && <div className="mt-4 border border-white/15 bg-white p-5 text-black"><p className="text-[10px] uppercase tracking-[.2em] text-black/45">PS5 RAFFLE</p><p className="mt-2 text-lg font-bold">You have 1 chance in the PS5 raffle.</p></div>}
    <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_280px]">
      <div className="border border-white/10 p-5"><p className="text-[10px] uppercase tracking-[.2em] text-white/40">Products</p>{order.items.map(x=><div key={x.key} className="flex items-center justify-between gap-5 border-b border-white/10 py-4 text-sm last:border-b-0"><span>{x.product.name} × {x.qty}<span className="ml-2 text-[10px] uppercase tracking-[.12em] text-white/35">{x.product.gender} / {x.size}</span></span><span>{money(x.product.price*x.qty)}</span></div>)}</div>
      <div className="border border-white/10 p-5"><p className="text-[10px] uppercase tracking-[.2em] text-white/40">Status</p><div className="mt-5 flex items-center gap-3 text-emerald-400"><CheckCircle2 size={18}/> Payment reviewed</div><div className="mt-6 border-t border-white/10 pt-5 text-xs text-white/45">Customer<br/><span className="mt-1 block text-white">{order.name}</span><span className="mt-1 block text-white/55">{order.email}</span></div><Link to={`/order-dashboard?id=${encodeURIComponent(order.id)}`} className="mt-6 flex items-center justify-center gap-2 border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-[.16em] hover:border-white/50">Open dashboard <ArrowRight size={14}/></Link></div>
    </div>
  </section>
}

function Orders(){
  const [orders,setOrders]=useState([]);
  useEffect(()=>setOrders(getOrders()),[]);
  return <main className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20"><div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[.3em] text-white/45">ACCOUNT / ORDERS</p><h1 className="mt-3 text-5xl font-black uppercase tracking-[-.04em] md:text-7xl">Your orders.</h1><p className="mt-5 max-w-2xl text-sm leading-6 text-white/50">Every completed purchase is kept here. Two or three purchases made close together remain separate orders with their own dates, products, totals and delivery information.</p></div><Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.18em] text-white/60 hover:text-white"><HomeIcon size={15}/> Back to Home</Link></div>{!orders.length?<div className="py-24 text-center"><p className="text-sm text-white/45">You have no completed orders yet.</p><Link to="/shop/men" className="mt-7 inline-flex border border-white px-6 py-4 text-xs uppercase tracking-[.18em]">Start shopping</Link></div>:<div className="mt-10 space-y-5">{orders.map(order=><OrderSummaryCard key={order.id} order={order}/>)}</div>}</main>
}

function OrderDashboard(){
  const [searchParams]=useSearchParams();
  const [order,setOrder]=useState(null);
  useEffect(()=>{
    const all=getOrders();
    const id=searchParams.get("id");
    setOrder(id ? all.find(x=>x.id===id) || all[0] : all[0]);
  },[searchParams]);
  if(!order) return <main className="mx-auto max-w-3xl px-5 py-24 text-center"><p className="text-[10px] uppercase tracking-[.3em] text-white/45">DELIVERY DASHBOARD</p><h1 className="mt-4 text-5xl font-black">No order yet.</h1><Link to="/shop/men" className="mt-8 inline-flex items-center gap-2 border border-white px-6 py-4 text-xs uppercase tracking-[.18em]">Start shopping <ArrowRight size={14}/></Link></main>;
  const all=getOrders();
  return <main className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-20"><div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end"><div><p className="text-[10px] uppercase tracking-[.3em] text-white/45">ORDER / {order.id}</p><h1 className="mt-3 text-5xl font-black uppercase tracking-[-.04em]">Delivery dashboard.</h1><p className="mt-4 text-sm text-white/45">This dashboard shows the complete information for the selected purchase.</p></div><div className="flex flex-wrap gap-4"><Link to="/orders" className="inline-flex items-center gap-2 border border-white/20 px-5 py-4 text-xs uppercase tracking-[.18em]">All Orders</Link><Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.18em] text-white/60 hover:text-white"><HomeIcon size={15}/> Home</Link></div></div><div className="mt-10"><OrderSummaryCard order={order}/></div>{all.length>1&&<div className="mt-10 border-t border-white/10 pt-10"><p className="text-[10px] uppercase tracking-[.25em] text-white/40">OTHER PURCHASES</p><div className="mt-5 grid gap-3 md:grid-cols-2">{all.filter(x=>x.id!==order.id).map(x=><Link key={x.id} to={`/order-dashboard?id=${encodeURIComponent(x.id)}`} className="border border-white/10 p-5 transition hover:border-white/40"><p className="text-xs uppercase tracking-[.16em]">{x.id}</p><p className="mt-2 text-sm">{new Date(x.createdAt).toLocaleString("en-US",{dateStyle:"medium",timeStyle:"short"})}</p><p className="mt-2 text-sm text-white/50">{money(x.total)} · {x.items.length} line item{x.items.length===1?"":"s"}</p></Link>)}</div></div>}</main>
}
function Field({label,children}){return <label className="block text-[9px] uppercase tracking-[.18em] text-white/45">{label}<div className="mt-2 [&>input]:w-full [&>input]:border [&>input]:border-white/15 [&>input]:bg-black [&>input]:px-4 [&>input]:py-3 [&>input]:text-sm [&>input]:text-white [&>input]:outline-none [&>input]:focus:border-white">{children}</div></label>}

function About(){return <main className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-28"><p className="text-[10px] uppercase tracking-[.3em] text-white/45">ABOUT NOIRLINE</p><h1 className="mt-4 max-w-4xl text-6xl font-black uppercase leading-[.9] tracking-[-.05em] md:text-8xl">Underwear,<br/>reframed.</h1><p className="mt-10 max-w-2xl text-lg leading-8 text-white/60">NOIRLINE is a fictional, design-led underwear label built around a simple idea: the essentials deserve the same attention as everything worn above them.</p><div className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3">{[["01","Quiet design","A restrained visual language where fit, fabric and proportion do the talking."],["02","Two wardrobes","Women and men have separate catalogs, categories and product IDs inside one monochrome storefront."],["03","Demo by design","This project is a fully interactive storefront prototype, including a simulated checkout."]].map(x=><div key={x[0]}><span className="text-xs text-white/35">{x[0]}</span><h2 className="mt-8 text-2xl font-semibold">{x[1]}</h2><p className="mt-4 text-sm leading-6 text-white/50">{x[2]}</p></div>)}</div></main>}

function Contact(){const [sent,setSent]=useState(false); return <main className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-28"><div className="grid gap-14 md:grid-cols-2"><div><p className="text-[10px] uppercase tracking-[.3em] text-white/45">CONTACT</p><h1 className="mt-4 text-6xl font-black tracking-[-.04em]">Let's talk.</h1><p className="mt-7 max-w-md text-sm leading-7 text-white/55">Questions about fit, products, shipping or this prototype? Send a message through the demo form.</p><div className="mt-10 space-y-4 text-xs text-white/55"><p className="flex gap-3"><Mail size={15}/> hello@noirline.example</p><p className="flex gap-3"><MapPin size={15}/> Amsterdam / online</p><p className="flex gap-3"><Instagram size={15}/> @noirline.studio</p></div></div>{sent?<div className="border border-white/10 p-8"><CheckCircle2/><h2 className="mt-5 text-2xl font-semibold">Message received.</h2><p className="mt-3 text-sm text-white/50">Demo only — no message was actually sent.</p></div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}} className="space-y-5"><Field label="Name"><input required/></Field><Field label="Email"><input required type="email"/></Field><Field label="Message"><textarea required rows="7" className="w-full resize-none border border-white/15 bg-black px-4 py-3 text-sm outline-none focus:border-white"/></Field><button className="w-full bg-white py-4 text-xs font-bold uppercase tracking-[.2em] text-black">Send message</button></form>}</div></main>}

function Account({profile,setProfile}){
  const navigate=useNavigate(); const [params]=useSearchParams(); const register=params.get("mode")==="register";
  const [form,setForm]=useState({name:"",email:"",password:"",favorite:""});
  const [error,setError]=useState("");
  const save=(e)=>{e.preventDefault(); const name=form.name.replace(/[^a-zA-ZÀ-ÿ\s'-]/g,"").trim(); const email=form.email.trim(); if(name.length<2){setError("Enter a valid name using letters only.");return;} if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)){setError("Enter a valid Gmail/email address.");return;} if(form.password.length<6){setError("Password must be at least 6 characters.");return;} const next={name,email}; localStorage.setItem("noirline-profile",JSON.stringify(next)); setProfile(next); setError("");};
  const signUp=(e)=>{e.preventDefault(); const name=form.name.replace(/[^a-zA-ZÀ-ÿ\s'-]/g,"").trim(); const email=form.email.trim(); if(name.length<2){setError("Enter a valid name using letters only.");return;} if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)){setError("Enter a valid Gmail/email address.");return;} if(!/^\d+$/.test(form.favorite)){setError("Favorite number must contain digits only.");return;} if(form.password.length<6){setError("Password must be at least 6 characters.");return;} const next={name,email,favoriteNumber:form.favorite}; localStorage.setItem("noirline-profile",JSON.stringify(next)); setProfile(next); setError("");};
  if(profile) return <main className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-28"><div className="mx-auto max-w-xl border border-white/10 p-8 md:p-12"><span className="flex mx-auto h-16 w-16 items-center justify-center rounded-full bg-white text-lg font-bold text-black">{profile.name.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase()}</span><p className="mt-7 text-center text-[10px] uppercase tracking-[.3em] text-white/45">YOUR ACCOUNT</p><h1 className="mt-3 text-center text-4xl font-black">Thank you, {profile.name}.</h1><p className="mt-4 text-center text-sm text-white/50">{profile.email}</p><div className="mt-8"><button onClick={()=>{localStorage.removeItem("noirline-profile");setProfile(null);navigate("/")}} className="w-full border border-white/15 px-6 py-4 text-xs uppercase tracking-[.18em] text-white/70">Log out</button><button type="button" onClick={()=>navigate("/")} className="mt-3 w-full border border-white/15 px-6 py-4 text-xs uppercase tracking-[.18em] text-white/70">Back to Home</button></div></div></main>;
  if(register) return <main className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-28"><div className="mx-auto max-w-xl"><UserRound className="mx-auto" size={28}/><h1 className="mt-6 text-center text-5xl font-black">Register</h1><p className="mt-5 text-center text-sm leading-6 text-white/50">Create your demo account. Your details are stored locally in this browser; no real account service is connected.</p><form onSubmit={signUp} className="mt-10 space-y-5 border border-white/10 p-7 md:p-10"><Field label="Name"><input required value={form.name} onChange={e=>{setError("");setForm({...form,name:e.target.value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g,"")})}} placeholder="Sepehri Karimi"/></Field><Field label="Gmail / Email"><input required type="email" inputMode="email" value={form.email} onChange={e=>{setError("");setForm({...form,email:e.target.value})}} placeholder="name@gmail.com"/></Field><Field label="Favorite number"><input required inputMode="numeric" value={form.favorite} onChange={e=>{setError("");setForm({...form,favorite:e.target.value.replace(/\D/g,"")})}} placeholder="7"/></Field><Field label="Password"><input required type="password" minLength="6" autoComplete="new-password" value={form.password} onChange={e=>{setError("");setForm({...form,password:e.target.value})}} placeholder="At least 6 characters"/></Field>{error&&<p className="border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200">{error}</p>}<button className="w-full bg-white py-4 text-xs font-bold uppercase tracking-[.2em] text-black">Register</button><button type="button" onClick={()=>navigate("/")} className="w-full border border-white/15 py-4 text-xs uppercase tracking-[.18em]">Back to Home</button></form></div></main>;
  return <main className="mx-auto max-w-4xl px-5 py-16 md:px-10 md:py-28"><div className="mx-auto max-w-xl"><UserRound className="mx-auto" size={28}/><h1 className="mt-6 text-center text-5xl font-black">Sign in</h1><p className="mt-5 text-center text-sm leading-6 text-white/50">Create your demo profile. Your name and email are stored locally in this browser; no real account service is connected.</p><form onSubmit={save} className="mt-10 space-y-5 border border-white/10 p-7 md:p-10"><Field label="Name"><input required value={form.name} onChange={e=>{setError("");setForm({...form,name:e.target.value.replace(/[^a-zA-ZÀ-ÿ\s'-]/g,"")})}} placeholder="Sepehri Karimi"/></Field><Field label="Gmail / Email"><input required type="email" inputMode="email" value={form.email} onChange={e=>{setError("");setForm({...form,email:e.target.value})}} placeholder="name@gmail.com"/></Field><Field label="Password"><input required type="password" minLength="6" autoComplete="new-password" value={form.password} onChange={e=>{setError("");setForm({...form,password:e.target.value})}} placeholder="At least 6 characters"/></Field>{error&&<p className="border border-red-400/30 bg-red-400/10 px-4 py-3 text-xs text-red-200">{error}</p>}<button className="w-full bg-white py-4 text-xs font-bold uppercase tracking-[.2em] text-black">Save profile</button><button type="button" onClick={()=>navigate("/")} className="w-full border border-white/15 py-4 text-xs uppercase tracking-[.18em]">Back to Home</button></form></div></main>}

function Raffle(){
  const navigate=useNavigate();
  const [profile,setProfile]=useState(()=>JSON.parse(localStorage.getItem("noirline-profile")||"null"));
  const [form,setForm]=useState({name:profile?.name||"",email:profile?.email||"",password:"",card:"",expiry:"",cvc:""});
  const [error,setError]=useState("");
  const letters=v=>v.replace(/[^a-zA-ZÀ-ÿ\s'-]/g,""); const digits=(v,n)=>v.replace(/\D/g,"").slice(0,n); const card=v=>digits(v,16).replace(/(\d{4})(?=\d)/g,"$1 "); const expiry=v=>{const d=digits(v,4);return d.length>2?`${d.slice(0,2)} / ${d.slice(2)}`:d};
  const submit=e=>{e.preventDefault(); const email=form.email.trim(); if(form.name.trim().length<2){setError("Name must contain letters only.");return;} if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)){setError("Enter a valid email address.");return;} if(form.password.length<6){setError("Password must be at least 6 characters.");return;} if(form.card.replace(/\s/g,"").length!==16){setError("Enter a valid 16-digit demo card number.");return;} if(form.expiry.replace(/\D/g,"").length!==4){setError("Enter expiry as MMYY.");return;} if(form.cvc.length!==3){setError("CVV must contain 3 numbers.");return;} const next={name:form.name.trim(),email}; localStorage.setItem("noirline-profile",JSON.stringify(next)); localStorage.setItem("noirline-raffle-intent","true"); setProfile(next); navigate("/shop/women");};
  return <main className="mx-auto max-w-5xl px-5 py-12 md:px-10 md:py-20"><div className="border border-white/10 bg-white p-7 text-black md:p-12"><p className="text-[10px] uppercase tracking-[.3em] text-black/45">RAFFLE SECTION</p><h1 className="mt-3 text-5xl font-black uppercase tracking-[-.04em] md:text-7xl">PS5 Giveaway.</h1><p className="mt-5 max-w-2xl text-sm leading-7 text-black/60">Complete the demo entry information, then make a purchase through the collection. That qualifying purchase awards one chance in the PS5 raffle.</p><form onSubmit={submit} className="mt-10 grid gap-5"><div className="grid gap-5 md:grid-cols-2"><Field label="Name"><input required value={form.name} onChange={e=>{setError("");setForm({...form,name:letters(e.target.value)})}} placeholder="Your name"/></Field><Field label="Gmail / Email"><input required type="email" value={form.email} onChange={e=>{setError("");setForm({...form,email:e.target.value})}} placeholder="name@gmail.com"/></Field></div><Field label="Password"><input required type="password" minLength="6" value={form.password} onChange={e=>{setError("");setForm({...form,password:e.target.value})}} placeholder="At least 6 characters"/></Field><div className="grid gap-5 md:grid-cols-3"><Field label="Demo card number"><input required inputMode="numeric" maxLength="19" value={form.card} onChange={e=>{setError("");setForm({...form,card:card(e.target.value)})}} placeholder="4242 4242 4242 4242"/></Field><Field label="Expiry"><input required inputMode="numeric" maxLength="7" value={form.expiry} onChange={e=>{setError("");setForm({...form,expiry:expiry(e.target.value)})}} placeholder="MM / YY"/></Field><Field label="CVV"><input required inputMode="numeric" maxLength="3" value={form.cvc} onChange={e=>{setError("");setForm({...form,cvc:digits(e.target.value,3)})}} placeholder="123"/></Field></div>{error&&<p className="border border-red-700/20 bg-red-100 px-4 py-3 text-xs text-red-700">{error}</p>}<div className="mt-3 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={()=>navigate("/")} className="border border-black/20 px-7 py-4 text-xs font-bold uppercase tracking-[.18em]">Back to Home</button><button className="flex-1 bg-black px-7 py-4 text-xs font-bold uppercase tracking-[.18em] text-white">Make a purchase to get a chance in the drawing <ArrowRight size={15} className="ml-2 inline"/></button></div><p className="text-[9px] uppercase tracking-[.15em] text-black/40">Demo only. No real payment or raffle entry is processed.</p></form></div></main>
}

function NotFound(){return <main className="px-5 py-32 text-center"><h1 className="text-5xl font-black">Not found.</h1><Link className="mt-6 inline-block underline" to="/">Back home</Link></main>}

function Footer(){return <footer className="border-t border-white/10 bg-[#050505]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10"><div><div className="text-lg font-black tracking-[.35em]">NOIRLINE</div><p className="mt-5 max-w-xs text-sm leading-6 text-white/45">A monochrome underwear storefront prototype. Built to feel editorial, fast and intentionally simple.</p></div><div><p className="text-[9px] uppercase tracking-[.25em] text-white/35">Shop</p><div className="mt-5 grid gap-3 text-xs text-white/65"><Link to="/shop/women">Women's underwear</Link><Link to="/shop/men">Men's underwear</Link><Link to="/search?q=cotton">Cotton</Link><Link to="/search?q=seamless">Seamless</Link></div></div><div><p className="text-[9px] uppercase tracking-[.25em] text-white/35">Info</p><div className="mt-5 grid gap-3 text-xs text-white/65"><Link to="/about">About us</Link><Link to="/contact">Contact us</Link><Link to="/account">Account</Link><Link to="/cart">Cart</Link></div></div><div><p className="text-[9px] uppercase tracking-[.25em] text-white/35">Newsletter</p><p className="mt-5 text-xs leading-5 text-white/45">Demo signup — no data is stored.</p><div className="mt-4 flex border-b border-white/20"><input placeholder="Email address" className="w-full bg-transparent py-2 text-xs outline-none"/><button className="text-xs uppercase tracking-[.15em]">Join</button></div></div></div><div className="border-t border-white/10 px-5 py-5 text-center text-[9px] uppercase tracking-[.18em] text-white/25 md:px-10">© 2026 NOIRLINE / Fictional demo storefront / No real payments</div></footer>}

function MobileBar({count}){return <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-white/15 bg-black/95 py-3 backdrop-blur md:hidden"><Link to="/" className="text-center text-[9px] uppercase tracking-[.18em]">Home</Link><Link to="/account" className="text-center text-[9px] uppercase tracking-[.18em]">Account</Link><Link to="/account?mode=register" className="text-center text-[9px] uppercase tracking-[.18em]">Register</Link><Link to="/cart" className="text-center text-[9px] uppercase tracking-[.18em]">Cart {count?`(${count})`:""}</Link></div>}

createRoot(document.getElementById("root")).render(<BrowserRouter><App/></BrowserRouter>);