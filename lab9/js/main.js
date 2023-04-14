import { Person } from "./model/person.js"
import { Employee } from "./model/employee.js"

let person1 = new Person();
person1.setName("Ana Smith");
person1.setDateOfBirth(new Date('1998-12-15'));

let person2 = new Person();
person2.setName("Bob Jone");
person2.setDateOfBirth(new Date('1945-11-16'));

let person3 = new Person();
person3.setName("Carlos Slim Helu");
person3.setDateOfBirth(new Date('1976-09-24'));

let personArray = [person1, person2, person3];
personArray.forEach((p) => console.log(p.toString()));

let employee = new Employee();
employee.setName("Jim Hanson");
employee.salary = 245990.01;
employee.doJob("Software Engineer");

