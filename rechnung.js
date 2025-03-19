let memoryValue = 0;

function getDisplayedResult() {
    let resultText = document.getElementById("result-text").textContent;
    let resultNumber = parseFloat(resultText.replace("Ergebnis: ", "").trim());
    return isNaN(resultNumber) ? 0 : resultNumber;
}

function berechne() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (isNaN(number1) || (isNaN(number2) && operation !== "sqrt")) {
        document.getElementById("result-text").textContent = "Bitte gültige Zahlen eingeben!";
        return;
    }

    switch (operation) {
        case "add":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            result = number2 === 0 ? "Fehler: Division durch 0 nicht erlaubt" : number1 / number2;
            break;
        case "sqrt":
            result = number1 < 0 ? "Fehler: Keine Wurzel aus negativen Zahlen" : Math.sqrt(number1);
            break;
        case "power":
            result = Math.pow(number1, number2);
            break;
        case "percent":
            result = (number1 / 100) * number2;
            break;
        case "log":
            result = number1 <= 0 ? "Fehler: Logarithmus nur für positive Zahlen" : Math.log(number1);
            break;
        case "sin":
            result = Math.sin(number1 * (Math.PI / 180));
            break;
        case "cos":
            result = Math.cos(number1 * (Math.PI / 180));
            break;
        case "tan":
            result = Math.tan(number1 * (Math.PI / 180));
            break;
        default:
            result = "Ungültige Operation";
    }

    document.getElementById("result-text").textContent = `Ergebnis: ${result}`;
    speichereInHistorie(`${number1} ${operation} ${number2} = ${result}`);
}

function getDisplayedResult() {
    let resultText = document.getElementById("result-text").textContent;
    let resultNumber = parseFloat(resultText.replace("Ergebnis: ", "").trim());
    return isNaN(resultNumber) ? 0 : resultNumber;
}

function memoryAdd() {
    memoryValue += getDisplayedResult();
    console.log("M+ Memory Value:", memoryValue);
}

function memorySubtract() {
    memoryValue -= getDisplayedResult();
    console.log("M- Memory Value:", memoryValue);
}

function memoryRecall() {
    document.getElementById("result-text").textContent = `Ergebnis: ${memoryValue}`;
    console.log("MR Memory Recall:", memoryValue);
}

function memoryClear() {
    memoryValue = 0;
    console.log("MC Memory Cleared");
}

function updateMemoryDisplay() {
    document.getElementById("memory-display").textContent = `Memory: ${memoryValue}`;
}

function memoryAdd() {
    memoryValue += getDisplayedResult();
    updateMemoryDisplay();
    console.log("M+ Memory Value:", memoryValue);
}

function memorySubtract() {
    memoryValue -= getDisplayedResult();
    updateMemoryDisplay();
    console.log("M- Memory Value:", memoryValue);
}

function memoryRecall() {
    document.getElementById("result-text").textContent = `Ergebnis: ${memoryValue}`;
    console.log("MR Memory Recall:", memoryValue);
}

function memoryClear() {
    memoryValue = 0;
    updateMemoryDisplay();
    console.log("MC Memory Cleared");
}

window.onload = function() {
    updateMemoryDisplay();
};

function speichereInHistorie(bericht) {
    let historie = JSON.parse(localStorage.getItem("berechnungsHistorie")) || [];
    historie.unshift(bericht);
    if (historie.length > 10) historie.pop();
    localStorage.setItem("berechnungsHistorie", JSON.stringify(historie));
    aktualisiereHistorie();
}

function loescheHistorie() {
    localStorage.removeItem("berechnungsHistorie");
    aktualisiereHistorie();
}

function aktualisiereHistorie() {
    let historie = JSON.parse(localStorage.getItem("berechnungsHistorie")) || [];
    let historieElement = document.getElementById("history-list");
    historieElement.innerHTML = "";
    historie.forEach(eintrag => {
        let li = document.createElement("li");
        li.textContent = eintrag;
        historieElement.appendChild(li);
    });
}

window.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        berechne();
    }
});

window.onload = aktualisiereHistorie;
