const Intern = require('../lib/Intern');

// test to create a Intern with name, id, and email
test('create a intern', () => {
  const intern = new Intern('Barry');
  
  intern.getName('Barry');
  intern.getId('476');
  intern.getEmail('Barry@gmail.com');
  
    expect(intern.name).toBe('Barry');
    expect(intern.id).toBe('476');
    expect(intern.email).toBe('Barry@gmail.com');
  });

// test to add Intern school
test('get School', () => {
    const intern = new Intern('Barry');
    intern.getSchool('UT Austin');
  
    expect(intern.school).toBe('UT Austin');
  });

// test to change role from employee to intern
test('change employee role', () => {
    const intern = new Intern('Barry');
    intern.getRole('Intern');
  
    expect(intern.role).toBe('Intern');
  });