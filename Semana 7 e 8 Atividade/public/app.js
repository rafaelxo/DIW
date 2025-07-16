/* Dados */
const dados = {
    "receitas": [
        {
            "id": 1,
            "categoria": "entradas",
            "titulo": "Pão Caseiro",
            "imagem": "imagens/receita10.jpg",
            "descricao": "Pão feito artesanalmente, com uma crosta crocante e miolo macio, perfeito para qualquer refeição.",
            "ingredientes": ["500g de farinha de trigo", "10g de fermento biológico seco", "1 colher de sopa de açúcar", "1 colher de chá de sal", "300ml de água morna", "2 colheres de sopa de óleo"],
            "preparo": "Em uma tigela, misture a farinha, fermento, açúcar e sal 🠖 Adicione o óleo e a água morna aos poucos, mexendo até formar uma massa homogênea 🠖 Sove a massa por 10 minutos, cubra e deixe descansar por 1 hora 🠖 Modele o pão e coloque em uma forma untada 🠖 Deixe Crescer por mais 30 minutos 🠖 Leve ao forno preaquecido a 180°C por 25-30 minutos, até dourar."
        },
        {
            "id": 2,
            "categoria": "entradas",
            "titulo": "Canapés de Atum",
            "imagem": "imagens/receita16.jpg",
            "descricao": "Aperitivos deliciosos com atum temperado, servidos sobre fatias de pão torrado.",
            "ingredientes": ["1 lata de atum em óleo", "2 colheres de sopa de maionese", "1 colher de chá de mostarda", "1/4 de cebola roxa picada", "1 pão de forma (ou torradinhas)", "Folhas de alface ou rúcula", "Sal e pimenta a gosto"],
            "preparo": "Escorra o atum e coloque-o em uma tigela 🠖 Adicione a maionese, a mostarda, a cebola, o sal e a pimenta, e misture bem 🠖 Corte o pão em fatias pequenas e torre até ficarem crocantes 🠖 Coloque uma folha de alface ou rúcula sobre cada fatia de pão 🠖 Distribua a mistura de atum sobre as folhas de alface e sirva imediatamente."
        },
        {
            "id": 3,
            "categoria": "entradas",
            "titulo": "Salada Caprese",
            "imagem": "imagens/receita17.jpg",
            "descricao": "Tomates frescos, queijo mussarela de búfala e manjericão, regados com azeite e vinagre balsâmico.",
            "ingredientes": ["2 tomates maduros", "200g de queijo mussarela de búfala", "Folhas de manjericão fresco", "Azeite de oliva", "Vinagre balsâmico", "Sal e pimenta a gosto"],
            "preparo": "Corte os tomates e o queijo mussarela de búfala em rodelas finas 🠖 Arrume as fatias de tomate e queijo alternando em um prato 🠖 Coloque as folhas de manjericão entre as fatias de tomate e queijo 🠖 Regue com azeite de oliva e um fio de vinagre balsâmico 🠖 Tempere com sal e pimenta a gosto e sirva imediatamente."
        },
        {
            "id": 4,
            "categoria": "entradas",
            "titulo": "Guacamole",
            "imagem": "imagens/receita18.jpg",
            "descricao": "Pasta cremosa de abacate com tomate, cebola, pimenta e limão, perfeita para acompanhar tortilhas.",
            "ingredientes": ["2 abacates maduros", "1 tomate picado", "1/4 de cebola roxa picada", "1 pimenta dedo-de-moça picada (opcional)", "Suco de 1 limão", "Sal e pimenta a gosto"],
            "preparo": "Corte os abacates ao meio, retire o caroço e coloque a polpa em uma tigela 🠖 Amasse com um garfo até formar um purê 🠖 Adicione o tomate, a cebola, a pimenta (se desejar) e o suco de limão 🠖 Tempere com sal e pimenta a gosto e misture bem 🠖 Sirva imediatamente com tortilhas ou como acompanhamento."
        },
        {
            "id": 5,
            "categoria": "pratos_principais",
            "titulo": "Strogonoff de Frango",
            "imagem": "imagens/receita1.jpg",
            "descricao": "Delicioso strogonoff de frango cremoso, servido com arroz e batata palha crocante.",
            "ingredientes": ["500g de peito de frango cortado em cubos", "1 cebola picada", "2 dentes de alho picados", "200g de creme de leite", "2 colheres de sopa de ketchup", "2 colheres de sopa de mostarda", "Sal e pimenta a gosto", "Óleo para refogar"],
            "preparo": "Aqueça o óleo em uma panela e refogue a cebola e o alho até ficarem dourados 🠖 Adicione o frango e frite até dourar 🠖 Adicione o ketchup, a mostarda, o creme de leite e misture bem 🠖 Tempere com sal e pimenta a gosto e deixe cozinhar por 5 a 10 minutos 🠖 Sirva com arroz branco e batata palha."
        },
        {
            "id": 6,
            "categoria": "pratos_principais",
            "titulo": "Fricassê de Frango",
            "imagem": "imagens/receita2.jpg",
            "descricao": "Fricassê de frango com molho cremoso e queijo gratinado, uma delícia!",
            "ingredientes": ["500g de peito de frango desfiado", "1 lata de milho verde", "1 lata de creme de leite", "1 cebola picada", "2 dentes de alho picados", "200g de queijo ralado", "Sal e pimenta a gosto", "Óleo para refogar"],
            "preparo": "Refogue a cebola e o alho no óleo até ficarem dourados 🠖 Adicione o frango desfiado e refogue por mais 5 minutos 🠖 Adicione o milho e o creme de leite, misture bem e deixe ferver por 5 minutos 🠖 Tempere com sal e pimenta a gosto 🠖 Coloque o fricassê em um refratário, cubra com queijo ralado e leve ao forno para gratinar."
        },
        {
            "id": 7,
            "categoria": "pratos_principais",
            "titulo": "Macarrão à Bolonhesa",
            "imagem": "imagens/receita3.jpg",
            "descricao": "Clássico macarrão com molho bolonhesa saboroso e recheado de carne moída.",
            "ingredientes": ["1 pacote de macarrão", "500g de carne moída", "1 lata de molho de tomate", "1 cebola picada", "2 dentes de alho picados", "Sal e pimenta a gosto", "Óleo para refogar"],
            "preparo": "Cozinhe o macarrão conforme as instruções da embalagem 🠖 Refogue a cebola e o alho no óleo até ficarem dourados 🠖 Adicione a carne moída e cozinhe até dourar 🠖 Adicione o molho de tomate e cozinhe por 10 minutos 🠖 Tempere com sal e pimenta a gosto 🠖 Sirva o molho sobre o macarrão cozido."
        },
        {
            "id": 8,
            "categoria": "pratos_principais",
            "titulo": "Lasanha",
            "imagem": "imagens/receita4.jpg",
            "descricao": "Lasanha de carne ou frango com molho béchamel, irresistível e saborosa.",
            "ingredientes": ["1 pacote de massa para lasanha", "500g de carne moída ou frango desfiado", "2 copos de molho de tomate", "200g de queijo muçarela", "200g de presunto", "1 copo de molho branco (béchamel)", "Sal, pimenta e orégano a gosto"],
            "preparo": "Preaqueça o forno a 180°C 🠖 Em uma panela, refogue a carne moída ou frango e adicione o molho de tomate 🠖 Monte a lasanha alternando camadas de massa, carne ou frango, queijo, presunto e molho branco 🠖 Finalize com queijo por cima e leve ao forno para gratinar por 30 minutos."
        },
        {
            "id": 9,
            "categoria": "pratos_principais",
            "titulo": "Carne de Panela",
            "imagem": "imagens/receita5.jpg",
            "descricao": "Carne cozida lentamente em molho de cebola e temperos, perfeita para acompanhar arroz e farofa.",
            "ingredientes": ["1kg de carne de músculo ou peito", "1 cebola picada", "2 dentes de alho picados", "1 cenoura picada", "1 folha de louro", "1/2 xícara de vinho tinto (opcional)", "Sal e pimenta a gosto", "Água suficiente para cobrir a carne"],
            "preparo": "Em uma panela de pressão, refogue a cebola e o alho até dourarem 🠖 Adicione a carne e frite até dourar de todos os lados 🠖 Coloque o vinho (se usar), a cenoura, o louro, o sal e a pimenta 🠖 Cubra com água e cozinhe por cerca de 1 hora na panela de pressão 🠖 Deixe a carne descansar e desfie antes de servir."
        },
        {
            "id": 10,
            "categoria": "pratos_principais",
            "titulo": "Parmegiana de Carne",
            "imagem": "imagens/receita6.jpg",
            "descricao": "Fatias de carne empanadas e fritas, cobertas com molho de tomate e queijo derretido.",
            "ingredientes": ["4 bifes de carne (filé mignon, alcatra ou coxão mole)", "2 ovos batidos", "Farinha de trigo e de rosca para empanar", "1 xícara de molho de tomate", "200g de queijo muçarela", "Sal e pimenta a gosto", "Óleo para fritar"],
            "preparo": "Tempere os bifes com sal e pimenta 🠖 Passe os bifes na farinha de trigo, depois nos ovos batidos e, por fim, na farinha de rosca 🠖 Frite os bifes em óleo quente até ficarem dourados e crocantes 🠖 Coloque os bifes em um refratário, cubra com molho de tomate e queijo muçarela 🠖 Leve ao forno para gratinar por 15 minutos a 180°C."
        },
        {
            "id": 11,
            "categoria": "pratos_principais",
            "titulo": "Feijoada",
            "imagem": "imagens/receita7.jpg",
            "descricao": "Feijão preto com carne de porco e linguiça, servido com arroz, couve e farofa.",
            "ingredientes": ["500g de feijão preto", "300g de carne de porco (costelinha, lombo, etc.)", "300g de carne seca dessalgada", "1 linguiça calabresa", "1 paio", "1 cebola picada", "2 dentes de alho picados", "2 folhas de louro", "Sal e pimenta a gosto"],
            "preparo": "Deixe o feijão de molho por 8 horas e depois cozinhe até ficar macio 🠖 Em uma panela, refogue a cebola e o alho até dourarem 🠖 Adicione as carnes e refogue por 5 minutos 🠖 Adicione as carnes ao feijão e cozinhe por 2 horas, adicionando água se necessário 🠖 Sirva com arroz, farofa e fatias de laranja."
        },
        {
            "id": 12,
            "categoria": "pratos_principais",
            "titulo": "Feijão Tropeiro",
            "imagem": "imagens/receita8.jpg",
            "descricao": "Feijão misturado com arroz, linguiça, bacon e ovo, um prato típico e saboroso.",
            "ingredientes": ["500g de feijão carioca", "200g de arroz cozido", "200g de torresmo", "200g de linguiça calabresa", "1 cebola picada", "2 ovos cozidos picados", "1 dente de alho picado", "Sal e pimenta a gosto"],
            "preparo": "Cozinhe o feijão até ficar macio, mas ainda firme 🠖 Frite o torresmo até ficar crocante e reserve 🠖 Refogue a linguiça, a cebola e o alho 🠖 Adicione o arroz, o feijão e misture tudo 🠖 Finalize com os ovos cozidos e torresmo por cima."
        },
        {
            "id": 13,
            "categoria": "pratos_principais",
            "titulo": "Arroz de Forno",
            "imagem": "imagens/receita9.jpg",
            "descricao": "Arroz misturado com frango, legumes e queijo, gratinado no forno até dourar.",
            "ingredientes": ["2 xícaras de arroz cozido", "300g de peito de frango desfiado", "1 cenoura ralada", "1/2 xícara de milho verde", "1/2 xícara de ervilhas", "200g de queijo muçarela", "1 cebola picada", "1/2 xícara de creme de leite", "Sal e pimenta a gosto"],
            "preparo": "Refogue a cebola até dourar, adicione o frango desfiado, a cenoura, milho e ervilhas 🠖 Misture bem 🠖 Adicione o arroz cozido e o creme de leite, misture até tudo estar bem incorporado 🠖 Coloque o arroz em um refratário, cubra com queijo muçarela e leve ao forno para gratinar por 15 minutos a 180°C."
        },
        {
            "id": 14,
            "categoria": "sobremesas",
            "titulo": "Brigadeiro",
            "imagem": "imagens/receita11.jpg",
            "descricao": "Doce cremoso de chocolate, perfeito para ser enrolado em bolinhas e coberto com granulado.",
            "ingredientes": ["1 lata de leite condensado", "2 colheres de sopa de cacau em pó", "1 colher de sopa de manteiga", "Chocolate granulado para enrolar"],
            "preparo": "Em uma panela, coloque o leite condensado, o cacau em pó e a manteiga 🠖 Leve ao fogo baixo, mexendo sempre até o brigadeiro começar a soltar do fundo da panela 🠖 Deixe esfriar um pouco, depois enrole em bolinhas e passe no granulado."
        },
        {
            "id": 15,
            "categoria": "sobremesas",
            "titulo": "Brownie",
            "imagem": "imagens/receita12.jpg",
            "descricao": "Bolo de chocolate denso, com uma textura úmida por dentro e crocante por fora.",
            "ingredientes": ["200g de chocolate meio amargo", "1 xícara de açúcar", "100g de manteiga", "3 ovos", "1/2 xícara de farinha de trigo", "1/2 colher de chá de essência de baunilha", "1 pitada de sal"],
            "preparo": "Derreta o chocolate com a manteiga em banho-maria 🠖 Em uma tigela, bata os ovos com o açúcar até formar uma mistura cremosa 🠖 Adicione o chocolate derretido, a farinha, a essência de baunilha e o sal 🠖 Misture bem 🠖 Coloque a massa em uma forma untada e leve ao forno preaquecido a 180°C por 20-25 minutos."
        },
        {
            "id": 16,
            "categoria": "sobremesas",
            "titulo": "Bolo de Fubá",
            "imagem": "imagens/receita13.jpg",
            "descricao": "Bolo macio e saboroso feito com fubá de milho, perfeito para o café da tarde.",
            "ingredientes": ["1 xícara de fubá", "1 xícara de farinha de trigo", "1 xícara de açúcar", "3 ovos", "1/2 xícara de óleo", "1 xícara de leite", "1 colher de sopa de fermento em pó"],
            "preparo": "Bata os ovos com o açúcar até formar um creme 🠖 Adicione o óleo e o leite, e depois misture o fubá, a farinha e o fermento 🠖 Coloque a massa em uma forma untada e leve ao forno preaquecido a 180°C por 30-40 minutos."
        },
        {
            "id": 17,
            "categoria": "sobremesas",
            "titulo": "Bolo de Cenoura",
            "imagem": "imagens/receita14.jpg",
            "descricao": "Bolo fofinho de cenoura coberto com brigadeiro, uma combinação deliciosa.",
            "ingredientes": ["3 cenouras médias", "3 ovos", "2 xícaras de açúcar", "2 xícaras de farinha de trigo", "1 xícara de óleo", "1 xícara de achocolatado em pó", "1 colher de sopa de fermento em pó"],
            "preparo": "Bata no liquidificador as cenouras, ovos e óleo 🠖 Adicione o açúcar, a farinha e o fermento 🠖 Misture bem 🠖 Leve ao forno preaquecido a 180°C por 30-35 minutos 🠖 Prepare a cobertura com chocolate e despeje sobre o bolo ainda quente."
        },
        {
            "id": 18,
            "categoria": "sobremesas",
            "titulo": "Mousse de Maracujá",
            "imagem": "imagens/receita15.jpg",
            "descricao": "Mousse cremosa e refrescante, feita com suco de maracujá, ideal para o verão.",
            "ingredientes": ["1 lata de creme de leite", "1 lata de leite condensado", "1 xícara de suco de maracujá", "1 pacote de gelatina incolor sem sabor", "2 colheres de sopa de água"],
            "preparo": "Dissolva a gelatina em 2 colheres de sopa de água e leve ao micro-ondas por 15 segundos 🠖 Em um liquidificador, bata o leite condensado, creme de leite e suco de maracujá até ficar homogêneo 🠖 Adicione a gelatina dissolvida e bata por mais 1 minuto 🠖 Coloque em taças ou refratário e leve à geladeira por 3 horas ou até firmar."
        }
    ]
};

