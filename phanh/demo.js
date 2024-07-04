// 

var inputName = prompt("Enter any name: ");
if (inputName == "phanh") {
    document.write("Chao con gai yeu")
} else {
    document.write("<h2>" + inputName + " la thang nao ha? <br /> </h2>");
}

var inputNum = prompt("Enter any number: ");
var result = 0;
document.write("Multiples of " + inputNum + "<br />");
for (var i = 1; i <= 10; i++) {
    result = inputNum * i;
    document.write(inputNum + " * " + i + "=" + result + "<br />");
}

var i = 0;
var sum = 0;
var rangeNum = prompt("Enter limited number: ");
while (i <= rangeNum){
    sum = sum + i
    i++
}
alert("Sum of first " + rangeNum + " number: " + sum);
document.write("Sum of first " + rangeNum + " number: " + sum + "<br />");

// var myArr = [1,2,3,4,5];
// var myArr1 = [];
// myArr = ["giatri 1", "gia tri 2"];
// myArr[0] = 75;
// myArr[1] = 89;

var names = ['Khiem', 'Phanh', "ai do"];
var i = 0;
for (var i = 0; i <= names.length - 1; i++) {
    document.write("Student Name " + names[i] + "<br />");
}

var products = new Array(2);
products[0] = new Array("Monitor", "236.75");
products[1] = new Array("Keyboard", "45.50");

document.write('<table border="1">');
document.write('<tr> <th>Name</th><th>Price</th> </tr>');
for(var i = 0; i < products.length; i++){
    document.write('<tr>');
    for(var j = 0; j < products[i].length; j++){
        document.write('<td>' + products[i][j] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');

var flowers = new Array('Rose', 'Sunflower', 'Daisy');
document.write('Tong so phan tu: ' + flowers.length + '<br/>');
document.write('Chuoi: ' + flowers.join(', ') + '<br/>');
document.write('Them phan tu: ' + flowers.push('Orchid', 'Lily') + '<br/>');
document.write('Sap xep tang dan: ' + flowers.sort() + '<br/>');
document.write('Loai bo phan tu cuoi cung: ' + flowers.pop() + '<br/>');