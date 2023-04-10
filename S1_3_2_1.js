// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

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
                resolve (employees[i]);
                i = employees.length;
            } else {
                if (i === employees.length - 1) {
                    reject (`No existeix el id ${param}.`);
                }
            }
        }
    });
}
let x = parseInt(Math.random() * 4); // 0 la promise dona error, el 1, 2 i 3 dona ok.
getEmployee(x)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));