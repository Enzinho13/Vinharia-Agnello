const btnAbrirLogin = document.getElementById('btnAbrirLogin');
const caixaLogin = document.getElementById('caixaLogin');
const btnEntrarAdmin = document.getElementById('btnEntrarAdmin');
const inputSenha = document.getElementById('inputSenha');

btnAbrirLogin.addEventListener('click', () => {caixaLogin.classList.toggle('oculta');
});

btnEntrarAdmin.addEventListener('click', () => { const senhaDigitada = inputSenha.value;})

if (senhaDigitada === "100807"){
    caixaLogin.classList.add('oculta');
    inputSenha.value="";
}
