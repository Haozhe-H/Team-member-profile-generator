const generatePage = require("./src/generatePage");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const teamArray = [];

// manager prompt questions
const managerQs = [
  // name
  {
    type: "input",
    name: "name",
    message: "Who is the manager of this team?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of team manager");
        return false;
      }
    },
  },

  // id
  {
    type: "input",
    name: "id",
    message: "What is the manager's ID?",
    validate: (idInput) => {
      if (isNaN(idInput)) {
        console.log("Please enter the manager's ID");
        return false;
      } else {
        return true;
      }
    },
  },

  // email
  {
    type: "input",
    name: "email",
    message: "What is the manager's contact email?",
    validate: (emailInput) => {
      check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i.test(emailInput);
      if (check) {
        return true;
      } else {
        console.log("Please enter an valid email");
        return false;
      }
    },
  },

  // office #
  {
    type: "input",
    name: "officeNumber",
    message: "What's the manager's office number",
    validate: (officeNInput) => {
      if (isNaN(officeNInput)) {
        console.log("Please enter the manager's office number");
        return false;
      } else {
        return true;
      }
    },
  },
];

// employee prompt questions
const employeeQs = [
  // role
  {
    type: "list",
    name: "role",
    message: "Please select the employee's role",
    choices: ["Engineer", "Intern"],
  },

  // name
  {
    type: "input",
    name: "name",
    message: "Please enter the name of employee",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of employee");
        return false;
      }
    },
  },

  // id
  {
    type: "input",
    name: "id",
    message: "Please enter the employee's ID",
    validate: (idInput) => {
      if (isNaN(idInput)) {
        console.log("Please enter the employee's ID");
        return false;
      } else {
        return true;
      }
    },
  },

  // email
  {
    type: "input",
    name: "email",
    message: "Please enter the employee's email",
    validate: (emailInput) => {
      check = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i.test(emailInput);
      if (check) {
        return true;
      } else {
        console.log("Please enter an valid email");
        return false;
      }
    },
  },

  // Github
  {
    type: "input",
    name: "github",
    message: "Please enter the employee's Github name",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the employee's Github name");
        return false;
      }
    },
  },

  // school
  {
    type: "input",
    name: "school",
    message: "Please enter the employee's alma mater",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter the employee's alma mater");
        return false;
      }
    },
  },

  // confirm
  {
    type: "confirm",
    name: "addMoreEmployee",
    message: "Do you want to add another employee?",
    default: false,
  },
];

// manager prompt
const addManager = () => {
  console.log(`
    ==============================
    Adding manager to the team
    ==============================
    `);
  return inquirer.prompt(managerQs).then((managerData) => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    teamArray.push(manager);
    console.log(teamArray);
  });
};

// employee prompt
const addEmployee = () => {
  console.log(`
    ==============================
    Adding employees
    ==============================
    `);

  return inquirer.prompt(employeeQs).then((employeeData) => {
    const { name, id, email, role, school, github, addMoreEmployee } =
      employeeData;

    if (role === "Engineer") {
      const engineer = new Engineer(name, id, email, github);
      console.log(engineer);
      teamArray.push(engineer);
      console.log(teamArray);
    }

    if (role === "Intern") {
      const intern = new Intern(name, id, email, school);
      console.log(intern);
      teamArray.push(intern);
      console.log(teamArray);
    }

    if (addMoreEmployee) {
      return addEmployee(teamArray);
    } else {
      return teamArray;
    }
  });
};

// write to file
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err, "ERROR in writeFile");
      return;
    } else {
      console.log(
        "Team member profile is generated successfully, please check index.html."
      );
    }
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generatePage(teamArray);
  })
  .then((page) => {
    return writeFile(page);
  })
  .catch((err) => {
    if (err) {
      console.log(err, "ERROR in call function");
      return;
    }
  });
