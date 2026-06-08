const display = document.getElementById('display');
function appendToDisplay(input) { display.value += input; }
function clearDisplay() { display.value = ""; }
function deleteLast() { display.value = display.value.slice(0, -1); }
function calculateResult() {
    try { display.value = eval(display.value); } 
    catch { display.value = "Error"; }
}
