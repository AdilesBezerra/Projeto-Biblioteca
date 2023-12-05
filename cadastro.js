
let usuarios = []
let cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/; //Validar CPF
let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //Validar email
let dataValido =  /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/ //validação da data


if (localStorage.getItem('cadastrados')) {
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))
}

function cadastrar() {
    let guarda_nome = document.getElementById('nome').value;
    let guarda_senha = document.getElementById('senha').value;
    let guarda_cpf = document.getElementById('cpf').value;
    let guarda_email = document.getElementById('email').value;
    let data = new Date();
    let data_nascimento = document.getElementById('data').value;
    let usuario = { 
        nome: guarda_nome.trim().toLowerCase() ,
        senha: guarda_senha,
        dataCriacao: `${data.getUTCDate()}/${data.getMonth()+1}/${data.getFullYear()}`,
        cpf : guarda_cpf.split('.').join('').split('-').join(''),
        email : guarda_email,
        nascimento : data_nascimento,
    }

    if (guarda_nome.length > 2 &&
        guarda_senha.length >= 6 &&
        guarda_senha.length <= 10 &&
        guarda_nome.trim().length != 0 &&
        guarda_senha.trim().length != 0 &&
        cpfValido.test(guarda_cpf) == true &&
        emailValido.test(guarda_email) == true &&
        dataValido.test(data_nascimento)
    ) {
        if (procura_usuarioEMAIL(usuario.email)==-1 && procura_usuarioCPF(usuario.cpf)==-1) {
            usuarios.push(usuario)
            localStorage.setItem('cadastrados', JSON.stringify(usuarios))
            alert('Usuário Cadastrado!') // TROCAR ALERT
            location.assign('login.html')
        }else{
            alert("Usuário já existe!") // TROCAR ALERT
        }
    }
    if (guarda_nome.length <= 2 ||
        guarda_nome.trim().length == 0) {
        document.getElementById('alerta_nome').innerHTML = `Mínimo de três caracteres`        
        timmeOut('alerta_nome')
    }
    if (guarda_senha.length < 6 ||
        guarda_senha.trim().length == 0) {
        document.getElementById('alerta_senha').innerHTML = `Mínimo de Seis caracteres`
        timmeOut('alerta_senha')
    } else if(guarda_senha.length > 10 ||
        guarda_senha.trim().length == 0){
        document.getElementById('alerta_senha').innerHTML = `Máximo de dez caracteres`
        timmeOut('alerta_senha')
    }
    if (cpfValido.test(guarda_cpf) == false){
        document.getElementById('alerta_cpf').innerHTML = `CPF Inválido`
        timmeOut('alerta_cpf')

    }
    if (emailValido.test(guarda_email) == false){
        document.getElementById('alerta_email').innerHTML = `Email Inválido`
        timmeOut('alerta_email')
    }
    if (dataValido.test(data_nascimento) == false){
        document.getElementById('alerta_nascimento').innerHTML = `Data Inválida`
        timmeOut('alerta_nascimento')
    }
}

function timmeOut(tempo){
    setTimeout(() => {
        document.getElementById(tempo).innerHTML = ``
    }, 3000)
}

let btn_nome = document.getElementById('nome')
let btn_senha = document.getElementById('senha')
let btn_cpf = document.getElementById('cpf')
let btn_email = document.getElementById('email')

btn_nome.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_senha.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

btn_cpf.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})
btn_email.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        cadastrar();
    }
})

function procura_usuarioEMAIL(guarda_email) {
    let index = usuarios.findIndex((element) => {
        return element.email == guarda_email
    })
    return index
}
function procura_usuarioCPF(guarda_cpf) {
    let index = usuarios.findIndex((element) => {
        return element.cpf == guarda_cpf
    })
    return index
}

 // MAASCARA DO CPF
function mask(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmask()",1)
    }
    
function execmask(){
    v_obj.value=v_fun(v_obj.value)
    }

function maskcpf(vCPF){ 
    vCPF=vCPF.replace(/\D/g,"");
    vCPF=vCPF.replace(/(\d{3})(\d)/,"$1.$2");
    vCPF=vCPF.replace(/(\d{3})(\d)/,"$1.$2");
    vCPF=vCPF.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    return vCPF;
}
function maskExecute(id){
	return document.getElementById(id);
}

window.onload = function(){

 maskExecute('cpf').setAttribute('maxlength', 14);
 maskExecute('cpf').onkeypress = function(){
		mask( this, maskcpf );
}
}
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
