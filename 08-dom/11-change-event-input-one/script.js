/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   let inputText = document.getElementById("pass-one");
   let counter = document.getElementById("counter");
   inputText.addEventListener("input", () => {
    let inputValue = inputText.value;
    let counterChar  = inputValue.length;
     if(counterChar>10){
        inputText.value = inputValue.slice(0, 10);
        counterChar = 10
     }
     counter.textContent= counterChar + "/10";
   })

})();
