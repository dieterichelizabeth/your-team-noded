const Manager = require('../lib/Manager');

// test to create a Manager with name, id, and email
test('create a manager', () => {
    const manager = new Manager('Barry', 476, 'Barry@gmail.com', 4001);
  
    expect(manager.getName()).toBe('Barry');
    expect(manager.getId()).toBe(476);
    expect(manager.getEmail()).toBe('Barry@gmail.com');
    expect(manager.addOffice()).toBe(4001);
    expect(manager.getRole()).toBe('Manager');
  });