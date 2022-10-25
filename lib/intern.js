const Employee = require("./employee");

class Intern extends Employee {
	constructor (name, id, email, school) {
		super (name, id, email);
	}
		getSchool () {
			return this.school;
		}

		getPosition () {
			return "Intern";
		}
	};

	module.exports = Intern;
