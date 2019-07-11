/*
function add (a,b){
    return a + b;
}

var result = add(1,2);
alert(result)

console.log(add(1,2));

function sub (a, b){
    if(b > a){
        return b - a;
    }
    return a - b;
}

console.log(sub(5,10));

function multipication( a , b){
    return a * b;
}
console.log(multipication(4,4));

function divide(a,b){
return a/b;
}
console.log(divide(4,0));

function modulo (a, b){
    return a%b;
}
console.log(modulo(5,3));
/*
 function test(){
     var quest1 = prompt("you like game");
     var quest2 = prompt("you like what game");
     console.log(quest1);
     console.log("great", quest2);
 }    
 
  function addInput(){
      var firstQuest= confirm("would you like to play a game");
      if ( firstQuest){
          console.log("lets start");
          test();

      }else {
          alert("sorry")
      }
  }
  
addInput()


 //string to integers, then
 function exam (){
     var  firstQuestion = prompt("add number");
     var secondQuestion = prompt("add second number")
     
     firstQuestion= parseInt(firstQuestion);
     secondQuestion= parseInt(secondQuestion);
      var total = (firstQuestion/secondQuestion);
      alert(total);
      console.log("subtraction", sub(firstQuestion,secondQuestion));
     

     
 }
 

function addNum(){
    var firstNum = confirm("Lets do some math");
    if (firstNum){
        console.log(firstNum)
        exam()
    }else{
        alert("thank you for your time");
    }

}
addNum();
*/

function add(a,b){
    return a+b;
}
function sub(a,b){
    if (b >a){
        b-a;
    }
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divid(a,b){
    return a/b;
}
function modulo(a,b){
    return a%b;
}

function game(){
    var firstQuest = parseInt(prompt("first number"));
    var secondtQuest = parseInt(prompt("second number"));
     console.log( "adding two numbers", add( firstQuest,secondtQuest));
     console.log("subtracting two numbers",sub(firstQuest,secondtQuest));
     console.log("multiling two numbers",multiply(firstQuest,secondtQuest));
     console.log("dividing two numbers",divid(firstQuest,secondtQuest));
     console.log("reminder two numbers",modulo(firstQuest,secondtQuest));
} 

function maingame(){
    var game1 = confirm("would you like to play a game");
    alert("thank you");
game();
}
maingame();