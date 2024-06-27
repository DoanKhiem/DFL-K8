// var name = 'tuấn'//string
// var age = 30 //number
// var ismale = true //boolean
// if (name == 'tuấn') {
//     console.log('Xin chào tuấn');
// } else {
//     console.log('Xin chào người lạ');
// }
// var inputNum = prompt('Enter any number:');
// var result = 0;
// document.write('Multiples of: ' + inputNum + '<br/>');
// for (var i = 1; i <= 10; i++) {
//     result = inputNum * i;
//     document.write(inputNum + '*' + i + '=' + result + '<br/>');
// }

// var i = 0;
// var sum = 0;
// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }
// alert('Sum of first 10 numbers: ' + sum);

// var names = new Array("John", "David");
// alert('Student Names:\n' + names[0]);
// alert('Student Names:\n' + names[1]);

// var products = new Array(2);
// products[0] = new Array('Monitor', '236.75');
// products[1] = new Array('Keyboard', '45.50');
// console.log(products);
// document.write('<table border="1"><tr><th>Name</th><th>Price</th></tr>');
// for (var i = 0; i < products.length; i++) {
//     document.write('<tr>');
//     for (var j = 0; j < products[i].length; j++) {
//         document.write('<td>' + products[i][j] + '</td>');
//     }
//     document.write('</tr>');
// }
// document.write('</table>');

// var flowers = new Array('Rose', 'Sunflower', 'Daisy');
// document.write('Tổng số phần tử:' + flowers.length + '</br>');
// document.write('Chuỗi:' + flowers.join(',') + '</br>');
// document.write('Thêm phần tử:' + flowers.push("Orchid", "Lily") + '</br>');
// document.write('Sắp xếp tăng dần:' + flowers.sort() + '</br>');
// document.write('Loại bỏ phần tử cuối cùng:' + flowers.pop() + '</br>');



// function giai_pt_bac_nhat(a, b) {
//     if (a == 0 && b == 0) {
//         alert('Phương trình vô số nghiệm');

//     }
//     else if (a != 0 && b == 0) {
//         alert('Phương trình có nghiệm x = 0');
//     }
//     else if (a == 0 && b != 0) {
//         alert("Phương trình vô nghiệm");
//     }
//     else {
//         alert('Phương trình có nghiệm x ='+(-b/a));
//     }
// }

function change_image() {
    var imgText = document.getElementById('myImg').alt;
    if (imgText == "hoa") {
        document.getElementById('myImg').src = "xe.png";
        document.getElementById('myImg').alt = "xe";
        document.getElementById('mytext').value = "xe";
    } else {
        document.getElementById('myImg').src = "hoa.jpg";
        document.getElementById('myImg').alt = "hoa";
        document.getElementById('mytext').value = "hoa";
    }
}
function display_length() {
    var count = document.getElementById("form1").length;
    alert('Number of controls on the form: ' + count);
}

var form = document.forms['form-add'];
form.cong.onclick=function(){
    var tong = 0;
    tong = parseInt(form.so_a.value)+parseInt(form.so_b.value);
    alert("Tổng hai số a và b là: "+tong)
}
document.getElementById("demo").innerHTML = 
"Đường dẫn hiện tại của trình duyệt:<br>" + window.location.href;