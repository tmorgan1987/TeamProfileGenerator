const genManager = (manager) => {
  return `
	<div class="col-3 mt-3">
		<h3>${manager.name}</h3>
		<h4>Manager</h4>
		<p class="id">Identification Number: ${manager.id}</p>
		<p class="email>e-mail: ${manager.email}</p>
		<p class="office">Office Number: ${manager.officeNumber}</p>
	</div>
	`;
};

const genEngi = (engineer) => {
  return `
	<div class="col-3 mt-3">
		<h3>${engineer.name}</h3>
		<h4>Engineer</h4>
		<p class="id">Identification Number: ${engineer.id}</p>
		<p class="email">email: ${engineer.email}</p>
		<p class="github">Github Profile: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
	</div>
		`;
};

const genIntern = (intern) => {
  return `
	<div class="col-3 mt-3">
		<h3>${intern.name}</h3>
		<h4>Intern</h4>
		<p class="id>Identification Number: ${intern.id}</p>
		<p class="email">email:<a href="mailto:${intern.email}">${intern.email}</a></p>
		<p class="school">School: ${intern.school}</p>
	</div>
	`;
};

// forEach attempt for practice, hope it works.  Checked.  It does not work.
// data.forEach( employee => { const role = employee.getRole(); } )

makeHtml = (data) => {
	console.log(data, "let us know where we're at.");
  htmlArr = [];
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getPosition();

    if (role == "Manager") {
      const managerCard = genManager(employee);
      htmlArr.push(managerCard);
    }

    if (role == "Engineer") {
      const engineerCard = genEngi(employee);
      htmlArr.push(engineerCard);
    }

    if (role == "Intern") {
      const internCard = genIntern(employee);
      htmlArr.push(internCard);
    }
  }
	console.log(htmlArr);
	const employees = htmlArr.join("");
	const makeTeam = genMakeTeam(employees);
	return makeTeam;
};


const genMakeTeam = function (employees) {
  return `
	<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Team Profile</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
	<nav class="navbar" id="navbar">
	<span class="navbar-brand mg-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
	</nav>
	</header>
	<main>
	<div class="container">
	<div class="row justify-content-center" id="team-cards">
	${employees}
	</div>
	</div>
	</main>
</body>
</html>

	`;
};

module.exports = makeHtml;
