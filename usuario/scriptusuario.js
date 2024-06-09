//FUNÇÃO PARA VOLTAR A PAGINA DE LOGIN----------------------------------------//
function sair(){
    window.location.href = "../indexform.html";
}
//----------------------------------------------------------------------------//

//FUNÇÕES PARA CHAMAR O LOCAL STORAGE E IMPRIMIR O CATALOGO-------------------//
window.onload = function (){
    consultarBanco();
}

function consultarBanco(){
    const stringJson = localStorage.getItem('listaDeCompras');
    const obj = JSON.parse(stringJson);

//FAZ PARTE DO SCRIPT DO CARRINHO DE COMPRAS
    let carrinhoNoLocalStorage = JSON.parse(localStorage.getItem('carrinhoDeCompras'));

    if (carrinhoNoLocalStorage && carrinhoNoLocalStorage.length > 0){
        carrinhoDeCompras = carrinhoNoLocalStorage;
        atualizarCarrinho(); 
    }

    imprimir(obj);
}

function imprimir(vetorDados){
    let tableBody = document.getElementById('item-list');
    document.getElementsByClassName('table-responsive').innerHTML = '';
    for (let i = 0; i < vetorDados.length; i++) {
        let obj = vetorDados[i];

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <img id="imgcatalogo" src="${obj.imagem}" alt="imagem">
            <td>${obj.item}</td>
            <td>${obj.descricao}</td>
            <td>R$ ${obj.valor.toFixed(2)}</td>
            <td>
                <button id="carrinho" onclick="adicionarAoCarrinho(${i})"><img id="carrinhoimg" src="carrinho.png" alt="carrinho de compras"></button>
            </td>
        `;
        tableBody.appendChild(tr);
    }
}
//----------------------------------------------------------------------------//

//CARRINHO DE COMPRAS----------------------------- ---------------------------//

let carrinhoDeCompras = JSON.parse(localStorage.getItem('carrinhoDeCompras')) || [];

function salvarLista(){
    localStorage.setItem('carrinhoDeCompras', JSON.stringify(carrinhoDeCompras));
}

function adicionarAoCarrinho(itemIndex){
    
    let listaDeCompras = JSON.parse(localStorage.getItem('listaDeCompras'));

    
    if (!listaDeCompras){
        console.error('Lista de compras não encontrada no localStorage.');
        return;
    }

    
    let itemSelecionado = listaDeCompras[itemIndex];

    
    carrinhoDeCompras.push(itemSelecionado);

    
    salvarLista();

    
    atualizarCarrinho();
}

function atualizarCarrinho(){
    let carrinhoContainer = document.getElementById('carrinho-body');
    carrinhoContainer.innerHTML = '';

    carrinhoDeCompras.forEach((item, index) => {

        let carrinhoItem = document.createElement('tr');
        carrinhoItem.innerHTML = `
            <img class="imagemcarrinho" src="${item.imagem}" alt="imagem">
            <td>${item.item}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>
            <button class="removercarrinho" onclick="removerDoCarrinho(${index})">REMOVER</button>
            </td>
        `;
        carrinhoContainer.appendChild(carrinhoItem);

    });

    let valorTotal = calcularValorTotal().toFixed(2);
    document.getElementById('valor-total').textContent = `Valor total: R$ ${valorTotal}`;
}

function finalizarCompra(){

    window.location.href = "../fechamentodepedido/indexfechamento.html";
}

function removerDoCarrinho(index){
    carrinhoDeCompras.splice(index, 1);
    salvarLista();
    atualizarCarrinho();
}


function calcularValorTotal(){
    let total = 0;
    carrinhoDeCompras.forEach(item => {
        total += item.valor;
    });
    return total;
}

//----------------------------------------------------------------------------//