const Employee = require('../lib/Employee');

test('set a name', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.name).toBe("John")
})