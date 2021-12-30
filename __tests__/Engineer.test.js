const Engineer = require('../lib/Engineer');

test('Should retrieve and display the office number of the manager', () => {
    const newEngineer = new Engineer('Nick', 1, 'nickperel@live.com', 'nickperel')

    expect(newEngineer.getGithub()).toBe('nickperel')
})

test("Should check the employee type from user input and then display 'Engineer'", () => {
    const newEngineer = new Engineer('Nick', 1, 'nickperel@live.com', 'nickperel')

    expect(newEngineer.getRole()).toBe('Engineer')
})