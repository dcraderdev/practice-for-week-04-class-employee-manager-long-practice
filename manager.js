
const Employee = require('./employee.js')


class Manager extends Employee {
  constructor(name, salary, title, manager = null, employees = []) {
    super(name, salary, title);
    this.employees = employees;
    this.manager = manager;
  }


  addEmployee(employee) {
    this.employees.push(employee);
  }


}


const splinter = new Manager('Splinter', 100000, 'Sensei');
// const employees = splinter.employees

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);

splinter.addEmployee(leo)
splinter.addEmployee(raph)
splinter.addEmployee(mikey);
splinter.addEmployee(donnie);

console.log(splinter);



console.log('hello');

module.exports = Manager;