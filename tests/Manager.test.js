const Manager = require("../lib/manager");

describe('Manager', () => {
	describe('Initialization', () => {
		it ("It can set name via constructor arguments", () => {
			const name = "Sam";

			const obj = new Manager(name);

			expect(obj.name).toEqual(name);
		})
		it ("It can set identification number via constructor arguments.", () => {
			const id = 67;

			const obj = new Manager("string",id,"ferguson@turd.com",31);
		
			expect(obj.id).toEqual(id);
		})
		it ("It can set email via constructor arguments.", () => {
			const email = "ferguson@turd.com";

			const obj = new Manager("string", 67, email, 31)

			expect(obj.email).toEqual(email);
		})
		it ("It can set office number via constructor arguments.", () => {
			const officeNumber = 31;

			const obj = new Manager("string", 67, "ferguson@turd.com", officeNumber)

			expect(obj.officeNumber).toEqual(officeNumber);
		})

	})
})

// NAME ID EMAIL OFFICENUMBER