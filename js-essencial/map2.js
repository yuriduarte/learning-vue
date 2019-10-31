const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta ", "preco": 7.50 }',
]

// Retornar um array apenas com os preços

const paraObj = json => JSON.parse(json)
const getPreco = produto => produto.preco

const precos = carrinho.map(paraObj).map(getPreco)

console.log(precos)