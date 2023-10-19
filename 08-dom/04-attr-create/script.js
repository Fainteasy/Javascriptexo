/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let image = document.getElementById("source")
    let source = image.getAttribute("data-image");
    let target = document.getElementById("target");
    let imageBalise = document.createElement("img");
    imageBalise.src = source;
    target.appendChild(imageBalise);
    image.remove();
    
})();
