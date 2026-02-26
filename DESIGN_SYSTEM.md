# Personal Portfolio — Design System & Implementation Guide

## 1. Vision Statement

A personal portfolio that lives in the tension between **corporate futurism** and **organic imperfection**. The site should feel like walking through a Mirror's Edge level — sterile, bright, geometrically precise — and then noticing that someone has drawn botanical sketches in the margins. It's the Saint Etienne *Good Humor* album cover brought to life as a website: sun-bleached optimism, muted pastels, Scandinavian clarity, with warmth creeping in through texture and handmade detail.

The core tension: **machine precision vs. human touch**.

---

## 2. Primary Visual References

### 2.1 Saint Etienne — *Good Humor* (1998, Creation Records)

**What to take from it:**
- The album cover features a washed-out, sun-drenched color palette — pale sky blues, warm off-whites, muted greens, and soft yellows
- The typography is clean and sans-serif, set against photography that feels candid and European
- The overall mood is dreamy, optimistic, slightly nostalgic — like a postcard from a city you've never been to
- There's a retro-futurist quality: it feels both modern and slightly out of time
- The cover's composition is deceptively simple — lots of negative space with a few confident design decisions

**Album cover image reference:**
- https://upload.wikimedia.org/wikipedia/en/3/3e/Good_Humor_album_cover.jpg
- Search: "Saint Etienne Good Humor album cover Creation Records 1998"

**Color extraction from the cover:**
| Swatch | Hex | Usage |
|--------|-----|-------|
| Pale Sky | `#C8DDE6` | Primary background tint |
| Warm Off-White | `#F0EDE4` | Page background, card surfaces |
| Muted Sage | `#A8BFA8` | Accent, hover states |
| Sun Yellow | `#E8D88E` | Highlight, call-to-action warmth |
| Soft Blush | `#E8C8B8` | Secondary accent, subtle warmth |

### 2.2 Mirror's Edge — Green/Atrium Levels

**What to take from it:**
- Mirror's Edge uses a stark white base environment with extremely saturated primary color accents — particularly the green atrium/sewer levels and the rooftop levels
- The game's art direction features: pure white concrete/glass architecture, bold runner-vision red/orange highlights, and pops of vivid green in vegetation and interior spaces
- The green levels specifically have a palette of: clinical white walls, bright chartreuse/lime green panels, cool blue-gray shadows, and occasional warm accent lighting
- The lighting is crisp, overexposed, almost blown-out — everything feels like high noon
- There's a sense of height, vertigo, and vast negative space

**Color extraction from Mirror's Edge green levels:**
| Swatch | Hex | Usage |
|--------|-----|-------|
| Pure White | `#FFFFFF` | Dominant background |
| Concrete Gray | `#E2E0DB` | Surface variation |
| Runner Green | `#7ACC52` | Primary accent color |
| Atrium Green | `#B8D98A` | Secondary green, softer |
| Cool Shadow | `#C4CBD6` | Depth, card shadows |
| Signal Red | `#E84233` | Sparingly — error states, critical highlights |

**Reference images to search for:**
- "Mirror's Edge green atrium level screenshot"
- "Mirror's Edge Catalyst rooftop garden"
- "Mirror's Edge art direction white city"
- "Mirror's Edge runner vision green pipe interior"

### 2.3 Afterquery — Plant Graphics / Hand-Drawn Elements

**What to take from it:**
- Afterquery (afterquery.com) uses delicate, hand-drawn botanical/scientific illustrations as decorative elements against an otherwise clean, corporate tech layout
- The illustrations feel like scientific diagrams — think Darwin's notebooks, botanical field sketches, patent drawings
- They contrast sharply with the polished sans-serif typography and structured grid
- The line work is thin, precise but clearly hand-drawn — not vector-perfect
- These elements serve as visual "punctuation" — they break up corporate monotony without undermining credibility

**Illustration style to replicate:**
- Thin-line botanical drawings (leaves, stems, root systems, seed pods)
- Schematic/blueprint-style diagrams with annotation lines and measurement markers
- Circuit-board or architectural plan fragments
- Hand-drawn arrows, brackets, and connection lines
- Subtle cross-hatching for shading

