document.addEventListener("DOMContentLoaded", function() {
    const botaoRetornar = document.getElementById("botaoRetornar");

        botaoRetornar.addEventListener("click", function() {
            window.location.href = "cafeteria.html";
        });
    });

document.addEventListener("DOMContentLoaded", function() {
        const botaoCapuccino = document.getElementById("botaoCapuccino");

        botaoCapuccino.addEventListener("click", function() {
            window.location.href = "Capuccino.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const botaoEspresso = document.getElementById("botaoEspresso");

        botaoEspresso.addEventListener("click", function() {
            window.location.href = "Espresso.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const botaoMacchiato = document.getElementById("botaoMacchiato");

        botaoMacchiato.addEventListener("click", function() {
            window.location.href = "Macchiato.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const botaoMocha = document.getElementById("botaoMocha");

        botaoMocha.addEventListener("click", function() {
            window.location.href = "Mocha.html";
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        const botaoCadatro = document.getElementById("botaoCadastro");
    
            botaoCadastro.addEventListener("click", function() {
                window.location.href = "cadastro.html";
            });
        });

    const btnenvio = document.getElementById("btnenvio")
    btnenvio.addEventListener("click", function(event) {
        event.preventDefault()
        const formNome = nome.value;
        const formEmail = email.value;
        const formSenha = senha.value;
        const formTotal = `Nome: ${formNome}\n Email: ${formEmail} \n Senha: ${formSenha}`
        alert(formTotal)
        
    });