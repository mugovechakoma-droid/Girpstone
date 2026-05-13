## 2023-10-25 - Icon-only Link Accessibility
**Learning:** Standalone FontAwesome icons acting as links (like the floating WhatsApp button) without visible text require an explicit `aria-label` on the anchor tag. Additionally, the inner `<i>` element needs `aria-hidden="true"` to prevent screen readers from redundantly announcing the icon's CSS class names.
**Action:** Always add `aria-label` to icon-only links/buttons, and pair it with `aria-hidden="true"` on the decorative icon element.
