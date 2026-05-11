## 2024-03-24 - Missing Form Attributes and Icon Labels
**Learning:** The forms in this repository (`contact.html`, `index.html`) lack functional attributes like `name` and `required`, and rely completely on `placeholder` attributes for labels, which is extremely poor for accessibility. The WhatsApp floating icon also lacked an `aria-label`.
**Action:** When updating or adding forms in this project, explicitly add `aria-label`, `name`, and `required` to input elements. Ensure standalone icons acting as links always have an `aria-label` added.
