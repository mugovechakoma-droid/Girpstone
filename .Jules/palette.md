## 2024-05-12 - Form Accessibility Pattern
**Learning:** Base HTML templates in this project consistently rely on `placeholder` attributes for form fields, completely omitting accessible labels (`aria-label`), input names (`name` for form submission), and validation (`required`).
**Action:** Always add explicit `aria-label`, `name`, and `required` attributes when working with forms to ensure screen reader compatibility and correct form submission.
