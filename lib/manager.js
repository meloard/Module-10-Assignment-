const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, phoneNum) {
        super(name, id, email);
        this.officeNum = phoneNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;