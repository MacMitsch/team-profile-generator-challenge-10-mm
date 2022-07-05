const Employee = require("../employee");

test("Can represent and instance", function () {
    const emp = new Employee();
    expect(typeof (emp)).toBe('object');
});
// Set Name with Constructor
test("Set name", function() {
    const name = "tony";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});
// Set Id with Constructor
test("set id", function () {
    const testValue = 100;
    const emp = new Employee("tony", testValue);
    expect(emp.id).toBe(testValue);
});
// Set Email with Constructor
test("set Email", function (){
    const testValue ="mystcoding@gmail.com";
    const emp = new Employee("tony",1,testValue);
    expect(emp.email).toBe(testValue);
});
// Get Name W/ getName()
test("get name from command", function(){
    const testValue = "tony";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});
// Get Id W/ getId()
test("get name from command", function(){
    const testValue = 100;
    const emp = new Employee("tony",testValue);
    expect(emp.getId()).toBe(testValue);
});
// Get Email W/ getEmail()
test("get email from command", function () {
    const testValue = "mystcoding@gmail.com";
    const emp = new Employee("tony",1,testValue);
    expect(emp.getEmail()).toBe(testValue);
}); 