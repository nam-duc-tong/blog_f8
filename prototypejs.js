function person(name,password) {
    this.name = name;
    this.password = password;
}
person.prototype.getName = function () {
    return this.name;
}
person.prototype.getPass = function () {
    return this.password;
}

person.prototype.level = function(){
    this.level = level;
}
person.prototype.level = 'admin';
function User(name,password){
    this.name = name;
    this.password = password;
}
User.prototype = new person();
var nam = new person('Nam','123456');
// console.log(nam);
// console.log(nam.level);
// console.log("\\\\\\\\\\\\\\\\\\\\\\");
var user1 = new User('Phuong','123');
// console.log(user1.level);




Date.prototype.vnFormat = function(){
    var yyyy = this.getFullYear();
    var mm = this.getMonth() + 1;
    var dd = this.getDate();
    return dd+ "/"+mm+"/"+yyyy; 
}
var now = new Date();
var xms = new Date(2016,11,25);
console.log(now.vnFormat());
console.log(xms.vnFormat());