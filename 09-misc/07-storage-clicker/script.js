/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let button = document.getElementById("increment");
    let counterValue = document.getElementById("target");
    let counter = localStorage.getItem("counter") || 0;
    counterValue.textContent = counter;
    button.addEventListener("click",()=> {
        counter++;
        counterValue.textContent = counter;
        localStorage.setItem("counter", counter);
    })
})();
