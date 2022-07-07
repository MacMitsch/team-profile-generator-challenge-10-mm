
const Employee = require("../lib/employee");

test("Can represent and instance", function () {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
})

// Set Name with Constructor
test("test name", function () {
    const name = "Tony";
    const mac = new Employee(name);
    expect(mac.name).toBe(name);
})
// Set Id with Constructor
test("test id", function () {
    const testValue = 100;
    const mac = new Employee("Tony", testValue);
    expect(mac.id).toBe(testValue);
})
// Set Email with Constructor
test("test Email", function () {
    const testValue ="myst@test.com";
    const mac = new Employee("Tony",1,testValue);
    expect(mac.email).toBe(testValue);
})

// Get Name W/ getName()
test("get name from command", function () {
    const testValue = "Tony";
    const mac = new Employee(testValue);
    expect(mac.getName()).toBe(testValue);
})

// Get Id W/ getId()
test("get name from command", function () {
    const testValue = 100;
    const mac = new Employee("Tony",testValue);
    expect(mac.getId()).toBe(testValue);
})

// Get Email W/ getEmail()
test("get email from command", function () {
    const testValue = "myst@test.com";
    const mac = new Employee("Tony",1,testValue);
    expect(mac.getEmail()).toBe(testValue);
})

// Retrieving  employee role
// issues working due to getRole
test("role testing employee", function () {
    const testValue = "Employee";
    const emp = new Employee("Tony",1,"myst@test.com", "Employee");
    expect(emp.getRole()).toBe(testValue);
})




