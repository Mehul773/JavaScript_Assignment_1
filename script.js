function calculate() {
  // Get user inputs
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;
  var resultElement = document.getElementById("result");

  // Perform calculation based on operator
  var result;
  switch (operator) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operator";
  }

  //  Display result or error message
  if (isNaN(result)) {
    result === "Cannot divide by zero"
      ? (resultElement.innerText = result)
      : (resultElement.innerText = "Invalid input");
  } else {
    resultElement.innerText = "Result: " + result;
  }
}

// Functions for arithmetic operations
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
}
