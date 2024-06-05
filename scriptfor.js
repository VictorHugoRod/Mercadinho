function logar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == 'admin'){
        window.location.href = "/mercadinho/admin/catalogoadmin.html";
    }else if(usuario == 'admin' && senha != 'admin'){
        alert('Senha Incorreta');
    }else{
        window.location.href = ""
    }
}