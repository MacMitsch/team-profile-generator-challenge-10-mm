
 const Engineer = require("../lib/engineer");

 test("Can create a github.", () => {
    const testGithub = "MacMitsch";
    const mac = new Engineer("Mac", 2, "mystcoding@gmail.com", testGithub);
    expect(mac.github).toBe(testGithub);
});

test("getGithub to return github", () => {
    const testGithub = "MacMitsch";
    const mac = new Engineer("Mac", 2, "mystcoding@gmail.com", testGithub);
    expect(mac.getGithub()).toBe(testGithub);
});


test("Test role", () => {
    const returnValue = "Engineer";
    const mac = new Engineer("Mac", 2, "Mystcoding@gmail.com", "MacMitsch");
    expect(mac.getRole()).toBe(returnValue);
});