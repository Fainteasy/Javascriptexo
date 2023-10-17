/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",() => {
        const hexNombre = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let randomColor="";
        for(i=0; i<6; i++){
            randomColor += hexNombre[Math.floor(Math.random()*16)];
        }
        randomColor = "#"+randomColor;
        document.body.style.backgroundColor = randomColor;
    })
})();
