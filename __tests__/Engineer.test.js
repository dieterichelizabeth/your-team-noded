const Engineer = require('../lib/Engineer');

// test to create a Engineer with name, id, and email
test('create a engineer', () => {
    const engineer = new Engineer('Barry', '476', 'Barry@gmail.com');
  
    expect(engineer.name).toBe('Barry');
    expect(engineer.id).toBe('476');
    expect(engineer.email).toBe('Barry@gmail.com');
  });

// test to add Engineer github
test('get Github', () => {
    const engineer = new Engineer('Barry');
    engineer.getGithub('octoBarry');
  
    expect(engineer.github).toBe('octoBarry');
  });

// test to change role from employee to engineer
test('change employee role', () => {
    const engineer = new Engineer('Barry');
    engineer.getRole('Engineer');
  
    expect(engineer.role).toBe('Engineer');
  });