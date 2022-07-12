import prompt from "prompt-sync";

let prompt = prompt()

function Percorre() {
    let resposta = prompt('Propiedade css:')
    let arr = []
    while (resposta != 'saida') {
        arr.push(resposta)
        resposta = prompt('Propriedade css:')
    }
console.log(arr.sort());
}
Percorre()