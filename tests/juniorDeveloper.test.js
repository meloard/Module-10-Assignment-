const juniorDeveloper = require('../lib/juniorDeveloper');

test('creates a juniorDeveloper object', () => {
    const juniorDeveloper = new JuniorDeveloper('Josh', 1, 'joshAdam78@gmail.com', 'jadam1');
    expect(juniorDeveloper.github).toEqual(expect.any(String));
});

test('gets juniorDeveloper github value', () => {
    const juniorDeveloper = new JuniorDeveloper('Josh', 1, 'joshAdam78@gmail.com', 'jadam1');
    expect(juniorDeveloper.getGithub()).toEqual(expect.stringContaining(juniorDeveloper.github.toString()));
});

test('gets role of employee', () => {
    const juniorDeveloper = new JuniorDeveloper('Josh', 1, 'joshAdam78@gmail.com', 'jadam1');
    expect(juniorDeveloper.getRole()).toEqual("juniorDeveloper");
});