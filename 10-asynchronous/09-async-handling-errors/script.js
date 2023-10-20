/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (async () => {
        async function getPersons() {
            try {
                const persons = await window.lib.getPersons();
                console.log("Personnes récupérées avec succès :", persons);
            } catch (error) {
                console.error("Erreur lors de la récupération des personnes :", error);
            }
        }
            async function onClickButton() {
            await getPersons();
        }
            document.getElementById("run").addEventListener("click", onClickButton);
    })();
})();
