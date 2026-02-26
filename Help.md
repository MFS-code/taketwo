Personal Portfolio — Design Document

A comprehensive brief for AI-assisted development


1. Concept & Vision
This portfolio sits at the intersection of two seemingly opposing worlds: cold corporate precision and warm, breathing nature. The tension between them is intentional and central — not a compromise, but a deliberate collision.
Think of it as a botanical lab report printed on the inside cover of a Helvetica specimen book. Or a Mirror's Edge environment where vines have started growing through the white concrete. The site should feel like something a very structured, very obsessive person made — and then something organic quietly took root inside it.
The emotional target: Polished, futuristic, slightly clinical — but alive.

2. Aesthetic References
2.1 Color & Mood: Saint Etienne — Good Humor (1998)
Reference: https://www.saintetienne.com / the Good Humor album cover
The palette draws from this record cover's summery, warm-pastel world. Creamy whites, warm sage greens, muted yellow-greens, and dusty off-whites. Not cold mint — warm, slightly buttery green. Not neon — sun-faded, almost analogue.
Key qualities to extract from this reference:

Warmth within restraint
Retro without being kitsch
Feels like a warm afternoon, not a cold screen


2.2 Environment & Spatial Feel: Mirror's Edge — The Greenhouse / Green Levels
Reference: Mirror's Edge Catalyst environments (specifically the lush overgrown zones and green-lit interior spaces)
The Mirror's Edge green levels have a specific quality: they are utopian and slightly eerie. Everything is too clean, too structured — and then there's this burst of verdant color, almost aggressively organic within the geometry. That contrast is the spatial energy of this site.
Key qualities to extract:

Crisp architectural geometry as the dominant structure
Green used as an accent/pop, not the wallpaper
High contrast between the clean/white and the organic/green
A sense of futurism that doesn't feel dystopian — optimistic corporate


2.3 Typography System (Primary): Helvetica Neue Bold / Black
Reference: International Style graphic design; Massimo Vignelli; NYC subway signage
The dominant typographic voice is Helvetica Neue Bold or Black, set large, set confidently. No irony in the letterforms — purely functional, purely powerful. Used for all primary headings, section labels, navigation, and any UI chrome.
Rules:

