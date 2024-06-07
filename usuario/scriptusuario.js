//FUNÇÃO PARA VOLTAR A PAGINA DE LOGIN----------------------------------------//
function sair() {
    window.location.href = "../indexform.html";
}
//----------------------------------------------------------------------------//

//FUNÇÕES PARA CHAMAR O LOCAL STORAGE E IMPRIMIR O CATALOGO-------------------//
window.onload = function () {
    consultarBanco();
}

function consultarBanco() {
    const stringJson = localStorage.getItem('listaDeCompras');
    const obj = JSON.parse(stringJson);
    //console.log(obj);
    imprimir(obj);
}

function imprimir(vetorDados) {
    let tableBody = document.getElementById('item-list');
    document.getElementsByClassName('table-responsive').innerHTML = '' ;
    for (let i = 0; i < vetorDados.length; i++) {
        let obj = vetorDados[i];

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <img id="imgcatalogo" src="${obj.imagem}" alt="imagem">
            <td>${obj.item}</td>
            <td>${obj.descricao}</td>
            <td>R$ ${obj.valor.toFixed(2)}</td>
            <td>
                <button id="carrinho" onclick=""><img id="carrinhoimg" src="carrinho.png" alt="carrinho de compras"></button>
            </td>
        `;
        tableBody.appendChild(tr);
    }
}
//----------------------------------------------------------------------