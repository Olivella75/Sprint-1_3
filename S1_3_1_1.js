// Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

function promise1(param) {
    return new Promise(function(resolve, reject) {
        if(param) {
            resolve ("Tot ok!");
        } else {
            reject ("Error");
        }
    });
}
promise1(true)
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
promise1(false)
    .then(function(data) {console.log(data);})
    .catch(function(error) {console.log(error);});
