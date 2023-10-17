/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        const opOne = parseFloat(document.getElementById("op-one").value);
        const opTwo = parseFloat(document.getElementById("op-two").value);
        let resultat;
        
        switch (operation) {
            case "addition" :
                resultat = opOne + opTwo;
                break;
            case "substraction" :
                resultat = opOne - opTwo;
                break;
            case "multiplication" :
                resultat = opOne * opTwo;
                break;
            case "division" :
                resultat = opOne / opTwo;
                break;
            default : 
                resultat = "invalid operation";
        }

        console.log(resultat);
    }

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

})();
