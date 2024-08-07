export default function App() {
    
    const produtos = [
        {nome: "Calça", disponivel: true},
        {nome: "Camiseta", disponivel: false},
        {nome: "Jaqueta", disponivel: true},
    ];

    function filtrarDisponiveis(produtos) {
        return produtos.filter(produto => produto.disponivel);
    }

    console.log(filtrarDisponiveis(produtos));
    
    return (
        <div>Filtrar Produtos Disponíveis</div>
    )
}