// ----------------------------
// Type predicate to check if employee is Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// ----------------------------
// Execute work based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// ----------------------------
// Testing
const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);

console.log(executeWork(emp1)); // Getting to work
console.log(executeWork(emp2)); // Getting to director tasks
