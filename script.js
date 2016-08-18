var count = 3;
 
for (var i = 0; i < count; i++) {
    saySomething();
}
 
function saySomething() {
    document.writeln("Five");
}

// var word = "hello";
//  var last = word.charAt(word.length - 1);
// function lastLetter() {
   
//     // alert('The last character is:' + last);
//     document.writeIn("The last letter is " + last);
// }

var square = function(x) {
  return x * x;
};
document.writeln(square(3));
document.writeln(square(5));