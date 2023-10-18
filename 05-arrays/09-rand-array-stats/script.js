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
       let values = Array.from({length: 10}, ()=> Math.floor(Math.random()*100));
       console.log(values);
       for (let i = 0; i < values.length; i++) {
        let cellId = "n-" + (i + 1);
        let cell = document.getElementById(cellId); 
        cell.textContent = values[i]; 
    }
    let min = Math.min(...values);
    let max = Math.max(...values);
    let sum = 0;
    values.forEach (num => {
        sum += num;
    })
    let average = 0;
    average = sum/values.length;
    document.getElementById("min").textContent = min;
    document.getElementById("max").textContent = max;
    document.getElementById("sum").textContent = sum;
    document.getElementById("average").textContent = average;
    })
})();
