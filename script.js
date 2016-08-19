var count = 3;
 
for (var i = 0; i < count; i++) {
    saySomething();
}
 
function saySomething() {
    document.writeln("Five");
}
//==============================================================
var str = "hello";
document.writeln(str.slice(4));


//==============================================================

var square = function(x) {
  return x * x;
};
document.writeln(square(3));
document.writeln(square(5));

//==============================================================

function negate(neg){
    return neg*-1;

}

document.writeln(negate(5));
document.writeln(negate(8));

//==============================================================

function toArray(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
toArray(",", 1, 4, 5) 
document.writeln(toArray(" , ", 1, 4, 5));
document.writeln(toArray(" , ", 8, 9, 10));

//===============================================================