// var a = 5;
// var name = "10";
// var num = 10
// if (name == num){
//     console.log("bang nhau");
// }
// else{
//     console.log("khong bang nhau");
// }

// for (var i = 1; i<=10; i++){
//     document.write("4 x " + i + " = " + 4*i + "<br>");
// }

// var i1 = [1, 2, 3, 4, 5];
// document.write("Mang ban dau: " + i1.join(", ") + "<br>");
// var i2 = i1.map((x) => x*2);
// document.write("Mang x2: " + i2.join(", ") + "<br>");


// var flowers = ["rose", "tuilip", "blossom"];
// document.write("Số loại hoa: " + flowers.length + "<br>");
// document.write("Chúng là: " + flowers.join(", ") + "<br>");
// document.write("Thêm hoa: " + flowers.push("lily") + "<br>");
// document.write("Sắp xếp: " + flowers.sort() + "<br>");
// document.write("Xóa hoa: " + flowers.pop() + "<br>");
// document.write("Hoa sau khi xóa: " + flowers + "<br>");


// function hello(){
//     alert("Hello World");
// }

// function changeX(x){
//     x = 2;
// }

// var x = 10;
// document.write("x ban dau: " + x + "<br>");
// changeX(x);
// document.write("x sau khi thay doi: " + x + "<br>");

// function changeValue(obj){
//     obj.value = 2;
// }

// var obj = {value: 10};
// document.write("obj ban dau: " + obj.value + "<br>");
// changeValue(obj);
// document.write("obj sau khi thay doi: " + obj.value + "<br>");


// function fibonaci(n){
//     if (n <= 2){
//         return 1;
//     }
//     return fibonaci(n-1) + fibonaci(n-2);
// }

// document.write("So fibonaci thu 6: " + fibonaci(6) + "<br>");

// var car = new Object();
// car.name = "Toyota";
// car.color = "Black";
// car.price = 10000000;
// car.run = function(){
//     return this.name + " is running";
// }
// document.write(car.run() + "<br>");


// var product = new Array(2);
// product[0] = ["Iphone", "100tr"];
// product[1] = ["Samsung", "50tr"];
// document.write('<table border="1"><tr><th>Ten</th><th>Gia</th></tr>');
// for (var i = 0; i < product.length; i++){
//     document.write('<tr><td>' + product[i][0] + '</td><td>' + product[i][1] + '</td></tr>');
// }
// document.write('</table>');


// function student (name, age, mark){
//     this.name = name;
//     this.age = age;
//     this.mark = mark;
//     this.show = function(){
//         return this.name + " - " + this.age + " - " + this.mark;
//     }
// }

//     std = new student ("John", 20, 8);
//     document.write("Name: " + std.name + "<br>");
//     document.write("Age: " + std.age + "<br>");
//     document.write("Mark: " + std.mark + "<br>");

//     var circle = new Object();
//     circle.radius = 5;
//     circle.area = function(){
//         return this.radius * this.radius * 3.14;
//     }
//     alert ("Dien tich hinh tron: " + circle.area());

function showStyle(field){
    field.style.background = "yellow";
}
function hideStyle(field){
    field.style.background = "white";
}
function setFontStyle(field){
    field.style.fontWeight = "bold";
    field.style.fontFamily = "Arial";
}
