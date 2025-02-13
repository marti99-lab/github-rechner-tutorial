function berechne() {
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (isNaN(number1) || isNaN(number2)) {
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
            if (number2 === 0) {
                result = "Fehler: Division durch 0 nicht erlaubt";
            } else {
                result = number1 / number2;
            }
            break;
        default:
            result = "Ungültige Operation";
    }

    document.getElementById("result-text").textContent = `Ergebnis: ${result}`;
}
