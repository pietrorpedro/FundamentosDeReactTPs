export default function App() {

    function calcularPrecoTotal(precoProduto, quantidadeComprada) {
        return precoProduto * quantidadeComprada;
    }

    console.log(calcularPrecoTotal(10, 2));

    return (
        <div>Cálculo do Preço Total</div>
    )
}