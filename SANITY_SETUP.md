# 🎨 Sanity CMS Setup für JXX Design

## ✅ Was ist bereits fertig?

Alle technische Integration ist **bereits erledigt**! Du musst nur noch dein Sanity-Projekt erstellen und die Daten migrieren.

---

## 📝 Step-by-Step Anleitung

### **1. Sanity Account erstellen (5 Minuten)**

1. Gehe zu: **https://sanity.io**
2. Klicke auf **"Sign up"** (kostenlos!)
3. Melde dich an mit:
   - GitHub Account (empfohlen) ODER
   - Google Account ODER
   - Email + Passwort

### **2. Neues Sanity Projekt erstellen (2 Minuten)**

1. Nach dem Login klickst du auf **"Create project"**
2. Wähle einen Namen: z.B. **"JXX Design Portfolio"**
3. Wähle **"production"** als Dataset
4. Fertig! 🎉

### **3. Project ID kopieren (1 Minute)**

1. Du siehst jetzt dein Projekt-Dashboard
2. Kopiere die **Project ID** (sieht aus wie: `abc123xyz`)
3. Öffne die `.env` Datei im Projekt
4. Ersetze `placeholder-project-id` mit deiner echten Project ID:

```env
PUBLIC_SANITY_PROJECT_ID=abc123xyz
PUBLIC_SANITY_DATASET=production
```

### **4. Sanity CLI Login (2 Minuten)**

Im Terminal:

```bash
npx sanity login
```

- Browser öffnet sich
- Klicke auf "Allow"
- Fertig!

### **5. Sanity Studio deployen (2 Minuten)**

```bash
npm run studio:deploy
```

Dies erstellt dein Admin-Interface unter: `https://jxx-design.sanity.studio`

### **6. Studio lokal starten (1 Minute)**

```bash
npm run studio
```

Studio öffnet sich unter: `http://localhost:3333`

---

## 📦 Deine Daten migrieren

### **Option A: Manuell über Studio (Empfohlen für Anfang)**

1. Öffne Studio: `npm run studio` oder gehe zu deiner deployed Studio URL
2. Du siehst jetzt zwei Bereiche:
   - **Artwork** (einzelne Bilder)
   - **Series** (Sammlungen von Artworks)

**Reihenfolge ist wichtig:**

#### **Schritt 1: Artworks erstellen**

1. Klicke auf **"Artwork"** → **"Create new"**
2. Fülle die Felder aus:
   - **Artwork ID**: `001`
   - **Title**: `Urban Dreams`
   - **Image**: Bild hochladen (Drag & Drop!)
   - **Dimensions**: `36 x 48 inches`
   - **Medium**: `spray paint on canvas`
   - **Year**: `2024`
   - **Price**: `2.800`
   - **Sold**: ☐ (Häkchen wenn verkauft)
   - **Description**: Beschreibung eingeben
   - **Display Order**: `1`
3. Klicke **"Publish"**
4. Wiederhole für alle 10 Artworks

#### **Schritt 2: Series erstellen**

