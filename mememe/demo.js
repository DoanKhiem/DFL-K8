var name = 'khiêm'; //string
var age = 20; //number
var isMale = true; // boolean true/false

if (name == 'khiêm') {
    console.log('Xin chào khiêm');

} else {
    console.log('Xin chào' + name + " thứ 2");
}
var inputNum = prompt('Enter any number:');
var result = 0;
document.write('Multiple of: ' +inputNum+ '<br/>');
for (var i=1; i<= 10; i++) 
{
    result = inputNum * i;
    document.write(inputNum+' * ' + i +' = '+result+' <br/> ')
}
var i = 0;
var sum = 0;
while(i<=10) {
    sum = sum + i;
    i++;
}
alert( 'Sum of first 10 numbers:' + sum);

var names = new Array("John", "David");
alert('Student Names:\n'+names[0]);
alert('Student Names:\n'+names[1]);

var products = new Array(2);
products[0] = new Array('Monitor', '236.75');
products[1] = new Array('Keyboard', '45.50');
document.write('<table border="1"><tr><th> Name</th><th>Price</th></tr>');
for(var i=0; i<products.length; i++) {
    document.write('<tr>');
    for(var j=0; j<products[i].length; j++) {
        document.write('<td>' + products[i][j] + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');
var flower = new Array('Rose', 'Sunflower', 'Daisy')
document.write('Tổng số phần tử: '+flower.length+' <'ba')