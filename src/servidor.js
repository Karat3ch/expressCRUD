const porta = 3003

const express = require('express')

const BancoDados = require('./bancoDados')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/produtos', (req,res,next) => {
    console.log("midlleware 1...")
    next()
})

// recebendo a resposta da requisição, retornando todos os produtos do "BD"
app.get('/produtos', (req,res,next) => {
    res.send(BancoDados.getProdutos())
})

// ... retornando um produto especifico de acordo com o id passado
app.get('/produtos/:id', (req,res,next) => {
    res.send(BancoDados.getProduto(req.params.id))
})


// usando o .post() add itens
app.post('/produtos', (req,res,next) => {
    const produto = BancoDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
})

// .()put alterar itens
app.put('/produtos/:id', (req,res,next) => {
    const produto = BancoDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
})

// .delete() deletar itens
app.delete('/produtos/:id', (req,res,next) => {
    const produto = BancoDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, ()=> {
    console.log(`Servidor executando na porta ${porta}`)
})