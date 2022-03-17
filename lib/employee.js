const { mainModule } = require("process");

class employee {
    constructor (name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        // this.office = office;
    }

    getid() {
        return this.id;
    }

    getname() {
        return this.name;
    }

    getemail() {
        return this.email;
    }

    // getoffice() {
    //     return this.office;
    // }

    role() {
        return "employee";
    }
}

module.exports = employee;