Always black (#0a0a0a) or near-white (#f5f0e8) on dark backgrounds
Tight tracking — not spaced out
Uppercase for labels and navigation; mixed case for headlines
Never decorative — purely structural

Key quality: The Helvetica says "I know exactly what I'm doing."

2.4 Typography System (Secondary): Flowing Cursive / Script
This is the emotional counterpoint to the Helvetica. A flowing, high-contrast calligraphic serif — think Bodoni italics pushed into script territory, or a proper editorial cursive like Cormorant Garamond Italic, or a commissioned script like Playfair Display Italic at large sizes.
Used sparingly, only for:

Subheadings that introduce a section's feeling (not its label)
Pull-quotes or personal statements
Hover-state reveals or decorative text layers
"Chapter" openers

Rules:

Should look like it was written, not typed
High contrast between thick and thin strokes
Black or very deep color — never washed out
Never used for body copy or functional text

Key quality: The cursive says "but I'm also a person."

2.5 Illustration System: Hand-Drawn Botanical Schematics
Reference: afterquery's plant graphics; scientific botanical illustration tradition; Leonhart Fuchs herbals; Maria Sibylla Merian
These are not decorative clipart. They are precise, ink-drawn botanical schematics — the kind you'd find in a 19th-century field guide. Cross-sections of leaves. Root systems with labeled arrows. Seed pod diagrams. They should feel like they came from a notebook, not a Figma library.
Visual characteristics:

Fine ink linework — variable stroke weight, slightly imperfect
No fill color — line art only, black on background or white on dark
Occasional handwritten label annotations in a monospace or scratchy font
Can include dotted "measurement" lines, small arrows, numbered callouts
SVG format preferred — scalable and can be animated with CSS

Placement logic:

Used as background texture elements (large, very low opacity)
Used as section dividers (small vignette illustrations)
Used as hover/reveal elements that appear when mousing over project cards
One or two placed prominently as "art" rather than decoration

Key quality: These are the cracks in the corporate facade — living things pushing through.

3. Color Palette
Primary Palette
NameHexUsageCream White#F5F0E8Primary background, light sectionsWarm Off-White#FAF7F2Card backgrounds, elevated surfacesDeep Black#0A0A0APrimary text, dominant Helvetica typeSage Green#8BAF7CPrimary accent — links, highlights, active statesWarm Sage#A3C48FLighter green accent, hover statesForest#4A7A4EDeeper green for contrast
Secondary / Support
NameHexUsageWarm Gray#C4BDB0Dividers, disabled states, captionsParchment#E8E0D0Subtle section breaksInk#1C1C1ABody text (softer than pure black)Mist#D4E8CEVery light green wash for section backgrounds
Never Use

Cold blues, teals, or cyans (they break the warmth)
Saturated neons
Pure #FFFFFF white (too harsh — use Cream White)
Pure #000000 black in large areas (use Deep Black #0A0A0A)


4. Typography Specification
Type Stack
css/* Primary — Structural */
font-family: 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
font-weight: 700 or 900; /* Bold or Black only for display */

/* Secondary — Script accent */
font-family: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
font-style: italic;
font-weight: 400 or 600;

/* Tertiary — Captions, labels, schematic annotations */
font-family: 'JetBrains Mono', 'Courier New', monospace;
font-weight: 400;
font-size: 11–13px;
Type Scale
RoleFontSizeWeightCaseHero HeadlineHelvetica Neue96–120pxBlack (900)MixedSection TitleHelvetica Neue48–64pxBold (700)UppercaseScript AccentCormorant Italic36–52pxRegularMixedBody CopyHelvetica Neue16–18pxRegular (400)MixedCaption / LabelJetBrains Mono11–13pxRegularUppercaseNavigationHelvetica Neue14pxBoldUppercase
Typography Rules

Line height: 1.1 for display type; 1.6 for body
Letter spacing: -0.02em for display Helvetica; 0.08em for monospace labels
Max line length: 65ch for body copy
The script font should never appear at sizes below 28px — it loses its character
Helvetica headings can and should run large — don't be timid


5. Layout Principles
Grid

Base grid: 12-column, 1280px max content width
Gutters: 24px (desktop), 16px (mobile)
Margins: Generous — 80–120px vertical between sections
Asymmetry is allowed — don't always center. The grid is a tool, not a cage.

Spatial Logic
The layout should feel like a designed printed page, not a generic web template. Think about it like a magazine spread: text can run into the margin, images can bleed, type can sit unexpectedly.
Rules:

Large typographic moments need breathing room — don't crowd them
Botanical illustration elements should break out of the grid (positioned absolutely, overlapping sections)
White/cream space is structural — use it intentionally
Avoid symmetric two-column layouts that look like every Webflow template

Scroll Behavior

Smooth scroll with subtle easing (cubic-bezier(0.16, 1, 0.3, 1))
Section transitions should feel considered — content fades up on enter, not "slide in from left"
Parallax effects: botanical elements can scroll at a different rate than the page content (subtle — 0.3x factor, not dramatic)


6. UI Component Style
Buttons

Primary: Black background, cream text, Helvetica Bold, no border-radius (or 2px maximum — almost square)
Secondary: Transparent with 1px black border, black text
Hover: Sage green fill on primary; black fill on secondary
No box shadows. No gradients. No rounded pills.

Cards (Project Cards)

Background: Warm Off-White (#FAF7F2)
1px border in Warm Gray
On hover: botanical illustration reveals (CSS transition, opacity from 0 → 0.15)
Project title in Helvetica Bold; subtitle/role in monospace caption
No rounded corners (or 2px maximum)

Navigation

Fixed or sticky header
Logo/name in Helvetica Black, left-aligned
Nav links in Helvetica Bold 14px uppercase, right-aligned
On scroll: header gets a backdrop-filter: blur(8px) + cream background at 0.9 opacity
Current section indicator: a small sage green dot or underline

Dividers

Use botanical illustration vignettes as section dividers instead of lines
Or use a single 1px line in Warm Gray, full width
Never use thick decorative dividers or gradients

Cursor

Consider a custom cursor: a small crosshair or a small circle that enlarges on hover — fits the precision aesthetic


7. Motion & Animation
Philosophy
Motion should feel deliberate and physical — not bouncy or playful (that's not this site), but not robotic either. Think of how a very precise machine would move.
Principles

Easing: Prefer cubic-bezier(0.16, 1, 0.3, 1) (fast in, slow out — feels purposeful)
Duration: Short for micro-interactions (150–250ms); longer for page transitions (400–600ms)
No infinite animations unless extremely subtle (e.g., a very slow botanical element breathing/rotating)

Specific Animations

Hero entrance: Type reveals with a clip-path wipe — the text appears as if being printed, left to right
Scroll reveals: opacity: 0 → 1 + translateY(20px → 0), staggered for multiple elements
Botanical elements: Can slowly drift — transform: translateY(10px) over 8 seconds, eased back and forth
Project card hover: Botanical illustration fades in behind content; border color shifts to sage green
Nav hover: Underline slides in from left


8. Reference Websites
8.1 Closest to the Target Aesthetic (Study These Deeply)
Obys Agency — obys.agency
The master of bold Helvetica + editorial layout + unexpected spatial decisions. Their use of large type as structure (not decoration) is exactly right. Study how they break the grid. Note: their color palette is colder — warm yours up.
Linear — linear.app
Not the aesthetic itself, but the benchmark for what "polished corporate" looks like on the web. Study their micro-interactions, their spacing rhythm, their navigation behavior, and their use of subtle motion. This is the standard of craft to match. Note: it's dark and blue-toned — replace with your warm palette.
Stripe — stripe.com
Another craft benchmark. Specifically study their hero sections — how they use gradient, depth, and typographic hierarchy. Their button interactions and form design are class-leading. Note: cherry-pick the craft, not the aesthetic.
Vercel — vercel.com
Obsessively polished. The best example of how to make developer-facing content feel beautiful. Study their spacing, their use of white space, and the way they handle dark/light sections. Their design guidelines at vercel.com/design/guidelines are required reading.

8.2 For Botanical / Organic + Corporate Tension (Inspiration)
Studio Feixen — studiofeixen.ch
Swiss design meets illustration. Very precise grid work with expressive, hand-crafted elements injected in. The tension between the two is done masterfully.
Pentagram — pentagram.com
Masterclass in letting typography do the work. Editorial, confident, no decoration for its own sake. Study the project pages.
Are.na — are.na
Understated, intellectual, structural. The pure-functionality aesthetic pushed to its limit — useful as a counter-reference to make sure you don't go too cold.

8.3 Technically Impressive Portfolios (Study for Frontend Craft)
Bruno Simon — bruno-simon.com
The gold standard for "portfolio as experience" — though his approach (3D driving game) is not your direction, the commitment to a singular concept and the technical flawlessness is the benchmark. Study it to understand what "fully realized" looks like.
Lusion — lusion.co
Agency site with some of the finest WebGL and animation work on the web. Their scroll-linked animations and the way they handle text + visual layering is instructive.
Active Theory — activetheory.net
Large-scale interactive builds. Study their project reveal animations and how they handle navigation between work items.
Resn — resn.co.nz
Playful but masterfully crafted. Excellent for studying how to make interactions feel delightful without feeling childish.

8.4 Sites That Get Parts Right (Mixed Reference)
Awwwards Portfolio Collection — awwwards.com/websites/portfolio/
Browse this list regularly during design. Filter for sites that balance editorial typography with strong layout.
Muzli Top 100 Portfolios 2024 — muz.li
Good survey of the current state of creative portfolio design. Use to ensure you're not accidentally copying a trend.

9. What to Avoid
These are the failure modes — things that would undermine the vision:

The Webflow template look: Symmetric two-column grid, hero image left + text right, gradient CTA button. Generic.
Over-animation: Every element sliding in from a different direction. Exhausting and cheap.
Cold tech palette: Blues, purples, dark mode by default. That's not this.
Decorative without reason: Botanical elements used as wallpaper with no spatial logic. They need to feel discovered, not pasted on.
Script font overuse: If the cursive appears on every heading it becomes noise. It should feel like a surprise each time.
Rounded corners everywhere: The UI chrome should be sharp. Precision aesthetic.
Stock photography: If imagery is used, it should be specific and curated — not generic Unsplash lifestyle shots.
Dark mode as the primary mode: This palette is warm and light. A dark mode variant can exist, but the primary experience is the creamy light version.


10. Sections of the Portfolio (Suggested Structure)
10.1 Hero / Landing

Full-viewport
Name in Helvetica Black, very large (responsive — scales with viewport)
One line of script font below: a personal statement or role descriptor
Background: Cream White
A single large botanical schematic illustration, partially off-screen (right or bottom-right), subtle opacity
Minimal — no CTA button cluttering it up. Scroll to proceed.

10.2 About / Identity

Two-column: Left = personal text (body copy + one script accent quote); Right = asymmetric image or botanical diagram
Introduce the duality of the persona here — this section is the tension

10.3 Work / Projects

Grid of project cards (2–3 per row on desktop)
Each card: project title (Helvetica Bold), category label (monospace), hover reveals botanical element
Click → project detail page

10.4 Project Detail Pages

Full-bleed header image or color block
Large Helvetica project title
Role / year / tools in monospace label style
Case study body in readable prose (not bullets)
Botanical accent in margin or between sections

10.5 Skills / Capabilities (Optional)

If included: list format using Helvetica — no progress bars or pie charts (they look amateur)
Can use a schematic/diagram aesthetic here — a botanical-style "taxonomy" of skills

10.6 Contact / Footer

Keep it sharp and simple
Name, email, relevant links
One final botanical illustration element
Helvetica, monospace, no decoration


11. Technical Notes for the Developer

Framework: React or Next.js recommended (SSR for performance; good for portfolio SEO)
Animations: GSAP for complex scroll-linked animation; CSS transitions for micro-interactions
Fonts: Load Helvetica Neue via system font stack or license; Cormorant Garamond from Google Fonts; JetBrains Mono from Google Fonts
Botanical illustrations: Commission or create as SVGs — they can then be animated via CSS or GSAP
Performance: Botanical SVGs should be inlined (not <img> tags) so they can be styled and animated; lazy-load project imagery
Accessibility: Maintain 4.5:1 contrast ratio; all animations should respect prefers-reduced-motion; semantic HTML throughout
Responsive: Mobile is primarily a reading experience — the drama of the layout simplifies on small screens, but the typography system stays consistent


12. Design Principles Summary

The tension is the concept. Don't resolve the clash between corporate and organic — let it live.
Typography is structure. The Helvetica isn't decoration; it is the layout.
Warmth through color, not softness. The palette is warm but the UI is sharp.
Botanical elements are characters, not wallpaper. They should feel discovered.
Craft above everything. Reference Linear and Stripe for what "finished" looks like.
Restraint with the script. Use it like a signature — rare, meaningful.
White space is active. Empty space isn't empty — it's breathing room that makes the type land harder.