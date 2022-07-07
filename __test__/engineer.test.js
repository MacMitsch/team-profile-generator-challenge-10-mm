
 const Engineer = require("../Lib/engineer");

 test("Can create a github.", () => {
    const testGithub = "MacMitsch";
    const mac = new Engineer("Mac", 2, "mystcoding@gmail.com", testGithub);
    expect(mac.github).toBe(testGithub);
});

test("getGithub will return github", () => {
    const testGithub = "MacMitsch";
    const mac = new Engineer("Mac", 2, "mystcoding@gmail.com", testGithub);
    expect(mac.getGithub()).toBe(testGithub);
});


test("Test role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Mac", 2, "Mystcoding@gmail.com", "MacMitsch");
    expect(employeeInstance.getRole()).toBe(returnValue);
});