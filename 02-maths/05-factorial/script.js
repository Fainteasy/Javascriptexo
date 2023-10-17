/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let modal = document.getElementById("modal");
    let btn = document.getElementById("run");
    let span = document.getElementsByClassName("close")[0];
    let modalContent = document.getElementsByClassName("modal-content")[0];
    btn.onclick = function(){
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function () {
        if (event.target ==modal) {
            modal.style.display = "none"
        };
    }

    document.getElementById("run").addEventListener("click", () => {
            modalContent.innerHTML="";
            let inputValue = parseFloat(document.getElementById("number").value);
            let resultat = 1
            for (i = 1; i <= inputValue ; i++){
                resultat*=i;
            }
            let paragraphe = document.createElement('p');
            paragraphe.textContent = `Le factoriel de ${inputValue} est ${resultat}`;
            modalContent.appendChild(paragraphe);

    });
})();
