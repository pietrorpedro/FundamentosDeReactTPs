import "./Projetos.css"

export default function Projetos() {
    return (
        <div>
            <h1 id="title">Projetos</h1>
            <div className="projetos">
                <div className="projeto">
                    <h2>Projeto Site de Vendas</h2>
                    <p>Aplicação com funcionabilidades de cadastro e venda de produtos.</p>
                </div>
                <div className="projeto">
                    <h2>Rede Social</h2>
                    <p>Rede social básica com funcões de criar posts e adicionar amigos.</p>
                </div>
                <div className="projeto">
                    <h2>API de Filmes</h2>
                    <p>API com dados de 100 filmes.</p>
                </div>
            </div>
        </div>
    )
}