

// Objetivo 1 -Quando clicarmos na seta de avançar 
// temos que mostrar  o proximo cartão da lista
// passo 1 - dar um jeito de pegar o elemento Html da seta
// avançar
const btnAvancar = console.log(document.getElementById(btn-avancar));
const cartaoAtual = 0;
const cartoes = document.querySelectorAll('.cartao');
// passo 2 - dar um jeito de indentificar o clique do usuário
// na seta avançar 
btnAvancar.addEventListener('click', function () {
    if(cartaoAtual === cartoes.length -1) return;

// passo 3 - fazer aparecer o proximo cartão da lista 
    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add('selecionado');

// passo 4 - buscar o cartão que esta selecionado e esconder 

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove(".selecionado");

})


// Objetivo 2 -Quando clicarmos na seta de voltar 
// temos que mostrar  o cartão anterior da lista
// passo 1 - dar um jeito de pegar o elemento Html da seta
// voltar
const btnVoltar = console.log(document.getElementById(btn-avancar));
// passo 2 - dar um jeito de indentificar o clique do usuário na seta voltar 
btnVoltar.addEventListener('click', function () {
    if(cartaoAtual === cartoes.length -1) return;
// passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add('selecionado');
// passo 4 - buscar o cartão que esta selecionado e esconder 
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove(".selecionado");

})