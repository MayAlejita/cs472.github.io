import { Person } from "./person.js"

class Employee extends Person{
    salary;
    hireDate;

    doJob(jobTitle){
        console.log(super.getName() + " is a " + jobTitle + " who earns $" + this.salary.toLocaleString('en-US'));
    }
}

export{Employee}