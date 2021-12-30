const Intern = require("../lib/Intern")

test('Should retrive and display the school that the intern attends based on user input', () => {
    const newIntern = new Intern('Nick', 1, 'nickperel@live.com', 'Rutgers')

    expect(newIntern.getSchool()).toBe('Rutgers')
})

test("Should check the employee type from user input and then display 'Intern'", () => {
    const newIntern = new Intern('Nick', 1, 'nickperel@live.com', 'nickperel')

    expect(newIntern.getRole()).toBe('Intern')
})