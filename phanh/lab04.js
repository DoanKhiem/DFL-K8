// ex1

var a = prompt("Enter number: ");

function so_chinh_phuong(a) {
    if (Math.sqrt(a) % 1 == 0) {
        alert(a + " là số chính phương");
    } else {
        alert(a + " không là số chính phương");
    }
}

so_chinh_phuong(a)

//ex2
var myArr = [1, 2, 3, 4, 5];
var n = myArr.length;
var sum = 0;
var i = 1;
while (i <= n) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}

document.write("Tổng số chẵn " + sum + "<br />")

//ex3
var txt = "Cộng hòa xã hội chủ nghĩa Việt Nam";
document.write("Độ dài cua chuỗi là : " + txt.length + "<br />");
document.write("Mã char code của từng ký tự: <br />");
//duyệt lấy từng ký tự trong chuỗi từ vị trí 0 đến hết
for (i = 0; i < txt.length; i++) {
    document.write(txt[i] + "<>" + txt[i].charCodeAt(0) + "<br />");
}

//ex4
var newText = "";
var txt = "học lập trình web";
document.write("Độ dài cua chuỗi là : " + txt.length + "<br />");
document.write("Mã char code của từng ký tự: <br />");
//duyệt lấy từng ký tự trong chuỗi từ vị trí 0 đến hết
for (i = 0; i < txt.length; i++) {
    if (i == 0) {
        newText += txt[i].charCodeAt(0);
    } else {
        newText += "," + txt[i].charCodeAt(0);
    }

}
document.write("Chuỗi CHarcode :<br />" + newText + '<br />');
var arrText = newText.split(",");
for (i = 0; i < arrText.length; i++) {
    document.write(String.fromCharCode(arrText[i]));
}

//ex5
var so_chan = so_le = "";
var tong_so_chan = tong_so_le = 0;
var dataArr = [4, 6, 9, 11, 34, 22, 57, 68, 90, 21, 35, 77];
var n = dataArr.length
document.write("<br />" + "Số phần tử trong mảng  " + n + "<br />");

for (i = 0; i < n; i++) {
    if (dataArr[i] % 2 == 0) {
        tong_so_chan += dataArr[i];

        if (so_chan.length == 0) {
            so_chan = dataArr[i];
        } else {
            so_chan += ", " + dataArr[i];
        }
    } else {
        tong_so_le += dataArr[i];

        if (so_le.length == 0) {
            so_le = dataArr[i];
        } else {
            so_le += ", " + dataArr[i];
        }
    }
}

document.write("Trong màng có các số chẵn là:"+so_chan+"<br />");
document.write("Tổng các số chẵn: "+tong_so_chan+"<br />");
document.write("Trong mảng có các số lẻ là:"+so_le+"<br />");
document.write("Tổng các số lẻ: "+tong_so_le+"<br />");

