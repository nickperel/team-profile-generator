const Employee = require('./Employee');

class Engineer extends Employee {
    // properties
    constructor (name, id, email, github) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        super(name, id, email)
        this.github = github;
    }

    // methods 

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

// const engineer1 = new Engineer ("John", 2, "john@mail.com", "john123");

// console.log(engineer1.getRole())

module.exports = Engineer;