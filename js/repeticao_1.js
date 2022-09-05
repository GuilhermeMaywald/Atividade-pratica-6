{
let anosDePilotagem = Number(prompt('Quantos anos de pilotagem você tem com a MACH1?'));
let contadorAnos = 0;
let quantReciclagem = 0;

while (contadorAnos < anosDePilotagem) {
    if (contadorAnos % 2 == 0) {
        quantReciclagem++;
    }
    contadorAnos++;
}
alert(`Você participou de ${quantReciclagem} reciclagens!`);
}
