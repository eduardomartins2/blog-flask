window.onscroll = function() {
 tornarBarraNavegacaoFixa();
};

var barraNavegacao = document.querySelector(".barra-navegacao");

var posicaoInicial = barraNavegacao.offsetTop;

function tornarBarraNavegacaoFixa() {
 if (window.pageYOffset >= posicaoInicial) {
   barraNavegacao.style.position = "fixed";
   barraNavegacao.style.top = "0";
 } else {
   barraNavegacao.style.position = "relative";
 }
}
