const Employee = require('./Employee');

class Manager extends Employee {
    // properties
    constructor (name, id, email, officeNumber) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    // methods 

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

// const engineer1 = new Engineer ("John", 2, "john@mail.com", "john123");

// console.log(engineer1.getRole())

module.exports = Manager;