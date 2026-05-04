import { useState } from "react";
const C = {
  ivory: "#F5EFE6", terracotta: "#C2714F", rust: "#A85B3A",
  clay: "#D4896A", gold: "#B89B6A", dark: "#3B2A1A",
  muted: "#7A6652", white: "#FDFAF6", border: "#DDD3C3",
  highlight: "#FBF3EC",
};
/* ── STYLE OPTIONS with your curated photos ──────────────── */
const styleOptions = [
  { id: "minimalist", label: "Contemporary Minimalist", tag: "Less Is More", desc: "Clean lines, open space, nothing extra",
    img: "/contemporary_minimalist.jpg" },
  { id: "warm_modern", label: "Warm Modern", tag: "Textured Comfort", desc: "Modern forms softened with wood, warmth & texture",
    img: "/warm_modern.jpg" },
  { id: "classic", label: "Classic / Traditional", tag: "Timeless Heritage", desc: "Timeless elegance, rich materials, formal symmetry",
    img: "/classic_traditional.jpg" },
  { id: "royal_indian", label: "Royal Indian / Haveli", tag: "Regal Heritage", desc: "Jali work, murals, heritage craftsmanship, royal warmth",
    img: "/royal_indian.jpg" },
  { id: "eclectic", label: "Eclectic / Layered", tag: "Curated Collector", desc: "A confident mix of eras, cultures & textures",
    img: "/eclectic.jpg" },
  { id: "transitional", label: "Transitional", tag: "Best of Both", desc: "Classic bones, contemporary finishes — balanced harmony",
    img: "/transitional.jpg" },
  { id: "art_deco", label: "Art Deco / Glamour", tag: "Gilded Drama", desc: "Bold geometry, gold accents, sophisticated luxury",
    img: "/art_deco.jpg" },
  { id: "bohemian", label: "Bohemian / Earthy", tag: "Free-Spirited", desc: "Layered textiles, natural materials, warm imperfection",
    img: "/bohemian.jpg" },
  { id: "japandi", label: "Japandi / Wabi-Sabi", tag: "Serene Imperfection", desc: "Natural simplicity, muted palette, quiet beauty",
    img: "/japandi.jpg" },
  { id: "scandinavian", label: "Scandinavian / Hygge", tag: "Light & Cozy", desc: "White, wood, warmth — functional beauty",
    img: "/scandinavian.jpg" },
  { id: "dark_moody", label: "Dark & Moody", tag: "Dramatic Atmosphere", desc: "Deep jewel tones, velvet, dramatic contrast",
    img: "/dark_moody.jpg" },
  { id: "moroccan", label: "Moroccan / Middle Eastern", tag: "Exotic Opulence", desc: "Arches, lanterns, mosaic tiles, layered richness",
    img: "/moroccan.jpg" },
  { id: "french_country", label: "French Country", tag: "Rustic Elegance", desc: "Linen, aged wood, soft patina, pastoral refinement",
    img: "/french_country.jpg" },
  { id: "biophilic", label: "Biophilic / Nature-led", tag: "Living Spaces", desc: "Abundant greenery, natural materials, living walls",
    img: "/biophilic.jpg" },
  { id: "industrial", label: "Industrial / Urban Loft", tag: "Raw Sophistication", desc: "Exposed concrete, metal, dark tones, masculine edge",
    img: "/industrial.jpg" },
  { id: "coastal", label: "Coastal / Mediterranean", tag: "Breezy & Open", desc: "Whites, blues, natural stone, sea air freshness",
    img: "/coastal.jpg" },
  { id: "maximalist", label: "Maximalist / Bold", tag: "More is More", desc: "Rich colour, mixed pattern, abundant personality",
    img: "/maximalist.jpg" },
  { id: "grand_luxury", label: "Grand Luxury / Hotel Style", tag: "Five-Star Living", desc: "Statement chandeliers, marble, opulent & impressive",
    img: "/grand_luxury.jpg" },
  { id: "zen_spa", label: "Zen / Spa Retreat", tag: "Pure Serenity", desc: "Stone, water, candlelight — meditative stillness",
    img: "/zen_spa.jpg" },
  { id: "guide_me", label: "Guide Me", tag: "Open to Ideas", desc: "I'm completely open — let the studio lead the vision",
    img: null },
];
/* ── WALL TREATMENTS with your curated photos ───────────── */
const wallOptions = [
  { id: "moulding", label: "Wall Mouldings", tag: "Classic Elegance", desc: "Plaster frames, panel details, Georgian & colonial profiles",
    img: "/wall_moulding.jpg" },
  { id: "wallpaper", label: "Designer Wallpaper", tag: "Pattern & Mood", desc: "Botanical, geometric, damask, ombre & hand-printed",
    img: "/wall_wallpaper.jpg" },
  { id: "stone_veneer", label: "Natural Stone Veneer", tag: "Raw Luxury", desc: "Slate, quartzite, travertine & sandstone thin sheets",
    img: "/wall_stone_veneer.jpg" },
  { id: "pop_simple", label: "POP Wall — Simple", tag: "Clean Modern", desc: "Minimal ceiling-to-floor bands, recessed ledges, clean lines",
    img: "/wall_pop_simple.jpg" },
  { id: "pop_grooves", label: "POP Groove Wall", tag: "Textured Depth", desc: "Vertical/horizontal shadow grooves, ribbed plaster relief",
    img: "/wall_pop_grooves.jpg" },
  { id: "marble_onyx", label: "Marble & Onyx Wall", tag: "Statement Luxury", desc: "Book-matched marble slabs, backlit onyx, calacatta feature walls",
    img: "/wall_marble_onyx.jpg" },
  { id: "wall_art", label: "Plain Wall with Art", tag: "Curated & Personal", desc: "Gallery walls, oversized canvas, sculptural wall objects",
    img: "/wall_art.jpg" },
  { id: "color_block", label: "Colour Block Wall", tag: "Bold & Graphic", desc: "Two-tone walls, geometric colour split, accent corner treatment",
    img: "/wall_color_block.jpg" },
  { id: "texture_wall", label: "Texture / Plaster Wall", tag: "Organic & Tactile", desc: "Venetian plaster, tadelakt, microcement, limewash finishes",
    img: "/wall_texture.jpg" },
  { id: "cnc_stone", label: "CNC Stone Carving", tag: "Artisan Craft", desc: "Intricate jali-inspired, floral & geometric stone relief panels",
    img: "/wall_cnc_stone.jpg" },
  { id: "mirror_panel", label: "Mirror Panelling", tag: "Expansive & Glamorous", desc: "Full-height mirror panels, tinted bronze/grey, framed sections",
    img: "/wall_mirror.jpg" },
  { id: "curve_panel", label: "Curved Wall Panelling", tag: "Sculptural Form", desc: "Fluted curves, arched niches, undulating surface panelling",
    img: "/wall_curve_panel.jpg" },
  { id: "wood_panel", label: "Wooden Wall Panelling", tag: "Warm & Natural", desc: "Vertical slat, chevron, herringbone & shiplap wood wall cladding",
    img: "/wall_wood_panel.jpg" },
  { id: "metallic_panel", label: "Metallic / Embossed Panelling", tag: "Industrial Luxe", desc: "Brushed brass, oxidised copper, embossed stainless cladding",
    img: "/wall_metallic.jpg" },
  { id: "tropical", label: "Tropical / Botanical Wall", tag: "Lush & Alive", desc: "Living walls, oversized botanical murals, tropical leaf wallpaper",
    img: "/wall_tropical.jpg" },
  { id: "upholstered", label: "Upholstered Wall", tag: "Soft & Luxurious", desc: "Button-tufted, channel-stitched fabric or leather wall panels",
    img: "/wall_upholstered.jpg" },
  { id: "mural", label: "Hand-painted Wall Mural", tag: "Artistic Statement", desc: "Custom scenic murals, abstract art, chinoiserie, trompe l'oeil",
    img: "/wall_mural.jpg" },
  { id: "tile_mosaic", label: "Tile Mosaic / Artwork", tag: "Handcrafted Detail", desc: "Zellige, hand-cut glass, ceramic & stone mosaic feature walls",
    img: "/wall_tile_mosaic.jpg" },
];
/* ── FLOORING OPTIONS with real photos ───────────────────── */
const flooringOptions = [
  { id: "marble_floor", label: "Marble Flooring", tag: "Timeless Luxury", desc: "Italian & Indian marble — Statuario, Makrana, Calacatta",
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&q=80&fit=crop" },
  { id: "hardwood", label: "Hardwood / Engineered Wood", tag: "Warm & Classic", desc: "Oak, teak, walnut planks — herringbone, straight or chevron lay",
    img: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=500&q=80&fit=crop" },
  { id: "large_tile", label: "Large Format Tiles", tag: "Seamless & Modern", desc: "800×1600mm & larger porcelain slabs, minimal grout lines",
    img: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=500&q=80&fit=crop" },
  { id: "terrazzo", label: "Terrazzo Flooring", tag: "Artisanal & Colourful", desc: "Poured or precast terrazzo with marble, glass & brass chips",
    img: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&q=80&fit=crop" },
  { id: "natural_stone", label: "Natural Stone Flooring", tag: "Organic Character", desc: "Kota stone, slate, limestone & quartzite in natural finishes",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&q=80&fit=crop" },
  { id: "pattern_tile", label: "Patterned / Encaustic Tiles", tag: "Heritage Charm", desc: "Moroccan zellige, Portuguese cement & Athangudi heritage tiles",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop" },
  { id: "microcement", label: "Microcement / Polished Concrete", tag: "Industrial Minimal", desc: "Seamless poured finish in matte, satin or polished sheen",
    img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=500&q=80&fit=crop" },
  { id: "luxury_vinyl", label: "Luxury Vinyl / SPC", tag: "Practical & Versatile", desc: "Waterproof wood-look & stone-look planks — ideal for wet areas",
    img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=500&q=80&fit=crop" },
  { id: "carpet_rug", label: "Carpet / Area Rug", tag: "Soft & Cozy", desc: "Wool, silk blend & hand-knotted rugs — custom or bespoke",
    img: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=500&q=80&fit=crop" },
  { id: "raised_floor", label: "Raised / Sunken Floor Detail", tag: "Architectural Drama", desc: "Platform beds, sunken seating pits, step-up puja or dining zones",
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=500&q=80&fit=crop" },
];
const feelOptions = [
  { id: "calm", label: "Calm & Peaceful", emoji: " " },
  { id: "grand", label: "Grand & Impressive", emoji: "✦" },
  { id: "cozy", label: "Cozy & Intimate", emoji: " " },
  { id: "fresh", label: "Fresh & Airy", emoji: " " },
  { id: "dramatic", label: "Dramatic & Bold", emoji: "◆" },
  { id: "playful", label: "Playful & Vibrant", emoji: " " },
  { id: "timeless", label: "Timeless & Classic", emoji: "⧖" },
  { id: "personal", label: "Personal & Story-filled", emoji: "◎" },
  { id: "minimal", label: "Minimal & Uncluttered", emoji: "○" },
  { id: "opulent", label: "Opulent & Indulgent", emoji: "♛" },
];
/* ── COLOUR & MATERIAL MOODBOARD ────────────────────────── */
const moodboardOptions = [
  {
    id: "warm_neutrals", label: "Warm Neutrals", tag: "Sand · Cream · Linen",
    desc: "Ivory, warm white, soft beige — airy and timeless",
    swatches: ["#F5EFE6","#E8DDD0","#D4C4A8","#C0B090"],
    img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&q=80&fit=crop",
  },
  {
    id: "earthy_terracotta", label: "Earthy Terracotta", tag: "Clay · Rust · Ochre",
    desc: "Sun-baked terracotta, burnt sienna, warm amber",
    swatches: ["#C2714F","#A85B3A","#D4896A","#B89B6A"],
    img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=500&q=80&fit=crop",
  },
  {
    id: "deep_jewels", label: "Deep Jewel Tones", tag: "Emerald · Sapphire · Plum",
    desc: "Rich forest green, deep navy, aubergine, jewel-bright accents",
    swatches: ["#2A4A3A","#1A2A4A","#4A2A4A","#3A3A2A"],
    img: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=500&q=80&fit=crop",
  },
  {
    id: "black_gold", label: "Black & Gold", tag: "Onyx · Brass · Champagne",
    desc: "Dramatic black with brushed gold, champagne and warm brass",
    swatches: ["#1A1A1A","#B89B6A","#D4B870","#F0E8D0"],
    img: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=500&q=80&fit=crop",
  },
  {
    id: "white_oak", label: "White & Natural Oak", tag: "Snow · Oak · Stone",
    desc: "Crisp white with light wood tones and cool stone accents",
    swatches: ["#F8F6F2","#D4C4A0","#B8A880","#E8E4DC"],
    img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500&q=80&fit=crop",
  },
  {
    id: "blush_rose", label: "Blush & Rose Gold", tag: "Petal · Blush · Copper",
    desc: "Soft blush pink, dusty rose, antique copper and warm cream",
    swatches: ["#E8C4B8","#D4908A","#C87060","#F0E0D8"],
    img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=500&q=80&fit=crop",
  },
  {
    id: "sage_green", label: "Sage & Olive Green", tag: "Sage · Moss · Clay",
    desc: "Muted sage, olive, moss tones with warm earthy neutrals",
    swatches: ["#8A9A7A","#6A7A5A","#A0AA88","#C8C4A8"],
    img: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&q=80&fit=crop",
  },
  {
    id: "navy_brass", label: "Navy & Brass", tag: "Indigo · Brass · Ivory",
    desc: "Deep ink navy paired with warm brass and soft ivory",
    swatches: ["#1A2A4A","#2A3A5A","#B89B6A","#F0EAE0"],
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80&fit=crop",
  },
  {
    id: "marble_grey", label: "Marble & Cool Grey", tag: "Marble · Graphite · Silver",
    desc: "Cool white marble, slate grey, brushed silver and chrome",
    swatches: ["#E8E8E8","#B8B8B8","#888888","#F5F5F5"],
    img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&q=80&fit=crop",
  },
  {
    id: "walnut_dark", label: "Dark Walnut & Charcoal", tag: "Walnut · Charcoal · Stone",
    desc: "Rich dark walnut, deep charcoal, warm stone and aged brass",
    swatches: ["#4A3020","#2A2A2A","#5A4A3A","#C0A880"],
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80&fit=crop",
  },
  {
    id: "mineral_blue", label: "Mineral Blue & Teal", tag: "Teal · Petrol · Sand",
    desc: "Petrol blue, mineral teal, dusty aqua with sandy neutrals",
    swatches: ["#3A6A7A","#2A5A6A","#6A9AA8","#D8C8A8"],
    img: "https://images.unsplash.com/photo-1499955085172-a104c9463ece?w=500&q=80&fit=crop",
  },
  {
    id: "saffron_spice", label: "Saffron & Spice", tag: "Saffron · Cinnamon · Gold",
    desc: "Rich saffron, cinnamon, turmeric — vibrant Indian warmth",
    swatches: ["#D4800A","#C06020","#B89B6A","#F0D080"],
    img: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=500&q=80&fit=crop",
  },
  {
    id: "concrete_rust", label: "Concrete & Rust", tag: "Concrete · Rust · Raw Iron",
    desc: "Industrial raw concrete with oxidised rust and matte black",
    swatches: ["#A8A49C","#8A6050","#C07060","#484848"],
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=500&q=80&fit=crop",
  },
  {
    id: "tropical_green", label: "Tropical Greens", tag: "Jungle · Leaf · Lime",
    desc: "Deep jungle green, lime, banana leaf — lush and alive",
    swatches: ["#2A5A2A","#4A8A3A","#7AAA4A","#C8D8A0"],
    img: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&q=80&fit=crop",
  },
  {
    id: "monochrome", label: "Monochrome & Texture", tag: "White · Grey · Black",
    desc: "Pure monochrome — all texture, no colour distraction",
    swatches: ["#FFFFFF","#C8C8C8","#888888","#1A1A1A"],
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80&fit=crop",
  },
];
const sections = [
  {
    id: "basics", label: "01 — You", icon: "◈",
    questions: [
      { id: "name", type: "text", label: "Your Full Name", placeholder: "e.g. Priya Sharma", req: true },
      { id: "contact", type: "text", label: "Phone / Email", placeholder: "Best way to reach you", req: true },
      { id: "project_type", type: "radio", label: "What kind of project is this?", req: true,
        options: ["New Residential Interior", "Commercial / Office Space", "Full Architecture + Interior", "Renovation / Refresh of Existing Home", "Holiday Home / Second Home"] },
      { id: "city", type: "text", label: "Project Location", placeholder: "City, locality or address", req: true },
      { id: "how_heard", type: "radio", label: "How did you hear about Studio Ilika?",
        options: ["Instagram", "Google", "Word of mouth / Referral", "Past client", "Walk-in / Hoarding", "Other"] },
    ],
  },
  {
    id: "space", label: "02 — The Space", icon: "◉",
    questions: [
      { id: "space_size", type: "radio", label: "Approximate area of the space",
        options: ["Under 1,500 sq ft", "1,500 – 3,000 sq ft", "3,000 – 5,000 sq ft", "Above 5,000 sq ft", "Not sure yet"] },
      { id: "rooms", type: "checkbox", label: "Which areas need to be designed?",
        options: ["Living Room", "Master Bedroom", "Guest Bedrooms", "Children's Room", "Kitchen", "Dining Area", "Bathrooms", "Home Office / Study", "Pooja Room", "Bar / Entertainment Area", "Outdoor / Terrace / Garden", "Entire Home"] },
      { id: "possession", type: "radio", label: "Current status of the property",
        options: ["Under construction / Bare shell", "Ready to move in", "Occupied – full renovation", "Occupied – partial refresh"] },
      { id: "floors", type: "radio", label: "How many floors does the project span?",
        options: ["Single floor / Apartment", "2 floors", "3+ floors / Bungalow", "Independent villa / Farmhouse"] },
    ],
  },
  { id: "style", label: "03 — Style", icon: "◇", type: "style_section" },
  { id: "walls", label: "04 — Walls", icon: "◫", type: "wall_section" },
  {
    id: "lifestyle", label: "05 — Lifestyle", icon: "◌",
    questions: [
      { id: "household", type: "checkbox", label: "Who lives in this home?",
        options: ["Just me", "Couple — no children", "Family with young children (under 8)", "Family with older children / teenagers", "Multi-generational — grandparents included", "Frequent guests / joint family visits", "Live-in help / staff"] },
      { id: "routines", type: "checkbox", label: "Which of these describe your daily life?",
        options: ["Work from home — need a quiet zone", "Cook daily — kitchen is central", "Entertain frequently at home", "Host overnight guests often", "Meditate / yoga practice at home", "Exercise / home gym", "Night owl — evenings are social", "Early riser — morning light is important"] },
      { id: "collections", type: "checkbox", label: "Do you collect or display any of these?",
        options: ["Art / paintings", "Sculptures / artefacts", "Books", "Trophies / memorabilia", "Travel souvenirs", "Plants / bonsai", "Liquor / bar collection", "Vintage / antique pieces", "Nothing specific"] },
      { id: "pets", type: "radio", label: "Do you have pets?",
        options: ["No pets", "Dogs", "Cats", "Multiple pets", "Other"] },
      { id: "maintenance", type: "radio", label: "Your honest relationship with home upkeep?",
        options: ["I like things spotless — daily cleaning", "Manageable with regular help", "Minimal effort — low maintenance is key", "I have full-time household staff"] },
    ],
  },
  {
    id: "practical", label: "06 — Practical", icon: "◎",
    questions: [
      { id: "timeline", type: "radio", label: "Ideal timeline to complete the project",
        options: ["Within 3 months", "3 – 6 months", "6 – 12 months", "Flexible / No urgency"] },
      { id: "budget", type: "budget_slider", label: "Approximate budget for interiors" },
      { id: "decision", type: "radio", label: "Who will be the primary decision-maker?",
        options: ["Just me", "Me and my spouse / partner equally", "Family consensus needed", "I'll consult parents / elders"] },
      { id: "involvement", type: "radio", label: "How involved do you want to be in the process?",
        options: ["Fully involved — I want to approve every detail", "Moderately — key decisions only", "Minimal — I trust the designer's vision", "Not sure yet"] },
      { id: "other", type: "textarea", label: "Anything else we should know before we meet?",
        placeholder: "Non-negotiables, concerns, special requirements, previous experiences — anything at all" },
    ],
  },
];
/* ── Budget Slider Component ────────────────────────────── */
function BudgetSlider({ answers, setAnswers }) {
  const MIN = 10;
  const MAX = 100;
  const STEP = 5;
  const value = answers.budget_value ?? 10;
  const formatLabel = (v) => {
    if (v >= 100) return "₹1Cr+";
    return `₹${v}L`;
  };
  const pct = ((value - MIN) / (MAX - MIN)) * 100;
  // All milestones: 10, 15, 20 ... 95, 100
  const milestones = [];
  for (let v = MIN; v <= MAX; v += STEP) milestones.push(v);
  return (
    <div>
      {/* Value display */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        <div style={{
          background: C.highlight, border: `2px solid ${C.terracotta}`,
          borderRadius: 10, padding: "14px 48px", textAlign: "center",
          boxShadow: `0 4px 16px rgba(194,113,79,0.15)`,
        }}>
          <div style={{ fontSize: 11, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Approximate Budget</div>
          <div style={{ fontSize: 36, fontFamily: "Cormorant Garamond,Georgia,serif", fontWeight: 600, color: C.terracotta, lineHeight: 1 }}>
            {formatLabel(value)}
          </div>
          <div style={{ fontSize: 11, color: C.muted, marginTop: 5 }}>
            {value >= 100 ? "₹1 Crore and above" : `₹${value} Lakhs`}
          </div>
        </div>
      </div>
      {/* Slider */}
      <div style={{ position: "relative", padding: "0 8px", marginBottom: 8 }}>
        <div style={{ height: 6, borderRadius: 3, background: "#E0D8CE", position: "relative" }}>
          <div style={{
            position: "absolute", left: 0, width: `${pct}%`,
            height: "100%", borderRadius: 3,
            background: `linear-gradient(90deg, ${C.clay}, ${C.terracotta})`,
            transition: "width 0.08s",
          }} />
          {/* Tick marks for every milestone */}
          {milestones.map((m) => {
            const tickPct = ((m - MIN) / (MAX - MIN)) * 100;
            const active = m <= value;
            return (
              <div key={m} style={{
                position: "absolute",
                left: `${tickPct}%`,
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: m % 25 === 0 || m === 10 ? 3 : 2,
                height: m % 25 === 0 || m === 10 ? 10 : 6,
                background: active ? C.terracotta : "#C8BEB2",
                borderRadius: 2,
                transition: "background 0.15s",
                pointerEvents: "none",
                zIndex: 1,
              }} />
            );
          })}
        </div>
        <input
          type="range"
          min={MIN} max={MAX} step={STEP}
          value={value}
          onChange={e => setAnswers(p => ({ ...p, budget_value: Number(e.target.value) }))}
          style={{
            position: "absolute", top: -5, left: 8, right: 8,
            width: "calc(100% - 16px)",
            appearance: "none", WebkitAppearance: "none",
            background: "transparent", outline: "none",
            height: 16, margin: 0, cursor: "pointer", zIndex: 4,
          }}
        />
      </div>
      {/* Milestone labels — show every 25L to avoid crowding */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, padding: "0 2px" }}>
        {milestones.filter(m => m % 25 === 0 || m === 10 || m === 100).map((m) => (
          <div key={m} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 10, color: m <= value ? C.terracotta : C.muted, fontWeight: m <= value ? 600 : 400, transition: "color 0.15s", whiteSpace: "nowrap" }}>
              {m === 100 ? "₹1Cr+" : `₹${m}L`}
            </div>
          </div>
        ))}
      </div>
      {/* All values tooltip row — shown as small ticks */}
      <div style={{ marginTop: 8, fontSize: 10, color: C.muted, textAlign: "center" }}>
        Slide to select — every ₹5L from ₹10L to ₹1Cr+
      </div>
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 26px; height: 26px;
          border-radius: 50%;
          background: ${C.terracotta};
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(194,113,79,0.5);
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.18);
          box-shadow: 0 4px 18px rgba(194,113,79,0.6);
        }
        input[type=range]::-moz-range-thumb {
          width: 26px; height: 26px;
          border-radius: 50%;
          background: ${C.terracotta};
          border: 3px solid white;
          box-shadow: 0 2px 10px rgba(194,113,79,0.5);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
/* ── Photo Card Component ───────────────────────────────── */
function PhotoCard({ item, selected, onClick }) {
  const [loaded, setLoaded] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <div onClick={onClick} style={{
      cursor: "pointer", borderRadius: 8, overflow: "hidden",
      border: `2px solid ${selected ? C.terracotta : C.border}`,
      background: C.white, transition: "all 0.22s",
      transform: selected ? "translateY(-3px)" : "translateY(0)",
      boxShadow: selected ? `0 8px 24px rgba(194,113,79,0.25)` : `0 2px 8px rgba(0,0,0,0.07)`,
      userSelect: "none",
    }}>
      <div style={{ position: "relative", height: 130, background: "#E8DDD0", overflow: "hidden" }}>
        {item.img && !err ? (
          <>
            {!loaded && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#EDE6DA" }}>
                <div style={{ width: 20, height: 20, border: `2px solid ${C.clay}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
              </div>
            )}
            <img src={item.img} alt={item.label} onLoad={() => setLoaded(true)} onError={() => setErr(true)}
              style={{ width: "100%", height: 130, objectFit: "cover", display: "block", opacity: loaded ? 1 : 0, transition: "opacity 0.3s, filter 0.2s", filter: selected ? "brightness(1.04)" : "saturate(0.9)" }} />
          </>
        ) : (
          <div style={{ height: 130, background: `linear-gradient(135deg, #EDE6DA, #DDD3C4)`, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 6 }}>
            <span style={{ fontSize: 26, color: C.clay }}>◈</span>
            <span style={{ fontSize: 10, color: C.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>Open</span>
          </div>
        )}
        {selected && (
          <div style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: C.terracotta, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
        )}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.4))", padding: "20px 10px 6px", fontSize: 9, color: "rgba(255,255,255,0.9)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{item.tag}</div>
      </div>
      <div style={{ padding: "10px 12px 13px" }}>
        <div style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: 14, fontWeight: 600, lineHeight: 1.25, color: selected ? C.terracotta : C.dark, marginBottom: 3 }}>{item.label}</div>
        <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.55 }}>{item.desc}</div>
      </div>
    </div>
  );
}
/* ── Section Components ─────────────────────────────────── */
function StyleSection({ answers, setAnswers }) {
  const sel = answers.style_pref || [];
  const feelSel = answers.feel_tags || [];
  const toggleStyle = id => setAnswers(p => { const prev = p.style_pref || []; return { ...p, style_pref: prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id] }; });
  const toggleFeel = id => setAnswers(p => { const prev = p.feel_tags || []; if (!prev.includes(id) && prev.length >= 3) return p; return { ...p, feel_tags: prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id] }; });
  return (
    <div>
      <div style={QL}>Which design styles speak to you? <span style={QS}>(tap all that resonate)</span></div>
      <div style={QH}>Don't overthink — go with your gut reaction to each image.</div>
      <div style={GRID}>
        {styleOptions.map(s => <PhotoCard key={s.id} item={s} selected={sel.includes(s.id)} onClick={() => toggleStyle(s.id)} />)}
      </div>
      <div style={{ marginBottom: 36 }}>
        <div style={QL}>How do you want your space to <em style={{ fontFamily: "Georgia,serif", fontSize: 17 }}>feel</em>? <span style={QS}>(up to 3)</span></div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 14 }}>
          {feelOptions.map(f => {
            const on = feelSel.includes(f.id);
            const maxed = feelSel.length >= 3 && !on;
            return <div key={f.id} onClick={() => !maxed && toggleFeel(f.id)} style={{ cursor: maxed ? "not-allowed" : "pointer", padding: "9px 16px", borderRadius: 40, border: `1.5px solid ${on ? C.terracotta : C.border}`, background: on ? C.highlight : maxed ? "#F8F4EF" : C.white, color: on ? C.rust : maxed ? "#C8BAA8" : C.dark, fontSize: 13, display: "flex", alignItems: "center", gap: 6, opacity: maxed ? 0.5 : 1, userSelect: "none", transition: "all 0.18s" }}><span>{f.emoji}</span>{f.label}</div>;
          })}
        </div>
      </div>
      <div>
        <div style={QL}>Any spaces, hotels, or images that inspire you?</div>
        <div style={QH}>Instagram handles, hotel names, Pinterest links — or just describe it.</div>
        <Textarea id="inspiration" answers={answers} setAnswers={setAnswers} placeholder="e.g. Lobby of Taj Rambagh, OBLU Maldives, @someone on Instagram..." />
      </div>
    </div>
  );
}
function WallSection({ answers, setAnswers }) {
  const sel = answers.wall_pref || [];
  const toggle = id => setAnswers(p => { const prev = p.wall_pref || []; return { ...p, wall_pref: prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id] }; });
  return (
    <div>
      <div style={QL}>Which wall treatments appeal to you? <span style={QS}>(select all you like)</span></div>
      <div style={QH}>Each card shows a different finish, material or design technique possible for your walls.</div>
      <div style={GRID}>
        {wallOptions.map(w => <PhotoCard key={w.id} item={w} selected={sel.includes(w.id)} onClick={() => toggle(w.id)} />)}
      </div>
      <div style={{ marginTop: 8 }}>
        <div style={QL}>Any specific walls you want as a feature wall?</div>
        <Textarea id="feature_wall" answers={answers} setAnswers={setAnswers} placeholder="e.g. Behind the master bed headboard, living room entrance wall..." />
      </div>
    </div>
  );
}
function FloorSection({ answers, setAnswers }) {
  const sel = answers.floor_pref || [];
  const toggle = id => setAnswers(p => { const prev = p.floor_pref || []; return { ...p, floor_pref: prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id] }; });
  const concerns = ["Cold floors — need warmth underfoot", "Young children — need non-slip", "Prefer low maintenance", "Open to underfloor heating", "Wet areas need special treatment", "Different materials for different rooms"];
  return (
    <div>
      <div style={QL}>Which flooring options interest you? <span style={QS}>(select all that appeal)</span></div>
      <div style={QH}>Different rooms can have different flooring — select anything you'd like to explore.</div>
      <div style={GRID}>
        {flooringOptions.map(f => <PhotoCard key={f.id} item={f} selected={sel.includes(f.id)} onClick={() => toggle(f.id)} />)}
      </div>
      <div style={{ marginBottom: 10, marginTop: 8 }}>
        <div style={QL}>Any flooring concerns?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9, marginTop: 12 }}>
          {concerns.map(opt => {
            const on = (answers.floor_concerns || []).includes(opt);
            return <div key={opt} onClick={() => setAnswers(p => { const prev = p.floor_concerns || []; return { ...p, floor_concerns: prev.includes(opt) ? prev.filter(v => v !== opt) : [...prev, opt] }; })} style={{ cursor: "pointer", padding: "8px 13px", borderRadius: 4, border: `1px solid ${on ? C.terracotta : C.border}`, background: on ? C.highlight : C.white, fontSize: 12.5, color: on ? C.rust : C.dark, transition: "all 0.18s", userSelect: "none" }}>{on ? "
          })}
        </div>
      </div>
    </div>
  );
}
/* ── Shared Primitives ──────────────────────────────────── */
const QL = { fontSize: 15, color: C.dark, marginBottom: 4, fontWeight: 400 };
const QS = { color: C.muted, fontSize: 12, fontWeight: 300 };
const QH = { fontSize: 12, color: C.muted, marginBottom: 18, lineHeight: 1.6 };
const GRID = { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 13, marginBottom: 32 };
function Textarea({ id, answers, setAnswers, placeholder, rows = 3 }) {
  return <textarea value={answers[id] || ""} onChange={e => setAnswers(p => ({ ...p, [id]: e.target.value }))} placeholder={placeholder} rows={rows}
    style={{ width: "100%", padding: "12px 16px", border: `1px solid ${C.border}`, borderRadius: 4, background: C.white, fontSize: 14, color: C.dark, fontFamily: "Jost,sans-serif", outline: "none", resize: "vertical", boxSizing: "border-box", lineHeight: 1.7 }}
    onFocus={e => e.target.style.borderColor = C.terracotta} onBlur={e => e.target.style.borderColor = C.border} />;
}
function QuestionBlock({ q, answers, onChange, setAnswers }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ ...QL, marginBottom: 10 }}>{q.label} {q.req && <span style={{ color: C.terracotta }}>*</span>}</div>
      {q.type === "budget_slider" && <BudgetSlider answers={answers} setAnswers={setAnswers} />}
      {q.type === "text" && <input type="text" placeholder={q.placeholder} value={answers[q.id] || ""} onChange={e => onChange("text", q.id, e.target.value)}
        style={{ width: "100%", padding: "12px 16px", border: `1px solid ${C.border}`, borderRadius: 4, background: C.white, fontSize: 14, color: C.dark, fontFamily: "Jost,sans-serif", outline: "none", boxSizing: "border-box" }}
        onFocus={e => e.target.style.borderColor = C.terracotta} onBlur={e => e.target.style.borderColor = C.border} />}
      {q.type === "textarea" && <Textarea id={q.id} answers={answers} setAnswers={a => onChange("set", null, a)} placeholder={q.placeholder} />}
      {q.type === "radio" && <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {q.options.map(opt => <div key={opt} onClick={() => onChange("radio", q.id, opt)} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "10px 14px", borderRadius: 4, border: `1px solid ${answers[q.id] === opt ? C.terracotta : C.border}`, background: answers[q.id] === opt ? C.highlight : C.white, transition: "all 0.18s", fontSize: 14, color: C.dark }}>
          <div style={{ width: 16, height: 16, borderRadius: "50%", border: `2px solid ${answers[q.id] === opt ? C.terracotta : "#C0B8AE"}`, background: answers[q.id] === opt ? C.terracotta : "transparent", flexShrink: 0, transition: "all 0.18s" }} />{opt}
        </div>)}
      </div>}
      {q.type === "checkbox" && <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
        {q.options.map(opt => { const on = (answers[q.id] || []).includes(opt); return (
          <div key={opt} onClick={() => onChange("checkbox", q.id, opt)} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "8px 13px", borderRadius: 4, border: `1px solid ${on ? C.terracotta : C.border}`, background: on ? C.highlight : C.white, transition: "all 0.18s", fontSize: 13, color: C.dark }}>
            <div style={{ width: 14, height: 14, borderRadius: 2, border: `2px solid ${on ? C.terracotta : "#C0B8AE"}`, background: on ? C.terracotta : "transparent", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {on && <span style={{ color: "#fff", fontSize: 9 }}>✓</span>}
            </div>{opt}
          </div>
        );})}
      </div>}
    </div>
  );
}
function MoodboardSection({ answers, setAnswers }) {
  const sel = answers.moodboard_pref || [];
  const toggle = id => setAnswers(p => {
    const prev = p.moodboard_pref || [];
    return { ...p, moodboard_pref: prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id] };
  });
  return (
    <div>
      <div style={QL}>Which colour palettes & material moods feel like home to you? <span style={QS}>(select all that resonate)</span></div>
      <div style={QH}>Each card shows a real colour story — the swatches below each image are the actual palette. Pick what draws you in instinctively.</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 14, marginBottom: 36 }}>
        {moodboardOptions.map(item => {
          const selected = sel.includes(item.id);
          const [loaded, setLoaded] = useState(false);
          const [err, setErr] = useState(false);
          return (
            <div key={item.id} onClick={() => toggle(item.id)} style={{
              cursor: "pointer", borderRadius: 8, overflow: "hidden",
              border: `2px solid ${selected ? C.terracotta : C.border}`,
              background: C.white, transition: "all 0.22s",
              transform: selected ? "translateY(-3px)" : "translateY(0)",
              boxShadow: selected ? `0 8px 24px rgba(194,113,79,0.25)` : `0 2px 8px rgba(0,0,0,0.07)`,
              userSelect: "none",
            }}>
              {/* Photo */}
              <div style={{ position: "relative", height: 120, background: "#E8DDD0", overflow: "hidden" }}>
                {!err ? (
                  <>
                    {!loaded && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#EDE6DA" }}>
                      <div style={{ width: 18, height: 18, border: `2px solid ${C.clay}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
                    </div>}
                    <img src={item.img} alt={item.label} onLoad={() => setLoaded(true)} onError={() => setErr(true)}
                      style={{ width: "100%", height: 120, objectFit: "cover", display: "block", opacity: loaded ? 1 : 0, transition: "opacity 0.3s", filter: selected ? "brightness(1.04)" : "saturate(0.88)" }} />
                  </>
                ) : (
                  <div style={{ height: 120, background: item.swatches[0], display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>◑</span>
                  </div>
                )}
                {selected && <div style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: C.terracotta, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                {selected && <div style={{ position: "absolute", top: 8, right: 8, width: 24, height: 24, borderRadius: "50%", background: C.terracotta, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.45))", padding: "20px 10px 6px", fontSize: 9, color: "rgba(255,255,255,0.92)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{item.tag}</div>
              </div>
              {/* Swatch Strip */}
              <div style={{ display: "flex", height: 10 }}>
                {item.swatches.map((sw, i) => <div key={i} style={{ flex: 1, background: sw }} />)}
              </div>
              {/* Label */}
              <div style={{ padding: "9px 12px 12px" }}>
                <div style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: 14, fontWeight: 600, lineHeight: 1.25, color: selected ? C.terracotta : C.dark, marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: C.muted, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Material preferences */}
      <div style={{ marginBottom: 28 }}>
        <div style={QL}>Which materials draw you in?</div>
        <div style={QH}>Think surfaces, textures, tactile finishes — not just colour.</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
          {["Natural marble & stone","Dark or richly grained wood","Light bleached or cerused wood","Brushed brass & gold metals","Matte black metal","Polished chrome & steel","Soft fabrics — linen, velvet, bouclé","Leather & suede","Rattan & cane","Lacquered high-gloss surfaces","Microcement & concrete","Glass & mirror","Ceramic & handmade tiles","Resin & composite","Mother of pearl & shell inlay"].map(opt => {
            const on = (answers.materials || []).includes(opt);
            return <div key={opt} onClick={() => setAnswers(p => { const prev = p.materials || []; return { ...p, materials: prev.includes(opt) ? prev.filter(v => v !== opt) : [...prev, opt] }; })}
              style={{ cursor: "pointer", padding: "8px 13px", borderRadius: 4, border: `1px solid ${on ? C.terracotta : C.border}`, background: on ? C.highlight : C.white, fontSize: 12.5, color: on ? C.rust : C.dark, transition: "all 0.18s", userSelect: "none" }}>
              {on ? "✓ " : ""}{opt}
            </div>;
          })}
        </div>
      </div>
      {/* Colours to avoid */}
      <div>
        <div style={QL}>Any colours or materials you absolutely want to avoid?</div>
        <Textarea id="avoid_colors" answers={answers} setAnswers={setAnswers} placeholder="e.g. No cold grey tones, avoid glossy white, not a fan of yellow or pink..." />
      </div>
    </div>
  );
}
export default function App() {
  const [answers, setAnswers] = useState({});
  const [active, setActive] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const onChange = (type, id, val) => setAnswers(p => {
    if (type === "set") return val(p);
    if (type === "text" || type === "radio") return { ...p, [id]: val };
    if (type === "checkbox") { const prev = p[id] || []; return { ...p, [id]: prev.includes(val) ? prev.filter(v => v !== val) : [...prev, val] }; }
    return p;
  });
  const sec = sections[active];
  const progress = Math.round(((active + 1) / sections.length) * 100);
  const tabLabels = { basics: "You", space: "Space", style: "Style", walls: "Walls", lifestyle: "Lifestyle", practical: "Practical" };
  if (submitted) return (
    <div style={{ minHeight: "100vh", background: C.ivory, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", padding: "60px 32px", maxWidth: 460 }}>
        <div style={{ fontSize: 50, color: C.terracotta, marginBottom: 20 }}>✦</div>
        <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: 36, fontWeight: 400, color: C.dark, marginBottom: 14, letterSpacing: "0.04em" }}>Thank you.</h2>
        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.9, fontWeight: 300 }}>We've received your brief. Ar. Neetu Agrawal will personally review your responses and reach out within 48 hours to schedule a discovery call.</p>
        <div style={{ marginTop: 36, fontSize: 11, color: C.gold, letterSpacing: "0.14em", textTransform: "uppercase" }}>Studio ILIKA 
      </div>
    </div>
  );
  return (
    <div style={{ minHeight: "100vh", background: C.ivory }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}} ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#C2714F;border-radius:2px}`}</style>
      {/* Sticky Header */}
      <div style={{ background: C.dark, padding: "18px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
        <div>
          <div style={{ color: C.gold, fontSize: 17, letterSpacing: "0.16em", fontFamily: "Cormorant Garamond,Georgia,serif", fontWeight: 500 }}>Studio ILIKA</div>
          <div style={{ color: "#9E8975", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 1 }}>Client Onboarding Brief</div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: C.clay, fontSize: 12, marginBottom: 5 }}>{active + 1} of {sections.length}</div>
          <div style={{ width: 90, height: 2, background: "#4A3420", borderRadius: 2 }}>
            <div style={{ width: `${progress}%`, height: "100%", background: C.gold, borderRadius: 2, transition: "width 0.4s ease" }} />
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div style={{ display: "flex", overflowX: "auto", background: "#EDE6DA", borderBottom: `1px solid ${C.border}`, scrollbarWidth: "none" }}>
        {sections.map((s, i) => (
          <button key={s.id} onClick={() => setActive(i)} style={{ flexShrink: 0, background: "none", border: "none", padding: "13px 16px", cursor: "pointer", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: i === active ? C.terracotta : C.muted, borderBottom: i === active ? `2px solid ${C.terracotta}` : "2px solid transparent", fontFamily: "Jost,sans-serif", fontWeight: i === active ? 500 : 400, transition: "all 0.2s" }}>
            {s.icon} {tabLabels[s.id]}
          </button>
        ))}
      </div>
      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "36px 20px 100px" }}>
        <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: 28, fontWeight: 400, color: C.dark, marginBottom: 4, letterSpacing: "0.04em" }}>{sec.icon} {sec.label}</h2>
        <div style={{ width: 36, height: 1, background: C.clay, marginBottom: 30 }} />
        {sec.type === "style_section" && <StyleSection answers={answers} setAnswers={setAnswers} />}
        {sec.type === "wall_section" && <WallSection answers={answers} setAnswers={setAnswers} />}
        {sec.type === "floor_section" && <FloorSection answers={answers} setAnswers={setAnswers} />}
        {sec.type === "moodboard_section" && <MoodboardSection answers={answers} setAnswers={setAnswers} />}
        {sec.questions && sec.questions.map(q => <QuestionBlock key={q.id} q={q} answers={answers} onChange={(type, id, val) => onChange(type, id, type === "set" ? val : val)} setAnswers={setAnswers} />)}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 44 }}>
          {active > 0 ? <button onClick={() => setActive(p => p - 1)} style={{ padding: "11px 26px", border: `1px solid ${C.muted}`, background: "transparent", color: C.muted, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 3, fontFamily: "Jost,sans-serif" }}>
          {active < sections.length - 1
            ? <button onClick={() => { setActive(p => p + 1); window.scrollTo(0, 0); }} style={{ padding: "11px 32px", border: "none", background: C.terracotta, color: "#fff", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 3, fontFamily: "Jost,sans-serif", fontWeight: 500 }}>Continue 
            : <button onClick={() => setSubmitted(true)} style={{ padding: "11px 32px", border: "none", background: C.dark, color: C.gold, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 3, fontFamily: "Jost,sans-serif", fontWeight: 500 }}>Submit Brief 
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "14px", fontSize: 10, color: "#B5A899", letterSpacing: "0.1em", textTransform: "uppercase", borderTop: `1px solid #E0D8CE` }}>
        www.studioilika.com · @studioilika
      </div>
    </div>
  );
}
