const Employee = require('../lib/Employee');

// test to create an employee with name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Barry', '476', 'Barry@gmail.com');
  
    expect(employee.name).toBe('Barry');
    expect(employee.id).toBe('476');
    expect(employee.id).toBe('Barry@gmail.com');
  });