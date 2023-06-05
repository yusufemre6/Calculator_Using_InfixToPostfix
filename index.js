let value="";
const buttons=document.querySelectorAll("button");
const specialChars=["/","*","-","+","%","="];


function addToValue(chartacter){
    if(chartacter==="="&&value!==""){
        
    }
    else if(chartacter==="C"){
        value="";
        writeToScreen();
    }
    else if(chartacter==="D"){
        value=value.toString().slice(0,-1);
        writeToScreen
    }
    else{
        if(specialChars.includes(chartacter)&&value==="")return;
        value+=chartacter;
    }
    writeToScreen();
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => addToValue(e.target.dataset.value));
});


function writeToScreen(){
    var text = document.getElementById("result");
    text.innerText = "";
    text.innerText = value;
}


const precedence = {
    '+': 1,
    '-': 1,
    '%': 2,
    '*': 3,
    '/': 3,
    '^': 4
};


function calculate(){

}

function hasHigherPrecedence(op1, op2) {
    return precedence[op1] >= precedence[op2];
}

function infixToPostfix(infix){
    let postfix='';
    const stack=[];

    for(let i=0;i<infix.length;i++){
        let char=infix[i];
    }

}