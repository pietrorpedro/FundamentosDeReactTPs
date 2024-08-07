import "./CartaoProduto.css"

export default function CartaoProduto(props) {
    return (
        <div className="produto">
            <img src={props.imagem}/>
            <div className="info">
                <h2>{props.nome}</h2>
                <p>{props.descricao}</p>
                <h2 id="preco">{props.preco}</h2>
            </div>
        </div>
    )
}