function logar(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if(usuario == "admin" && senha == "admin"){
        window.location.href = "admin/catalogoadmin.html";
    }else if(usuario == "admin" && senha != "admin"){
        alert('Senha Incorreta');
    }else if(usuario == "" || senha == ""){
        alert('Preencha os campos');
    }else{
        window.location.href = "usuario/catalogousuario.html";
    }
}