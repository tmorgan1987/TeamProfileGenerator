const Manager = require("../lib/manager");

describe('Manager', () => {
	describe('Initialization', () => {
		it ("It can set name via constructor arguments", () => {
			const name = "Sam";

			const obj = new Employee(name);

			expect(obj.name).toEqual(name);
		})
	})
})

// don't forget to change this shit