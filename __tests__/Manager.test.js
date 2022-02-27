const Manager = require ('../lib/Manager')
const Employee = require('../lib/Employee');

// test to create an employee with name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Barry', '476', 'Barry@gmail.com');
  
    expect(employee.name).toBe('Barry');
    expect(employee.id).toBe('476');
    expect(employee.email).toBe('Barry@gmail.com');
  });

// test for Office #
test('get office #', () => {
    const employee = new Employee('Barry', '476', 'Barry@gmail.com', '4001');
  
    expect(employee.office).toBe('4001');
  });