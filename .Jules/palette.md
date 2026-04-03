## 2024-04-10 - [Accessibility in Mobile Menus and Form Inputs]
**Learning:** Screen readers require explicit state indication for mobile menu toggles (`aria-expanded`) and descriptive labels for icon-only buttons (`aria-label`). Form inputs without visible labels should still have associated hidden labels for screen reader support (`sr-only` class).
**Action:** Always include `aria-label` and `aria-expanded` in interactive components that toggle visibility, and use `sr-only` labels for all inputs that lack a visible `<label>` element.
