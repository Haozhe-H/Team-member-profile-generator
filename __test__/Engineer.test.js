const Engineer = require('../lib/Engineer');

const engineer = new Engineer("Haozhe", 15, "haozhe@email.com", "haozhehuang");
// console.log(employee);

test("creates an engineer object", () => {
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

test("get engineer Github", () => {
    expect(engineer.getGithub()).toEqual("haozhehuang");
  });

test("get employee role", () => {
  expect(engineer.getRole()).toEqual("Engineer");
});
