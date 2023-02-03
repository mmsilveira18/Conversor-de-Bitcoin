var cotacaoDoReal = 0.00000837;

var nome = prompt(
    "Olá Seja bem vindo ao Conversor Bitcoin, me conte seu nome?"
);

var valorEmReal = prompt(
    "Me conte o saldo de Reais que deseja converter em Bitcoins"
);

var valorEmBitcoin = valorEmReal * cotacaoDoReal;

valorEmReal = alert(
    `${nome} , seu saldo em Reais equivale à ${valorEmBitcoin} BTC `
);

