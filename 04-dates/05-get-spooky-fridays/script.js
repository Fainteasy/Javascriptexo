/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    
    document.getElementById("run").addEventListener("click",()=>{
            let annee = parseInt(document.getElementById("year").value);
            for (let mois = 0; mois < 12; mois++) {
                let date = new Date(annee, mois, 13);
                if (date.getDay() === 5) {
                    document.getElementById("mois").innerHTML = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);
                }
            }
        })
})();
