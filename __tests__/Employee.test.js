const Employee = require('../lib/Employee');

test('set a name', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.name).toBe("John")
})

test('set an id', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.id).toBe("1")
})

test('test for the getName Method', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.getName()).toBe("John")
})