1. Klicke auf **"Series"** → **"Create new"**
2. Fülle aus:
   - **Title**: `Urban Dreams Series`
   - **Series ID**: Klicke auf "Generate" → wird automatisch: `urban-dreams-series`
   - **Description**: Beschreibung
   - **Artworks**: Wähle die Artworks aus (Artwork #001, #002, #003)
   - **Display Order**: `1`
   - **Image Position**: `Left` oder `Right`
3. Klicke **"Publish"**
4. Wiederhole für alle 4 Series

### **Bilder aus GitHub löschen? ✅ JA!**

**NACHDEM** du alle Artworks in Sanity hochgeladen hast:

```bash
# Bilder aus /public/img löschen (werden nicht mehr benötigt)
rm -rf public/img/*.jpg
rm -rf public/img/*.png
```

Sanity speichert jetzt alle Bilder in ihrem CDN:
- ✅ Automatische Optimierung
- ✅ WebP Konvertierung
- ✅ Responsive Größen
- ✅ Weltweit schnell über CDN

---

## 🚀 Website mit Sanity starten

### **Entwicklung (lokal):**

```bash
# Terminal 1: Astro Dev Server
npm run dev

# Terminal 2 (optional): Sanity Studio
npm run studio
```

Website: `http://localhost:4321`
Studio: `http://localhost:3333`

### **Production (Deployment):**

1. Committe alle Änderungen:
```bash
git add .
git commit -m "Add Sanity CMS integration"
git push
```

2. Auf Vercel/Netlify:
   - Gehe zu Settings → Environment Variables
   - Füge hinzu:
     - `PUBLIC_SANITY_PROJECT_ID` = deine Project ID
     - `PUBLIC_SANITY_DATASET` = `production`
   - Re-deploy!

3. Studio deployen:
```bash
npm run studio:deploy
```

---

## 🎯 So arbeitest du in Zukunft

### **Neues Artwork hinzufügen:**

1. Öffne Studio: `https://jxx-design.sanity.studio`
2. **Artwork** → **Create new**
3. Bild hochladen, Infos eingeben
4. **Publish**
5. Website updated automatisch! 🎉

### **Artwork bearbeiten:**

1. Studio öffnen
2. Artwork suchen und anklicken
3. Änderungen machen (z.B. **Sold** anhaken)
4. **Publish**
5. Fertig!

### **Preis ändern:**

1. Studio → Artwork auswählen
2. **Price** ändern
3. **Publish**

**Kein Code mehr anfassen! 🎨**

---

## 📊 Deine aktuellen Daten (zum Migrieren)

<details>
<summary>Alle Artworks & Series (zum Copy-Paste)</summary>

### **Series 1: Urban Dreams**
- **Artwork 001**: Urban Dreams - 36x48" - €2.800 - Available
- **Artwork 002**: City Pulse - 24x30" - €2.200 - SOLD
- **Artwork 003**: Neon Nights - 30x40" - €3.200 - Available

### **Series 2: Street Symphony**
- **Artwork 004**: Street Symphony - 48x60" - €4.500 - Available
- **Artwork 005**: Electric Soul - 20x24" - €1.800 - SOLD

### **Series 3: Concrete Rebellion**
- **Artwork 006**: Concrete Jungle - 36x36" - €300 - Available
- **Artwork 007**: Rebel Heart - 28x35" - €2.500 - Available
- **Artwork 008**: Underground Vibes - 24x32" - €2.100 - SOLD

### **Series 4: Color Revolution**
- **Artwork 009**: Metro Madness - 40x50" - €4.200 - Available
- **Artwork 010**: Color Revolution - 32x40" - €3.600 - Available

</details>

---

## 🆘 Hilfe & Troubleshooting

### **"Error: Project not found"**
- Check: `.env` hat die richtige Project ID?
- Check: `npx sanity login` ausgeführt?

### **"No content found"**
- Hast du schon Artworks in Sanity erstellt?
- Hast du auf "Publish" geklickt?

### **"Images not loading"**
- Check: Bilder in Sanity hochgeladen?
- Check: Artwork hat ein Image-Feld ausgefüllt?

### **Studio lädt nicht**
- Port 3333 schon belegt? Versuche: `npx sanity dev --port 3334`

---

## 💰 Kosten

**Sanity Free Tier:**
- ✅ 100.000 Bilder
- ✅ 10.000 API Requests/Monat
- ✅ 3 Team-Mitglieder
- ✅ Unbegrenzte Projekte

**Für dein Portfolio:** Komplett kostenlos! 🎉

---

## 🎉 Fertig!

Nach dem Setup kannst du:
- ✅ Artworks über Studio verwalten
- ✅ Keine Bilder mehr in Git
- ✅ Schnelle Bild-Optimierung
- ✅ Einfache Updates ohne Code

**Viel Erfolg! 🚀**
