let screen = document.getElementById('screen');

function press(val) {
    screen.value += val;
}


function resetAll() {
    screen.value = "";
}

function removeLast() {
    screen.value = screen.value.substring(0, screen.value.length - 1);
}

function finalResult() {
    try {
        screen.value = Function('return ' + screen.value)();
    } catch (err) {
        screen.value = "Syntax Error";
    }
}

