const Employee = require('../lib/Employee');

// test to create an employee with name, id, and email
test('creates an employee object', () => {
    const employee = new Employee('Barry');
  
    expect(employee.name).toBe('Barry');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Barry@gmail.com');
  });