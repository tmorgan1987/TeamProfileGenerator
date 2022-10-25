const Employee = require("../lib/employee");

describe('Employee', () => {
	describe('Initialization', () => {
		it ("It can set name via constructor arguments", () => {
			const name = "Kyle";

			const obj = new Employee(name);

			expect(obj.name).toEqual(name);
		})
		it ("It can set id via constructor arguments", () => {
			const id = 2;

			const obj = new Employee("string",id,"raw@yeah.com");

			expect(obj.id).toEqual(id);
		})
		it ("It can set email via constructor arguments", () => {
			const email = "turd@ferguson.com";

			const obj = new Employee("magellan", 2, email);

			expect(obj.email).toEqual(email);
		})
		})
	})




// all that it's doing is we're importing the class and making some variables instead of saying const object = new employee and handing it kyle we're handing it expect(obj.name) to equal the name variable which is kyle.