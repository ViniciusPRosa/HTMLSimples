var name
var surname
var age
var n1 
var n2 
var n3 
var media 

function aprovado(){
    if (media > 6){
        return "Aprovado"
    }
    return "Reprovado"
}

function alistar(){
    if (age >= 18){
        return "Já se alistou no exército"
    }
    return "não se alistou no exército"
}

function result(){
    name = document.getElementById("Name").value
    surname = document.getElementById("Surname").value
    age = document.getElementById("Age").value
    n1 = Number(document.getElementById("N1").value)
    n2 = Number(document.getElementById("N2").value)
    n3 = Number(document.getElementById("N3").value)
    media = ((n1+n2+n3)/3)
    document.getElementById("result1").innerHTML = `<p id="result1">${"Bem vindo "+ name +" "+ surname + "\n"}</p>`
    document.getElementById("result2").innerHTML = `<p id="result2">${"sua média foi de "+media}</p>`
    document.getElementById("result3").innerHTML = `<p id="result3">${"Você foi "+ aprovado() + "\n"}</p>`
    document.getElementById("result4").innerHTML = `<p id="result">${alistar()}</p>`
    
}