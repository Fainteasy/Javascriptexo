/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener('click',() => {
       let value = Array.from({length: 10}, ()=> Math.floor(Math.random()*100));
       console.log(value);
       for (i=0; i>value.length; i++){
        let cellId="n-" + (i + 1);
        let cell = document.getElementById(cellId);
        if (cell) {
            cell.innerHTML = value[i];
        }
       }
    })
})();
