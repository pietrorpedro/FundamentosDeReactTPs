export default function App() {
    const produtos = [
        { nome: "Laptop", preco: 1000 },
        { nome: "Tablet", preco: 400 },
        { nome: "Smartphone", preco: 1500 },
    ];

    function filtrarAcimaPreco(produtos, preco) {
        return produtos.filter((produto) => produto.preco > preco);
    }

    console.log(filtrarAcimaPreco(produtos, 999));

    return <div>Filtrar Produtos Acima de um Preço</div>;
}
