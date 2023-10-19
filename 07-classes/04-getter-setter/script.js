/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name () {
            return `"${this.firstname} ${this.lastname}"`;
        }
        set name(fullname) {
            const [firstname, lastname] = fullname.split(' ');
            this.firstname = firstname;
            this.lastname = lastname;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click",() => {
        const moi = new Person("Gwendoline","Jacobs");
        console.log(moi.name);
        moi.name = "Gwen Jacobs";
        console.log(moi.name);
        console.log(moi);
    })
})();
