//Variable
function Calculator(){
    var answer=document.querySelector('#answer');
    var num1=Number(document.querySelector('#num1').value);
    var num2=Number(document.querySelector('#num2').value);
    var select =document.querySelector('select');
    var operator= select.options[select.selectedIndex].value
    var answercalc
    if(operator=='add'){
        answercalc= num1+num2;

    }else if(operator=='minus'){
        answercalc = num1-num2;
    }else if(operator=='divide'){
        answercalc = num1/num2;

    }else if(operator=='multiply'){
        answercalc = num1*num2;

    }
    else{
        alert("please select something else");
        answercalc="Invalid";
    }

   answer.innerHTML=answercalc


}

//inovaking function
// working without mention in html page
(function(){
    var body=document.querySelector('body');
    body.style.backgroundColor=" #a2d9ce";
    body.style.color="#fff";
    body.innerHTML="Welcome to my Page ";
})();

function anthinhg(){
    console.log(this.number);

    if(this.number==undefined){
        this.number=33;
    }
    console.log(this.number);
}

anthinhg();

