const Engineer = require('../lib/Engineer');

// test to create a Engineer with name, id, and email
test('create a Engineer', () => {
  const engineer = new Engineer('Barry', 476, 'Barry@gmail.com', 'theRock');

  expect(engineer.getName()).toBe('Barry');
  expect(engineer.getId()).toBe(476);
  expect(engineer.getEmail()).toBe('Barry@gmail.com');
  expect(engineer.getGithub()).toBe('theRock');
  expect(engineer.getRole()).toBe('Engineer');
});