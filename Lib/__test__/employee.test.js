
const { default: test } = require("node:test");
const Employee = require("../employee");

test("Can represent and instance", function () {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
});

test("Set Id", function() {
    const name = "Tony";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("")
