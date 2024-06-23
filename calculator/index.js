let num = "";
let buttons = document.querySelectorAll(".operator");
const inputField = document.querySelector(".input");
Array.from(buttons).forEach((operator) => {
    operator.addEventListener("click", (e) => {
        const value = e.target.value;
        if (value == 'AC') {
            num = '';
        }
        else if (value == 'DE') {
            num = num.slice(0, -1);
        }
        else if (value == '=') {
            try {
                num = eval(num).toString();
            }
            catch {
                num = "Error";
            }
        }
        else {
            num = num + value;
        }
        inputField.value = num;
    })
})