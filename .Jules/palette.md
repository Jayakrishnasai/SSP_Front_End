## 2024-05-24 - Carousel Accessibility and Component Resilience
**Learning:** Carousel pagination indicators often lack semantic context for screen readers. Using `aria-current="true/false"` alongside `aria-label` provides a much better experience. Additionally, source code corruption (like merge markers) can occur in baseline files and should be proactively cleaned up.
**Action:** Always include `aria-label` and `aria-current` for custom pagination dots. Ensure interactive elements also have `focus-visible` styles for keyboard navigators.
