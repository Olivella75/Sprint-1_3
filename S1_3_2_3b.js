//Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
//de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

const employees = [
    {id: 1, name: "Linux Torvalds"}, 
    {id: 2, name: "Bill Gates"}, 
    {id: 3, name: "Jeff Bezos"}
];

const salaries = [
    {id: 1, salary: 4000}, 
    {id: 2, salary: 1000}, 
    {id: 3, salary: 2000}
];

const getEmployee = (param) => {
    if (typeof param !== "number") throw new Error ("Has d'introduir un número");
    if (param < 0) throw new Error ("El número no pot ser negatiu");
    return new Promise (function(resolve, reject) {
        const employeeFound = employees.find((emp) => emp.id === param);
        employeeFound ? resolve (employeeFound) : reject (`No existeix el id ${param}.`)
    });
}
const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        const salary = `Nom: ${employees[employee.id - 1].name}, salari: ${salaries[employee.id - 1].salary}.`;
        resolve (salary);
    });
}
const x = parseInt(Math.random() * 4); // 0 la promise dona error, el 1, 2 i 3 dona ok.
console.log(x);
getEmployee(x)
    .then(getSalary)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));