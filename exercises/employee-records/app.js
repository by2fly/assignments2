const employees = [];

function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () {
        return this.name + " " + this.jobTitle + " " + this.salary + " " + this.status   
    };
}

var bob = new Employee("Bob", "V School Instructor", "$3000 per hour", "Part time");
var bill = new Employee("Bill", "V School Instructor", "$300 per hour", "Part time");
var rob = new Employee("Rob", "V School Instructor", "$30 per hour", "Part time");
var rob = new Employee("Rob", "V School Instructor", "$30 per hour", "Contract");

employees.push(bob, bill, rob);


printEmployeeForm(Employee);

console.log(employees);