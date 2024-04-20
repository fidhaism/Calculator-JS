// Function to write expression
const writeExp = (e) => {
    display.value += e.target.id;
}

// Function to get result
const getResult = () => {
    if (display.value === "") {
        alert("Please enter an expression.");
    } else {
        try {
            // Using new Function to avoid the use of eval
            let result = new Function('return ' + display.value)();
            display.value = result;
        } catch (error) {
            alert("Please enter a valid expression!!!");
            display.value = "";
        }
    }
}

// Function to clear the display
 const allClear = () => {
    display.value = "";
}

// Function to handle backspace
const backspace = () => {
    display.value = display.value.slice(0, -1);
}



