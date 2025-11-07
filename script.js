const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora < 12) {
  saudacao.textContent = "☀️ Bom dia! Seja bem-vindo(a) ao Mercado Fácil Acessível!";
} else if (hora < 18) {
  saudacao.textContent = "🌤️ Boa tarde! Seja bem-vindo(a) ao Mercado Fácil Acessível!";
} else {
  saudacao.textContent = "🌙 Boa noite! Seja bem-vindo(a) ao Mercado Fácil Acessível!";
}