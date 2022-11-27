function add(num1, num2){
    return num1 + num2
}
function displayInput(btn){
    textbox.value += btn.value
}
function divide(num1, num2){
    return num1/num2
}
function divMod(num1, num2){
    return num1 % num2
}
function multiply(num1, num2){
    return num1 * num2 
}
function subtract(num1, num2){
    return num1 - num2
}

//Operator method

function operator(num1, num2, operator){
    let answer = 0
    switch(operator){
        case operator === '+':
            answer = add(num1, num2)
            break
        case operator === '-':
            answer = subtract(num1, num2)
            break
        case operator === '*':
            answer = multiply(num1, num2)
            break
        case operator === '/':
            answer = divide(num1, num2)
            break
        case operator === '%':
            answer = divMod(num1, num2)
            break
        default:
            answer = 0
    }
    return answer
}

//Calc input 
const textbox = document.querySelector('input')

const numberBtns = document.querySelectorAll('.number')
const decimalBtn = document.querySelector('#decimal-point')
const operatorBtns = document.querySelectorAll('.operator-btn')

//Add click event listener to all numbers
numberBtns.forEach(btn => {
    btn.addEventListener('click',(e) =>{
        displayInput(e.target)
    } )
});

decimalBtn.addEventListener('click', (e) =>{
    displayInput(e.target)
})

//Operator buttons
operatorBtns.forEach(btn =>{
    btn.addEventListener('click',(e) =>{
        e.stopPropagation()
        displayInput(btn)
    })
})


