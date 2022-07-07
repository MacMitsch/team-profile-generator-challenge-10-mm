const Manager = require("../lib/Manager");

test("set office number", function () {
    const testOfficeNumber = 2;
    const mac = new Manager("James", 2, "jamesljenks@gmail.com", testOfficeNumber);
    expect(mac.officeNumber).toBe(testOfficeNumber);
});

test("officeNumber will return office number", function() {
    const testOfficeNumber = 2;
    const mac= new Manager("James", 2, "jamesljenks@gmail.com", testOfficeNumber);
    expect(mac.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Test role.", function () {
    const returnValue = "Manager";
    const mac = new Manager("James", 2, "jamesljenks@gmail.com", 2);
    expect(mac.getRole()).toBe(returnValue);
});