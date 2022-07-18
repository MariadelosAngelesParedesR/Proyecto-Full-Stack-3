import {testResultado} from 'grasshopper.laboratorio';

function check(resultado){
    for (var testResultado of resiltado){
        if (testResultado === "fail"){
            return 'failed';
        }
    }
    return resultado.length + 'test passed';
}


console.log(check(testResultado));


function calculateSum(numberArray){
    let sum = 0;
    for (let num of numberArray){
        sum += num;
    }
    return sum
}