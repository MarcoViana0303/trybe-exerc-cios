const custoProduto = 10;
const valorVenda = 15;

if (custoProduto < 0 || valorVenda < 0) {
    console.log('Erro, encerrando...');
}
else {
 console.log('O custo do produto com o imposto é:', custoProduto + (custoProduto * 0.20));
 console.log('O lucro que terá vendendo 1000 produtos pelo preço ' + valorVenda + ':');
 console.log((valorVenda - (custoProduto +(custoProduto * 0.20))) * 1000);
}