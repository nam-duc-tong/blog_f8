// var person = {
    // ho: "Tong",
    // ten: "Nam",
    // chao: function(){
        // cach 1
        // setTimeout(()=>{
        //     console.log("Xin chao cac ban minh la: "+this.ten);
        // },200);

        // cach 2:
        // var that = this;
        // setTimeout(function(){
        //     console.log("Xin chao cac ban minh la: "+that.ten);
        // },200);

        // cach 3
        // setTimeout(function(){
        //     console.log("Xin chao cac ban minh la: "+this.ten);
        // }.bind(this),200);
        
        // cach 4
        
        // setTimeout(function(){
        //     console.log("Xin chao cac ban minh la: "+this.ten);
        // }.bind(person),200);
    // }
// }
// person.chao();

// function khoahoc(hocphi,tenkhoahoc){
//     this.hocphi = hocphi;
//     this.tenkhoahoc = tenkhoahoc;
// }
// khoahoc.prototype.mota = function(){
//     console.log(`Day la khoa hoc ${this.tenkhoahoc} voi gia la: ${this.hocphi}`);
// }
// var nodejs  = new khoahoc('1 trieu','Nodejs');
// console.log(nodejs.mota());

// truyen tai data voi buffer
// var buffer = new Buffer("Hello","utf-8");
// var buffer = new Buffer.from("Hello","utf-8");
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());


var fs = require("fs");
var noidung = fs.readFileSync(__dirname+"/danhsach.txt");
// console.log(noidung);
console.log(noidung.toString());