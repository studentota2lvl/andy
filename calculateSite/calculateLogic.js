var calculateOperandPattern = /^\-*\d+$/;
var calculateOperand_1 = document.getElementById("calculateOperand_1");
var calculateOperand_2 = document.getElementById("calculateOperand_2");
var calculateOperator = document.getElementById("calculateOperator");
var calcResult = document.getElementById("calcResult");
var getResultButton = document.getElementById("getResult");
var calculateOperand_1_Value;
var calculateOperand_2_Value;



//console.log(typeof calculateOperand_2.value);


// calculateOperand_1.addEventListener("change", calculateResult);
// calculateOperand_2.addEventListener("change", calculateResult);
// calculateOperator.addEventListener("change", calculateResult);

getResultButton.addEventListener("click", calculateResult);

//console.log(typeof calculateOperator.value);
//calcResult.textContent = (calculateOperand_1_Value)+calculateOperator.value+(calculateOperand_2_Value);






function calculateResult () {
    operand_1_Test ();
    operand_2_Test ();
    calc();
};



//костыль, пока не придумал как по одной функции реализовать 2 теста
function operand_1_Test () {
    if (calculateOperand_1.value === "") {
        calculateOperand_1.style.borderRadius = "";
        calculateOperand_1.style.borderColor = "";
    } else if (!(calculateOperandPattern.test(calculateOperand_1.value))) {
        calculateOperand_1.style.borderRadius = "1px";
        calculateOperand_1.style.borderColor = "red";
    } else {
        calculateOperand_1.style.borderRadius = "";
        calculateOperand_1.style.borderColor = "";
        calculateOperand_1_Value = Number(calculateOperand_1.value);
    }

};

function operand_2_Test () {
    if (calculateOperand_2.value === "") {
        calculateOperand_2.style.borderRadius = "";
        calculateOperand_2.style.borderColor = "";
    } else if (!(calculateOperandPattern.test(calculateOperand_2.value))) {
        calculateOperand_2.style.borderRadius = "1px";
        calculateOperand_2.style.borderColor = "red";
    } else {
        calculateOperand_2.style.borderRadius = "";
        calculateOperand_2.style.borderColor = "";
        calculateOperand_2_Value = Number(calculateOperand_2.value);
    }

};


function calc () {
    var res;
    var calcResultDiv = document.getElementById("calcResult");
    var par = document.createElement("p");

    calcResultDiv.textContent = "";

    switch (calculateOperator.value) {
        case "/":
            res = (calculateOperand_1_Value)/(calculateOperand_2_Value);
            break;
        case "*":
            res = (calculateOperand_1_Value)*(calculateOperand_2_Value);
            break;
        case "+":
            res = (calculateOperand_1_Value)+(calculateOperand_2_Value);
            break;
        case "-":
            res = (calculateOperand_1_Value)-(calculateOperand_2_Value);
            break;
    };

    // if (res == "NaN") {
    //     par.textContent = "";
    // } else {
    //     par.textContent = res;
    // };
    par.textContent = res;
    calcResultDiv.appendChild(par);

};

