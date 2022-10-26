const genManager = (manager) => {
	return `
	<div class="col-4 mt-4">
		<div class="card h-100">
		<div class="card-h">
		<h2>${manager.name}</h2>
		<h4>Manager</h4>
	</div>

	<div class="card-body">
		<p class="id">Identification Number: ${manager.id}</p>
		<p class="email>e-mail: ${manager.email}</p>
		<p class="office">Office Number: ${manager.officeNumber}</p>
	</div>

</div>
	`;
};

const genEngi = (engineer) => {
	return `
	<div class="col-4 mt-4">
		<div class="card h-100">
		<h2>${engineer.name}</h2>
		<h4>Engineer</h4>
	</div>

	<div class="card-body">
		<p class="id">Identification Number: ${engineer.id}</p>
		<p class="email">email: ${engineer.email}</p>
		<p class="github">Github Profile: ${engineer.github}</p>
	</div>

</div>
		`;
};

const genIntern = (intern) => {
	return `
	<div class="col-4 mt-4">
	<div class="card h-100">
		<h2>${intern.name}</h2>
		<h4>Intern</h4>
	</div>

	<div class="card-body">
		<p class="id>Identification Number: ${intern.id}</p>
		<p class="email">email: ${intern.id}</p>
		<p class="school">School: ${intern.school}</p>
	</div>

	</div>
	`
};
