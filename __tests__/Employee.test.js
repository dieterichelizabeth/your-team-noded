const Employee = require('../lib/Employee');

// test to create an employee with name
test('creates an employee object with name', () => {
    const employee = new Employee('Barry', 476, 'Barry@gmail.com');
    
    expect(employee.getName()).toBe('Barry');
    expect(employee.getId()).toBe(476);
    expect(employee.getEmail()).toBe('Barry@gmail.com');
    expect(employee.getRole()).toBe('Employee');
  });