**Reference images to search for:**
- "Afterquery website plant illustrations"
- "botanical line drawing scientific illustration minimal"
- "patent drawing style web design"
- "hand drawn schematic web design element"
- "architectural blueprint decorative illustration"

---

## 3. Synthesized Color Palette

### 3.1 Core Palette

```
BACKGROUND
  --bg-primary:        #F7F5F0    /* warm off-white, like Good Humor's sun-bleached quality */
  --bg-secondary:      #FFFFFF    /* pure white panels, Mirror's Edge surfaces */
  --bg-tertiary:       #EDEAE3    /* slightly warmer, parchment tone for contrast sections */

TEXT
  --text-primary:      #0A0A0A    /* near-black, for Helvetica headlines — bold and stark */
  --text-secondary:    #3D3D3D    /* body copy, slightly softer */
  --text-tertiary:     #6B6B6B    /* captions, metadata, muted info */

ACCENT — GREEN (Primary)
  --accent-primary:    #7ACC52    /* Mirror's Edge runner green — vibrant, optimistic */
  --accent-soft:       #B8D98A    /* softer atrium green for backgrounds, hover fills */
  --accent-pale:       #E4F0D4    /* very pale green wash for section backgrounds */

ACCENT — WARM (Secondary)
  --accent-warm:       #E8D88E    /* sun yellow from Good Humor — used very sparingly */
  --accent-blush:      #E8C8B8    /* warm blush for cursive text highlights */

ACCENT — COOL (Tertiary)
  --accent-cool:       #C8DDE6    /* pale blue-gray, sky tones */
  --shadow:            #C4CBD6    /* cool shadow color for depth */

UTILITY
  --error:             #E84233    /* Mirror's Edge signal red */
  --success:           #7ACC52    /* reuse runner green */
  --border:            #D9D5CC    /* warm neutral border */
  --border-light:      #EDEBE6    /* very subtle dividers */
```

### 3.2 Dark Mode Consideration

If implementing dark mode, invert carefully — do NOT just flip to black. Instead:

```
DARK MODE
  --bg-primary:        #111110    /* warm near-black, not pure #000 */
  --bg-secondary:      #1A1A18    /* card surfaces */
  --bg-tertiary:       #222220    /* section variation */
  --text-primary:      #F0EDE4    /* warm off-white text */
  --accent-primary:    #8AD962    /* slightly brighter green for dark backgrounds */
  --accent-soft:       #3D5C2A    /* muted green for subtle fills */
```

---

## 4. Typography System

### 4.1 Primary Typeface — Helvetica Neue / Helvetica

**Role:** All headlines, navigation, buttons, labels, section titles

- **Weight:** Bold (700) and Black (900) for headlines; Medium (500) for nav/buttons
- **Style:** Always uppercase for main headlines, mixed case for sub-headlines
- **Tracking:** Slightly tight for large display text (-0.02em), normal for body-adjacent sizes
- **Sizing scale (fluid, clamp-based):**

```
  --font-display:    clamp(3rem, 8vw, 7rem)      /* Hero headlines */
  --font-h1:         clamp(2.25rem, 5vw, 4.5rem)  /* Section titles */
  --font-h2:         clamp(1.5rem, 3vw, 2.5rem)   /* Sub-sections */
  --font-h3:         clamp(1.125rem, 2vw, 1.5rem)  /* Card titles */
  --font-body:       clamp(0.95rem, 1.2vw, 1.1rem) /* Body copy */
  --font-caption:    clamp(0.75rem, 1vw, 0.85rem)  /* Metadata, captions */
  --font-micro:      0.7rem                        /* Labels, tags */
```

**Fallback stack:** `'Helvetica Neue', Helvetica, Arial, sans-serif`

**If self-hosting or using a free alternative:** Use `Inter` (closest free match for Helvetica Neue with excellent variable font support) or `IBM Plex Sans`.

### 4.2 Accent Typeface — Elegant Flowing Cursive

**Role:** Accent text only — pull quotes, decorative labels, signature, occasional section markers

