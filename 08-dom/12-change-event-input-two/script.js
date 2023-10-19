/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let input = document.getElementById("pass-one");
    let validity = document.getElementById("validity");
    input.addEventListener("input", () => {
        let inputValue = input.value;
        let digitCount = 0;
        for (let i = 0; i < inputValue.length; i++) {
            if (!isNaN(inputValue[i])) {
                digitCount++;
            }
        }
        if (inputValue.length >= 8 && digitCount >=2 ) {
            validity.textContent = "ok";
        }
    })
})();
