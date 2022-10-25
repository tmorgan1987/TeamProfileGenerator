const Employee = require("../lib/intern");

describe('Employee', () => {
	describe('Initialization', () => {
		it ("It can set name via constructor arguments", () => {
			const name = "Kyle";

			const obj = new Employee(name);

			expect(obj.name).toEqual(name);
		})
	})
})

// don't forget to change shit