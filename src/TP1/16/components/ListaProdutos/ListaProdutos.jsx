import CartaoProduto from "../CartaoProduto/CartaoProduto";
import "./ListaProdutos.css"

export default function ListaProdutos() {

    const produtos = [
        {
            nome: "Tênis de Corrida",
            descricao: "Tênis confortável para corridas diárias.",
            preco: "R$ 299,90",
            imagem: "https://via.placeholder.com/150"
        },
        {
            nome: "Camisa de Ciclismo",
            descricao: "Camisa respirável para ciclistas.",
            preco: "R$ 129,90",
            imagem: "https://via.placeholder.com/150"
        },
        {
            nome: "Boné Esportivo",
            descricao: "Boné ajustável para proteção solar.",
            preco: "R$ 59,90",
            imagem: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div className="produtos">
            <h1>Produtos</h1>
            <div className="lista">
                {produtos.map((produto, index) => (
                    <CartaoProduto
                        key={index}
                        nome={produto.nome} 
                        descricao={produto.descricao}
                        preco={produto.preco}
                        imagem={produto.imagem}
                    />
                ))}
            </div>
        </div>
    );
}
