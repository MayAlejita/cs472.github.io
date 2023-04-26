module.exports = class Product{
    constructor(id, name, price, image, stock){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }

    static getAll(){
        return dbProduct;
    }

    edit(){ 
        const index = dbProduct.findIndex(prod => prod.id == this.id);
        dbProduct.splice(index, 1, this);
        return this; 
    }
}

let dbProduct = [{id: 1, name:'Node.js', price: 9.99, image:'https://d2sofvawe08yqg.cloudfront.net/tutorial-for-node-js/s_hero?1620647939', stock: 8},
    {id: 2, name:'React', price: 19.99, image:'https://m.media-amazon.com/images/I/41DA89Z1RIL.jpg', stock: 5},
    {id: 3, name:'Angular', price: 29.99, image:'https://imgv2-1-f.scribdassets.com/img/word_document/453245727/original/216x287/9852cac750/1617237806?v=1', stock: 13}
];
