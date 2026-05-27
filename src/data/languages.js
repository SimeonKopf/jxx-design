// src/data/languages.js
// SINGLE SOURCE OF TRUTH für alle Übersetzungen.
// Keys sind kebab-case und entsprechen exakt den `data-translate`-Attributen im Markup.
// Wird zur Laufzeit über Layout.astro (define:vars) ins Client-Script geladen.
export const languages = {
  de: {
    // Navigation
    "home": "Startseite",
    "artworks": "Kunstwerke",
    "about": "Über mich",
    "contact": "Kontakt",

    // Hero
    "subtitle": "Kunstwerke von Jonathan Millinger",
    "hero-email-cta": "Email schreiben",

    // Galerie
    "gallery-title": "Kunstgalerie",
    "sold": "Verkauft",

    // About
    "about-title": "Über mich",
    "about-text-1": "Hey, ich bin <strong>Jonathan Millinger</strong>, ein junger Pop-Art- und Graffiti-Künstler aus dem Süden Deutschlands. Seit 2024 entstehen meine Arbeiten vor allem auf <strong>Pappelholz-Brettern</strong> – jedes Stück ein <strong>Unikat</strong>. Meine Kunst lebt von kräftigen Farben, abstrakten Mustern und wird durch verschiedene Figuren oder Gegenstände im Comic-Design lebendig.",
    "about-text-2": "Ich liebe es, neue Techniken auszuprobieren und mich künstlerisch immer wieder neu zu erfinden. Ob <strong>Spraydose, Acryl oder Mixed Media</strong> – für mich ist Kunst Entspannung und ein Weg, dem Alltag zu entfliehen.",
    "about-text-3": "Ich freue mich immer, neue Projekte und <strong>Auftragsarbeiten</strong> umzusetzen und dabei kreative Ideen zu verwirklichen. Außerdem bin ich gern unterwegs und besuche unterschiedliche <strong>Events</strong>, um meine Kunst zu teilen und mich inspirieren zu lassen.",
    "work-with-me": "Arbeite mit mir",

    // Kontakt
    "contact-title": "Kontakt aufnehmen",
    "contact-subtitle": "Bereit für ein Projekt oder eine Auftragsarbeit?",
    "contact-email-heading": "Kontaktieren Sie mich",
    "contact-email-desc": "Für Anfragen zu Kunstwerken, Auftragsarbeiten oder allgemeine Fragen schreiben Sie mir gerne eine E-Mail.",
    "contact-email-hint": "Der Klick öffnet Ihr Standard-E-Mail-Programm",
    "contact-social-heading": "Social Media",
    "contact-instagram-label": "@jxx_design auf Instagram",
    "contact-note": "<strong>Hinweis:</strong> Bei Anfragen zu spezifischen Kunstwerken bitte die Artwork-ID (z. B. #001) angeben.",

    // Artwork-Detailseite
    "back-to-gallery": "Zurück zur Galerie",
    "dimensions": "Abmessungen:",
    "medium": "Medium:",
    "year": "Jahr:",
    "about-this-piece": "Über dieses Werk",
    "interested-in-artwork": "Interessiert an diesem Kunstwerk?",
    "interested-in-similar": "Interessiert an ähnlichen Werken?",
    "artwork-available-desc": "Kontaktieren Sie mich für weitere Informationen zu diesem Kunstwerk, Preis und Verfügbarkeit.",
    "artwork-sold-desc": "Dieses Werk wurde verkauft, aber es gibt ähnliche Arbeiten. Schreiben Sie mir gerne.",
    "send-inquiry": "Per E-Mail anfragen",
    "artwork-email-hint": "Der Klick öffnet Ihr E-Mail-Programm mit vorausgefüllter Anfrage zu Artwork",
    "artwork-tip": "<strong>Tipp:</strong> In der E-Mail finden Sie bereits alle wichtigen Informationen zum Kunstwerk. Sie können Ihre Nachricht gerne personalisieren.",

    // Footer
    "footer-quick-links": "Seiten",
    "footer-legal": "Rechtliches",
    "footer-rights": "Alle Rechte vorbehalten.",
    "footer-copyright": "Alle Kunstwerke sind urheberrechtlich geschützt.",

    // Cookie-Banner
    "cookie-title": "Cookies & Datenschutz",
    "cookie-text": "Diese Website verwendet nur technisch notwendige Cookies. Es findet kein Tracking und keine Analyse statt. Mehr dazu in unserer <a href=\"/datenschutz\" class=\"underline hover:text-white\">Datenschutzerklärung</a>.",
    "cookie-accept": "Verstanden",
    "cookie-learn-more": "Mehr erfahren"
  },

  en: {
    // Navigation
    "home": "Home",
    "artworks": "Artworks",
    "about": "About",
    "contact": "Contact",

    // Hero
    "subtitle": "Artworks by Jonathan Millinger",
    "hero-email-cta": "Email Me",

    // Gallery
    "gallery-title": "Art Gallery",
    "sold": "Sold",

    // About
    "about-title": "About Me",
    "about-text-1": "Hey, I'm <strong>Jonathan Millinger</strong>, a young Pop Art and Graffiti artist from southern Germany. Since 2024, my works are primarily created on <strong>poplar wood boards</strong> – each piece a <strong>one-of-a-kind creation</strong>. My art thrives on bold colours, abstract patterns, and comes to life through various figures and objects in a comic style.",
    "about-text-2": "I love experimenting with new techniques and constantly reinventing myself artistically. Whether <strong>spray paint, acrylic, or mixed media</strong> – for me, art is relaxation and a way to escape everyday life.",
    "about-text-3": "I'm always excited to take on new projects and <strong>commissioned works</strong>, bringing creative ideas to life. I also enjoy travelling and attending various <strong>events</strong> to share my art and find inspiration.",
    "work-with-me": "Work with me",

    // Contact
    "contact-title": "Get in Touch",
    "contact-subtitle": "Ready to discuss a project or commission?",
    "contact-email-heading": "Get in Touch",
    "contact-email-desc": "For enquiries about artworks, commissions, or general questions, feel free to send me an email.",
    "contact-email-hint": "This will open your default email client",
    "contact-social-heading": "Social Media",
    "contact-instagram-label": "@jxx_design on Instagram",
    "contact-note": "<strong>Note:</strong> When enquiring about a specific artwork, please include the artwork ID (e.g. #001).",

    // Artwork detail page
    "back-to-gallery": "Back to Gallery",
    "dimensions": "Dimensions:",
    "medium": "Medium:",
    "year": "Year:",
    "about-this-piece": "About this piece",
    "interested-in-artwork": "Interested in this Artwork?",
    "interested-in-similar": "Interested in Similar Work?",
    "artwork-available-desc": "Get in touch for more information about this artwork, pricing, and availability.",
    "artwork-sold-desc": "This piece has been sold, but I have similar works available. Feel free to get in touch.",
    "send-inquiry": "Send Email Enquiry",
    "artwork-email-hint": "This will open your email client with a pre-filled enquiry for Artwork",
    "artwork-tip": "<strong>Tip:</strong> The email already includes all the key details about the artwork. Feel free to personalise your message.",

    // Footer
    "footer-quick-links": "Quick Links",
    "footer-legal": "Legal",
    "footer-rights": "All rights reserved.",
    "footer-copyright": "All artworks are protected by copyright.",

    // Cookie banner
    "cookie-title": "Cookies & Privacy",
    "cookie-text": "This website only uses technically necessary cookies. There is no tracking or analytics. Learn more in our <a href=\"/datenschutz\" class=\"underline hover:text-white\">Privacy Policy</a>.",
    "cookie-accept": "Got it",
    "cookie-learn-more": "Learn more"
  }
};

// Helper: Übersetzungen für eine Sprache holen (Default Deutsch)
export function getTranslations(lang = 'de') {
  return languages[lang] || languages.de;
}
