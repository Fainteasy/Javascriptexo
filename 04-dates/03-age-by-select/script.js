/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
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
    let modalContent = document.getElementsByClassName("modal-content")[0];
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
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth()+1;
    let day = now.getDate();
    console.log(year);
    console.log(month);
    console.log(day);
    document.getElementById("run").addEventListener("click",()=> {
        modalContent.innerHTML="";
        let dayOB = document.getElementById("dob-day").value;
        let monthOB = document.getElementById("dob-month").value;
        let yearOB = document.getElementById("dob-year").value;
        let age = year - yearOB;
        if(monthOB > month || monthOB == month && dayOB > day) {
                age -= 1;
            }
        let paragraph = document.createElement('p');
        paragraph.textContent = `Vous êtes âgé de ${age} ans.`;
        modalContent.appendChild(paragraph);
        
    });
})();
