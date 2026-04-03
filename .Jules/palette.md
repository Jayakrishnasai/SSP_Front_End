## 2026-04-03 - [Accessibility-First Form Inputs]
**Learning:** In a high-contrast dark theme (navy/accent), form inputs often lack semantic connection to their purpose, relying solely on placeholders which are not accessible.
**Action:** Always provide a visually hidden `<label>` with `htmlFor` for all form inputs to ensure screen reader accessibility while maintaining the minimal design.

## 2026-04-03 - [Keyboard Navigation for Hover Actions]
**Learning:** Delete buttons or secondary actions hidden behind hover states (opacity-0) are inaccessible to keyboard users.
**Action:** Use `focus-visible:opacity-100` and `focus-visible:ring-2` to ensure these elements become visible and interactable during tab navigation.
