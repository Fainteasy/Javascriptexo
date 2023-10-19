/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let password1 = document.getElementById("pass-one");
    let password2 = document.getElementById("pass-two");
    document.getElementById("run").addEventListener("click",() => {
        if (password1.value !== password2){
            password1.classList.add("error");
            password2.classList.add("error");
        }
    })
})();
