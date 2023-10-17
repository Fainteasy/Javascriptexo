/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let confirmation = false;
    
    while (confirmation == false) {
    age = prompt("Introduisez votre âge:");
    sexe = prompt("Introduisez votre sexe (homme/femme/autre):");
    ville = prompt ("Introduisez votre ville");
    confirmation = confirm(`Votre âge est de ${age} ans, vous êtes un(e) ${sexe}, Vous venez de  ${ville}. Est-ce correct ?`); 
    }if (confirmation == true) {
        alert("Ok, c'est noté !")
    } 
})();
