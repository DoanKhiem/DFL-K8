// var inputNum = prompt('Enter any number:');
// var result = 0;
// document.write('Multiple of ' + inputNum + '<br />');
// for (var i = 1; i <= 10; i++) {
//     result = inputNum * i;
//     document.write(inputNum + ' * ' + i + ' = ' + result + '<br />');
// }


// While
var i = 0;
var sum = 0;
while(i<= 10) {
    sum += i;
    i++;
}

// alert('tong 10 so dau tien la: ' + sum)

//array
var names = new Array('Trump', 'Biden');

// alert('president name:\n' + names[0]);
// alert('Chu be dan name:\n' + names[1]);

var products = new Array(2);
products[0] = new Array('Motorbike', '269');
products[1] = new Array('Car', '269');

document.write('<table border = "1"><tr><th> Name </th><th>Price</th></tr>');
for(var i=0; i < products.length; i++) {
    document.write('<tr>');
    for(var j = 0; j < products[i].length; j++) {
        document.write('<td>' + products[i][j] + '</td>');
    }
    document.write('</tr>');
}

document.write('</table>');


var flowers = new Array(' Rose ', ' Lisa ', ' Jennie ', ' Jisoo ');
document.write('Tong so phan tu: ' + flowers.length + '<br/>');
document.write('Chuoi: ' + flowers.join(',') + '<br/>');
document.write('Them phan tu: ' + flowers.push(' 1 ', ' 2 ') + '<br/>');
document.write('Sap xep tang dan' + flowers.sort() + '<br/>');
document.write('Loai bo phan tu cuoi la: ' + flowers.pop() + '<br/>');