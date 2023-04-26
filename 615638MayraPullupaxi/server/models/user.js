module.exports = class User{
    constructor(userId, username, password){
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    static findUser(username, password){
        return dbUser.find(u => u.username === username && u.password === password);
    }
}

let dbUser = [
    {id: 1, username: 'John', password: '111'},
    {id: 2, username: 'Edward', password: '222'}
];