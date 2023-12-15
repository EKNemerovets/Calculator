const result = document.getElementById("result")
const firstValue = document.getElementById("first_value")
const secondValue = document.getElementById("second_value")
const calcButton = document.getElementById("calc")

const plusButton = document.getElementById("plus")
const minusButton = document.getElementById("minus")
const multiplyButton = document.getElementById("multiply")
const deleteButton = document.getElementById("delete")

let action="+";

plusButton.onclick=function(){
    action="+";
}

minusButton.onclick=function(){
    action="-"
}

multiplyButton.onclick=function(){
    action="*"
}

deleteButton.onclick=function(){
    action="/"
}

const print = (res) => {
    if(res>=0){
        result.style.color = "lightgreen"
    }else{
        result.style.color = "red"
    }
    result.textContent = res;
};

const calcResult = function(){
    const firstVal = Number(firstValue.value)
    const secondVal = Number(secondValue.value)
    if (action ==="+"){
        return firstVal + secondVal;
    }else if(action ==="-"){
        return firstVal - secondVal;
    }else if(action ==="*"){
        return firstVal * secondVal;
    }else{return firstVal / secondVal;}
}

calcButton.onclick = function(){
    const res = calcResult();
    print(res)
};

const res = calcResult();
    print(res) 


