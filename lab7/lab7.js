'use strict'
function askPassword(ok, fail){
    let password = prompt("Password?", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name : 'John',
    loginOK(){
        alert(`${this.name} loggin in`);
    },
    loginFail(){
        alert(`${this.name} failed to log in`);
    },
};

askPassword(() => user.loginOK(), () => user.loginFail());
askPassword(() => user.loginOK.call(user), () => user.loginFail.call(user));
askPassword(() => user.loginOK.apply(user), () => user.loginFail.apply(user));
askPassword(user.loginOK.bind(user), user.loginFail.bind(user));

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
            const self = this;
            this.students.forEach(function(student) {
            console.log(self.title + ": " + student); 
        });
    }
};
group.showList();
    