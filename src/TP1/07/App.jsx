export default function App() {
    
    const produtos = [ 
        { nome: "Laptop", quantidadeEmEstoque: 5 }, 
        { nome: "Tablet", quantidadeEmEstoque: 0 }, 
        { nome: "Smartphone", quantidadeEmEstoque: 3 } 
    ];

    function verificarEstoque(produtos) {
        return produtos.filter(produto => produto.quantidadeEmEstoque > 0);
    }

    console.log(verificarEstoque(produtos));

    return (
        <div>Verificar Disponibilidade de Estoque</div>
    )
}