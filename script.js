/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem: (y / x) * 100

Uso da função:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(x,y) {
    let resultado = (x*y)/100;
    return resultado;
}


var username = prompt("Olá, seja bem vinda a 𝗖𝗮𝗹𝗰𝘂𝗹𝗮𝗱𝗼𝗿𝗮 𝗱𝗲 𝗣𝗼𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲𝗻𝘀 𝗱𝗼 𝗕𝗿𝘂𝗻𝗼. Para iniciarmos, me fale o seu nome.")
var x = prompt(`Certo, ${username}, qual o valor 𝘁𝗼𝘁𝗮𝗹 que você tem?`);
var y = prompt(`Agora ${username}, qual a 𝗽𝗼𝗿𝗰𝗲𝗻𝘁𝗮𝗴𝗲𝗺 que você quer saber?`);
var resultado = calcPct(x,y);
window.alert(`${y}% de ${x} é ${resultado}. ✔️`);
