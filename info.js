function ladeMarkdown(datei) {
    fetch(datei)
        .then(response => {
            if (!response.ok) {
                throw new Error("Datei konnte nicht geladen werden.");
            }
            return response.text();
        })
        .then(text => {
            document.getElementById("markdown-container").innerHTML = marked.parse(text);
        })
        .catch(error => {
            console.error("Fehler beim Laden der Datei:", error);
            document.getElementById("markdown-container").innerHTML = "<p style='color:red;'>Fehler: Die Datei konnte nicht geladen werden.</p>";
        });
}
