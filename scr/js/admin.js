const btnAbrirLogin = document.getElementById('btn-abrir-login');
const caixaLogin = document.getElementById('caixa-login');
const btnEntrarAdmin = document.getElementById('btn-entrar-admin');
const inputSenha = document.getElementById('senha-admin');

btnAbrirLogin.addEventListener('click', () => {
    caixaLogin.classList.toggle('oculta');
});

btnEntrarAdmin.addEventListener('click', () => { 
    const senhaDigitada = inputSenha.value;

    if (senhaDigitada === "100807") {
        caixaLogin.classList.add('oculta');
        inputSenha.value = '';


        let nomeVinho = prompt("Qual é o nome do vinho a ser cadastrado?");
        let tipoVinho = prompt("qual é o tipo de vinho(Tinto, Seco, Suave, Espumante)?");
        let safraVinho = prompt("Qual é o ano da safra do vinho?");
        let quantidadeEstoque = prompt("Qual é a quantidade disponivel no estoque?");
    
        alert("Cadrastro realizado! Veja os detalhes no console."); 
    
        console.log("=== DADOS DO VINHO CADASTRADO ===");
        console.log("Nome do vinho: " + nomeVinho);
        console.log("Tipo do vinho: " + tipoVinho);
        console.log("Safra do vinho: " + safraVinho);
        console.log("Quantidade em estoque: " + quantidadeEstoque + " unidades ");
        console.log("========================================");

    } else {
        alert("Acesso negado!");
        inputSenha.value = '';
    }
});
