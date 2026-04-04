## 2026-04-03 - [Accessibility-First Form Inputs]
**Learning:** In a high-contrast dark theme (navy/accent), form inputs often lack semantic connection to their purpose, relying solely on placeholders which are not accessible.

**Action:** Always provide a visually hidden `<label>` with `htmlFor` for all form inputs to ensure screen reader accessibility while maintaining the minimal design.

---

## 2026-04-03 - [Keyboard Navigation for Hover Actions]
**Learning:** Delete buttons or secondary actions hidden behind hover states (opacity-0) are inaccessible to keyboard users.

**Action:** Use `focus-visible:opacity-100` and `focus-visible:ring-2` to ensure these elements become visible and interactable during tab navigation.

---

## 2025-05-14 - [Semantic Elements for Interactive Logos]
**Learning:** Interactive elements like logos that serve as "Back to Top" or "Home" navigation should use semantic elements like `button` or `a` instead of generic `div`s with `onClick` handlers. This ensures they are keyboard-accessible and can be properly identified by screen readers.

**Action:** Always check if a clickable element is using a semantic tag and has a descriptive `aria-label`.

---

## 2024-04-10 - [Accessibility in Mobile Menus and Form Inputs]
**Learning:** Screen readers require explicit state indication for mobile menu toggles (`aria-expanded`) and descriptive labels for icon-only buttons (`aria-label`). Form inputs without visible labels should still have associated hidden labels for screen reader support (`sr-only` class).

**Action:** Always include `aria-label` and `aria-expanded` in interactive components that toggle visibility, and use `sr-only` labels for all inputs that lack a visible `<label>` element.