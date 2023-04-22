class Course{
    constructor(id, name, grade){
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    save(){
        db.push(this);
        return this;
    }

    static getAll(){
        return db;
    }

    static findById(idC){
        const index = db.findIndex(c => c.id == idC);
        return db[index];
    }
}

let c1 = new Course('CS390', "Fundamental Programming Practice", 'A');
let c2 = new Course('CS401', "Modern Programming Practice", 'A');
let c3 = new Course('CS472', "Web Application Programming", 'A');
let c4 = new Course('CS573', "Modern Web Application", 'A');

let db = [c1, c2, c3, c4];

module.exports = Course;