(() => {
    let targetElement = document.getElementById("target");
    let inputs = document.querySelectorAll("input[type='text']");
    let buttons = document.querySelectorAll("button");

    let currentValues = Array.from(inputs, input => ({
        min: parseInt(input.getAttribute("data-min")),
        max: parseInt(input.getAttribute("data-max")),
        value: parseInt(input.value),
        input: input
    }));

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (button.textContent === "Stop") {
                button.textContent = "Restart";
                currentValues[index].input.setAttribute("readonly", "readonly");
            } else {
                button.textContent = "Stop";
                currentValues[index].input.removeAttribute("readonly");
            }
        });
    });

    setInterval(() => {
        currentValues.forEach((item) => {
            if (!item.input.hasAttribute("readonly")) {
                item.value = (item.value + 1) % (item.max + 1);
                if (item.value < item.min) {
                    item.value = item.min;
                }
                item.input.value = item.value.toString().padStart(2, '0');
            }
        });
        updateTarget();
    }, 50); 
    function updateTarget() {
        let result = Array.from(inputs).reduce((acc, input) => {
            return acc + input.value;
        }, "+");
        targetElement.textContent = result;
    }
})();


