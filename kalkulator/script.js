const zero = document.getElementById('0');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const minus = document.getElementById('-');
const plus = document.getElementById('+');
const times = document.getElementById('*');
const divide = document.getElementById('/');
const equals = document.getElementById('=');

const selectedNumber = document.querySelector('.selected-number')
const answerCurrent = document.querySelector('.current-answer')
const answerPast = document.querySelector('.past-answer')

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine]
const actions = [minus, plus, times, divide]


let currentNumber = null
let previousNumber = null
let currentAction = null
let previousPreviousNumber = null

//Wyświetlanie aktualnego numeru i przechowywanie go

for (i = 0; i < numbers.length; i++){
    let clikedIndex = i
     numbers[i].addEventListener
         ('click', function () {
selectedNumber.textContent = selectedNumber.textContent + clikedIndex
currentNumber = selectedNumber.textContent
             console.log(currentNumber)
             
})
}



for (i = 0; i < actions.length; i++){
    let clikedIndex = i
     actions[i].addEventListener
         ('click', function () {
            currentAction = actions[clikedIndex].textContent
            console.log(currentAction)
            previousNumber = currentNumber
            currentNumber = 0
             selectedNumber.textContent = ''
             




             

})
}
 

equals.addEventListener
    ('click', function () {
       answerNumber = null
        switch (currentAction) {
            case '-':
                answerNumber = previousNumber - currentNumber ;
            break;
            case '+':
                    answerNumber = Number(previousNumber) + Number(currentNumber) ;
            break
            case '/':
                    answerNumber = previousNumber / currentNumber;
            break;
            case '*':
                    answerNumber = previousNumber * currentNumber;
            break;
        }
      
        answerCurrent.textContent = answerNumber
        currentNumber = answerNumber
        console.log(previousPreviousNumber)
        selectedNumber.textContent = ''
        

            }    
        
    
)

document.querySelector('.reset').addEventListener
    ('click', function () {
        currentNumber = null
        previousNumber = null
        currentAction = null
        previousPreviousNumber = null
        answerCurrent.textContent = ''
        selectedNumber.textContent = ''
})