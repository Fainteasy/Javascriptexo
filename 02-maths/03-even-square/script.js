/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let resultatsDiv = document.getElementById('resultat');
        resultatsDiv.innerHTML = '';
        for (i = 0; i < 22 ; i++){
            if (i % 2 == 0) {
            let resultat = i * i;
            let paragraphe = document.createElement('li');
            paragraphe.textContent= `Le carré de ${i} est ${resultat}`;
            resultatsDiv.appendChild(paragraphe);
            }
        }
    });
})();
