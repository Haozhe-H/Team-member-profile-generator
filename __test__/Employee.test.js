const Employee = require('../lib/Employee');

const employee = new Employee("Haozhe", 15, "haozhe@email.com");
// console.log(employee);

test("creates an employee object", () => {
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("get employee name", () => {
  expect(employee.getName()).toEqual("Haozhe");
});

test("get employee id", () => {
  expect(employee.getId()).toEqual(15);
});

test("get employee email", () => {
  expect(employee.getEmail()).toEqual("haozhe@email.com");
});

test("get employee role", () => {
  expect(employee.getRole()).toEqual("Employee");
});
