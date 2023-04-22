class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    save() {
        db.push(this);
        return this;
    }

    edit() {
        const index = db.findIndex(s => s.id == this.id);
        db.splice(index, 1, this);
        return this;
    }

    static getAll() {
        return db;
    }

    static deleteById(stuId) {
        const index = db.findIndex(stu => stu.id == stuId);
        const deletedStu = db[index];
        db.splice(index, 1);
        return deletedStu;
    }
    static findById(stuId) {
        const index = db.findIndex(stu => stu.id == stuId);
        return db[index];
    }

}

let st1 = new Student(101, "John Doe");
let st2 = new Student(103, "John Smith");
let st3 = new Student(102, "Anna John");
let st4 = new Student(104, "Smith Karry");
let st5 = new Student(105, "Keith John");


let db = [st1, st2, st3, st4, st5];

module.exports = Student;