const Employee = require('../lib/Employee');

test('set a name', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.name).toBe("John")
})

test('set an id', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.id).toBe(1)
})

test('set an email', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.email).toBe("john@mail.com")
})

test('test for the getName Method', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.getName()).toBe("John")
})

test('test for the getId Method', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.getId()).toBe(1)
})

test('test for the getEmail Method', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.getEmail()).toBe("john@mail.com")
})

test('test for the getRole Method', () => {
    const newEmployee = new Employee('John', 1, "john@mail.com");

    expect(newEmployee.getRole()).toBe("employee")
})