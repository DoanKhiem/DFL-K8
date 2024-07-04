// var name = 'khiêm'; // string
// var age = 20; // number
// var isMale = true; // boolean true/false

// if (name == 'khiem') {
//     console.log('Xin chào khiêm' );
// } else {
//     console.log('Xin chào ' + name + " thứ 2");
// }

// var i = 0;
// var sum = 0;
// while (i <= 10) {
//     sum += i;
//     i++;
// }
// // alert('Tổng từ 0 đến 10 là: ' + sum);


// var myArr = [1, 2, 3, 4, 5];

// var myArr1 = [];
// console.log(myArr1);
// myArr1.push(7);
// myArr1.push(5);
// // myArr1[0] = 5;
// // myArr1[1] = 6;
// console.log(myArr1);

// var myArr2 = [['John', '25', 'New Jerset'], ['David', '21', 'California']];
// console.log(myArr2[1][1]);

console.log((new Date()).getDate());
console.log((new Date()).getDay());
console.log((new Date()).getFullYear());
console.log((new Date()).getMonth());

function new_window() {
    if(confirm('Do you want to open a new page?')) {
        window.open('https://youtube.com', '_parent');
    }
    else {
        window.alert('In the Current Window');
    }

}

function display_length() {
    var firstname = document.getElementById("firstname").value.length;
    console.log(firstname);
    // alert('Number of controls on the form: ' + count);
}
