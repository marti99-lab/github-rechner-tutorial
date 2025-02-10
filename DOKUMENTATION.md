# Dokumentation - Einfacher Rechner

Diese Dokumentation erklärt die Entwicklung eines einfachen Rechners mit HTML, PHP und CSS. 
Die Anleitung ist Schritt für Schritt aufgebaut und enthält Erklärungen zur Nutzung von GitHub.

## Inhalt
1. [Projektübersicht](#projektübersicht)
2. [Vorbereitung](#vorbereitung)
3. [Schritt 1: Erstellen der Grundstruktur](#schritt-1-erstellen-der-grundstruktur)
4. [Schritt 2: Gestaltung mit CSS](#schritt-2-gestaltung-mit-css)
5. [Schritt 3: Rechenlogik mit PHP](#schritt-3-rechenlogik-mit-php)
6. [Schritt 4: Einsatz von GitHub](#schritt-4-einsatz-von-github)
7. [Abschluss und Erweiterungsmöglichkeiten](#abschluss-und-erweiterungsmöglichkeiten)

---

## 1. Projektübersicht
Der Rechner unterstützt grundlegende Rechenoperationen wie Addition, Subtraktion, Multiplikation und Division. 
Die Bedienung erfolgt über ein einfaches, benutzerfreundliches Interface.

## 2. Vorbereitung
- **Voraussetzungen:** Ein Texteditor (z. B. Visual Studio Code), ein lokaler Entwicklungsserver (z. B. XAMPP) und GitHub zur Versionskontrolle.
- **Repository klonen:**
  ```bash
  git clone https://github.com/marti99-lab/github-rechner-tutorial.git

##  3. Schritt - Erstellen der Grundstruktur

3. Schritt - Grundstruktur und Layout

In diesem Schritt legen wir die grundlegende Struktur des Rechners fest und erstellen die Layout-Basis mit HTML und CSS.

- **Header und Footer erstellen**

-  **Erstelle index.html:**
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rechner-Tutorial</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>Rechner-Tutorial</h1>
    </header>

    <h1>Tutorial Rechner</h1>

    <div class="calculator">
        <form action="rechner.php" method="POST">
            <input type="number" name="number1" placeholder="Zahl 1 eingeben" required>
            <select name="operation" required>
                <option value="add">Addition (+)</option>
                <option value="subtract">Subtraktion (-)</option>
                <option value="multiply">Multiplikation (*)</option>
                <option value="divide">Division (/)</option>
            </select>
            <input type="number" name="number2" placeholder="Zahl 2 eingeben" required>
            <button type="submit">Berechnen</button>
        </form>
    </div>

    <footer>
        &copy; 2025 github (marti99-lab)
    </footer>

</body>
</html>

CSS für das Layout
styles.css:
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #fff, #e0f7f4);
    color: #333;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

header {
    background: linear-gradient(135deg, #25665e, #1f5450);
    color: white;
    text-align: center;
    padding: 15px 0;
    font-size: 20px;
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.calculator {
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    width: 320px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid #b2d4cc;
    text-align: center;
}

footer {
    background: linear-gradient(135deg, #25665e, #1f5450);
    color: #fff;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
}


-  **Testen:**
Speichere die Dateien und öffne die index.html im Browser, um sicherzustellen, dass das Layout korrekt angezeigt wird.
live server extenstion in visual studio code um die datei zu sehen
