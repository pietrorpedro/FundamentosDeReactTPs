export default function App() {
    
    const produtos = [ 
        { nome: "Laptop", categoria: "Eletrônicos" }, 
        { nome: "Camisa", categoria: "Roupas" }, 
        { nome: "Smartphone", categoria: "Eletrônicos" } 
    ];

    function filtrarPorCategoria(produtos, categoria) {
        return produtos.filter(produto => produto.categoria === categoria);
    }
    
    console.log(filtrarPorCategoria(produtos, "Eletrônicos"));

    return (
        <div>Filtrar Produtos por Categoria</div>
    )
}