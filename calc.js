

let num1=null;
let num2=null;
let operator=null;
let result=null;
const calcBtn=document.querySelectorAll(".btn");
const outputNum=document.getElementById("outputNum");
outputNum.innerHTML = "";

const displayValue=()=>{
    const outputText = (num1 !== null ? num1 : '') + (operator !== null ? '' + operator : '') + (num2 !== null ? '' + num2 : '');
    outputNum.innerHTML=outputText;
}

const operate = (a,b,c) => {
    if (c==="+") return a+b;
    if (c==="-") return a-b;
    if (c==="x") return a*b;
    if (c==="/") return b === 0 ? "Error" : a/b;
}

const calcButton = (e) =>{
    const btn = e.target.textContent;

    if (btn >= '0' && btn <= '9'){
        if (num1===null){
            num1=parseFloat(btn);
        } else if (operator === null){
            num1 = num1 * 10 + parseFloat(btn);
        } else if (num2 === null){
            num2 = parseFloat(btn);
        } else {
            num2 = num2 * 10 + parseFloat(btn);
        }
         displayValue();
    }else if (btn==="."){
    if(num1===null){
        num1=0
        num1.toString()
        num1+="."
        parseFloat(num1)
    }else if (operator === null && !num1.includes(".")){
        num1 = num1 * 10 + parseFloat(btn);
    } else if (num2 === null){
        num2=0
        num2.toString()
        num2 += '.'
        parseFloat(num2)
    } else if (!num2.includes(".")){
        num2 = num2 * 10 + parseFloat(btn);
    }
     displayValue();
} 
    else if (btn === '+/-'){
        if (operator === null && num2===null){
            num1=num1*-1;
        }else {
            num2=num2*-1;
        } displayValue();
    }else if (btn==='%'){
        if (operator===null && num2===null){
            num1=num1/100;
        }else {
            num2=num2/100;
        }displayValue();

    }else if(btn === 'c'){
        num1= null;
        num2= null;
        operator= null;
        outputNum.innerHTML= "";
    } else if(btn === '='){
        if(num1 !== null && num2 !== null && operator !== null){
            result= operate(num1, num2, operator);
            outputNum.innerHTML= result;
            num1= result;
            num2= null;
            operator= null;
        } 
    }else {
        operator=btn;
        displayValue();
    }
};

calcBtn.forEach((btn)=>{
    btn.addEventListener("click", calcButton);
})


