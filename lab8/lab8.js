'use strict'

let student1 = {
    firstName: "John",
    lastName: "Smith",
    grades: [10, 9, 8],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        let total = 0;
        this.grades.forEach((g) => {
            total += g;
        });
        return total / this.grades.length;
    }
}

student1.inputNewGrade(9);
console.log(student1.computeAverageGrade());

let newStudent = Object.create(student1);
newStudent.firstName = "Namy"
newStudent.lastName = "Lia"
newStudent.grades = [5, 5];
newStudent.inputNewGrade(10);
console.log(newStudent.computeAverageGrade());

let newStudent1 = Object.create(student1);
newStudent1.grades = [7, 7, 7, 9, 10];
newStudent1.lastName = "Smith"
newStudent1.firstName = "Ann"
console.log(newStudent1.computeAverageGrade());

let students = [student1, newStudent, newStudent1];
let count = 0;
let computeAllAverage1 = students.flatMap(g => g.grades)
                            .reduce((x, y) =>{ 
                                count ++;
                                return x + y
                            }, 0)/count;
console.log("Average ObjectLiteral: " + computeAllAverage1);

////////////////////////////////////////////////////

function Student(firstName, lasName, grades){
    this.firstName = firstName;
    this.lasName = lasName;
    this.grades = grades;
}

Student.prototype.inputNewGradeFun = function(grade){
    return this.grades.push(grade);
}

Student.prototype.averageGradesFun = function(){
    let total = 0;
    this.grades.forEach((grade) => {
        total += grade;
    })
    return total / this.grades.length;
}

let studentFun = new Student("John", "Ann", [10,9,8]);
let studentFun1 = new Student("Ale", "Smith", [7,10,8]);

studentFun.inputNewGradeFun(9);
studentFun1.inputNewGradeFun(8);
console.log(studentFun.averageGradesFun());
console.log(studentFun1.averageGradesFun());

let studentsFun = [studentFun, studentFun1];
let averageAllFun = studentsFun.map(grade => grade.averageGradesFun())
                        .reduce((x, y) => x + y, 0)/studentsFun.length;

console.log("Average ConstructorFunction: ", averageAllFun);

/////////////////////////////////
Student.prototype.sort = function(){
    return this.grades.sort((a, b) => a - b);
};
console.log(studentFun.sort());