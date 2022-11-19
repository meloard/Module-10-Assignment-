const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager('ElonMusk', 1, 'ihavealotofkids@hotmail.com', 2);
    expect(manager.phoneNum).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('ElonMusk', 1, 'ihavealotofkids@hotmail.com');
    expect(manager.getRole()).toEqual("Manager");
});