var addit = document.querySelector("input#add");
var sub = document.querySelector("#subtract");
var mult = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var ans = document.querySelector("#answer");

var addF = function(){
  var a = parseInt(document.querySelector("#val1").value);
  var b = parseInt(document.querySelector("#val2").value);
  var out = a+b;
  ans.value = out;
}

var subtractF = function(){
  var a = parseInt(document.querySelector("#val1").value);
  var b = parseInt(document.querySelector("#val2").value);
  var out = a-b;
  ans.value = out;
}

var multiplyF = function(){
  var a = parseInt(document.querySelector("#val1").value);
  var b = parseInt(document.querySelector("#val2").value);
  var out = a*b;
  ans.value = out;
}

var divideF = function(){
  var a = parseInt(document.querySelector("#val1").value);
  var b = parseInt(document.querySelector("#val2").value);
  if(a === 0 || b === 0){alert("you can't do that"); ans.value = "";}else{
    var out = a/b;
    ans.value = out;
  }
}
