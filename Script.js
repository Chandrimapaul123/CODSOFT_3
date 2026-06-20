const screen = document.getElementById("screen");

function press(value){
    screen.value += value;
}

function resetAll(){
    screen.value = "";
}

function removeLast(){
    screen.value = screen.value.slice(0, -1);
}

function finalResult(){
    try{
        screen.value = eval(screen.value);
    }
    catch(error){
        screen.value = "Error";
    }
}

