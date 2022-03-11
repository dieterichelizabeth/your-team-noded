const Intern = require('../lib/Intern');

// test to create a Intern with name, id, and email
test('create a Intern', () => {
  const intern = new Intern('Barry', 476, 'Barry@gmail.com', 'UTA');

  expect(intern.getName()).toBe('Barry');
  expect(intern.getId()).toBe(476);
  expect(intern.getEmail()).toBe('Barry@gmail.com');
  expect(intern.getSchool()).toBe('UTA');
  expect(intern.getRole()).toBe('Intern');
});