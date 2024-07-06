function enviar(){

    let nomeUsuario = document.getElementById('nome').value
    let emailUsuario = document.getElementById('email').value
    let idadeUsuario = document.getElementById('idade').value
    let genero = document.querySelector("input[name='genero']:checked").value
    
    alert('Seu nome é: ' + nomeUsuario + '\n' 
        + 'Seu email é: ' + emailUsuario + '\n' 
        + 'Sua idade é: ' + idadeUsuario + '\n'
        + 'Seu genero é: ' + genero)
    
    }