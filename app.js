const display = document.querySelector(".display");

function appendToDisplay(input){
    if(display.value === "Error"){
        display.value = "";
    }
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
    }
}

function clearDisplay(){
    display.value = "";
}

function del(){
    if(display.value==="Error"){
        clearDisplay();
    }
    display.value = display.value.slice(0,-1);
}