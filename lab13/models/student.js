let db = [];

module.exports = class Student {
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