/* Carregar receitas na página inicial (index.html) */
function carregarIndex() {
    const $receitas = $('#receitas');
    $receitas.empty();
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    dados.receitas.forEach(receita => {
        const isFavorito = favoritos.includes(receita.id.toString());
        
        $receitas.append(`
            <article class="receita mt-0 px-0">
                <div class="card h-100" data-receita="${receita.id}">
                    <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}" loading="lazy"
                         onerror="this.src='imagens/placeholder.jpg'; this.alt='Imagem não disponível'">
                    <div class="card-body">
                        <h3 class="card-titulo">${receita.titulo}</h3>
                        <p class="card-texto">${receita.descricao}</p>
                    </div>
                    <button class="favorito ${isFavorito ? 'favoritado' : ''}" 
                            data-id="${receita.id}"
                            aria-label="${isFavorito ? 'Remover' : 'Adicionar'} ${receita.titulo} aos favoritos">
                        ${isFavorito ? '💖' : '❤️'}
                    </button>
                </div>
            </article>
        `);
    });

    $('.card').on('click', function(e) {
        if (!$(e.target).hasClass('favorito')) {
            const id = $(this).data('receita');
            window.location.href = `detalhes.html?id=${id}`;
        }
    });

    $('.favorito').on('click', function(e) {
        e.stopPropagation();
        const id = $(this).data('id');
        btnFavorito(this, id);
    });
}

