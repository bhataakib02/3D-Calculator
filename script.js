// Get the input field (display) where the user enters values and sees results
let display = document.getElementById("display");

/**
 * Appends a given value to the display.
 * @param {string} value - The value (number/operator) to add to the display.
 */
function appendToDisplay(value) {
    display.value += value; // Adds the clicked button value to the existing input
}

/**
 * Clears the entire display.
 */
function clearDisplay() {
    display.value = ""; // Resets the display to an empty string
}

/**
 * Deletes the last entered character from the display.
 */
function deleteLast() {
    display.value = display.value.slice(0, -1); // Removes the last character
}

/**
 * Evaluates the mathematical expression entered in the display and shows the result.
 */
function calculateResult() {
    try {
        display.value = eval(display.value); // Evaluates the expression safely
    } catch {
        display.value = "Error"; // Displays "Error" if the expression is invalid
    }
}
