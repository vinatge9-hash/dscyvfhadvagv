# La Marisq — Simple Restaurant Website

This is a simple, responsive multi-page restaurant website built with HTML, JavaScript, and Tailwind CSS (via CDN). It demonstrates a modern layout, full-width content wrappers (w-full / max-w-none), and interactive UI elements like a reservation modal and gallery lightbox.

Files
- index.html — Homepage with hero, menu preview, gallery, testimonials, and reservation modal.
- about.html — Story and team page.
- contact.html — Contact form and location map placeholder.
- script.js — JavaScript for menu toggle, modal behavior, gallery lightbox, and forms (client-side demo only).

Design notes
- Tailwind CSS is used directly via CDN and classes are applied inline in the HTML.
- Google Fonts (Playfair Display & Poppins) are used; each HTML file includes a comment at the top with the font reference in the format required (e.g. <!-- {{font: Playfair Display, Poppins}} -->).
- All main content wrappers use w-full and avoid fixed max-width containers (max-w-none used where appropriate). This ensures the site fills the full width of the viewport while remaining responsive.
- Images use special placeholders in the format `https://images.unsplash.com/photo-1635029783698-5152fbd342ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHw5fHxkZXNjcmlwdGlvbnxlbnwwfDB8fHwxNzU1MjQyNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080` for gallery large images. The system that uses this repo can replace those placeholders with high-quality images. Other images use direct image URLs from free image providers.

Interactive features
- Mobile menu toggle.
- Reservation modal (client-side only) accessible from header and hero.
- Gallery images open a simple lightbox with a larger image preview (uses the `data-large` attribute or the image src).
- Contact and reservation forms perform basic client-side validation and display a confirmation message (no backend integration).

How to run
1. Place the files on any static server or open the HTML files directly in a modern browser.
2. Because gallery large images use `https://images.unsplash.com/photo-1745215745078-6ef0e0102d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODkyNDZ8MHwxfHNlYXJjaHwxMHx8Li4ufGVufDB8MHx8fDE3NTUyMzk4MDR8MA&ixlib=rb-4.1.0&q=80&w=1080` placeholders, your CMS or environment may replace those tokens with real image URLs. If not, replace `data-large` attribute values with actual image URLs for full-size previews.

Customization
- To change fonts, update the Google Fonts link in the head of each HTML file and adjust the tailwind.config snippet.
- Tailwind configuration is included via the CDN "tailwind.config" script to map the font families.

Notes
- The forms are demo-only and do not send data to a server. Wire them to your backend or a service (e.g., Formspree) for production.
- All navigation links use relative paths (./index.html, ./about.html, ./contact.html).

Enjoy building and customizing La Marisq!
