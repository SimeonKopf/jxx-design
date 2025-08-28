// src/data/languages.js
export const languages = {
  en: {
    // Navigation
    home: "Home",
    artworks: "Artworks",
    about: "About",
    contact: "Contact",
    
    // Hero
    subtitle: "Artworks by Jonathan Millinger",
    
    // Gallery
    galleryTitle: "Art Gallery",
    sold: "Sold",
    
    // About
    aboutTitle: "About Me",
    aboutText1: "Hey, I'm <strong>Jonathan Millinger</strong>, a young Pop Art and Graffiti artist from southern Germany. Since 2024, my works are primarily created on <strong>poplar wood boards</strong> – each piece is a <strong>unique creation</strong>. My art lives from bold colors, abstract patterns, and comes to life through various figures or objects in comic design.",
    aboutText2: "I love experimenting with new techniques and constantly reinventing myself artistically. Whether <strong>spray paint, acrylic, or mixed media</strong> – for me, art is relaxation and a way to escape everyday life.",
    aboutText3: "I'm always excited to take on new projects and <strong>commissioned works</strong>, bringing creative ideas to life. I also enjoy traveling and attending various <strong>events</strong> to share my art and get inspired.",
    workWithMe: "Work with me",
    
    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to discuss a project or commission?",
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    messageSent: "✓ Message Sent!",
    error: "Error - Try Again",
    
    // Placeholders
    namePlaceholder: "Your full name",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell me about your project...",
    subjectPlaceholder: "Project inquiry, commission, etc.",
    
    // Success/Error Messages
    successMessage: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
    errorMessage: "Sorry, there was an error sending your message. Please try again.",
    requiredFieldsError: "Please fill in all required fields.",
    
    // Artwork page
    backToGallery: "Back to Gallery",
    dimensions: "Dimensions:",
    medium: "Medium:",
    year: "Year:",
    aboutThisPiece: "About this piece",
    interestedInArtwork: "Interested in this Artwork?",
    interestedInSimilar: "Interested in Similar Work?",
    sendInquiry: "Send Inquiry",
    
    // Artwork inquiry messages
    purchaseInquiry: "I am interested in purchasing this artwork. Please provide more information about availability and purchase details.",
    similarInquiry: "I am interested in similar artworks or would like to be notified of new pieces."
  },
  
  de: {
    // Navigation
    home: "Startseite",
    artworks: "Kunstwerke",
    about: "Über mich",
    contact: "Kontakt",
    
    // Hero
    subtitle: "Kunstwerke von Jonathan Millinger",
    
    // Gallery
    galleryTitle: "Kunstgalerie",
    sold: "Verkauft",
    
    // About
    aboutTitle: "Über mich",
    aboutText1: "Hey, ich bin <strong>Jonathan Millinger</strong>, ein junger Pop-Art- und Graffiti-Künstler aus dem Süden Deutschlands. Seit 2024 entstehen meine Arbeiten vor allem auf <strong>Pappelholz-Brettern</strong> – jedes Stück ein <strong>Unikat</strong>. Meine Kunst lebt von kräftigen Farben, abstrakten Mustern und wird durch verschiedene Figuren oder Gegenstände im Comic-Design lebendig.",
    aboutText2: "Ich liebe es, neue Techniken auszuprobieren und mich künstlerisch immer wieder neu zu erfinden. Ob <strong>Spraydose, Acryl oder Mixed Media</strong> – für mich ist Kunst Entspannung und ein Weg, dem Alltag zu entfliehen.",
    aboutText3: "Ich freue mich immer, neue Projekte und <strong>Auftragsarbeiten</strong> umzusetzen und dabei kreative Ideen zu verwirklichen. Außerdem bin ich gern unterwegs und besuche unterschiedliche <strong>Events</strong>, um meine Kunst zu teilen und mich inspirieren zu lassen.",
    workWithMe: "Arbeite mit mir",
    
    // Contact
    contactTitle: "Kontakt aufnehmen",
    contactSubtitle: "Bereit für ein Projekt oder eine Auftragsarbeit?",
    name: "Name",
    email: "E-Mail",
    subject: "Betreff",
    message: "Nachricht",
    send: "Nachricht senden",
    sending: "Wird gesendet...",
    messageSent: "✓ Nachricht gesendet!",
    error: "Fehler - Erneut versuchen",
    
    // Placeholders
    namePlaceholder: "Ihr vollständiger Name",
    emailPlaceholder: "ihre@email.de",
    messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt...",
    subjectPlaceholder: "Projektanfrage, Auftragsarbeit, etc.",
    
    // Success/Error Messages  
    successMessage: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Ich melde mich bald bei Ihnen.",
    errorMessage: "Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
    requiredFieldsError: "Bitte füllen Sie alle Pflichtfelder aus.",
    
    // Artwork page
    backToGallery: "Zurück zur Galerie",
    dimensions: "Abmessungen:",
    medium: "Medium:",
    year: "Jahr:",
    aboutThisPiece: "Über dieses Werk",
    interestedInArtwork: "Interessiert an diesem Kunstwerk?",
    interestedInSimilar: "Interessiert an ähnlichen Werken?",
    sendInquiry: "Anfrage senden",
    
    // Artwork inquiry messages
    purchaseInquiry: "Ich interessiere mich für den Kauf dieses Kunstwerks. Bitte geben Sie mir weitere Informationen über die Verfügbarkeit und Kaufdetails.",
    similarInquiry: "Ich interessiere mich für ähnliche Kunstwerke oder möchte über neue Werke informiert werden."
  }
};

// Helper function to get translations
export function getTranslations(lang = 'de') {
  return languages[lang] || languages.de;
}

// Helper function to get current language from URL or localStorage
export function getCurrentLanguage() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('jxx-language') || 'de';
  }
  return 'de';
}