// giải phương trình bậc nhất
function giaiPhuongTrinhBacNhat(a, b) {
    if (a == 0) {
        if (b == 0) {
            console.log('Phương trình vô số nghiệm');
        } else {
            console.log('Phương trình vô nghiệm');
        }
    } else {
        console.log('Phương trình có nghiệm x = ' + -b/a);
    }
}
giaiPhuongTrinhBacNhat(1, 0);

// số chính phương
function isChinhPhuong(n) {
    if (n < 0) {
        return false;
    }
    var sqrtN = Math.sqrt(n);
    return sqrtN == parseInt(sqrtN);
}
console.log(isChinhPhuong(9));
console.log(isChinhPhuong(10));
console.log(isChinhPhuong(16));