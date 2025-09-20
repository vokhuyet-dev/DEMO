alert("xin chao");
//prompt("hello");
var myName;//khai bao bien
/*var myName="Trieu";khoi tao bien*/
let firstName="Vu";
const giaban=100;
var diem=10;
console.log(diem);
//thay đổi giá trị-không thể thay đổi giá trị hàm số
var diem=5;
console.log(diem);
console.log("Điểm của bạn là:"+diem);
//hien thi ten
// Hiển thị hộp thoại prompt
const ten = prompt("Nhập tên của bạn:");

// Gán dữ liệu nhập vào phần tử có id là 'hienthi'
document.getElementById("hienthi").innerText = "Xin chào, " + ten + "!";
//các kiểu dữ liệu
let myString ="trieu";
console.log(myString)
let soNguyen =10;
let soThuc =3.14;
console.log("số thực là: "+soThuc +"kiểu dữ liệu :" +typeof soThuc);
console.log("số nguyên là: "+soNguyen +"kiểu dữ liệu :" +typeof soNguyen);
let check=true;
console.log(check);
console.log("số nguyên an toàn tối đa: "+Number.MAX_SAFE_INTEGER);
console.log("số nguyên an toàn tối thiểu: "+Number.MIN_SAFE_INTEGER);
console.log("số nguyên an toàn tối đa: "+String.MAX_SAFE_INTEGER);