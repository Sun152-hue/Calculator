const display = document.getElementById("display");

/* Add value to display */
function appendValue(value) {
    display.value += value;
}

/* Clear the display */
function clearDisplay() {
    display.value = "";
}

/* Delete last character */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/* Calculate result */
function calculateResult() {
    try {
        if (display.value === "") return;
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
        setTimeout(() => display.value = "", 1200);
    }
}

/* 🎹 Keyboard Support */
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") {
        appendValue(key);
    }
    else if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
    }
    else if (key === "Enter") {
        event.preventDefault();
        calculateResult();
    }
    else if (key === "Backspace") {
        deleteLast();
    }
    else if (key === "Escape") {
        clearDisplay();
    }
});
