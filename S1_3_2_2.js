// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

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

const getSalary = (param) => {
    return new Promise (function(resolve, reject) {
        for (i = 0; i < employees.length; i++) {
            if (employees[i].id === param.id) {
                resolve (salaries[i]);
                i = employees.length;
            } else {
                if (i === employees.length - 1) {
                    reject (`No existeix el client ${param.id}.`);
                }
            }
        }
    });
}
let x = parseInt(Math.random() * 4); // 0 la promise dona error, el 1, 2 i 3 dona ok.
getSalary({id: x, name: employees[x]})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));