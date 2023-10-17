/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let daytime;
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours == 17 && minutes > 29 || hours > 18) {
        daytime = "Bonsoir";
    } else {
        daytime = "Bonjour";
    }
    document.getElementById("target").innerHTML = daytime;
})();
