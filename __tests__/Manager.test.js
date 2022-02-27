const Manager = require('../lib/Manager');

// test to create a Manager with name, id, and email
test('create a manager', () => {
    const manager = new Manager('Barry', '476', 'Barry@gmail.com');
  
    expect(manager.name).toBe('Barry');
    expect(manager.id).toBe('476');
    expect(manager.email).toBe('Barry@gmail.com');
  });

// test to add an office #
test('add office #', () => {
    const manager = new Manager('Barry');
    manager.addOffice('4001');
  
    expect(manager.office).toBe('4001');
  });

// test to change role from employee to manager
test('change employee role', () => {
    const manager = new Manager('Barry');
    manager.getRole('Manager');
  
    expect(manager.role).toBe('Manager');
  });