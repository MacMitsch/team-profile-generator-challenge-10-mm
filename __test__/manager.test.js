const Manager = require("../Lib/manager");


test("set office number", function () {
    const OfficeNumber = 2;
    const mac = new Manager("Tony",2,"test@testin.com",OfficeNumber);
    expect(mac.OfficeNumber).toBe(OfficeNumber)
});