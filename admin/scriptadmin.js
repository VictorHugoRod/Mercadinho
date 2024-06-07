//FUNÇÃO PARA VOLTAR A PAGINA DE LOGIN----------------------------------------//
function sair() {
    window.location.href = "../indexform.html";
}
//----------------------------------------------------------------------------//

// scripts.js
let listaDeCompras = JSON.parse(localStorage.getItem('listaDeCompras')) || [];

function salvarLista() {
    localStorage.setItem('listaDeCompras', JSON.stringify(listaDeCompras));
}

function validaForm() {
    let item = document.getElementById('nomeproduto').value;
    let descricao = document.getElementById('descricao').value;
    let valor = parseFloat(document.getElementById('preco').value);
    let imagem = document.getElementById('url').value;

    if (!item || isNaN(valor) || !descricao || !valor || !imagem) {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    } else {
        return true;
    }
}

function create() {

    if (validaForm()) {
        let item = document.getElementById('nomeproduto').value;
        let descricao = document.getElementById('descricao').value;
        let valor = parseFloat(document.getElementById('preco').value);
        let imagem = document.getElementById('url').value;

        let indiceEdicao = -1;
        let objExistente = listaDeCompras.find((element, index) => {
            if (element.item === item) {
                indiceEdicao = index;
                return true;
            }
            return false;
        });

        if (indiceEdicao >= 0) {
            listaDeCompras[indiceEdicao] = { item, descricao, valor, imagem };
        } else {
            listaDeCompras.push({ item, descricao, valor, imagem });
        }

        salvarLista();
        atualizarTabela();
    }
}

function atualizarTabela() {
    let tableBody = document.getElementById('item-list');
    tableBody.innerHTML = '';

    listaDeCompras.forEach((item, indice) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <img id="imgcatalogo" src="${item.imagem}" alt="imagem">
            <td>${item.item}</td>
            <td>${item.descricao}</td>
            <td>R$ ${item.valor.toFixed(2)}</td>
            <td>
                <button id="editar" onclick="editarItem(${indice})" class="btn btn-primary me-2">Editar</button>
                <button id="excluir" onclick="excluirItem(${indice})" class="btn btn-secondary">Excluir</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

}

function excluirItem(indice) {
    if (confirm(`Tem certeza que deseja excluir o item ${listaDeCompras[indice].item}?`)) {
        listaDeCompras.splice(indice, 1);
        salvarLista();
        atualizarTabela();
    }
}

function editarItem(indice) {
    let obj = listaDeCompras[indice];
    document.getElementById('nomeproduto').value = obj.item;
    document.getElementById('descricao').value = obj.descricao;
    document.getElementById('preco').value = obj.valor;
    document.getElementById('url').value = obj.imagem;
}

// Inicialização da tabela
atualizarTabela();
console.log(listaDeCompras);