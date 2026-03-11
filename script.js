const lista = document.querySelector(".lista-produtos"); // Seleciona o container no HTML

// Lista de Cafés
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

// Lista de Bolos (Repostería)
const bolos = [
    {
        nome: "Pastel de Chocolate",
        descricao: "Delicioso pastel de chocolate casero",
        preco: "$4.00",
        img: "assets/pastel.jpg"
    },
    {
        nome: "Croissant",
        descricao: "Croissant francés recién horneado",
        preco: "$3.00",
        img: "assets/Croissant.jpg"
    },

     {
        nome: "Muffin de Arándanos",
        descricao: "Esponjoso muffin con arándanos frescos",
        preco: "$$3.50",
        img: "assets/muffin.jpg"
    },
    

];

const comida = [
    {
        nome: "Sándwich de Pavo",
        descricao: "Sándwich fresco con pavo y vegetales",
        preco: "$6.50",
        img: "assets/Sándwich de Pavo.jpg"
    },
    

];



// Função para criar o HTML de cada produto e inserir na página
function exibirProdutos(listaArray) {
    lista.innerHTML = ""; // Limpa a lista para mostrar apenas a categoria selecionada

    listaArray.forEach(produto => {
        // Cria a estrutura do card usando as classes do seu CSS
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

// --- LÓGICA PARA OS BOTÕES ---

// Seleciona todos os botões da seção "opcoes"
const botoes = document.querySelectorAll(".opcoes .botao");

// Botão Café (Índice 0)
botoes[0].addEventListener("click", () => exibirProdutos(produtosCafe));

// Botão Repostería (Índice 1)
botoes[1].addEventListener("click", () => exibirProdutos(bolos));

// Botão Repostería (Índice 2)
botoes[2].addEventListener("click", () => exibirProdutos(comida));

// Inicialização: Mostra os cafés assim que a página abre
exibirProdutos(produtosCafe);