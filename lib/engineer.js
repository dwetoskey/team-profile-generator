const employee = require("./employee");

class engineer extends employee {
    constructor (id, name, email, github) {

        super (id, name, email);
        this.github = github;
    }

    getrole() {
        return "engineer";
    }

    getgit() {
        return this.github;
    }
}

module.exports = engineer;