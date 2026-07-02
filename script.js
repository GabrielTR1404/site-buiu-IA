// Banco de dados dos flashcards
const flashcards = [
    {
        categoria: "Brasil Colônia",
        pergunta: "O que foi o ciclo do açúcar e qual era a principal mão de obra utilizada?",
        resposta: "Foi o período de forte produção de açúcar no Nordeste (séc. XVI e XVII), baseado no sistema de Plantation (grandes propriedades e monocultura) utilizando predominantemente a mão de obra de africanos escravizados."
    },
    {
        categoria: "Brasil Colônia",
        pergunta: "O que determinava o Tratado de Tordesilhas (1494)?",
        resposta: "Dividia as terras descobertas e por descobrir entre Portugal e Espanha, traçando um meridiano a 370 léguas das ilhas de Cabo Verde."
    },
    {
        categoria: "Brasil Império",
        pergunta: "Quem proclamou a Independência do Brasil e em qual ano?",
        resposta: "Dom Pedro I, no dia 7 de setembro de 1822, dando início ao Primeiro Reinado."
    },
    {
        categoria: "Brasil Império",
        pergunta: "O que foi a Lei Áurea e quando foi assinada?",
        resposta: "Foi a lei que extinguiu formalmente a escravidão no Brasil, assinada pela Princesa Isabel em 13 de maio de 1888."
    },
    {
        categoria: "República Velha",
        pergunta: "O que significa a 'Política do Café com Leite'?",
        resposta: "Foi o revezamento na presidência da República entre as oligarquias de São Paulo (produtores de café) e Minas Gerais (produtores de leite/leiteiros e grande colégio eleitoral) durante a República Velha."
    },
    {
        categoria: "Era Vargas",
        pergunta: "O que foi o 'Estado Novo' (1937-1945)?",
        resposta: "Foi o período ditatorial da Era Vargas, caracterizado pela centralização do poder, censura (DIP), nacionalismo econômico e criação de leis trabalhistas (CLT)."
    },
    {
        categoria: "Ditadura Militar",
        pergunta: "O que foi o AI-5 (Ato Institucional Nº 5) de 1968?",
        resposta: "O ato mais duro da ditadura militar, que fechou o Congresso, suspendeu o habeas corpus para crimes políticos e oficializou a censura prévia."
    }
];

let indiceAtual = 0;

// Seleção de elementos do DOM
const cardBox = document.getElementById('flashcard-box');
const card = document.querySelector('.flashcard');
const txtCategoria = document.getElementById('categoria');
const txtPergunta = document.getElementById('pergunta');
const txtResposta = document.getElementById('resposta');
const txtContador = document.getElementById('contador');

const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const btnRevelar = document.getElementById('btn-revelar');

// Função para atualizar o card na tela
function carregarCard() {
    // Garante que o card volte para a face frontal ao mudar de pergunta
    card.classList.remove('virado');
    
    setTimeout(() => {
        const item = flashcards[indiceAtual];
        txtCategoria.textContent = item.categoria;
        txtPergunta.textContent = item.pergunta;
        txtResposta.textContent = item.resposta;
        txtContador.textContent = `${indiceAtual + 1} / ${flashcards.length}`;
    }, 150); // Pequeno delay para a troca de texto não aparecer antes de desvirar
}

// Função para virar o card
function virarCard() {
    card.classList.toggle('virado');
}

// Eventos dos botões e clique no card
cardBox.addEventListener('click', virarCard);
btnRevelar.addEventListener('click', virarCard);

btnProximo.addEventListener('click', () => {
    indiceAtual++;
    if (indiceAtual >= flashcards.length) {
        indiceAtual = 0; // Volta para o primeiro
    }
    carregarCard();
});

btnAnterior.addEventListener('click', () => {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = flashcards.length - 1; // Vai para o último
    }
    carregarCard();
});

// Inicializa o primeiro card ao carregar a página
carregarCard();