## 2026-05-15 - [Form Accessibility Defaults]
**Learning:** Found that base HTML templates frequently rely exclusively on `placeholder` attributes for form inputs, completely lacking `aria-label`, `name`, and `required` attributes which is a major accessibility block for screen readers.
**Action:** When creating or modifying forms, always ensure inputs have proper `name` attributes for submission, `required` where applicable for validation, and `aria-label` (or associated `<label>`) for screen reader accessibility, even if a visual placeholder exists.