/* Carregar detalhes da receita (detalhes.html) */
function carregarDetalhes() {
    const $conteudo = $('#conteudo-receita');
    const id = new URLSearchParams(window.location.search).get('id');
    const receita = dados.receitas.find(r => r.id === parseInt(id));

    if (!id || !receita) {
        $conteudo.html(`
            <div class="alert alert-warning text-center">
                <i class="fas fa-exclamation-triangle me-2"></i>
                Receita não encontrada
            </div>
            <div class="d-grid gap-2 mt-3">
                <a href="index.html" class="btn btn-primary">
                    <i class="fas fa-arrow-left me-2"></i>Voltar para receitas
                </a>
            </div>
        `);
        return;
    }

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const isFavorito = favoritos.includes(id.toString());

    $conteudo.html(`
        <div class="receita-detalhe-container">
            <div class="card receita-detalhe-card">
                <img src="${receita.imagem}" class="card-img-top receita-detalhe-imagem" alt="${receita.titulo}" 
                     onerror="this.src='imagens/placeholder.jpg'; this.alt='Imagem não disponível'">
                <div class="card-body receita-detalhe-corpo">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="card-title receita-detalhe-titulo">${receita.titulo}</h2>
                        <button class="favorito ${isFavorito ? 'favoritado' : ''}" 
                                data-id="${id}"
                                aria-label="${isFavorito ? 'Remover' : 'Adicionar'} ${receita.titulo} aos favoritos">
                            ${isFavorito ? '💖' : '❤️'}
                        </button>
                    </div>
                    <p class="card-text receita-detalhe-descricao">${receita.descricao}</p>
                    <div class="receita-detalhe-secao">
                        <h3 class="receita-detalhe-subtitulo"><i class="fas fa-list-ul me-2"></i>Ingredientes</h3>
                        <ul class="receita-detalhe-ingredientes">
                            ${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="receita-detalhe-secao">
                        <h3 class="receita-detalhe-subtitulo"><i class="fas fa-mortar-pestle me-2"></i>Modo de Preparo</h3>
                        <div class="receita-detalhe-preparo">${receita.preparo}</div>
                    </div>
                </div>
            </div>
        </div>
    `);

    $('.favorito').on('click', function() {
        const id = $(this).data('id');
        btnFavorito(this, id);
    });
}

