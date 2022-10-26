//necessary variables
const makeHTML = require("./src/make_html");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");

// empty array to be populated
const team = [];

// beginning of management prompts
const stateManagement = () => {
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
					valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)
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
					if (isNaN(name)||(name == "")) {
						console.log("Please enter the manager's office number.");
						return false; 
					} else {
						return true;
					} 

				}
			}
	]) .then(managerInfo => {
		const { name, id, email, officeNumber} = managerInfo;
		const manager = new Manager (name, id, email, officeNumber);

		team.push(manager);


	})
};

const stateEmployee = () => {
	return inquirer.prompt ([
		{
			type: "list",
			name: "role",
			message: "Please choose the role of the employee.",
			choices: ["Intern", "Engineer"]
		},
		{
			type: "input",
			name: "name",
			message: "What is the employee's name?",
			validate: (name) => {
				if (name) {
					return true;
				} else {
					console.log("Please enter the name of the employee.")
					return false;
				}
			}
		},
		{
			type: "input",
			name: "id",
			message: "What is the identification number of the employee?",
			validate: (name) => {
				if (isNaN(name)||(name == "")) {
				console.log("Please enter the employee's identification number.");
				return false; 
				} else {
					return true;
				}
			}
		},
		{
			type: "input",
			name: "email",
			message: "Please enter the employee's email.",
			validate: (name) => {
				valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)
				if (valid) {
					return true;
				} else {
					console.log("Please enter the employee's email address.")
					return false;
				}
				}
		},
		{
			type: "input",
			name: "github",
			message: "Please enter the employee's github profile name.",
			when: (input) => input.role == "Engineer",
			validate: (name) => {
				if (name) {
					return true;
				} else {
					console.log("Please enter the employee's github profile name.")
				}
			}
		},
		{
			type: "input",
			name: "school",
			message: "Please enter the intern's school.",
			when: (input) => input.role == "Intern",
			validate: (name) => {
				if (name) {
					return true;
				} else {
					console.log("Please enter the intern's school.")
				}
			}
		},
		{
			type: "confirm",
			name: "addEmployee",
			message: "Would you like to add additional employees?",
			default: false
		},
	])
		.then(employeeInfo => {
			let {name, id, email, role, github, school, addEmployee} = employeeInfo;
			let employee;

			if (role == "Engineer") {
				employee = new Engineer (name, id, email, github);
			} else if (role == "Intern") {
				employee = new Intern (name, id, email, school);
			}
		
team.push(employee);

			if (addEmployee) {
				return stateEmployee(team); 
			} else {
				return team;
			}
		})
	};


	const writeFile = (data) => {
		fs.writeFile("./dist/index.html", data, (error) => {
			if (error) {
				console.log(error);
				return;
			} else {
				console.log("Your team profile has been generated successfully.");
			}
		})
	};

stateManagement()
	.then(stateEmployee)
	.then(team => {
		return makeHTML(team);
	})
	.then(pageHTML => {
		return fs.writeFile(pageHTML);
	})
	.catch(error => {
		console.log(error);
	});
