//FUNÇÃO PARA VOLTAR A PAGINA DE LOGIN----------------------------------------
function voltar() {
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


    if(formapagamento == "pix"){
        if(nome !== "" && cep !== "" && endereco !== "" && numero !== ""){
                alert('O RECEBIMENTO DO PIX SERÁ VERIFICADO ANTES DO ENVIO, CASO NÃO SEJA ENCONTRADO NO SISTEMA, ENTRAREMOS EM CONTATO COM O CLIENTE')
                alert('PEDIDO CONFIRMADO!!');
                localStorage.removeItem('carrinhoDeCompras');

            } else {
                alert('PREENCHA TODOS OS CAMPOS PARA O PAGAMENTO COM PIX');

            }
    }
    
    else if(formapagamento == "cartao"){
       
        let numerocartao = document.getElementById('numerocartao').value;
        let cvc = document.getElementById('cvc').value;
        let datavalidade = document.getElementById('datavalidade').value;

        
        if(nome !== "" && cep !== "" && endereco !== "" && numero !== "" && numerocartao !== "" && cvc !== "" && datavalidade !== ""){
            alert('PEDIDO CONFIRMADO!!');
            localStorage.removeItem('carrinhoDeCompras'); 

        } else {
            alert('PREENCHA TODOS OS CAMPOS PARA O PAGAMENTO COM CARTÃO');

        }
    }
}
//----------------------------------------------------------------------------

//FUNÇÃO APARECER INFORMAÇÕES DE PAGAMENTO------------------------------------
document.getElementById("formapagamento").addEventListener("change", function () {
    var cartaoinfo = document.getElementById("cartaoinfo");
    var pixinfo = document.getElementById("pixinfo");

    if (this.value === "cartao") {
        cartaoinfo.style.display = "block";
        pixinfo.style.display = "none";
    } else if (this.value === "pix") {
        cartaoinfo.style.display = "none";
        pixinfo.style.display = "block";
    } else {
        cartaoinfo.style.display = "none";
        pixinfo.style.display = "none";
    }
});
//-----------------------------------------------------------------------------

//FUNÇÕES PARA CHAMAR O LOCAL STORAGE E IMPRIMIR O CARRINHO-------------------//
window.onload = function () {
    consultarBanco();
}

function consultarBanco() {
    const stringJson = localStorage.getItem('carrinhoDeCompras');
    const obj = JSON.parse(stringJson);
    imprimir(obj); // Chamar a função imprimir após buscar os dados
}

function calcularTotal(vetorDados) {
    let total = 0;
    for (let i = 0; i < vetorDados.length; i++) {
        total += vetorDados[i].valor;
    }
    return total;
}

function imprimir(vetorDados) {
    let tableBody = document.getElementById('item-list');
    tableBody.innerHTML = ''; // Limpar conteúdo da tabela
    for (let i = 0; i < vetorDados.length; i++) {
        let obj = vetorDados[i];

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img class="imagemcarrinho" src="${obj.imagem}" alt="imagem"></td>
            <td>${obj.item}</td>
            <td>R$ ${obj.valor.toFixed(2)}</td>
        `;
        tableBody.appendChild(tr);
    }

    let valorTotal = calcularTotal(vetorDados).toFixed(2);
    document.getElementById('valor-total').textContent = `Valor total: R$ ${valorTotal}`;

}
//----------------------------------------------------------------------------//