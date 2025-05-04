
function revenderVeiculo() {
    // criando referências
    const inVeiculo = document.getElementById("inVeiculo");
    const inPreco = document.getElementById("inPreco");
    
    const outVeiculo = document.getElementById("outVeiculo");
    const outEntrada = document.getElementById("outEntrada");
    const outParcela = document.getElementById("outParcela");


    // obtendo dados do veículo
    const veiculo = inVeiculo.value;
    // obtendo dados do preço
    const preco = Number(inPreco.value); // transformar em number


    // calculo da entrada
    const entrada = preco * 0.5;
    // calculo da parcela
    const parcela = ((preco * 0.50) * 1.12) / 12; // 12% de juros ao ano para o parcelamento

    // altera o valor dos paragrafos de resposta
    outVeiculo.textContent = `Promoção: ${veiculo}`;
    outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
    outParcela.textContent = `+ 12x de R$: ${parcela.toFixed(2)}`;
    
}
// criar referência para o botao btVerPromocao
const btVerPromocao = document.getElementById("btVerPromocao");

// registrar um evento associado ao botao
btVerPromocao.addEventListener('click', revenderVeiculo);