**Recommended fonts (pick one):**
1. **Playfair Display Italic** — elegant, high-contrast serif italic (free via Google Fonts)
2. **Cormorant Garamond Italic** — lighter, more flowing, old-style elegance
3. **Petit Formal Script** — true connected script, feels like handwritten correspondence
4. **Dancing Script** — casual but flowing, good for warmth
5. **Lavishly Yours** — very elegant, calligraphic, high contrast

**Best recommendation for this aesthetic:** Use **Cormorant Garamond** in italic for a refined European feel that matches the Saint Etienne vibe, OR use **Playfair Display Italic** for more dramatic contrast against the Helvetica.

**Usage rules:**
- NEVER use the cursive font for body text or navigation
- Use for: pull quotes, the site's tagline/subtitle, decorative labels like "selected works" or "et cetera"
- Typically set at a larger size than surrounding text
- Can be set in the accent-warm or accent-blush color for extra distinction
- Maximum ~15-25 words per usage instance — it's a flourish, not a workhorse

### 4.3 Hand-Drawn / Schematic Typeface (Optional)

**Role:** Annotations on illustrations, measurement labels on schematic elements, "notes in the margin"

**Recommended fonts:**
1. **Caveat** — natural handwriting feel (Google Fonts)
2. **Architects Daughter** — technical/drafting style handwriting
3. **Kalam** — warm handwriting that feels like pen on paper

**Usage:** Only appears alongside the hand-drawn illustration elements. Small size. Muted color (use `--text-tertiary` or lighter).

---

## 5. Layout & Grid System

### 5.1 Grid Architecture

```
DESKTOP (1440px design width)
  Columns: 12
  Gutter:  24px
  Margin:  80px (generous — lots of breathing room, Mirror's Edge negative space)
  Max content width: 1280px

TABLET (768px–1024px)
  Columns: 8
  Gutter:  20px
  Margin:  40px

MOBILE (< 768px)
  Columns: 4
  Gutter:  16px
  Margin:  20px
```

### 5.2 Spacing Scale

Use an 8px base unit:
```
  --space-1:   4px     /* micro gaps */
  --space-2:   8px
  --space-3:   16px
  --space-4:   24px
  --space-5:   32px
  --space-6:   48px
  --space-7:   64px
  --space-8:   96px
  --space-9:   128px
  --space-10:  192px   /* hero section padding */
```

### 5.3 Layout Philosophy

- **Generous whitespace everywhere.** The Mirror's Edge aesthetic demands it. Sections should breathe. Content should float, not be crammed.
- **Asymmetric compositions.** Don't center everything. Use left-heavy or right-heavy layouts that create visual tension. Think editorial magazine design.
- **Full-bleed sections** alternating with contained-width sections. Some elements break the grid intentionally — especially the hand-drawn illustrations which should feel like they've been placed on top of the layout, slightly askew.
- **Horizontal rules and dividers** should be thin (1px) and use `--border-light`. They can occasionally be replaced by a thin hand-drawn line SVG for the organic touch.

---

## 6. Component Design Language

### 6.1 Cards

```
CARD STYLE
  Background:     var(--bg-secondary)
  Border:         1px solid var(--border-light)
  Border-radius:  2px (barely rounded — keep it sharp and architectural)
  Shadow:         0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)
  Padding:        var(--space-5) to var(--space-6)
  Hover:          border-color transitions to var(--accent-primary)
                  shadow deepens slightly
                  optional: thin green line appears at top (2px)
```

### 6.2 Buttons

```
PRIMARY BUTTON
  Background:     var(--text-primary)   /* black */
  Text:           var(--bg-primary)     /* off-white */
  Font:           Helvetica, 500 weight, uppercase, tracked slightly
  Padding:        12px 28px
  Border-radius:  0px (sharp rectangle — corporate precision)
  Hover:          Background → var(--accent-primary), text stays light
  Transition:     200ms ease

SECONDARY BUTTON
  Background:     transparent
  Border:         1.5px solid var(--text-primary)
  Text:           var(--text-primary)
  Hover:          fill with var(--accent-pale), border → var(--accent-primary)

TEXT BUTTON / LINK
  Underline style: use a thin line that sits 2px below the text baseline
  Hover:          underline color transitions to var(--accent-primary)
  Optional:       small arrow (→) appended on hover, slides in from left
```

