/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let input = document.getElementById("uservalue");
    let target = document.getElementById("target");
    let randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    document.getElementById("run").addEventListener("click",() => {
        if(isNaN(input.value)) {
            
            target.textContent="Entrez un nombre";
            input.style.borderColor="red";
            target.style.color = "red";
        }
        else {
            target.style.color ="black";
            target.textContent=" ";
            input.style.borderColor="";
            if (input.value > randomNumber) {
                target.textContent = "Le nombre que vous devez trouver est plus petit."
            }
                else if (input.value < randomNumber ) {
                    target.textContent = "Le nombre que vous devez trouver est plus grand.";
                }
                else {
                    target.textContent = "Bravo, vous avez trouvé ! Le nombre à deviner était bien " + randomNumber + ".";
                    target.style.color = "green";
                }    
        }
        

    })

})();
