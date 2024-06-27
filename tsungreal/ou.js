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

function showStyle(field) {
    field.style.background = "yellow";
}
function hideStyle(field) {
    field.style.background = "white";
}
function setFontStyle(field) {
    field.style.fontWeight = "bold";
    field.style.fontFamily = "Arial";
}

function changeImg(){
    var imgText = document.getElementById("myImg").alt;
    if (imgText == "dora"){
        document.getElementById("myImg").src = "img/meo.jpg";
        document.getElementById("myImg").alt = "meo";
        document.getElementById("imgText").value = "Mèo";
    }
    else{
        document.getElementById("myImg").src = "img/dora.jpg";
        document.getElementById("myImg").alt = "dora";
        document.getElementById("imgText").value = "Doraemon";
    }
}

function giai_pt_bac_1(a, b){
    if (a == 0){
        if (b == 0){
            alert("Phương trình có vô số nghiệm");
        } else {
            alert("Phương trình vô nghiệm");
        }
    } else {
        alert("Phương trình có nghiệm x = " + (-b/a));
    }
}
//giai_pt_bac_1(1, 0);

function so_chinh_phuong(a){
    if (Math.sqrt(a) % 1 == 0){
        alert(a + " là số chính phương");
    } else {
        alert(a + " không phải là số chính phương");
    }
}
// so_chinh_phuong(4);
// so_chinh_phuong(5);
// so_chinh_phuong(9);

function tinh_tong_so_chan(n){
    var tong = 0;
    var i = 0;
    while (i<n){
        if (i % 2 == 0){
            tong += i;
        }
        i++;
    }
    return tong;
}
// var n = parseInt(prompt("Nhập số n"));
// document.write("Tổng các số chẵn nhỏ hơn " + n + " là: " + tinh_tong_so_chan(n));

// var index = "";
// var txt = "Cộng hòa Xã hội Chủ nghĩa Việt Nam";
// document.write("<br>Độ dài chuỗi: " + txt.length + "<br />");
// document.write("Mã charcode của từng ký tự: <br />");
// for (var i = 0; i < txt.length; i++){
//     if (i==0){
//         index = txt.charCodeAt(i);
//     } else{
//         index = index + ", " + txt.charCodeAt(i);
//     }
// }
// document.write("Chuỗi mã charcode: " + index + "<br />");
// var arr = index.split(",");
// for (var i = 0; i < arr.length; i++){
//     document.write(String.fromCharCode(arr[i]));
// }
// document.write("<br />");


var chan = le = "";
var tongchan = tongle = 0;
var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//document.write("So luong phan tu trong mang: " + data.length + "<br />");
for (var i = 0; i < data.length; i++){
    if (data[i] % 2 == 0){
        chan += data[i] + " ";
        tongchan += data[i];
    } else {
        le += data[i] + " ";
        tongle += data[i];
    }
}
// document.write("Các số chẵn trong mảng: " + chan + "<br />");
// document.write("Tổng các số chẵn trong mảng: " + tongchan + "<br />");
// document.write("Các số lẻ trong mảng: " + le + "<br />");
// document.write("Tổng các số lẻ trong mảng: " + tongle + "<br />");

function display_date(){
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    alert("Hôm nay là ngày " + date + " tháng " + month + " năm " + year);
}
//display_date();

function getArea(a){
    var fArea = Math.PI * a * a;
    var area = Math.floor(fArea);
    return area;
}
//alert("Diện tích hình tròn có bán kính 9 là: " + getArea(9));

function displayLength(){
    var count = document.getElementById("form1").length;
    alert("Số phần tử trong form: " + count);
}

var form = document.forms["form-add"];
form.cong.onclick = function(){
    var tong = 0;
    tong = parseInt(form.a.value) + parseInt(form.b.value);
    alert("Tổng 2 số là: " + tong);
}

var w = window.innerWidth;
var h = window.innerHeight;
var x = document.getElementById("demo");
x.innerHTML = "Width: " + w + " Height: " + h;

document.getElementById("demo").innerHTML = "Location: " + window.location.href;