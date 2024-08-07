export default function App() {

    const avaliacoes = [10, 9, 8, 10, 6];

    function calcularMediaAvaliacoes(avaliacoes) {
        const total = avaliacoes.reduce((total, avaliacao) => total + avaliacao, 0);
        return total / avaliacoes.length;
    }

    console.log(calcularMediaAvaliacoes(avaliacoes).toFixed(3));

    return (
        <div>Calcular Média de Avaliações</div>
    )
}