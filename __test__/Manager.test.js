const Manager = require("../lib/Manager");

const manager = new Manager("Haozhe", 15, "haozhe@email.com", 1201);
// console.log(employee);

test("creates an manager object", () => {
  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(1201);
});

test("get manager role", () => {
  expect(manager.getRole()).toEqual("Manager");
});
