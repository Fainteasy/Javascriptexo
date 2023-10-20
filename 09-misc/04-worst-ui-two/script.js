/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let targetElement = document.getElementById("target");
    let buttons = document.querySelectorAll(".actions button");

    let currentValues = Array.from(buttons, button => ({
        min: parseInt(button.getAttribute("data-min")),
        max: parseInt(button.getAttribute("data-max")),
        value: parseInt(button.textContent)
    }));

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            currentValues[index].value = (currentValues[index].value + 1) % (currentValues[index].max + 1);
            if (currentValues[index].value < currentValues[index].min) {
                currentValues[index].value = currentValues[index].min;
            }
            updateTarget();
            updateButtonLabels();
        });
    });

    function updateTarget() {
        let result = currentValues.reduce((acc, currentValue) => {
            return acc + currentValue.value.toString().padStart(2, '0');
        }, "+");
        targetElement.textContent = result;
    }

    function updateButtonLabels() {
        buttons.forEach((button, index) => {
            button.textContent = currentValues[index].value.toString().padStart(2, '0');
        });
    }
})();
