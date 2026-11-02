# Beads & All

A responsive website for **Beads & All**, a home-based handmade beaded jewellery business in Strand, Western Cape. Customers can browse the gallery, learn about the business, request a quote for a custom order, and get in touch. The site has no online shop. Orders start as enquiries.

## Student details

| | |
|---|---|
| **Name** | Shamiel Taylor |
| **Student number** | ST10522937 |
| **Institution** | The IIE's Rosebank College |
| **Module** | WEDE5020w: Web Development Introduction |
| **Lecturer** | Morne Coetzee |
| **Live site** |  |
| **Repository** | https://github.com/Shamr0ck3rDotCom/beads_and_all_website.git |

## Project overview

Beads & All makes custom earrings, prayer beads, bookmarkers and bangles by hand. Before this project the business had no website. Customers found it through word of mouth. The site gives the owner a professional online presence and a simple way to receive custom order requests.

### Goals
- Showcase past work in a browsable, searchable gallery.
- Let customers request a custom order and get an instant cost and availability estimate.
- Give customers an easy way to contact the owner.
- Look luxurious, load fast, work on phones, tablets and desktops, and be found on Google.

## Pages (sitemap)

```
Home (index.html)
├── About Us (about.html)      history and services
├── Gallery (gallery.html)     12 pieces, filter, search, lightbox
├── Enquire (enquiry.html)     custom order form + FAQ
└── Contact Us (contact.html)  map, details, message form
```

## Features

**Design**
- Dark, luxury theme: espresso browns, beige and gold, with Playfair Display and Open Sans fonts
- Responsive layout with breakpoints at 900px (tablet) and 600px (mobile)
- CSS variables, Grid and Flexbox, hover and focus states

**JavaScript**
- **Gallery lightbox:** click a photo to enlarge, with previous/next buttons, keyboard arrows and Esc
- **Gallery filter and search:** filter by category and search by description
- **FAQ accordion:** on the enquiry page, keyboard accessible with `aria-expanded`
- **Interactive map:** Leaflet and OpenStreetMap on the contact page
- **Animations:** hero fade-in (CSS keyframes) and scroll-reveal (IntersectionObserver), with `prefers-reduced-motion` respected
- **Enquiry form:** validates input, shows error messages, then returns an estimated cost and availability
- **Contact form:** validates input, then compiles the message into an email (`mailto:`) to the recipient set in the code

**SEO**
- Keyword-rich titles and meta descriptions on every page
- Canonical links, one `<h1>` per page, descriptive image filenames and alt text
- Lazy loading on below-the-fold images
- `robots.txt` and `sitemap.xml`

**Accessibility**
- Semantic HTML5, labelled form fields, `aria-live` regions for form responses, keyboard navigation, reduced motion support

## Project structure

```
beads-and-all/
├── index.html
├── about.html
├── gallery.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
```

## Running the site locally

1. Clone the repository: `git clone [your repo link]`
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**.

## Notes and limitations

- **Placeholder domain:** `beadsandall.co.za` is used in canonical links, `sitemap.xml` and `robots.txt`. It should be replaced with the real domain once the site is hosted.
- **Placeholder prices:** the estimated costs on the enquiry page are sample values. The owner must supply real prices.
- **Contact form:** it uses `mailto:`, which opens the visitor's email app. It doesn't send mail from the server.
- **Contact details:** the email address and phone number are placeholders.
- **Map:** it shows the Strand area only, not a home address, for the owner's privacy.

## Changelog

### Part 3: JavaScript, SEO and deployment
- Added SEO titles, meta descriptions, canonical links, lazy loading, `robots.txt` and `sitemap.xml`
- Renamed images to lowercase, hyphenated, descriptive filenames and rewrote alt text
- Added enquiry form validation with error messages and a cost and availability response
- Added contact form validation and email compilation
- Added gallery lightbox, category filter and search
- Added FAQ accordion on the enquiry page
- Added Leaflet interactive map on the contact page
- Added hero and scroll-reveal animations
- Deployed the site to [Netlify / GitHub Pages]

### Part 2: CSS and responsive design
- Applied the dark, luxury theme using CSS variables
- Styled all five pages with Grid and Flexbox
- Added tablet and mobile breakpoints
- **Feedback addressed:** [add the feedback you received on Part 2 and what you changed]

### Part 1: Planning and HTML
- Created wireframes and sitemap for five pages
- Built the semantic HTML structure for all pages
- **Feedback addressed:** created a GitHub repository to track the source code with regular commits, added this README and changelog, and organised files into `css/`, `js/` and `images/` folders

## References

- Leaflet. (2023). *Leaflet: an open-source JavaScript library for interactive maps*. https://leafletjs.com
- OpenStreetMap contributors. *OpenStreetMap*. https://www.openstreetmap.org
- Google Fonts. *Playfair Display* and *Open Sans*. https://fonts.google.com
- MDN Web Docs. *IntersectionObserver*, *Element.classList*, *ARIA: aria-expanded* and *Window.location*. https://developer.mozilla.org
- [Add your images' sources: where each photo came from, for example the owner's own photos, or the website name and URL for any others]
- [Add any other sources you used]

## Image credits

[Google, Gemini for Hero image]