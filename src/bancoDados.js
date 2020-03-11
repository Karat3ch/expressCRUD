const sequence = {
    _id : 1,
    get id() {return this._id++}
}

const produtos = {}

function salvarProduto(produto){
        if(!produto.id) produto.id = sequence.id
        //  salvando UM produto no OBJETO de PRODUTOS
        produtos[produto.id] = produto
        return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProdutos(id){
    const produto = produtos[id]
    // delete do OJBETO de PRODUTOS, o produto com ID passado
    delete produtos[id]
    return produto
}

module.exports = {
    salvarProduto,
    getProdutos,
    getProduto,
    excluirProdutos,
}