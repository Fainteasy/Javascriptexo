/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
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
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function() {
        if (event.target == modal){
            modal.style.display = "none";
        }
    }
    let modalContent = document.getElementsByClassName("modal-content")[0];

    document.getElementById("run").addEventListener("click", () => {
        modalContent.innerHTML="";
        let inputNum = document.getElementById("numbers");
        let inputValue = inputNum.value;
        let arrayTransform = inputValue.split(",").map(function(item) {
            return parseInt(item,10);
        }); 
        
        arrayTransform.sort(function(a,b){
            return a-b;
        })
        let paragraphe = document.createElement('p');
        paragraphe.textContent= `Voici la liste des nombres triés : ${arrayTransform}`;
        modalContent.appendChild(paragraphe);
    });
})();
