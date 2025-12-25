# 🔒 DSGVO-Compliance - Was du noch anpassen musst

## ✅ Was ist bereits fertig?

Alle DSGVO-Seiten sind erstellt und funktionsfähig:
- ✅ **Impressum** (`/impressum`)
- ✅ **Datenschutzerklärung** (`/datenschutz`)
- ✅ **Cookie Consent Banner** (erscheint beim ersten Besuch)
- ✅ **Footer** mit rechtlichen Links

---

## 📝 Was du JETZT anpassen musst (Platzhalter ersetzen)

### 1️⃣ **Impressum** (`src/pages/impressum.astro`)

**Suche nach folgenden Platzhaltern und ersetze sie:**

```
[DEINE STRASSE UND HAUSNUMMER]  →  z.B. "Musterstraße 123"
[DEINE PLZ UND STADT]           →  z.B. "12345 Berlin"
[DEINE UST-ID NUMMER]           →  z.B. "DE123456789"
```

**Wo findest du diese Platzhalter?**
- Zeile ~20: Adresse unter "Angaben gemäß § 5 TMG"
- Zeile ~35: Umsatzsteuer-ID (falls du keine hast, lösche den ganzen Abschnitt!)
- Zeile ~45: Verantwortlich für den Inhalt

**Beispiel:**
```html
<!-- VORHER -->
<p class="text-gray-700">
  <strong>Jonathan Millinger</strong><br>
  JXX Design<br>
  [DEINE STRASSE UND HAUSNUMMER]<br>
  [DEINE PLZ UND STADT]<br>
  Deutschland
</p>

<!-- NACHHER -->
<p class="text-gray-700">
  <strong>Jonathan Millinger</strong><br>
  JXX Design<br>
  Kunststraße 42<br>
  10115 Berlin<br>
  Deutschland
</p>
```

---

### 2️⃣ **Datenschutzerklärung** (`src/pages/datenschutz.astro`)

**Suche nach folgenden Platzhaltern:**

```
[DEINE STRASSE UND HAUSNUMMER]  →  Deine Adresse
[DEINE PLZ UND STADT]           →  Deine PLZ + Stadt
[DEIN HOSTING PROVIDER]         →  z.B. "Vercel Inc." oder "Netlify"
[ADRESSE DES PROVIDERS]         →  Provider-Adresse
```

**Wo findest du diese Platzhalter?**
- Zeile ~80: Hosting-Anbieter (z.B. Vercel, Netlify)
- Zeile ~120: Verantwortliche Stelle (deine Adresse)

**Hosting-Provider Beispiele:**

Wenn du **Vercel** nutzt:
```
Hosting-Anbieter:
Vercel Inc.
340 S Lemon Ave #4133
Walnut, CA 91789
USA
```

Wenn du **Netlify** nutzt:
```
Hosting-Anbieter:
Netlify, Inc.
44 Montgomery Street, Suite 300
San Francisco, CA 94104
USA
```

---

### 3️⃣ **Umsatzsteuer-ID** (Optional)

**Hast du eine Umsatzsteuer-ID?**

❌ **NEIN** (meistens bei Kleinunternehmern):
- **Lösche den ganzen Abschnitt** "Umsatzsteuer-ID" aus dem Impressum
- Entferne alles von Zeile ~35-43 in `impressum.astro`

✅ **JA**:
- Ersetze `[DEINE UST-ID NUMMER]` mit deiner echten USt-ID
- Format: `DE123456789`

---

## 🔍 Schnell-Check: Hast du alles ersetzt?

Öffne diese Dateien und suche nach `[`:
```bash
# Im Terminal:
grep -n "\[" src/pages/impressum.astro
grep -n "\[" src/pages/datenschutz.astro
```

**Wenn nichts erscheint = ✅ Alle Platzhalter ersetzt!**
**Wenn etwas erscheint = ⚠️ Noch Platzhalter vorhanden**

---

## 🚀 Nach dem Anpassen

### **Schritt 1: Teste lokal**
```bash
npm run dev
```

Prüfe:
- ✅ `/impressum` → Deine echte Adresse steht da?
- ✅ `/datenschutz` → Hosting-Provider stimmt?
- ✅ Footer → Links funktionieren?
- ✅ Cookie Banner → Erscheint beim ersten Besuch?

### **Schritt 2: Commit & Push**
```bash
git add .
git commit -m "Update Impressum und Datenschutz mit echten Daten"
git push
```

### **Schritt 3: Website deployen**
Nach dem Push wird deine Website automatisch neu gebaut!

---

## 📋 Checkliste DSGVO-Compliance

Nach dem Anpassen solltest du folgendes haben:

### **Impressum** ✅
- [x] Vollständiger Name
- [x] Vollständige Adresse (Straße, PLZ, Stadt)
- [x] E-Mail-Adresse
- [x] Umsatzsteuer-ID (falls vorhanden) ODER Abschnitt gelöscht
- [x] Verantwortlich für Inhalt

### **Datenschutzerklärung** ✅
- [x] Verantwortliche Stelle mit Adresse
- [x] Hosting-Provider angegeben
- [x] Kontaktformular-Verarbeitung beschrieben
- [x] EmailJS erwähnt (für Kontaktformular)
- [x] Sanity CMS erwähnt (für Bilder)
- [x] Rechte der Betroffenen aufgelistet

### **Cookie Consent** ✅
- [x] Banner erscheint beim ersten Besuch
- [x] Link zur Datenschutzerklärung
- [x] "Verstanden" Button funktioniert
- [x] Einstellung wird gespeichert

### **Footer** ✅
- [x] Link zu Impressum
- [x] Link zu Datenschutzerklärung
- [x] Copyright-Hinweis
- [x] Social Media Links

---

## ⚠️ Wichtige rechtliche Hinweise

### **Disclaimer:**
Diese Vorlagen sind als Hilfe gedacht, ersetzen aber **keine Rechtsberatung**!

**Du solltest:**
1. ✅ Die Texte an deine spezifische Situation anpassen
2. ✅ Bei Unsicherheit einen Anwalt konsultieren
3. ✅ Die Datenschutzerklärung regelmäßig aktualisieren

**Wenn du später neue Dienste hinzufügst** (z.B. Google Analytics, Facebook Pixel):
- ⚠️ Datenschutzerklärung MUSS angepasst werden!
- ⚠️ Cookie Consent MUSS erweitert werden!

---

## 🆘 Hilfe & Ressourcen

### **Weitere Infos:**
- [Datenschutz-Generator](https://www.e-recht24.de/impressum-generator.html)
- [DSGVO Info](https://dsgvo-gesetz.de/)
- [Anwaltskammer](https://anwaltauskunft.de/) - Für rechtliche Beratung

### **Probleme?**
Falls Links nicht funktionieren oder Seiten nicht laden:
1. Check: Dateien existieren in `src/pages/`?
2. Check: Footer + CookieConsent in `Layout.astro` eingebunden?
3. Dev-Server neu starten: `npm run dev`

---

## 📊 Zusammenfassung

**Was du TUN musst:**
1. Öffne `src/pages/impressum.astro` → Ersetze `[PLATZHALTER]`
2. Öffne `src/pages/datenschutz.astro` → Ersetze `[PLATZHALTER]`
3. Falls keine USt-ID: Lösche USt-Abschnitt aus Impressum
4. Teste lokal: `npm run dev`
5. Commit & Push

**Zeitaufwand:** ~5 Minuten ⏱️

**Danach:** ✅ Deine Website ist DSGVO-konform!

---

**Viel Erfolg! 🚀**

Bei Fragen einfach melden!
