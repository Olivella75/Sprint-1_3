// Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

let employees = [
    {id: 1, name: "Linux Torvalds"}, 
    {id: 2, name: "Bill Gates"}, 
    {id: 3, name: "Jeff Bezos"}
];

let salaries = [
    {id: 1, salary: 4000}, 
    {id: 2, salary: 1000}, 
    {id: 3, salary: 2000}
];

const getEmployee = (param) => {
    if (typeof param !== "number") throw new Error ("Has d'introduir un número");
    if (param < 0) throw new Error ("El número ha de ser positiu");
    return new Promise (function(resolve, reject) {
        const employeeFound = employees.find((employees) => employees.id === param);
        employeeFound ? resolve (employeeFound) : reject (`No existeix el id ${param}.`);
    });
}
const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        const salary = `Nom: ${employees[employee.id - 1].name}, salari: ${salaries[employee.id - 1].salary}.`;
        resolve (salary);
    });
}
const x = parseInt(Math.random() * 4);
console.log(x);
async function tryCatch() {
    try {
        const employee1 = await getEmployee(x);
        const employee2 = await getSalary(employee1);
        console.log(employee2);
    }
    catch(err) {
        console.log(err);
    }
}
tryCatch();