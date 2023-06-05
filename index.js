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










// let islem="";

// function islemOlustur(deger){
//     islem+=deger;
// }


// function bir(){
//     islemOlustur(1);
//     islemYenile();
// }
// function iki(){
//     islemOlustur(2);
//     islemYenile();
// }
// function uc(){
//     islemOlustur(3);
//     islemYenile();
// }
// function dort(){
//     islemOlustur(4);
//     islemYenile();
// }
// function bes(){
//     islemOlustur(5);
//     islemYenile();
// }
// function alti(){
//     islemOlustur(6);
//     islemYenile();
// }
// function yedi(){
//     islemOlustur(7);
//     islemYenile();
// }
// function sekiz(){
//     islemOlustur(8);
//     islemYenile();
// }
// function dokuz(){
//     islemOlustur(9);
//     islemYenile();
// }
// function bol(){
//     islemOlustur("/");
//     islemYenile();
// }
// function carp(){
//     islemOlustur("*");
//     islemYenile();
// }
// function topla(){
//     islemOlustur("+");
//     islemYenile();
// }
// function cikar(){
//     islemOlustur("-");
//     islemYenile();
// }
// function mod(){
//     islemOlustur("%");
//     islemYenile();
// }
// function sifir(){
//     islemOlustur(0);
//     islemYenile();
// }

// function sil(){
//     let temp="";    
//     if(islem.length){
//         for(let i=0;i<islem.length-1;i++){
//             temp+=islem[i];
//         }
//         islem=temp;
//     }
//     temp="";
//     islemYenile();
// }

// function temizle(){
//     islem="";
//     islemYenile();
// }

// function hesapla(){
//     window.alert(islem);
// }