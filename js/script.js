"use strict";

const input = document.getElementById("input"), // input/output button
    numbers = document.querySelectorAll(".numbers div"), // number buttons
    operators = document.querySelectorAll(".operators div"), // operator buttons
    result = document.getElementById("result"), // equal button
    clear = document.getElementById("clear"); // clear button
    let resultcalc = []
let resultDisplayed = false; // flag to keep an eye on what output is displayed

// numbers is a NodeList object, we need to make it into an array first, then we can map through it...
numbers.forEach(function(number){
    number.addEventListener('click', function(e){
        input.innerHTML += this.innerHTML;
    })
});
// adding click handlers to the calculation buttons
operators.forEach(function(operator){
    operator.addEventListener('click', function(e){
        input.innerHTML += this.innerHTML
    })
})
// on click of 'equal' button, perform the mathematical operation
result.addEventListener('click', function(e){
    let the_results = input.innerHTML;
    let numbersStringArray = the_results.split(/\+|\-|\*|\//g);
    const operators = the_results.replace(/[0-9]|\./g, "").split("");
    console.log(operators)

    
    let multiply = operators.includes('*');
    if(multiply === true){
        let indexOfmultip = operators.indexOf('*');
        resultcalc.push(parseFloat(numbersStringArray[indexOfmultip]) * parseFloat(numbersStringArray[indexOfmultip + 1]));
        console.log("Hello: "+indexOfmultip);
        numbersStringArray.splice(indexOfmultip,2,resultcalc[resultcalc.length-1]);
        console.log(numbersStringArray);
        console.log("The number string array ^^^^")
      


    }
    let divison = operators.includes('/');
    if( divison  === true){
        let indexOfdivison  = operators.indexOf('-');
        resultcalc.push(parseFloat(numbersStringArray[indexOfdivison]) -  parseFloat(numbersStringArray[indexOfdivison + 1]));

    }
    let subtraction = operators.includes('-');
    if(subtraction  === true){
        let indexOfsubtraction  = operators.indexOf('-');
        resultcalc.push(parseFloat(numbersStringArray[indexOfsubtraction]) -  parseFloat(numbersStringArray[indexOfsubtraction + 1]));
        numbersStringArray.splice(indexOfsubtraction,2,resultcalc[resultcalc.length-1]);
        console.log(numbersStringArray);
        console.log("The number string array ^^^^")

    }
    let addition = operators.includes('+');
    if(addition === true){
        let indexOfaddition  = operators.indexOf('+');
        numbersStringArray.splice(indexOfaddition,2,resultcalc[resultcalc.length-1]);
        resultcalc.push(parseFloat(numbersStringArray[indexOfaddition ]) + parseFloat(numbersStringArray[indexOfaddition + 1]));
        numbersStringArray.splice(indexOfaddition,2,resultcalc[resultcalc.length-1]);
        

    }
    
   
    input.innerHTML = resultcalc[resultcalc.length-1];
    console.log(resultcalc)
    console.log("The result ^^^");
    console.log("The input inner : "+input.innerHTML);
})

// clear the input on press of clear
clear.addEventListener('click',function(e){
    input.innerHTML = "";
    resultcalc = []
    console.log(resultcalc)
})
