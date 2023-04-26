const Product = require("./product");

module.exports = class Shoppingcart{
    constructor(username, quantity, total, id, nameProd, price, image, stock){
        this.username = username;
        this.quantity = quantity;
        this.total = total;
        
        this.id = id;

        this.nameProd = nameProd;
        this.price = price;
        this.image = image;
        this.stock = stock;
        // this.product = new Product(id, nameProd, price, image, stock);
    }

    save(id, user){
        const index = dbShopping.findIndex(p => p.id == id && p.username == user);
        if(index < 0){
            dbShopping.push(this);
        }    
        else{
            dbShopping.splice(index, 1, this);
        }
        return this;
    }

    static deleteShopping(username){
        const arrdb = dbShopping.filter(s =>s.username == username);
        for (let i=0; i < arrdb.length; i++) {
            dbShopping.splice(0, 1);    
        }
        return dbShopping;
    }

    static findByUser(username){
        const arrdb = dbShopping.filter(s =>s.username == username);
        return arrdb;
    }
}

let dbShopping = [];