/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
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

    const fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener('click',() => {
        modalContent.innerHTML = "";
        fruits.splice(0, 1, "banane");
        fruits.splice(-1, 1, "kiwi");
        console.log(fruits);
        let paragraphe = document.createElement('p');
        paragraphe.textContent= `Voici le nouveau tableau : ${fruits}`;
        modalContent.appendChild(paragraphe);

    })
})();
