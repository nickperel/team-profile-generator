class Employee {
    // properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return 'employee';
    };
}

// const employee1 = new Employee ('Nick', 1, 'nickperel@live.com');

// console.log(employee1.getName());
// console.log(employee1.getRole());

module.exports = Employee;