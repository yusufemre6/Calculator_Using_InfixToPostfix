let value="";
const buttons=document.querySelectorAll("button");
const specialChars=["/","*","-","+","%","="];
const numbers=['0','1','2','3','4','5','6','7','8','9'];

const precedence = {
    '+': 1,
    '-': 1,
    '%': 2,
    '*': 3,
    '/': 3,
    '^': 4
};

//basılan tuşların değerlerini alıp durumlara göre value değerine etki eden fonksiyon
function addToValue(chartacter){
    if(chartacter==="="&&value!==""){
        if(specialChars.includes(value.toString().slice(-1)[0])||(value.toString().slice(-1)[0]==','))  return;
        value=(postfixToResult(value)).toString();
        
    }
    else if(chartacter==="C"){
        value="";
    }
    else if(chartacter==="D"){
        value=value.toString().slice(0,-1);
    }
    else if(chartacter===','){
        if(numbers.includes(value.toString().slice(-1)[0]))  value+=chartacter;
    }
    else{
        if(specialChars.includes(chartacter)){
            if(value===""||specialChars.includes(value.toString().slice(-1)[0]))return;
        }
        value+=chartacter;
    }
    writeToScreen();
}

//basılan butondan data-value alıp addToValue fonksiyonunu cagiran fonksiyon
buttons.forEach((button) => {
    button.addEventListener("click", (e) => addToValue(e.target.dataset.value));
});

//Bu fonksiyon result-box'a value değişkenini yazar
function writeToScreen(){
    var text = document.getElementById("result");
    text.innerText = "";
    text.innerText = value;
}

//işaretlerin işlem önceliğini karşılaştıran fonksiyon
function hasHigherPrecedence(op1, op2) {
    return precedence[op1] > precedence[op2];
}

// infixten postfixe işlemler
function infixToPostfix(infix){
    let postfix='';
    const stack=[];
    for(let i=0;i<infix.length;i++){
        let char=infix[i];

        if(numbers.includes(char)||char===','){
            if(char===',')char='.';
            postfix+=char;
        }
        else{
            postfix+=(' ');
            if(stack.length===0){
                stack.push(char);
            }
            else{
                let sayac=stack.length-1;
                while(sayac>=0){
                    if(hasHigherPrecedence(stack[sayac],char)){
                        postfix+=stack.pop()+' ';
                        if(stack.length===0)stack.push(char);
                    }
                    else{
                        stack.push(char);
                        break;
                    }
                    sayac--;
                }
            }
        }
    }

    while(!(stack.length===0)){
        postfix+=(' '+stack.pop());
    }

    return postfix;
}

//postfixten sonuca işlemler
function postfixToResult(text){
    let postfix= infixToPostfix(text).split(" ");
    let result;
    let sayac=0;
    let stack=[];
    let first,second;

    while(sayac<postfix.length){
        if(specialChars.includes(postfix[sayac])){
            switch(postfix[sayac]){
                case '+':
                    first=parseFloat(stack[stack.length-2]);
                    second=parseFloat(stack[stack.length-1]);
                    result=first+second;
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                    break;
                case '-':
                    first=parseFloat(stack[stack.length-2]);
                    second=parseFloat(stack[stack.length-1]);
                    result=first-second;
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                    break;
                case '%':
                    first=parseFloat(stack[stack.length-2]);
                    second=parseFloat(stack[stack.length-1]);
                    result=first%second;
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                    break;
                case '*':
                    first=parseFloat(stack[stack.length-2]);
                    second=parseFloat(stack[stack.length-1]);
                    result=first*second;
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                    break;
                case '/':
                    first=parseFloat(stack[stack.length-2]);
                    second=parseFloat(stack[stack.length-1]);
                    result=first/second;
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                    break;
                case '^':
                    first=parseFloat(stack[stack.length-2]);
                    second=parseFloat(stack[stack.length-1]);
                    result=first**second;
                    stack.pop();
                    stack.pop();
                    stack.push(result);
                    break;
            }
        }
        else{
            stack.push(postfix[sayac]);
        }
        sayac++;
    }
    return result;
}