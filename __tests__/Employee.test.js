const Employee = require('../lib/Employee');

// test to create an employee with name, id, and email
test('creates an employee object with name', () => {
    const employee = new Employee('Barry');
    employee.getName('Barry');

    expect(employee.name).toBe('Barry');
  });

// test to add employee id
test('add id', () => {
  const employee = new Employee('Barry');
  employee.getId('476');

  expect(employee.id).toBe('476');
});

// test to add employee email
test('add email', () => {
  const employee = new Employee('Barry');
  employee.getEmail('Barry@gmail.com');

  expect(employee.email).toBe('Barry@gmail.com');
});