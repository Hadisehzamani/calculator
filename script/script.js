let res = document.querySelector('#result')
let calculatorBtns = document.querySelector('.calculator-btns')

//show value on screen
function liveScreen(enteredValue) {
    if(!res.value){
        res.value = '';
    }
    appendToDisplay(enteredValue)
}

document.addEventListener('keydown', keyboardHandler)

function keyboardHandler(e){
    //console.log(e);
    e.preventDefault()
    //handle numbers in keyboard
    if(e.key == '0'){
        res.value += 0;
    } else if(e.key == '1'){
        res.value += 1;
    }else if(e.key == '2'){
        res.value += 2;
    }else if(e.key == '3'){
        res.value += 3;
    }else if(e.key == '4'){
        res.value += 4;
    }else if(e.key == '5'){
        res.value += 5;
    }else if(e.key == '6'){
        res.value += 6;
    }else if(e.key == '7'){
        res.value += 7;
    }else if(e.key == '8'){
        res.value += 8;
    }else if(e.key == '9'){
        res.value += 9;
    }

    //handle operators
    if(e.key == '+'){
        appendToDisplay('+')
    }else if(e.key == '-'){
        appendToDisplay('-')
    }else if(e.key == '.'){
        appendToDisplay('.')
    }else if(e.key == '/'){
        appendToDisplay('/')
    }else if(e.key == '*'){
        appendToDisplay('*')
    }else if(e.key == ')'){
        appendToDisplay(')')
    }else if(e.key == '('){
        appendToDisplay('(')
    }

    if(e.key == 'Enter'){
        calculate(result.value)
    }
    
    if(e.key == "Backspace"){
        deleteNum()
    }
}

function calculate(value){
    let answer = eval(value || null)
    console.log(answer);
    if(isNaN(answer)){
        res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
    }else {
        res.value = answer;
    }
    
}
//delete letter by letter
function deleteNum(){
    let currentValue = res.value
    res.value = currentValue.slice(0, -1)
}

//intercept from repeatition
function hasRepeats (str) {
    return /(.).*\1/.test(str);
}

function appendToDisplay(symbol) {
    // Check if the last character is an operator symbol and the current symbol is also an operator
    if ('+-*/.'.includes(res.value.slice(-1)) && '+-*/.'.includes(symbol)) {
        // If true, replace the last character with the current symbol
        res.value = res.value.slice(0, -1) + symbol;
    }else {
        res.value += symbol;
    }
    
    if('+-*/'.includes(res.value.slice(0))){
        res.value = res.value.slice(0, -1)
    }
}