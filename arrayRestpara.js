function listEmployee() {
    var employee = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        employee[_i] = arguments[_i];
    }
    console.log(employee.length);
}
var employee = [1, 2, 3, 4, 5, 6];
listEmployee.apply(void 0, employee);
function multiplyByTwo() {
    var empolyee = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        empolyee[_i] = arguments[_i];
    }
    employee.forEach(function (n) { return document.write("<br>" + n * 2); });
}
multiplyByTwo(employee);
