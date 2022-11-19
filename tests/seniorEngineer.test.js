
const seniorEngineer = require('../lib/seniorEngineer');

test('creates a seniorEngineer object', () => {
    const seniorEngineer = new SeniorEngineer('JohnCarmack', 1, 'doooooom@coolgames.com');
    expect(seniorEngineer.school).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const seniorEngineer = new SeniorEngineer('JohnCarmack', 1, 'doooooom@coolgames.com');
    expect(seniorEngineer.getRole()).toEqual("seniorEngineer");
});