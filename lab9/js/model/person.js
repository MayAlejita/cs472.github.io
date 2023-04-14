class Person{
    name;
    dateOfBirth;

    getName(){
        return this.name;
    }

    setName(n){
        this.name = n;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }

    setDateOfBirth(b){
        this.dateOfBirth = b;
    }

    toString(){
        return "Name: "+ this.name + ", DateOfBirth: "+ this.dateOfBirth.toLocaleDateString('sv-SE');
    }
}
export{Person}