/* Carregar receitas por categoria (secundarios.html) */
function carregarCategoria() {
    const $receitas = $('#receitas-categoria');
    const $titulo = $('#categoria-titulo');
    const categoria = new URLSearchParams(window.location.search).get('categoria');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    let receitasFiltradas = [];
    let titulo = '';

    if (categoria === 'favoritos') {
        receitasFiltradas = dados.receitas.filter(r => favoritos.includes(r.id.toString()));
        titulo = 'Favoritos';
    } else {
        receitasFiltradas = dados.receitas.filter(r => r.categoria === categoria);
        titulo = {
            'entradas': 'Entradas',
            'pratos_principais': 'Pratos Principais',
            'sobremesas': 'Sobremesas'
        }[categoria] || 'Categoria não encontrada';
    }

    $titulo.text(titulo);
    $receitas.empty();

    if (receitasFiltradas.length > 0) {
        receitasFiltradas.forEach(receita => {
            const isFavorito = favoritos.includes(receita.id.toString());

            $receitas.append(`
                <article class="receita mt-0 px-0">
                    <div class="card h-100" data-receita="${receita.id}">
                        <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}" loading="lazy"
                             onerror="this.src='imagens/placeholder.jpg'; this.alt='Imagem não disponível'">
                        <div class="card-body">
                            <h3 class="card-titulo">${receita.titulo}</h3>
                            <p class="card-texto">${receita.descricao}</p>
                        </div>
                        <button class="favorito ${isFavorito ? 'favoritado' : ''}" 
                                data-id="${receita.id}"
                                aria-label="${isFavorito ? 'Remover' : 'Adicionar'} ${receita.titulo} aos favoritos">
                            ${isFavorito ? '💖' : '❤️'}
                        </button>
                    </div>
                </article>
            `);
        });

        $('.card').on('click', function(e) {
            if (!$(e.target).hasClass('favorito')) {
                const id = $(this).data('receita');
                window.location.href = `detalhes.html?id=${id}`;
            }
        });

        $('.favorito').on('click', function(e) {
            e.stopPropagation();
            const id = $(this).data('id');
            btnFavorito(this, id);
        });
    } else {
        $receitas.html(`
            <div class="col-12 text-center">
                <p class="text-muted">${categoria === 'favoritos' ? 'Nenhuma receita favoritada.' : 'Nenhuma receita encontrada para esta categoria.'}</p>
            </div>
        `);
    }
}

/* Botão de favorito */
function btnFavorito(button, receitaId) {
    const $button = $(button);

    $button.toggleClass('favoritado');
    
    if ($button.hasClass('favoritado')) {
        $button.html('💖');
        $button.attr('aria-label', $button.attr('aria-label').replace('Adicionar', 'Remover'));
    } else {
        $button.html('❤️');
        $button.attr('aria-label', $button.attr('aria-label').replace('Remover', 'Adicionar'));
    }
}

/* Inicialização dos elementos */
$(document).ready(function() {
    carregarIndex();
    carregarDetalhes();
    carregarCategoria();
});