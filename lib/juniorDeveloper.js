const Employee = require('./employee');

class juniorDeveloper extends juniorDeveloper{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "juniorDeveloper";
    }
}

module.exports = juniorDeveloper;

