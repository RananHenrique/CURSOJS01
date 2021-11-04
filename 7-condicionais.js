console.log('TRABALALHANDO COM Condicionais');
const listaDeDestinos= new Array (
    "Salvador",
    'São Paulo',
    'Rio De Janeiro',
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassaguemComprada = true;

console.log("destinos possiveis");
console.log(listaDeDestinos);

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viaguem!!!!");
    listaDeDestinos.splice(1,1);
} else {
        console.log("Não e maior de idade e não posso vender");
    }

console.log("Embarque: \n \n");
if(idadeComprador >=18 && temPassaguemComprada){
    console.log('Boa Viaguem');
}else {
    console.log("Você não pode embarcar")
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
