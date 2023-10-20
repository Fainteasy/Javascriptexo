/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const targetElement = document.getElementById("target");
const originalText = targetElement.textContent;
function createWaveEffect(text) {
  let waveText = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    waveText += `<span style="font-size: ${30 + 10 * Math.sin(i / 2)}px;">${char}</span>`;
  }
  return waveText;
}
targetElement.innerHTML = createWaveEffect(originalText);
})();
