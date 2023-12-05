let usuarios = new Array()
if (localStorage.getItem('cadastrados')) 
    usuarios = JSON.parse(localStorage.getItem('cadastrados'))

const email=document.getElementById("email")  
const senha=document.getElementById("senha")
const cpf=document.getElementById("cpf") 
const nome=document.getElementById("nome")
const nascimento=document.getElementById("nascimento")
const dataCriacao=document.getElementById("dataCriacao")
let a= usuarios.length-1
email.innerHTML=usuarios[a]["email"]
senha.innerHTML=usuarios[a]["senha"]
cpf.innerHTML=usuarios[a]["cpf"]
nome.innerHTML=usuarios[a]["nome"]
nascimento.innerHTML=usuarios[a]["nascimento"]
dataCriacao.innerHTML=usuarios[a]["dataCriacao"]