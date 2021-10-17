//BT
// var x = 1;
// var y = 50;
// var arr = [];
// while(x <= y){
//    arr.push(x++);
// }
// console.log(arr)

//Chua bai
let checksquarenumber = function(){
    let arrayint = []
    for(let i = 0; i<51; i++){
        arrayint.push(Math.floor(Math.random()*100))
        //arrayint.push(i)
    }
    //  

    for(i=0; i<arrayint.length; i++){
        if(Math.sqrt(arrayint[i])%1 ==0 && arrayint[i] != 0){
            console.log("so chinh phuong", arrayint[i])
        }
    }
}
//checksquarenumber()

// Bài 2: tạo một mảng có 20 phần tử là số, khác nhau. Kiểm tra phần tử có baonh số nguyên tố.
// Ôn tập lại kiến thức về object:
// Tạo một array có 10 phàn tử; mỗi phàn tử là một Object. Object chứa thông tin về cá nhân bao gồm: tên, tuổi, địa chỉ nhà,... In ra màn hình (không phải cửa sổ console => xem lại DOM) tên của những người sinh sau năm 1999; in ra địa chỉ của những người nhà ở Hà Nôi.