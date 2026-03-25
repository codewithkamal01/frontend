# Design System Strategy: The Sentinel Narrative

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Translucent Fortress."**

In the world of high-stakes cybersecurity, interfaces often feel claustrophobic or overly aggressive. This system breaks that mold by treating data not as a static grid, but as a living, breathing ecosystem. We utilize **intentional asymmetry**—offsetting heavy data visualizations with expansive breathing room—to reduce cognitive load. By moving away from "boxy" templates toward layered, frosted surfaces, we convey a sense of depth and sophisticated surveillance. The interface shouldn't just show data; it should feel like a high-end lens looking into a digital infrastructure.

## 2. Colors & Atmospheric Depth

Our palette transitions from the "void" of deep space to the vibrant energy of active defense.

- **The "No-Line" Rule:** To achieve a premium, editorial feel, **1px solid borders are strictly prohibited** for defining sections. Contrast must be generated through background shifts. For example, a global navigation sidebar using `surface-container-low` should sit directly against the `background` without a stroke.
- **Surface Hierarchy & Nesting:** We treat the UI as physical layers of frosted glass.
  - **Level 0 (Base):** `surface` (#0a0e14)
  - **Level 1 (Sections):** `surface-container-low` (#0f141a)
  - **Level 2 (Cards/Modules):** `surface-container` (#151a21)
  - **Level 3 (Popovers/Modals):** `surface-container-highest` (#20262f)
- **The "Glass & Gradient" Rule:** Primary actions must use a linear gradient from `primary` (#9ba8ff) to `secondary` (#a58cff) at a 135° angle. This "Signal Gradient" provides a visual soul that flat colors lack.
- **Status Contrast:** High-security alerts must utilize the `error_dim` (#d73357) for urgency, while low-priority statuses use `tertiary` (#81ecff). These should be the only high-saturation elements on the page.

## 3. Typography: The Editorial Edge

We use a dual-typeface system to balance technical precision with modern authority.

- **Display & Headlines (Space Grotesk):** This geometric sans-serif brings a "tech-brutalist" vibe. Use `display-lg` for high-level security scores and `headline-sm` for section titles. The wide apertures and mono-linear weights suggest transparency.
- **Body & Titles (Manrope):** A highly legible, modern sans-serif. `body-md` is the workhorse for data tables. Its slightly condensed nature allows for high-density information without feeling cluttered.
- **Labels (Inter):** Reserved for the smallest functional text (`label-sm`). Inter’s tall x-height ensures that even at 11px, metadata remains crisp and actionable.

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too heavy for a dark-theme glass interface. We use light and blur to define space.

- **The Layering Principle:** Instead of shadows, nest a `surface-container-high` card inside a `surface-container-low` area. This creates a "soft lift" that feels architectural.
- **Ambient Shadows:** For floating elements (Modals/Dropdowns), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. The shadow color should never be pure black; it should feel like a localized darkening of the navy background.
- **The "Ghost Border" Fallback:** If containment is visually necessary for accessibility, use `outline-variant` (#44484f) at **15% opacity**. It should be felt, not seen.
- **Glassmorphism Implementation:** Floating cards must utilize `backdrop-filter: blur(12px)` combined with a semi-transparent `surface-container` (alpha 0.7). This allows the "glow" of background gradients to bleed through, softening the layout.

## 5. Components & Data Structures

### Buttons

- **Primary:** Signal Gradient (Primary to Secondary) with `on-primary` text. `xl` (1.5rem) rounded corners.
- **Secondary:** `surface-variant` background with a `Ghost Border`. No solid fill.
- **Tertiary:** Ghost style; text-only with `primary` color, switching to a subtle `surface-bright` background on hover.

### Cards & Lists

- **Constraint:** Forbid divider lines. Use `spacing-6` (1.3rem) of vertical whitespace to separate list items.
- **Interaction:** On hover, a card should shift from `surface-container` to `surface-container-high`.

### Input Fields

- **Style:** `surface-container-lowest` background.
- **Focus State:** No thick border. Use a 1px glow effect (Primary color at 30% opacity) and a subtle shift in the background to `surface-container-low`.

### Cybersecurity-Specific Components

- **Threat Meter:** A semi-circular gauge using `surface-variant` for the track and the Signal Gradient for the active value.
- **Status Pills:** High-contrast `error_container` for "Breach Detected" with `on_error_container` text. These must be the brightest spots in the UI.

## 6. Do’s and Don’ts

### Do:

- **Do** use `spacing-10` and `spacing-12` for section margins to create an "editorial" sense of scale.
- **Do** use `xl` (1.5rem) rounding for large containers to soften the "industrial" feel of security data.
- **Do** align text-heavy data to a strict baseline grid while allowing decorative background blurs to be asymmetrical.

### Don’t:

- **Don’t** use pure white (#FFFFFF). Always use `on-surface` (#f1f3fc) to prevent eye strain in dark mode.
- **Don’t** use 1px solid dividers between table rows. Use alternating row tints (`surface-container-low` vs `surface-container`) or simply generous whitespace.
- **Don’t** use standard "Drop Shadows" on cards. Rely on `backdrop-blur` and tonal shifts between `surface` tiers.


Page background---- (#0a0e14)
Sidebar	-------- (#0f141a)
Cards--------- (#151a21)
Hover cards	---------- (#1b2028)
Modals	--------- (#20262f)
Borders	outline-variant
Primary	#9ba8ff
Secondary	#a58cff


        colors: {
          "surface-container": "#151a21",
          "secondary-dim": "#7c52ff",
          "surface-container-low": "#0f141a",
          secondary: "#a58cff",
          "inverse-on-surface": "#51555d",
          surface: "#0a0e14",
          "tertiary-container": "#00e3fd",
          "surface-container-lowest": "#000000",
          "inverse-surface": "#f8f9ff",
          "on-primary-fixed": "#000000",
          "on-error-container": "#ffb2b9",
          error: "#ff6e84",
          tertiary: "#81ecff",
          background: "#0a0e14",
          "on-tertiary-fixed": "#003840",
          "on-primary-container": "#001470",
          "surface-container-highest": "#20262f",
          "tertiary-fixed": "#00e3fd",
          "primary-fixed-dim": "#778aff",
          "on-surface": "#f1f3fc",
          "error-container": "#a70138",
          primary: "#9ba8ff",
          "tertiary-fixed-dim": "#00d4ec",
          "primary-container": "#8999ff",
          "on-surface-variant": "#a8abb3",
          "on-secondary": "#24006c",
          "on-background": "#f1f3fc",
          "on-primary": "#001c8e",
          "primary-dim": "#4963ff",
          "surface-variant": "#20262f",
          "secondary-fixed-dim": "#c9baff",
          "surface-dim": "#0a0e14",
          "on-primary-fixed-variant": "#001a88",
          "error-dim": "#d73357",
          "primary-fixed": "#8999ff",
          "on-secondary-fixed": "#3900a1",
          "on-tertiary-fixed-variant": "#005762",
          "on-error": "#490013",
          "on-tertiary": "#005762",
          "secondary-container": "#5c00f7",
          outline: "#72757d",
          "inverse-primary": "#2949ef",
          "secondary-fixed": "#d7caff",
          "on-secondary-container": "#ece3ff",
          "surface-tint": "#9ba8ff",
          "surface-bright": "#262c36",
          "on-tertiary-container": "#004d57",
          "tertiary-dim": "#00d4ec",
          "outline-variant": "#44484f",
          "on-secondary-fixed-variant": "#5800ec",
          "surface-container-high": "#1b2028",
        },
        fontFamily: {
          headline: ["Space Grotesk"],
          body: ["Manrope"],
          label: ["Inter"],
        },
        borderRadius: {
          xl: "0.75rem",
          "2xl": "1.5rem",
        }