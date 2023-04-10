//Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises 
//de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

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
    return new Promise (function(resolve, reject) {
        for (i = 0; i < employees.length; i++) {
            if (employees[i].id === param) {
                const employee = employees[i]; 
                resolve (employee);
                i = employees.length;
            } else {
                if (i === employees.length - 1) {
                    reject (`No existeix el id ${param}.`);
                }
            }
        }
    });
}
const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        const salary = `Nom: ${employees[employee.id - 1].name}, salari: ${salaries[employee.id - 1].salary}.`;
        resolve (salary);
    });
}
let x = parseInt(Math.random() * 4); // 0 la promise dona error, el 1, 2 i 3 dona ok.
getEmployee(x)
    .then(getSalary)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));