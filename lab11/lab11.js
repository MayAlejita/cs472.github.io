Array.prototype.even = function(){
    console.log(this.filter((n) => n % 2 == 0));
}

Array.prototype.odd = function(){
    console.log(this.filter((n) => n % 2 != 0));
}

var num = [1,2,3,4,5,6,7,8];
num.even(); // [2,4,6,8]
num.odd(); // [1,3,5,7]