### 6.3 Navigation

```
FIXED TOP NAV
  Background:     var(--bg-primary) at 85% opacity + backdrop-blur(12px)
  Height:         64px
  Content:        Logo/name (left), nav links (right), minimal
  Font:           Helvetica, 500 weight, var(--font-caption) size, uppercase, tracked wide
  Hover:          Links turn var(--accent-primary)
  Active:         Small dot or thin underline in green

  On scroll: nav becomes more opaque, slight shadow appears
```

### 6.4 Section Transitions

Don't use abrupt color blocks. Instead:
- Alternate between `--bg-primary` (warm) and `--bg-secondary` (white)
- Use very subtle gradient transitions between sections (20px gradient overlap)
- Occasionally introduce a `--accent-pale` green wash for emphasis sections
- Hand-drawn horizontal divider SVGs can replace standard `<hr>` elements

---

## 7. Hand-Drawn & Schematic Elements (The "Organic Layer")

### 7.1 Concept

This is the signature design tension. On top of the precise, corporate grid, layer in:

- **Botanical line drawings** — thin-stroke SVGs of leaves, stems, flowers, root cross-sections
- **Schematic/blueprint marks** — dimension lines with arrows, measurement annotations, dashed construction lines, section markers (like architectural plans)
- **Margin notes** — small handwritten-style annotations using Caveat font, positioned off-grid as if someone scribbled on the layout
- **Connection lines** — thin hand-drawn lines connecting elements, with small circles at endpoints (like a mind map or scientific diagram)

### 7.2 Implementation Rules

1. **Always SVG, never raster.** These elements must be crisp at any resolution.
2. **Stroke-only, no fills.** Use thin strokes (1-1.5px) in `--text-tertiary` or `--border` color. Never heavy or dark — they should feel like pencil marks.
3. **Positioned absolutely or with CSS Grid overlap.** They should feel placed "on top of" the design, not constrained by the grid.
4. **Subtle animation on scroll.** Lines can draw themselves in (stroke-dasharray animation). Leaves can have a very gentle sway (2-3deg rotation, 4s duration). Annotations can fade in with a slight upward drift.
5. **Sparse usage.** Maximum 2-3 hand-drawn elements visible at any one time. They're accents, not wallpaper.
6. **Randomized slight rotation.** Each illustration instance should have a small random rotation (-3deg to +3deg) to feel naturally placed.
7. **Opacity:** Set to 0.3-0.6 so they sit behind the content hierarchy.

### 7.3 Suggested Element Library

Create or source the following SVGs:
- [ ] Single leaf with stem (3-4 variations)
- [ ] Small branch with multiple leaves
- [ ] Root system / rhizome pattern
- [ ] Seed pod cross-section
- [ ] Flower head (simple, geometric — like a daisy or dandelion head)
- [ ] Dimension/measurement line with arrows and "tick" marks
- [ ] Dashed construction line (horizontal and vertical)
- [ ] Small circle with crosshair (architectural reference point)
- [ ] Section marker (like "A—A" in architectural plans)
- [ ] Spiral/fibonacci pattern fragment
- [ ] Grid overlay fragment (like graph paper, partial)
- [ ] Arrow with annotation label
- [ ] Bracket with measurement text

### 7.4 Where to Source

- Draw custom (ideal — most authentic)
- Use libraries like **Figma community botanical illustrations**
- **Rawpixel** has excellent public-domain botanical engravings that can be traced to line art
- **The Biodiversity Heritage Library** (biodiversitylibrary.org) — massive archive of scientific illustrations, all public domain
- Convert reference botanical art to thin-line SVG using vector tracing with manual cleanup

---

## 8. Imagery & Media

### 8.1 Photography Style

