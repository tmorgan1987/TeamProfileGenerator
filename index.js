const generateHTML = require("./src/generate_html");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");

const team = [];

const stateManage = () => {
	return inquirer.prompt ([
		{
			type: "input",
			name: "name",
			message: "Who will be managing this team?",
			validate: (name) => {
				if (name) {
					return true;
				} else {
					console.log("Please enter the name of the manager.");
					return false;
				}
			}
		},
		{
			type: "input",
			name: "id",
			message: "What is the identification number of the manager?",
			validate: (name) => {
				if (isNaN(name)||(name == "")) {
					console.log("Please enter the manager's identification number.");
					return false;
				} else {
					return true;
				}
				}
			},
			{
				type: "input",
				name: "email",
				message: "What is the email address of the manager?",
				validate: (name) => {
					valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
					if (valid) {
						return true;
					} else {
						console.log("Please enter the manager's email address.")
						return false;
					}
				}
			},
			{
				type: "input",
				name: "officeNumber",
				message: "What is the office number of the manager?",
				validate: (name) => {
					if (isNana(name)||(name == "")) {
						console.log("Please enter the manager's office number.");
						return false; 
					} else {
						return true;
					}
				}
			}
		

	]) .then(managerData => {
		const { name, id, email, officeNumber} = managerData;
		const manager = new Manager (name, id, email, officeNumber);

		team.push(manager);
		// console.log(manager);
	})
}