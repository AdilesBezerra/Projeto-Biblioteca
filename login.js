let usuarios = []
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
function login(){
    let guarda_email = document.getElementById('email').value
    let guarda_senha = document.getElementById('senha').value
    if(procura_usuario(guarda_email, guarda_senha) != -1){
        alert("Usuário validado! Bem-vindo!")// TROCAR OS ALERT
        location.assign('home.html')
    }else{
        alert("Usuário não validado!")// TROCAR ALERT
    }
}
function procura_usuario(guardda_email, guarda_senha) {
    let index = usuarios.findIndex((element) => {
        return element.email == guardda_email && element.senha == guarda_senha
    })
    return index
}

let event_email = document.getElementById('email')
let event_senha = document.getElementById('senha')

event_email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})
event_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        login();
    }
})

//Mostrar senha:

const legenda = document.getElementById ('apagar')

function mostrarOcultarSenha () {
    var senha = document.getElementById ('senha')
    if(senha.type == 'password'){
        senha.type="text"
        legenda.innerHTML = "Ocultar Senha" 
        
        
    }else {
        senha.type='password'
        legenda.innerHTML = "Exibir Senha" }
}
