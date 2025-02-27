
const display = document.getElementById("display");

function appendToDisplay(value) {
  
  if (display.value=="Error"){
    clearDisplay()
  }
  else{
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
  if ("0123456789+-*/.%".includes(event.key)) {
    appendToDisplay(event.key);
  } else if (event.key === "Enter") {
    calculateResult();
  } else if (event.key === "Backspace") {
    deleteLast();
  } else if (event.key === "Escape") {
    clearDisplay();
  }
});