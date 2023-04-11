const Intern = require("../lib/Intern");

const intern = new Intern("Haozhe", 15, "haozhe@email.com", "CarletonU");
// console.log(employee);

test("creates an intern object", () => {
  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
});

test("get intern school", () => {
  expect(intern.getSchool()).toEqual("CarletonU");
});

test("get intern role", () => {
  expect(intern.getRole()).toEqual("Intern");
});
