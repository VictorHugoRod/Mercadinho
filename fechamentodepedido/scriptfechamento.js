//FUNÇÃO PARA VOLTAR A PAGINA DE LOGIN----------------------------------------
function voltar(){
    window.location.href = "../usuario/catalogousuario.html";
}
//----------------------------------------------------------------------------

//FUNÇÃO PARA VERIFICAR PAGAMENTO---------------------------------------------
function verificarpagamento(){
    let formapagamento = document.getElementById('formapagamento').value;
    let nome = document.getElementById('nome').value;
    let cep = document.getElementById('cep').value;
    let endereco = document.getElementById('endereco').value;
    let numero = document.getElementById('numero').value;
    let numerocartao = document.getElementById('numerocartao').value;
    let cvc = document.getElementById('cvc').value;
    let datavalidade = document.getElementById('datavalidade').value;

    if(formapagamento == "pix"){
        if(nome !="" && cep !="" && endereco !="" && numero !=""){
            
            if (confirm("O PAGAMENTO POR PIX DEVE SER REALIZADO ANTES DE CONFIRMAR O PEDIDO!!\n\nO PAGAMENTO FOI REALIZADO?")){
               alert('PEDIDO CONFIRMADO!!');
            } else {
                alert('PREENCHA OS CAMPOS NOVAMENTE');
            }
        }
    }else if(formapagamento == "cartao"){

        if(nome !="" && cep !="" && endereco !="" && numero !="" && numerocartao !="" && cvc !="" && datavalidade !=""){
            alert('PEDIDO CONFIRMADO!!');
        }
    }
}
//----------------------------------------------------------------------------

//FUNÇÃO APARECER INFORMAÇÕES DE PAGAMENTO------------------------------------
document.getElementById("formapagamento").addEventListener("change", function(){
    var cartaoinfo = document.getElementById("cartaoinfo");
    var pixinfo = document.getElementById("pixinfo");
    
    if(this.value === "cartao"){
        cartaoinfo.style.display = "block";
        pixinfo.style.display = "none";
    }else if (this.value === "pix"){
        cartaoinfo.style.display = "none";
        pixinfo.style.display = "block";
    }else{
        cartaoinfo.style.display = "none";
        pixinfo.style.display = "none";
    }
});
//-----------------------------------------------------------------------------