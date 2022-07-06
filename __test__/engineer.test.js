
const Engineer = require("../Lib/engineer");

test("set github account", function () {
    const testValue = "GitHubUser";
    const eng = new Engineer('Steve',1,"myst@test.com", testValue, "Engineer");
    expect(eng.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", function () {
    const testValue = "Engineer";
    const eng = new Engineer("Steve",1,"myst@test.com","gitHubUser","Engineer");
    expect(eng.getRole()).toBe(testValue);
});

test("Can get GitHub username W/ command", function () {
    const testValue = "GitHubUser";
    const eng = new Engineer("Steve",1,"myst@test.com", testValue, "Engineer");
});