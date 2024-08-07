export default function App() {
    
    const produtos = [ 
        { nome: "Laptop", categoria: "Eletrônicos" }, 
        { nome: "Camisa", categoria: "Roupas" }, 
        { nome: "Smartphone", categoria: "Eletrônicos" }, 
        { nome: "Calça", categoria: "Roupas" }, 
        { nome: "Fone de Ouvido", categoria: "Eletrônicos" } 
    ];

    function agruparPorCategoria(produtos) {
        let resul = {};

        for (const produto of produtos) {
            const {categoria, nome} = produto;

            if (!resul[categoria]) {
                resul[categoria] = [];
            }
            resul[categoria].push(nome);
        }

        return resul;
    }

    console.log(agruparPorCategoria(produtos));

    return (
        <div>Agrupar Produtos por Categoria</div>
    )
}