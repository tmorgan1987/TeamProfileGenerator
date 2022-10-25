const Employee = require("./employee");

class Engineer extends Employee {
	constructor (name, id, email, github) {
		super (name, id, email);

		this.github = github;
	}

	getGH () {
		return this.github;
	}

	getPosition () {
		return "Engineer";
	}
};

module.exports = Engineer;