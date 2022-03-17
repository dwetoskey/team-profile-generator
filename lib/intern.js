const employee = require('./employee');

class intern extends employee {
    constructor (id, name, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getschool() {
        return this.school;
    }

    getrole() {
        return "intern";
    }
}

module.exports = intern;