let inputInner = document.querySelector("#res");

function checkOperator(){
    if(inputInner.innerHTML.endsWith('+') || inputInner.innerHTML.endsWith('-') || inputInner.innerHTML.endsWith('*') || inputInner.innerHTML.endsWith('/')){
        return true;
    }
}

let clickButton = document.querySelectorAll(".button");
for(let i=0; i<clickButton.length; i++){
    clickButton[i].addEventListener("click", function(e){
        e = e || window.event;
        let target = e.target;
        if(target.textContent == "0"){
            inputInner.innerHTML += "0";
        }
        if(target.textContent == "1"){
            inputInner.innerHTML += "1";
        }
        if(target.textContent == "C"){
            inputInner.innerHTML = " ";
        }
        if(target.textContent == "="){
            calculate();
        }
        if(target.textContent == "+" && inputInner.innerHTML.length!=0 && !checkOperator()){
            inputInner.innerHTML += '+';
        }
        if(target.textContent == "-" && inputInner.innerHTML.length!=0 && !checkOperator()){
            inputInner.innerHTML += '-';
        }
        if(target.textContent == "*" && inputInner.innerHTML.length!=0 && !checkOperator()){
            inputInner.innerHTML += '*';
        }
        if(target.textContent == "/" && inputInner.innerHTML.length!=0 && !checkOperator()){
            inputInner.innerHTML += '/';
        }

    })
}

function calculate(){
    if(!checkOperator()) {
        let inputVals = /\d+/g
        let inputOperators = /[\+\-\*\/]+/g
        let numbers = inputInner.innerHTML.match(inputVals);
        let operations = inputInner.innerHTML.match(inputOperators);

        while(operations.length>0) {

          if(operations.includes('*')) {

            let indexOfMul = operations.indexOf('*');
            let mul = ( indexOfMul!=0 ? parseInt(numbers[indexOfMul-1],2) : parseInt(numbers[indexOfMul],2) ) * parseInt(numbers[indexOfMul+1],2);
            numbers.splice(indexOfMul,2);
            numbers.splice(indexOfMul,0,mul.toString(2));
            operations.splice(indexOfMul,1);

          } else if (operations.includes('/')) {

            let indexOfDiv = operations.indexOf('/');
            let division = ( indexOfDiv!=0 ? parseInt(numbers[indexOfDiv-1],2) : parseInt(numbers[indexOfDiv],2) ) / parseInt(numbers[indexOfDiv+1],2);
            numbers.splice(indexOfDiv,2);
            numbers.splice(indexOfDiv,0,division.toString(2));
            operations.splice(indexOfDiv,1);

          } else if (operations.includes('+')) {

            let indexOfSum = operations.indexOf('+');
            let sum = ( indexOfSum!=0 ? parseInt(numbers[indexOfSum-1],2) : parseInt(numbers[indexOfSum],2) ) + parseInt(numbers[indexOfSum+1],2);
            numbers.splice(indexOfSum,2);
            numbers.splice(indexOfSum,0,sum.toString(2));
            operations.splice(indexOfSum,1);

          } else {

            let indexOfSub = operations.indexOf('-');
            let sub = ( indexOfSub!=0 ? parseInt(numbers[indexOfSub-1],2) : parseInt(numbers[indexOfSub],2) )- parseInt(numbers[indexOfSub+1],2);
            numbers.splice(indexOfSub,2);
            numbers.splice(indexOfSub,0,sub.toString(2));
            operations.splice(indexOfSub,1);

          }  
        }
        inputInner.innerHTML = numbers[0].toString(2);
      } else {
          
        alert("Please enter the number to be processed!")
          
      }


}