const Manager = require('../lib/Manager');

test('Should retrieve and display office number of Manager based on user input', () => {
    const newManager = new Manager('Nick', 1, 'nickperel@live.com', 7)

    expect(newManager.getOfficeNumber()).toBe(7)
})

test("Should check the employee type from user input and then display 'Manager'", () => {
    const newManager = new Manager('Nick', 1, 'nickperel@live.com', 7)

    expect(newManager.getRole()).toBe('Manager')
})