If using photos (project screenshots, headshots, etc.):
- **Desaturated slightly** — pull saturation down 15-20% to match the muted Good Humor palette
- **Warm tone shift** — shift whites toward warm/cream
- **High key lighting** — bright, overexposed feel (Mirror's Edge influence)
- **No heavy filters or dramatic processing** — the photos should feel clean and natural, just softened

### 8.2 Project Screenshots/Mockups

- Present in **browser frames or device mockups** that use the site's own color scheme (off-white frame, not the default Chrome gray)
- Slight shadow beneath mockups for depth
- Can be slightly rotated (1-2deg) for dynamic feel, but keep most straight

### 8.3 Video/Motion

- If using background video or motion elements, keep them extremely subtle — slow parallax, gentle particle drift, or the stroke-drawing animations for SVG elements
- No autoplay audio ever
- Prefer CSS/SVG animation over video for performance

---

## 9. Page Structure & Content

### 9.1 Recommended Pages/Sections

```
1. HERO / LANDING
   - Your name in large Helvetica Black, uppercase
   - A subtitle/tagline in the cursive accent font
   - One or two hand-drawn botanical elements flanking the text
   - Very minimal — just name, tagline, and a scroll indicator

2. ABOUT
   - Short bio (3-4 sentences max on initial view, expandable)
   - Photo (optional, tasteful)
   - Key skills/technologies as minimal tags or a subtle grid
   - A hand-drawn schematic element (like a blueprint annotation) alongside

3. SELECTED WORK / PROJECTS
   - Grid or list of project cards
   - Each card: project title (Helvetica Bold), brief description, tech tags
   - Thumbnail or hero image per project
   - Hover reveals subtle green accent
   - "selected works" label in cursive accent font
   - Each project links to a detail page or expands inline

4. EXPERIENCE / TIMELINE (optional)
   - Minimal timeline or list
   - Company, role, dates
   - Can include schematic "connection lines" between entries
   - Keep it scannable

5. WRITING / THOUGHTS (optional)
   - If you blog or share thinking, a simple list of recent posts
   - Title + date + one-line summary
   - Links out or to detail pages

6. CONTACT / FOOTER
   - Email, social links (GitHub, LinkedIn, Twitter/X, etc.)
   - Simple footer with copyright
   - Perhaps a small botanical illustration as a sendoff
   - A line in cursive: "let's talk" or "say hello" or similar
```

### 9.2 Micro-Interactions & Delight

- **Cursor:** Consider a subtle custom cursor — a small crosshair or dot (matches the schematic theme)
- **Scroll progress:** A thin green line at the top of the viewport showing scroll progress
- **Link hover:** Links get a hand-drawn underline (SVG path that looks slightly wobbly)
- **Page transitions:** Subtle fade or slide when navigating between sections
- **Loading state:** If needed, a small botanical element drawing itself in

---

## 10. Technical Recommendations

### 10.1 Framework

- **Next.js** (App Router) or **Astro** — both excellent for portfolio sites
- Astro is lighter if you don't need much interactivity
- Next.js if you want ISR for blog content or more dynamic features

### 10.2 Styling

- **Tailwind CSS** with a custom theme matching the design tokens above
- OR **CSS Modules** / **vanilla-extract** for more precise control
- CSS custom properties for all design tokens (enables dark mode toggle)

### 10.3 Animation

- **Framer Motion** (React) or **Motion One** for scroll-triggered animations
- **GSAP** if you want more complex SVG stroke animations
- CSS `@keyframes` for simple hover/transition effects
- **Intersection Observer** for triggering animations on scroll

### 10.4 Fonts

- Self-host all fonts for performance (no Google Fonts network requests)
- Use `font-display: swap` to prevent FOIT
- Subset fonts to reduce file size (Latin character set only unless needed)

### 10.5 Performance Targets

- Lighthouse score: 95+ across all categories
- First Contentful Paint: < 1.2s
- Cumulative Layout Shift: < 0.05
- Total page weight: < 500KB (excluding project images)
- All SVG illustrations should be optimized with SVGO

---

## 11. Reference Websites

### 11.1 Closest to the Target Aesthetic

These sites combine clean/corporate precision with organic or expressive elements:

| Site | URL | What to Take |
|------|-----|-------------|
| **Pentagram** | pentagram.com | Masterclass in editorial grid layout, bold Helvetica typography, generous whitespace, project card design. The gold standard for "polished but not boring." |
| **Afterquery** | afterquery.com | The botanical/hand-drawn illustration layer over a corporate tech layout. Study how they integrate organic graphics without undermining professionalism. |
| **Linear** | linear.app | Incredibly polished UI with subtle animations. The dark-on-light typography, the precision of spacing, the micro-interactions. Not the same aesthetic but the *quality bar* to aim for. |
| **Lusion** | lusion.co | Creative studio site — white space, bold typography, experimental elements layered on clean foundations. Great example of controlled chaos. |
| **Nomad** | nomad.com (HashiCorp) | Clean tech branding with green as primary accent. Good reference for how to use green confidently without it feeling "eco/nature startup." |

### 11.2 Polished Frontends to Study (Different Aesthetic, Great Execution)

| Site | URL | What to Study |
|------|-----|--------------|
| **Brittany Chiang** | brittanychiang.com | The benchmark developer portfolio. Extremely clean, well-structured, great typography hierarchy. Study the information architecture and section flow. |
| **Stripe** | stripe.com | God-tier frontend polish. Gradient usage, animation timing, component design. The hover states and micro-interactions are world-class. |
| **Vercel** | vercel.com | Clean, fast, dark aesthetic with incredible attention to typography scale and spacing. Study their card components and section transitions. |
| **Raycast** | raycast.com | Beautiful product marketing site. Smooth scroll animations, great use of code blocks and technical content presentation. |
| **Read.cv** | read.cv | Minimal portfolio platform. Great example of how little you need — tight typography, lots of white space, content-first. |
| **Paco Coursey** | paco.me | Developer portfolio with incredible restraint. Almost nothing on the page, but every pixel is intentional. Study the economy of design. |
| **Josh Comeau** | joshwcomeau.com | Developer blog/portfolio with playful interactive elements that still feel professional. Good reference for how to add delight without chaos. |
| **The Outline** (archived) | theoutline.com (web archive) | Was a media site with a very bold, graphic design language — strong colors, oversized typography, hand-drawn elements mixed with sharp grids. |
| **Locomotive** | locomotive.ca | Motion-heavy creative studio site. Study their scroll-based animations and how elements choreograph on scroll. |
| **Oio Studio** | oio.studio | Minimal, typographic, lots of whitespace. Good reference for the "less is more" approach with bold type. |

### 11.3 Specific Design Technique References

| Technique | Reference |
|-----------|-----------|
| SVG line-draw animation | https://css-tricks.com/svg-line-animation-works/ |
| Botanical SVG illustration style | Search: "minimal botanical line drawing SVG" on Dribbble |
| Mirror's Edge color analysis | Search: "Mirror's Edge color palette analysis game art" |
| Helvetica-heavy editorial design | Study Pentagram's Public Theater campaigns by Paula Scher |
| Mixing cursive + sans-serif | Look at wine/spirits branding — e.g., Veuve Clicquot, Moët & Chandon identity systems |
| Blueprint/schematic decorative elements | Search: "architectural drawing web design" on Behance |
| Good Humor cover extended artwork | Search: "Saint Etienne Good Humor vinyl inner sleeve artwork" |

---

## 12. Mood Board Search Terms

Use these to build a visual mood board on Pinterest, Are.na, or Figma:

### Color & Atmosphere
- "Mirror's Edge green level aesthetic"
- "Mirror's Edge art direction white city rooftop"
- "Saint Etienne Good Humor album art high resolution"
- "Scandinavian design minimal green white"
- "sun bleached architecture photography"
- "overexposed urban photography white buildings"
- "90s dream pop album art aesthetic"

### Typography Contrast
- "Helvetica bold black poster design"
- "Swiss international style poster"
- "cursive serif italic mixed with sans serif"
- "corporate identity hand lettering contrast"
- "brutalist typography with script accents"

### Organic/Schematic Elements
- "botanical line drawing minimal modern"
- "architectural blueprint decorative illustration"
- "scientific illustration margin notes"
- "patent drawing style illustration"
- "hand drawn diagram web design"
- "afterquery plant graphics"
- "nature meets technology design"
- "organic elements corporate design"

### Overall Vibe
- "futuristic optimism design"
- "clean tech website with organic elements"
- "Mirror's Edge meets editorial design"
- "corporate brutalism with warmth"
- "precision and imperfection graphic design"

---

## 13. Design Principles (For the AI Builder)

1. **Whitespace is content.** Every element should have room to breathe. When in doubt, add more space, not more stuff.

2. **Typography does the heavy lifting.** The contrast between bold Helvetica and flowing cursive is the site's visual identity. Get this right and everything else follows.

3. **Green is a scalpel, not a paintbrush.** Use `--accent-primary` for precise highlights — a hover state, a thin top-border on a card, a single word in a headline. Never flood a section with it.

4. **Hand-drawn elements are guests, not residents.** They should feel like they wandered in from another world. They create surprise and warmth, but if overused they just become another pattern.

5. **No decoration without purpose.** Every botanical illustration, every schematic line, should be near related content or guiding the eye. Don't scatter them randomly.

6. **Performance is a feature.** The site should feel as fast as it looks clean. Lazy-load images, optimize SVGs, minimize JavaScript. A portfolio that loads slowly defeats its own purpose.

7. **Responsive is not an afterthought.** The generous whitespace and asymmetric layouts need to degrade gracefully. On mobile, simplify — fewer illustrations, tighter spacing, but maintain the typographic contrast.

8. **Accessibility first.** All color combinations must meet WCAG AA contrast ratios. The green accent on white is borderline — always pair it with sufficient text contrast or use it only for decorative/non-essential elements. All images need alt text. All interactions need keyboard support.

---

## 14. Color Contrast Verification

| Combination | Ratio | WCAG AA |
|------------|-------|---------|
| `--text-primary` (#0A0A0A) on `--bg-primary` (#F7F5F0) | 17.5:1 | Pass |
| `--text-secondary` (#3D3D3D) on `--bg-primary` (#F7F5F0) | 9.8:1 | Pass |
| `--text-tertiary` (#6B6B6B) on `--bg-primary` (#F7F5F0) | 4.8:1 | Pass (AA) |
| `--accent-primary` (#7ACC52) on `--bg-primary` (#F7F5F0) | 2.3:1 | FAIL — decorative only |
| `--text-primary` (#0A0A0A) on `--accent-pale` (#E4F0D4) | 15.5:1 | Pass |
| `--accent-primary` (#7ACC52) on `--text-primary` (#0A0A0A) | 7.7:1 | Pass |

**Note:** The bright green (`--accent-primary`) should never be used as a text color on light backgrounds. Use it for borders, backgrounds behind dark text, or decorative elements only.

---

## 15. File Structure Recommendation

```
/
├── public/
│   ├── fonts/
│   │   ├── helvetica-neue-bold.woff2
│   │   ├── helvetica-neue-medium.woff2
│   │   ├── cormorant-garamond-italic.woff2
│   │   └── caveat-regular.woff2
│   ├── illustrations/
│   │   ├── leaf-01.svg
│   │   ├── leaf-02.svg
│   │   ├── branch-01.svg
│   │   ├── root-system.svg
│   │   ├── seed-pod.svg
│   │   ├── dimension-line.svg
│   │   ├── crosshair-point.svg
│   │   ├── section-marker.svg
│   │   ├── divider-hand-drawn.svg
│   │   └── spiral-fragment.svg
│   └── images/
│       ├── og-image.png
│       └── projects/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── Footer.tsx
│   │   ├── HandDrawnDivider.tsx
│   │   ├── BotanicalAccent.tsx
│   │   ├── SchematicAnnotation.tsx
│   │   └── ScrollProgress.tsx
│   ├── styles/
│   │   ├── globals.css          /* design tokens, resets */
│   │   └── typography.css       /* font-face declarations, type scale */
│   └── lib/
│       ├── projects.ts          /* project data */
│       └── animations.ts        /* animation configs */
└── package.json
```

---

## 16. Summary

This portfolio is defined by **one core contrast**: the cold precision of Helvetica and white space against the warm imperfection of hand-drawn botanicals and flowing script. Everything else — the Mirror's Edge green, the Saint Etienne warmth, the schematic annotations — serves to reinforce that tension.

Build it with restraint. Let the typography and whitespace do 80% of the work. The hand-drawn elements are the 20% that makes it memorable.
