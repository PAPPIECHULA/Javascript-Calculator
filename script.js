var num1 = parseInt( prompt("Number 1: "))
var opr = prompt("Operator: ")
var num2 = parseInt( prompt("Number 2: "))

let soln;
const calculate = ()=>{
if(isNaN(num1) || isNaN(num2)){
alert("Please enter a correct number");
}

else{
if(opr === "+")
{
    soln=num1 + num2;
} else if(opr === "-")
{
    sol=num1 - num2;
} else if(opr === "*")
{
    soln=num1 * num2;
} else if(opr === "/")
{
    soln=num1 / num2;
}

alert( num1 + opr+ num2 +"=" +soln);
};
};
calculate();
