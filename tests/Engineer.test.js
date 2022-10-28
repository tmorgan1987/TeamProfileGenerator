const Engineer = require("../lib/engineer");

describe('Engineer', () => {
	describe('Initialization', () => {
		it ("It can set name via constructor arguments", () => {
			const name = "Ralph";

			const obj = new Engineer(name);

			expect(obj.name).toEqual(name);
		})
		it ("It can set identification number via constructor objects.", () => {
			const id = 3;

			const obj = new Engineer("string",id,"turdferguson");

			expect(obj.id).toEqual(id);
		})
		it ("It can set github via constructor arguments.", () => {
			const github = "turdferguson";

			const obj = new Engineer("string",6,"turd@fergy.com","turdferguson");
			
			expect(obj.github).toEqual(github);
		})
		})
})

