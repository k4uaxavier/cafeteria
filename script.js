const lista = document.querySelector(".lista-produtos"); // Seleciona o container no HTML

const produtosCafe = [
    {
        nome: "Espresso",
        descricao: "Café concentrado y aromático",
        preco: "$3.50",
        img: "assets/espresso.jpg"
    },
    {
        nome: "Capuccino",
        descricao: "Espresso con leche vaporizada y espuma",
        preco: "$4.50",
        img: "assets/cappuccino.jpg"
    },
    {
        nome: "Café Helado",
        descricao: "Refrescante café frío con hielo",
        preco: "$5.00",
        img: "assets/cafe-helado.jpg"
    }
];

// Função para criar o HTML de cada produto e inserir na página
function exibirProdutos(listaArray) {
    lista.innerHTML = ""; // Limpa a lista antes de renderizar

    listaArray.forEach(produto => {
        // Cria a estrutura do card usando as classes que você já tem no CSS
        lista.innerHTML += `
            <div class="card-estrutura">
                <div class="card">
                    <img src="${produto.img}" alt="${produto.nome}" class="img-produto">
                    <div class="card-texto">
                        <p class="titulo-produto"><strong>${produto.nome}</strong></p>
                        <p class="descricao-produto">${produto.descricao}</p>
                        <div class="card-preco">
                            <span class="valor">${produto.preco}</span>
                            <button class="botao-adicionar">Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// Chama a função para exibir os cafés assim que a página carregar
exibirProdutos(produtosCafe);