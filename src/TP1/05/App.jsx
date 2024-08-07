export default function App() {

    const produtos = [ 
        { nome: "Laptop", preco: 1000 }, 
        { nome: "Tablet", preco: 400 }, 
        { nome: "Smartphone", preco: 1500 } 
    ];

    function encontrarProdutoPorNome(produtos, nome) {
        return produtos.find(produto => produto.nome === nome);
    }

    console.log(encontrarProdutoPorNome(produtos, "Smartphone"));

    return (
        <div>Encontrar um Produto por Nome</div>
    )
}