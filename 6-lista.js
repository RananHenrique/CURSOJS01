console.log('TRABALALHANDO COM LISTA');

// const salvador = 'Salvador';
// const saoPaulo = 'São Paulo';
// const rioDeJaneiro = 'Rio De Janeiro';

const listaDeDestinos= new Array (
    "Salvador",
    'São Paulo',
    'Rio De Janeiro',
);

listaDeDestinos.push('Curitiba')

console.log("destinos possiveis");

console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1]);