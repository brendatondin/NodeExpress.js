import prompt from "prompt-sync";

let prompt = prompt()

function Teste() {
    let propiedade = prompt('Propiedade css:')
    let arr = []
    while (propiedade != 'saida') {
        arr.push(propiedade)
        propiedade = prompt('Propriedade css:')
    }
console.log(arr.sort());
}
Teste()