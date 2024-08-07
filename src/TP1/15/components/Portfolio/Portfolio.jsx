import Cabecalho from "../Cabecalho/Cabecalho"
import Projetos from "../Projetos/Projetos"
import Contatos from "../Contatos/Contatos"

import "./Portfolio.css"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <Cabecalho/>
            <div className="main">
                <Projetos/>
                <Contatos/>
            </div>
        </div>
    )
}