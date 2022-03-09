/////task1////
var a = 10;
document.write("Result:" + "<br/>" + "The value of a is:"+ " " + a + "<br/>" + "..................................." + "<br/><br/>");
var a= ++a;
document.write("The value of ++a is:" + a + "<br/>" + "Now the value of a is:"+ " " + a + "<br/><br/>");
var a= ++a;
var b = a++;
document.write("The value of a++ is:" + a + "<br/>" + "Now the value of a is:"+ " " + a + "<br/><br/>");


////task2///
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is" + " " + a + "<br/>" + "b is" + " " + b + "<br/>" + "result is" + " " + result);

////task3////
var a=(prompt("Enter Your Name"));
alert("Welcome:" + "  " + a);

////task3///
var x, i;
var x=(prompt("Enter The Number.."));
for(i=1;i<=10;i++)
document.write("<h3>"  + x + "x" + i + "=" + x*i + "</h3>");