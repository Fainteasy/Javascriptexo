/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // let target = document.getElementById("target");
    // const originalText = target.textContent
    // let typewriter = '';
    // for (i = 0; i < text.length; i++) {
    //     let char = text[i];
    //     typewriter += `<span>${char}</span>`;
    // }
    var i = 0;
    var txt = `Je suis un texte qui va apparaître dans un effet "machine à écrire", un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !`;
    var speed = 100;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("target").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
    
})();
