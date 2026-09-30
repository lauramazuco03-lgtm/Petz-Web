
document.addEventListener("DOMContentLoaded", function() {


    // Caixinha que guarda a janela flutuante (modal) de login
    const modalLogin = document.getElementById("modal-login")
    
    // Caixinha que guarda a janela flutuante (modal) de cadastrar um novo pet
    const modalCadastroPet = document.getElementById("modal-cadastro-pet")
    
    // Caixinha que guarda o link escrito "Entrar" lá no topo da página
    const btnAbrirLogin = document.querySelector(".links-navegacao li a")
    
    // Caixinha que guarda o botão de fechar (o 'X') da janela de login
    const btnFecharLogin = document.querySelector(".fechar-modal")
    
    // Caixinha que guarda o formulário de digitar o e-mail e a senha
    const formLogin = document.getElementById("form-login")

    // Caixinha que guarda o link escrito "Cadastrar" lá no topo da página
    const btnAbrirCadastro = document.querySelector("li.registrar a")
    
    // Caixinha que guarda o botão de fechar (o 'X') da janela de cadastro de pet
    const btnFecharCadastro = document.querySelector(".fechar-modal-pet")
    
    // Caixinha que guarda o formulário de preencher os dados do pet
    const formCadastroPet = document.getElementById("form-cadastro-pet")

    // Caixinha que guarda o botão grandão da página inicial ("Encontrar pet")
    const botaoRedirecionar = document.querySelector('.anuncio-petz .botao-principal')
    
    // Caixinha que guarda a barra de pesquisa onde o usuário digita para procurar pets
    const inputBusca = document.getElementById('busca-pet')
    
    // Caixinha que guarda TODOS os botões de patinha (favorito) dos cartões de pets
    const botoesPatinha = document.querySelectorAll('.btn-patinha')
    
    // Caixinha que guarda TODOS os cartões de pets que aparecem na tela
    const cartoesPets = document.querySelectorAll('.cartao-pet')
    
    // Caixinha que guarda o botão de sair da conta (o ícone de porta)
    const btnSair = document.getElementById("btn-sair")

    // Caixinha que guarda o menu que deve aparecer quando a pessoa NÃO está logada
    const menuDeslogado = document.getElementById("menu-deslogado")
    
    // Caixinha que guarda o menu que deve aparecer quando a pessoa JÁ está logada
    const menuLogado = document.getElementById("menu-logado")
    let usuarioLogado = sessionStorage.getItem("logado") === "true"
     if(usuarioLogado && menuDeslogado && menuLogado) {

        menuDeslogado.style.display = "nome"

        menuLogado.style.display = "flex"
    }
     if(btnAbrirLogin) {
        btnAbrirLogin.addEventListener("click", function(event){
            event.preventDefault()
            modalLogin.style.display = "flex"
         })
    }

     if(btnFecharLogin) {
        btnFecharLogin.addEventListener("click", function() {
            modalLogin.style.display = "none"
         })

    }
     if(btnAbrirCadastro) { 
       btnAbrirCadastro.addEventListener("click", function(event) {
        event.preventDefault()
        modalCadastroPet.style.display = "flex"
         })
    }
     if(btnFecharCadastro) {
        btnFecharCadastro.addEventListener("click", function() {
            modalCadastroPet.style.display = "none"
         })
    }
window.addEventListener("click", function(event) {
         if(event.target === modalLogin) {
         modalLogin.style.display = "none"
        }
         if(event.target === modalCadastroPet) {
         modalCadastroPet.style.display = "none"
        }
    })

    if(formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault()
            const email = document.getElementById("email").value 
            const senha = document.getElementById("senha").value 
            if( email === "lauramazuco03@gmail.com" && senha === "456") {
                sessionStorage.setItem("logado", "true")
                alert("Sucesso! Bem-vindo(a) de volta, Laura.")

                window.location.href = "encontrar-pets.html"
            }else {
                alert("E-mail ou senhas incorretos!")
            }
        })
    }
    
    if(btnSair) {
        btnSair.addEventListener("click", function(){

            sessionStorage.removeItem("logado")
            alert("Você saiu da sua conta com segurança. Até a próxima!")

            window.location.href = "index.html"
        })
    }

    if(botaoRedirecionar) {
        botaoRedirecionar.addEventListener("click", function() {
            window.location.href = "encontrar-pets.html"
        })
    }

    if(inputBusca) {
        inputBusca.addEventListener("input", function(event) {
            const texto = event.target.value.toLowerCase()
        cartoesPets.forEach(function(cartao) {
            const titulo = cartao.querySelector('h3').innerText.toLowerCase()
            const descricao = cartao.querySelector('p').innerText.toLowerCase()

    if(titulo.includes(texto) || descricao.includes(texto)) {
            cartao.style.display = 'block'
             } else {
                cartao.style.display = 'none'
             }
            })
        })
    }

    botoesPatinha.forEach(function(botao) {
        botao.addEventListener("click", function() {
            botao.classList.toggle('btn-patinha-inativo')
        })
    })

 cartoesPets.forEach(function(cartao) {
        cartao.addEventListener("click", function(event) {
            if (event.target.closest('.btn-patinha')) {
                return
            }
            if (usuarioLogado) {

const nomePet = cartao.querySelector('h3').innerText
const fotoPet = cartao.querySelector('img').getAttribute('src')
window.location.href = "detalhes-pet.html?nome=" + encodeURIComponent(nomePet)
    "&foto=" + encodeURIComponent(fotoPet)
            } else {
                alert("Você precisa fazer login para ver os detalhes do pet!")
                 modalLogin.style.display = "flex"
            }
        })
    })
})


