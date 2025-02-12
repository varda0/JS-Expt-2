let screen = document.getElementById("screen");
let currentInput = "";
let isResultDisplayed = false;

// Function to handle button clicks
function press(value) {
    if (isResultDisplayed) {
        if (!isNaN(value) || value === ".") {
            currentInput = value;
        } else {
            currentInput += value;
        }
        isResultDisplayed = false;
    } else {
        currentInput += value;
    }
    
    screen.value = currentInput;
}

// Function to calculate and display result
function calculate() {
    try {
        let result = eval(currentInput.replace(/Math./g, "")); 
        screen.value = result;
        currentInput = result.toString();
        isResultDisplayed = true;
    } catch {
        screen.value = "Error";
        currentInput = "";
    }
}

// Function to handle button clicks (Numbers & Operators)
function press(value) {
    if (isResultDisplayed) {
        if (!isNaN(value) || value === ".") {
            currentInput = value;
        } else {
            currentInput += value;
        }
        isResultDisplayed = false;
    } else {
        currentInput += value;
    }
    
    screen.value = currentInput;
}

// Function to handle (x²)
function square() {
    if (currentInput !== "") {
        currentInput += "²";  
        screen.value = currentInput;
    }
}

// Function to handle square root (√)
function squareRoot() {
    if (currentInput !== "") {
        currentInput = `√(${currentInput})`; 
        screen.value = currentInput;
    }
}

// Function to handle (log)
function logBase10() {
    if (currentInput !== "") {
        currentInput = `log(${currentInput})`; 
        screen.value = currentInput;
    }
}

// Function to handle exponent (e^x)
function exponential() {
    if (currentInput !== "") {
        currentInput = `1/(${currentInput})`; 
        screen.value = currentInput;
    }
}

// Function to handle sin
function sineFunction() {
    if (currentInput !== "") {
        currentInput = `sin(${currentInput})`; 
        screen.value = currentInput;
    }
}

// Function to calculate 
function calculate() {
    try {
        let expression = currentInput;

       
        expression = expression.replace(/(\d+)²/g, "Math.pow($1,2)");  
        expression = expression.replace(/√\((\d+)\)/g, "Math.sqrt($1)"); 
        expression = expression.replace(/log\((\d+)\)/g, "Math.log10($1)"); 
        expression = expression.replace(/e\^(\d+)/g, "1/$1"); 
        expression = expression.replace(/sin\((\d+)\)/g, "Math.sin($1 * Math.PI / 180)"); 
        
        expression = expression.replace(/(\d+)%/g, "($1 / 100)"); 

        let result = eval(expression);
        alert("the result says: "+result); 
        screen.value = result;

        currentInput = result.toString();
        isResultDisplayed = true;
    } catch {
        screen.value = "Error";
        currentInput = "";
    }
}

function clearScreen() {
    currentInput = "";
    screen.value = "";
}

function toggleAdvanced() {
    let advancedButtons = document.querySelector(".advanced");
    advancedButtons.classList.toggle("hidden");
}
