//array, object

var f = function(){
  console.log(1+1);
  console.log(1+2);
}
console.log(f);
f();
var a = [f]; //array
a[0]();

var o = { //object
  func:f
}
o.func();

var arr = [f,'a',1,true];
console.log(arr)
