document.addEventListener("DOMContentLoaded", function () {
    
    //Verificação de Idade (Executa apenas uma vez)
    const jaConfirmouIdade = localStorage.getItem("maiorDeIdade");

    if (!jaConfirmouIdade) {
        const maiorDeIdade = confirm("Aviso: O consumo de bebidas alcoólicas é proibido para menores de 18 anos.\n\nVocê é maior de idade?");

        if (maiorDeIdade) {
            localStorage.setItem("maiorDeIdade", "true");
        } else {
            alert("Sua entrada não é permitida. Redirecionando...");
            window.location.href = "https://www.google.com";
        }
    }

    // Confirmação de Compra de Vinho 
    const botoesCompra = document.querySelectorAll(".tipos-vinhos .btn");

    botoesCompra.forEach(function (botao) {
        botao.addEventListener("click", function (event) {
            event.preventDefault();
            const confirmaCompra = confirm("Deseja realmente confirmar a compra deste vinho?");
            if (confirmaCompra) {
                alert("Compra confirmada com sucesso! Obrigado por escolher a Vinharia Agnello.");
            } else {
                alert("Compra cancelada.");
            }
        });
    });

});

