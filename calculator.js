var display = document.getElementById("display");
var operand1=0;
var operand2;
var operator;


/*function isOperator(value){
    return value=="+" || value =="-" || value=="/" || value=="*";
}*/

function keyCode(keypress){
 var text=display.textContent.trim();
 var value;


 if(keypress===43){
      operand1=parseFloat(text);
      console.log(operand1);
      display.textContent="";
      return operator="+";
}
else if(keypress==8){
    console.log("backspace");
    display.textContent="";
}

else if(keypress===49){
        console.log("1");
        display.textContent +="1";
    
    
    }
else if(keypress===50){
        console.log("2");
        display.textContent +="2";
    }
else  if(keypress===51){
        display.textContent +="3";
    }

else   if(keypress===52){
        display.textContent +="4";
    }

else  if(keypress===53){
        display.textContent +="5";
    }
else  if(keypress===54){
        display.textContent +="6";
    }
else  if(keypress===55){
        display.textContent +="7";
    }
else if(keypress===56){
        display.textContent +="8";
    }
else if(keypress===57){
        display.textContent +="9";
    }
else if(keypress===48){
        display.textContent +="0";
    }
else if(keypress===45){
    operand1=parseFloat(text);
        console.log(operand1);
        display.textContent="";
       return operator="-";
    }
else if(keypress===47){
    operand1=parseFloat(text);
    console.log(operand1);
    display.textContent=text +" / ";
}
else if(keypress===42){
    operand1=parseFloat(text);
    console.log(operand1);
    display.textContent=text +" * ";
}
else if(keypress===37){
    display.textContent +=" % ";
}
else if(keypress===61){
   operand2=parseFloat(text);
   console.log(operand2);
   var result=eval(operand1+' ' + operator+ ' ' +operand2)
   display.textContent=result;
}

else{
    alert("Please enter a number");
}
}







window.addEventListener("keypress",function(event){
    keyCode(event.keyCode);
});

