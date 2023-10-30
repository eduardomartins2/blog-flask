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
window.onscroll = function() {
  mostrarOcultarBotao();
};

function mostrarOcultarBotao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTopo").style.display = "block";
  } else {
    document.getElementById("btnTopo").style.display = "none";
  }
}
function voltarAoTopo() {
  document.documentElement.scrollTop = 0;
}
function compartilharFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location));
}

function compartilharTwitter() {
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent("Confira este site: " + window.location));
}

function compartilharLinkedIn() {
    window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location));
}
function compartilharWhatsApp() {
    var textoCompartilhado = "Confira este site: " + window.location;
    var urlWhatsApp = "https://api.whatsapp.com/send?text=" + encodeURIComponent(textoCompartilhado);
    window.open(urlWhatsApp);
}