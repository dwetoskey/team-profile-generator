const employee = require('./employee');

class manager extends employee {
    constructor(id, name, email, office) {
        super (id, name, email);
        this.office = office;
    }

    getoffice() {
        return this.office;
    }

    getrole() {
        return "manager";
    }
}

module.exports = manager;