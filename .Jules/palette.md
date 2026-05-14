
## 2024-05-24 - Form Inputs Accessibility and Functionality
**Learning:** Found a recurring pattern in base HTML templates where form inputs rely purely on visual `placeholder` attributes, lacking semantic `name`, `aria-label`, and `required` attributes. This not only impairs screen reader accessibility but also silently breaks third-party form integrations like FormSubmit which require a `name` attribute to capture data.
**Action:** When adding inputs, explicitly include `name`, `aria-label` (or visual `<label>`), and `required` attributes to ensure inclusive access and proper functionality without relying solely on placeholders.
