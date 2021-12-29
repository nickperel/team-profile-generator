const Employee = require('./Employee');

class Intern extends Employee {
    // properties
    constructor (name, id, email, school) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.school = school;
    }

    // methods 

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

// const engineer1 = new Engineer ("John", 2, "john@mail.com", "john123");

// console.log(engineer1.getRole())

module.exports = Intern;