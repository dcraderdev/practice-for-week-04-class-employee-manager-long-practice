
// const Manager = require('./manager.js')


class Employee {
  constructor(name, salary, title, manager = null){
  this.name = name;
  this.salary = salary
  this.title = title;
  this.manager = manager;
}


addManager(manager) {
  this.manger.push(manager);
}

}


let Donovan = new Employee ( 'Donovan', 1000000, 'boss')


module.exports = Employee;

