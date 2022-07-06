
const Intern = require("../Lib/intern");

test("Set School", function (){
    const testValue = "UMN";
    const int = new Intern("Jason",1,"Jason@Test.com", testValue, "Intern");
    expect(int.school).toBe(testValue);
});
// Get Intern role
test("getRole() should return \"Intern\"", function () {
    const testValue = "Intern";
    const int = new Intern("jason",1,"jason@test.com", "UMN","Intern");
    expect(int.getRole()).toBe(testValue);
});
// GetSchool()
test("Get School via Command", function(){
    const testValue = "UMN";
    const int = new Intern("jason",1,"jason@test.com", testValue, "Intern");
    expect(int.getSchool()).toBe(testValue);
});