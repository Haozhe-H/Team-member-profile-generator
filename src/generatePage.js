// manager card
const generateManager = function (manager) {
  return `
    <div class="col rounded">
        <div class="card h-100 shadow">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4>
            </div>

            <div class="card-body">
                <p>ID: ${manager.id}</p>
                <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p>Office number: ${manager.officeNumber}</p>
            </div>
        </div>      
    </div>`;
};

// engineer card
const generateEngineer = function (engineer) {
  return `
    <div class="col rounded">
        <div class="card h-100 shadow">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4>
            </div>

            <div class="card-body">
                <p>ID: ${engineer.id}</p>
                <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p>Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>      
    </div>`;
};

// intern card
const generateIntern = function (intern) {
  return `
    <div class="col rounded">
        <div class="card h-100 shadow">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4>
            </div>

            <div class="card-body">
                <p>ID: ${intern.id}</p>
                <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School: ${intern.school}</p>
            </div>
        </div>      
    </div>`;
};

generatePage = (data) => {
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      cardArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      cardArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = generateIntern(employee);
      cardArray.push(internCard);
    }
  }

  const employeeCard = cardArray.join("");

  return generateTeamPage(employeeCard);
};

const generateTeamPage = function (employeeCard) {
  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossorigin="anonymous"
            />
            <title>Team Member Profile</title>
        </head>
    
    
    
        <body>
    
            <nav class="navbar " style="background-color: paleturquoise;">
                <h1 class="mx-auto">My Team</h1>
            </nav>
    
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-4 my-auto">
                    ${employeeCard}
                </div>
            </div>
        </body>
    
    
    </html>`;
};

module.exports = generatePage;
