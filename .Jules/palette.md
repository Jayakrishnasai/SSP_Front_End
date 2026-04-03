## 2025-05-14 - [Semantic Elements for Interactive Logos]
**Learning:** Interactive elements like logos that serve as "Back to Top" or "Home" navigation should use semantic elements like `button` or `a` instead of generic `div`s with `onClick` handlers. This ensures they are keyboard-accessible and can be properly identified by screen readers.
**Action:** Always check if a clickable element is using a semantic tag and has a descriptive `aria-label`.
