
const Intern = require("../lib/intern");

test("Set School", function () {
    const testSchool = "School Name";
    const mac = new Intern("Jason",2, "Jason@Test.com", testSchool);
    expect(mac.school).toBe(testSchool);
});

// GetSchool()
test("Get School via Command", function () {
    const testSchool = "School Name";
    const mac = new Intern("jason",2,"jason@test.com", testSchool);
    expect(mac.getSchool()).toBe(testSchool);
});
// Get Intern role
test("Test Role", function () {
    const returnValue = "Intern";
    const mac = new Intern("jason",2, "jason@test.com", "School Name");
    expect(mac.getRole()).toBe(returnValue);
});

