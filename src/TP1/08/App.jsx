export default function App() {

    const itens = [ 
        { nome: "Laptop", quantidade: 1, precoUnitario: 1000 }, 
        { nome: "Tablet", quantidade: 2, precoUnitario: 400 }, 
        { nome: "Smartphone", quantidade: 1, precoUnitario: 1500 } 
    ];

    function calcularTotalItens(itensCarrinho) {
        return itensCarrinho.reduce((total, item) => total + item.quantidade * item.precoUnitario, 0);
    }

    console.log(calcularTotalItens(itens));

    return (
        <div>Calcular Total de Itens</div>
    )
}