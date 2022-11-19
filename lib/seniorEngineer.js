const Employee = require('./employee');

class seniorEngineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "seniorEngineer";
    }
}

module.exports = seniorEngineer;