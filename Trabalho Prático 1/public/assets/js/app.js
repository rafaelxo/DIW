/* Dados das receitas */
const dados = {
    "receitas": [
        {
            "id": 1,
            "categoria": "entradas",
            "titulo": "Pão Caseiro",
            "descricao": "Pão feito artesanalmente, com uma crosta crocante e miolo macio, perfeito para qualquer refeição.",
            "ingredientes": [
                "500g de farinha de trigo",
                "10g de fermento biológico seco",
                "1 colher de sopa de açúcar",
                "1 colher de chá de sal",
                "300ml de água morna",
                "2 colheres de sopa de óleo"
            ],
            "preparo": "Em uma tigela, misture a farinha, fermento, açúcar e sal 🠖 Adicione o óleo e a água morna aos poucos, mexendo até formar uma massa homogênea 🠖 Sove a massa por 10 minutos, cubra e deixe descansar por 1 hora 🠖 Modele o pão e coloque em uma forma untada 🠖 Deixe Crescer por mais 30 minutos 🠖 Leve ao forno preaquecido a 180°C por 25-30 minutos, até dourar.",
            "imagem_principal": "assets/img/pao/pao.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/pao/pao1.jpg" },
                { "id": 2, "src": "assets/img/pao/pao2.jpg" },
                { "id": 3, "src": "assets/img/pao/pao3.jpg" }
            ]
        },
        {
            "id": 2,
            "categoria": "entradas",
            "titulo": "Canapés de Atum",
            "descricao": "Aperitivos deliciosos com atum temperado, servidos sobre fatias de pão torrado.",
            "ingredientes": [
                "1 lata de atum em óleo",
                "2 colheres de sopa de maionese",
                "1 colher de chá de mostarda",
                "1/4 de cebola roxa picada",
                "1 pão de forma (ou torradinhas)",
                "Folhas de alface ou rúcula",
                "Sal e pimenta a gosto"
            ],
            "preparo": "Escorra o atum e coloque-o em uma tigela 🠖 Adicione a maionese, a mostarda, a cebola, o sal e a pimenta, e misture bem 🠖 Corte o pão em fatias pequenas e torre até ficarem crocantes 🠖 Coloque uma folha de alface ou rúcula sobre cada fatia de pão 🠖 Distribua a mistura de atum sobre as folhas de alface e sirva imediatamente.",
            "imagem_principal": "assets/img/canapes/canapes.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/canapes/canapes1.jpg" },
                { "id": 2, "src": "assets/img/canapes/canapes2.jpg" },
                { "id": 3, "src": "assets/img/canapes/canapes3.jpg" }
            ]
        },
        {
            "id": 3,
            "categoria": "entradas",
            "titulo": "Salada Caprese",
            "descricao": "Tomates frescos, queijo mussarela de búfala e manjericão, regados com azeite e vinagre balsâmico.",
            "ingredientes": [
                "2 tomates maduros",
                "200g de queijo mussarela de búfala",
                "Folhas de manjericão fresco",
                "Azeite de oliva",
                "Vinagre balsâmico",
                "Sal e pimenta a gosto"
            ],
            "preparo": "Corte os tomates e o queijo mussarela de búfala em rodelas finas 🠖 Arrume as fatias de tomate e queijo alternando em um prato 🠖 Coloque as folhas de manjericão entre as fatias de tomate e queijo 🠖 Regue com azeite de oliva e um fio de vinagre balsâmico 🠖 Tempere com sal e pimenta a gosto e sirva imediatamente.",
            "imagem_principal": "assets/img/salada/salada.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/salada/salada1.jpg" },
                { "id": 2, "src": "assets/img/salada/salada2.jpg" },
                { "id": 3, "src": "assets/img/salada/salada3.jpg" }
            ]
        },
        {
            "id": 4,
            "categoria": "entradas",
            "titulo": "Guacamole",
            "descricao": "Pasta cremosa de abacate com tomate, cebola, pimenta e limão, perfeita para acompanhar tortilhas.",
            "ingredientes": [
                "2 abacates maduros",
                "1 tomate picado",
                "1/4 de cebola roxa picada",
                "1 pimenta dedo-de-moça picada (opcional)",
                "Suco de 1 limão",
                "Sal e pimenta a gosto"
            ],
            "preparo": "Corte os abacates ao meio, retire o caroço e coloque a polpa em uma tigela 🠖 Amasse com um garfo até formar um purê 🠖 Adicione o tomate, a cebola, a pimenta (se desejar) e o suco de limão 🠖 Tempere com sal e pimenta a gosto e misture bem 🠖 Sirva imediatamente com tortilhas ou como acompanhamento.",
            "imagem_principal": "assets/img/guacamole/guacamole.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/guacamole/guacamole1.jpg" },
                { "id": 2, "src": "assets/img/guacamole/guacamole2.jpg" },
                { "id": 3, "src": "assets/img/guacamole/guacamole3.jpg" }
            ]
        },
        {
            "id": 5,
            "categoria": "pratos_principais",
            "titulo": "Strogonoff de Frango",
            "descricao": "Delicioso strogonoff de frango cremoso, servido com arroz e batata palha crocante.",
            "ingredientes": [
                "500g de peito de frango cortado em cubos",
                "1 cebola picada",
                "2 dentes de alho picados",
                "200g de creme de leite",
                "2 colheres de sopa de ketchup",
                "2 colheres de sopa de mostarda",
                "Sal e pimenta a gosto",
                "Óleo para refogar"
            ],
            "preparo": "Aqueça o óleo em uma panela e refogue a cebola e o alho até ficarem dourados 🠖 Adicione o frango e frite até dourar 🠖 Adicione o ketchup, a mostarda, o creme de leite e misture bem 🠖 Tempere com sal e pimenta a gosto e deixe cozinhar por 5 a 10 minutos 🠖 Sirva com arroz branco e batata palha.",
            "imagem_principal": "assets/img/strogonoff/strogonoff.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/strogonoff/strogonoff1.jpg" },
                { "id": 2, "src": "assets/img/strogonoff/strogonoff2.jpg" },
                { "id": 3, "src": "assets/img/strogonoff/strogonoff3.jpg" }
            ]
        },
        {
            "id": 6,
            "categoria": "pratos_principais",
            "titulo": "Fricassê de Frango",
            "descricao": "Fricassê de frango com molho cremoso e queijo gratinado, uma delícia!",
            "ingredientes": [
                "500g de peito de frango desfiado",
                "1 lata de milho verde",
                "1 lata de creme de leite",
                "1 cebola picada",
                "2 dentes de alho picados",
                "200g de queijo ralado",
                "Sal e pimenta a gosto",
                "Óleo para refogar"
            ],
            "preparo": "Refogue a cebola e o alho no óleo até ficarem dourados 🠖 Adicione o frango desfiado e refogue por mais 5 minutos 🠖 Adicione o milho e o creme de leite, misture bem e deixe ferver por 5 minutos 🠖 Tempere com sal e pimenta a gosto 🠖 Coloque o fricassê em um refratário, cubra com queijo ralado e leve ao forno para gratinar.",
            "imagem_principal": "assets/img/fricasse/fricasse.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/fricasse/fricasse1.jpg" },
                { "id": 2, "src": "assets/img/fricasse/fricasse2.jpg" },
                { "id": 3, "src": "assets/img/fricasse/fricasse3.jpg" }
            ]
        },
        {
            "id": 7,
            "categoria": "pratos_principais",
            "titulo": "Macarrão à Bolonhesa",
            "descricao": "Clássico macarrão com molho bolonhesa saboroso e recheado de carne moída.",
            "ingredientes": [
                "1 pacote de macarrão",
                "500g de carne moída",
                "1 lata de molho de tomate",
                "1 cebola picada",
                "2 dentes de alho picados",
                "Sal e pimenta a gosto",
                "Óleo para refogar"
            ],
            "preparo": "Cozinhe o macarrão conforme as instruções da embalagem 🠖 Refogue a cebola e o alho no óleo até ficarem dourados 🠖 Adicione a carne moída e cozinhe até dourar 🠖 Adicione o molho de tomate e cozinhe por 10 minutos 🠖 Tempere com sal e pimenta a gosto 🠖 Sirva o molho sobre o macarrão cozido.",
            "imagem_principal": "assets/img/macarrao/macarrao.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/macarrao/macarrao1.jpg" },
                { "id": 2, "src": "assets/img/macarrao/macarrao2.jpg" },
                { "id": 3, "src": "assets/img/macarrao/macarrao3.jpg" }
            ]
        },
        {
            "id": 8,
            "categoria": "pratos_principais",
            "titulo": "Lasanha",
            "descricao": "Lasanha de carne ou frango com molho béchamel, irresistível e saborosa.",
            "ingredientes": [
                "1 pacote de massa para lasanha",
                "500g de carne moída ou frango desfiado",
                "2 copos de molho de tomate",
                "200g de queijo muçarela",
                "200g de presunto",
                "1 copo de molho branco (béchamel)",
                "Sal, pimenta e orégano a gosto"
            ],
            "preparo": "Preaqueça o forno W a 180°C 🠖 Em uma panela, refogue a carne moída ou frango e adicione o molho de tomate 🠖 Monte a lasanha alternando camadas de massa, carne ou frango, queijo, presunto e molho branco 🠖 Finalize com queijo por cima e leve ao forno para gratinar por 30 minutos.",
            "imagem_principal": "assets/img/lasanha/lasanha.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/lasanha/lasanha1.jpg" },
                { "id": 2, "src": "assets/img/lasanha/lasanha2.jpg" },
                { "id": 3, "src": "assets/img/lasanha/lasanha3.jpg" }
            ]
        },
        {
            "id": 9,
            "categoria": "pratos_principais",
            "titulo": "Carne de Panela",
            "descricao": "Carne cozida lentamente em molho de cebola e temperos, perfeita para acompanhar arroz e farofa.",
            "ingredientes": [
                "1kg de carne de músculo ou peito",
                "1 cebola picada",
                "2 dentes de alho picados",
                "1 cenoura picada",
                "1 folha de louro",
                "1/2 xícara de vinho tinto (opcional)",
                "Sal e pimenta a gosto",
                "Água suficiente para cobrir a carne"
            ],
            "preparo": "Em uma panela de pressão, refogue a cebola e o alho até dourarem 🠖 Adicione a carne e frite até dourar de todos os lados 🠖 Coloque o vinho (se usar), a cenoura, o louro, o sal e a pimenta 🠖 Cubra com água e cozinhe por cerca de 1 hora na panela de pressão 🠖 Deixe a carne descansar e desfie antes de servir.",
            "imagem_principal": "assets/img/carne/carne.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/carne/carne1.jpg" },
                { "id": 2, "src": "assets/img/carne/carne2.jpg" },
                { "id": 3, "src": "assets/img/carne/carne3.jpg" }
            ]
        },
        {
            "id": 10,
            "categoria": "pratos_principais",
            "titulo": "Parmegiana de Carne",
            "descricao": "Fatias de carne empanadas e fritas, cobertas com molho de tomate e queijo derretido.",
            "ingredientes": [
                "4 bifes de carne (filé mignon, alcatra ou coxão mole)",
                "2 ovos batidos",
                "Farinha de trigo e de rosca para empanar",
                "1 xícara de molho de tomate",
                "200g de queijo muçarela",
                "Sal e pimenta a gosto",
                "Óleo para fritar"
            ],
            "preparo": "Tempere os bifes com sal e pimenta 🠖 Passe os bifes na farinha de trigo, depois nos ovos batidos e, por fim, na farinha de rosca 🠖 Frite os bifes em óleo quente até ficarem dourados e crocantes 🠖 Coloque os bifes em um refratário, cubra com molho de tomate e queijo muçarela 🠖 Leve ao forno para gratinar por 15 minutos a 180°C.",
            "imagem_principal": "assets/img/parmegiana/parmegiana.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/parmegiana/parmegiana1.jpg" },
                { "id": 2, "src": "assets/img/parmegiana/parmegiana2.jpg" },
                { "id": 3, "src": "assets/img/parmegiana/parmegiana3.jpg" }
            ]
        },
        {
            "id": 11,
            "categoria": "pratos_principais",
            "titulo": "Feijoada",
            "descricao": "Feijão preto com carne de porco e linguiça, servido com arroz, couve e farofa.",
            "ingredientes": [
                "500g de feijão preto",
                "300g de carne de porco (costelinha, lombo, etc.)",
                "300g de carne seca dessalgada",
                "1 linguiça calabresa",
                "1 paio",
                "1 cebola picada",
                "2 dentes de alho picados",
                "2 folhas de louro",
                "Sal e pimenta a gosto"
            ],
            "preparo": "Deixe o feijão de molho por 8 horas e depois cozinhe até ficar macio 🠖 Em uma panela, refogue a cebola e o alho até dourarem 🠖 Adicione as carnes e refogue por 5 minutos 🠖 Adicione as carnes ao feijão e cozinhe por 2 horas, adicionando água se necessário 🠖 Sirva com arroz, farofa e fatias de laranja.",
            "imagem_principal": "assets/img/feijoada/feijoada.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/feijoada/feijoada1.jpg" },
                { "id": 2, "src": "assets/img/feijoada/feijoada2.jpg" },
                { "id": 3, "src": "assets/img/feijoada/feijoada3.jpg" }
            ]
        },
        {
            "id": 12,
            "categoria": "pratos_principais",
            "titulo": "Feijão Tropeiro",
            "descricao": "Feijão misturado com arroz, linguiça, bacon e ovo, um prato típico e saboroso.",
            "ingredientes": [
                "500g de feijão carioca",
                "200g de arroz cozido",
                "200g de torresmo",
                "200g de linguiça calabresa",
                "1 cebola picada",
                "2 ovos cozidos picados",
                "1 dente de alho picado",
                "Sal e pimenta a gosto"
            ],
            "preparo": "Cozinhe o feijão até ficar macio, mas ainda firme 🠖 Frite o torresmo até ficar crocante e reserve 🠖 Refogue a linguiça, a cebola e o alho 🠖 Adicione o arroz, o feijão e misture tudo 🠖 Finalize com os ovos cozidos e torresmo por cima.",
            "imagem_principal": "assets/img/tropeiro/tropeiro.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/tropeiro/tropeiro1.jpg" },
                { "id": 2, "src": "assets/img/tropeiro/tropeiro2.jpg" },
                { "id": 3, "src": "assets/img/tropeiro/tropeiro3.jpg" }
            ]
        },
        {
            "id": 13,
            "categoria": "pratos_principais",
            "titulo": "Arroz de Forno",
            "descricao": "Arroz misturado com frango, legumes e queijo, gratinado no forno até dourar.",
            "ingredientes": [
                "2 xícaras de arroz cozido",
                "300g de peito de frango desfiado",
                "1 cenoura ralada",
                "1/2 xícara de milho verde",
                "1/2 xícara de ervilhas",
                "200g de queijo muçarela",
                "1 cebola picada",
                "1/2 xícara de creme de leite",
                "Sal e pimenta a gosto"
            ],
            "preparo": "Refogue a cebola até dourar, adicione o frango desfiado, a cenoura, milho e ervilhas 🠖 Misture bem 🠖 Adicione o arroz cozido e o creme de leite, misture até tudo estar bem incorporado 🠖 Coloque o arroz em um refratário, cubra com queijo muçarela e leve ao forno para gratinar por 15 minutos a 180°C.",
            "imagem_principal": "assets/img/arroz/arroz.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/arroz/arroz1.jpg" },
                { "id": 2, "src": "assets/img/arroz/arroz2.jpg" },
                { "id": 3, "src": "assets/img/arroz/arroz3.jpg" }
            ]
        },
        {
            "id": 14,
            "categoria": "sobremesas",
            "titulo": "Brigadeiro",
            "descricao": "Doce cremoso de chocolate, perfeito para ser enrolado em bolinhas e coberto com granulado.",
            "ingredientes": [
                "1 lata de leite condensado",
                "2 colheres de sopa de cacau em pó",
                "1 colher de sopa de manteiga",
                "Chocolate granulado para enrolar"
            ],
            "preparo": "Em uma panela, coloque o leite condensado, o cacau em pó e a manteiga 🠖 Leve ao fogo baixo, mexendo sempre até o brigadeiro começar a soltar do fundo da panela 🠖 Deixe esfriar um pouco, depois enrole em bolinhas e passe no granulado.",
            "imagem_principal": "assets/img/brigadeiro/brigadeiro.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/brigadeiro/brigadeiro1.jpg" },
                { "id": 2, "src": "assets/img/brigadeiro/brigadeiro2.jpg" },
                { "id": 3, "src": "assets/img/brigadeiro/brigadeiro3.jpg" }
            ]
        },
        {
            "id": 15,
            "categoria": "sobremesas",
            "titulo": "Brownie",
            "descricao": "Bolo de chocolate denso, com uma textura úmida por dentro e crocante por fora.",
            "ingredientes": [
                "200g de chocolate meio amargo",
                "1 xícara de açúcar",
                "100g de manteiga",
                "3 ovos",
                "1/2 xícara de farinha de trigo",
                "1/2 colher de chá de essência de baunilha",
                "1 pitada de sal"
            ],
            "preparo": "Derreta o chocolate com a manteiga em banho-maria 🠖 Em uma tigela, bata os ovos com o açúcar até formar uma mistura cremosa 🠖 Adicione o chocolate derretido, a farinha, a essência de baunilha e o sal 🠖 Misture bem 🠖 Coloque a massa em uma forma untada e leve ao forno preaquecido a 180°C por 20-25 minutos.",
            "imagem_principal": "assets/img/brownie/brownie.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/brownie/brownie1.jpg" },
                { "id": 2, "src": "assets/img/brownie/brownie2.jpg" },
                { "id": 3, "src": "assets/img/brownie/brownie3.jpg" }
            ]
        },
        {
            "id": 16,
            "categoria": "sobremesas",
            "titulo": "Bolo de Fubá",
            "descricao": "Bolo macio e saboroso feito com fubá de milho, perfeito para o café da tarde.",
            "ingredientes": [
                "1 xícara de fubá",
                "1 xícara de farinha de trigo",
                "1 xícara de açúcar",
                "3 ovos",
                "1/2 xícara de óleo",
                "1 xícara de leite",
                "1 colher de sopa de fermento em pó"
            ],
            "preparo": "Bata os ovos com o açúcar até formar um creme 🠖 Adicione o óleo e o leite, e depois misture o fubá, a farinha e o fermento 🠖 Coloque a massa em uma forma untada e leve ao forno preaquecido a 180°C por 30-40 minutos.",
            "imagem_principal": "assets/img/fuba/fuba.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/fuba/fuba1.jpg" },
                { "id": 2, "src": "assets/img/fuba/fuba2.jpg" },
                { "id": 3, "src": "assets/img/fuba/fuba3.jpg" }
            ]
        },
        {
            "id": 17,
            "categoria": "sobremesas",
            "titulo": "Bolo de Cenoura",
            "descricao": "Bolo fofinho de cenoura coberto com brigadeiro, uma combinação deliciosa.",
            "ingredientes": [
                "3 cenouras médias",
                "3 ovos",
                "2 xícaras de açúcar",
                "2 xícaras de farinha de trigo",
                "1 xícara de óleo",
                "1 xícara de achocolatado em pó",
                "1 colher de sopa de fermento em pó"
            ],
            "preparo": "Bata no liquidificador as cenouras, ovos e óleo 🠖 Adicione o açúcar, a farinha e o fermento 🠖 Misture bem 🠖 Leve ao forno preaquecido a 180°C por 30-35 minutos 🠖 Prepare a cobertura com chocolate e despeje sobre o bolo ainda quente.",
            "imagem_principal": "assets/img/cenoura/cenoura.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/cenoura/cenoura1.jpg" },
                { "id": 2, "src": "assets/img/cenoura/cenoura2.jpg" },
                { "id": 3, "src": "assets/img/cenoura/cenoura3.jpg" }
            ]
        },
        {
            "id": 18,
            "categoria": "sobremesas",
            "titulo": "Mousse de Maracujá",
            "descricao": "Mousse cremosa e refrescante, feita com suco de maracujá, ideal para o verão.",
            "ingredientes": [
                "1 lata de creme de leite",
                "1 lata de leite condensado",
                "1 xícara de suco de maracujá",
                "1 pacote de gelatina incolor sem sabor",
                "2 colheres de sopa de água"
            ],
            "preparo": "Dissolva a gelatina em 2 colheres de sopa de água e leve ao micro-ondas por 15 segundos 🠖 Em um liquidificador, bata o leite condensado, creme de leite e suco de maracujá até ficar homogêneo 🠖 Adicione a gelatina dissolvida e bata por mais 1 minuto 🠖 Coloque em taças ou refratário e leve à geladeira por 3 horas ou até firmar.",
            "imagem_principal": "assets/img/maracuja/maracuja.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/maracuja/maracuja1.jpg" },
                { "id": 2, "src": "assets/img/maracuja/maracuja2.jpg" },
                { "id": 3, "src": "assets/img/maracuja/maracuja3.jpg" }
            ]
        }
    ]
};

/* Gerar menu de navegação nos html's */
function gerarMenu() {

    /* Estrutura */
    $('#menu').html(`
        <input type="checkbox" id="menuToggle" class="d-none">
        <label for="menuToggle" class="menu-icone" aria-label="Menu">
            <i class="fa-solid fa-chart-bar"></i>
            <i class="fa fa-times-circle"></i>
        </label>
        <ul class="navegacao d-flex flex-wrap justify-content-center gap-3 p-0 m-0 list-unstyled">
            <li><a href="secundarios.html?categoria=entradas" class="nav-link">Entradas</a></li>
            <li><a href="secundarios.html?categoria=pratos_principais" class="nav-link">Pratos Principais</a></li>
            <li><a href="secundarios.html?categoria=sobremesas" class="nav-link">Sobremesas</a></li>
            <li><a href="secundarios.html?categoria=favoritos" class="nav-link">Favoritos</a></li>
        </ul>
    `);
}

/* Implementação da pesquisa nos html's */
function pesquisar() {

    /* Declarações */
    const $form = $('.pesquisa');
    const $input = $('#search-input');

    /* Funcionalidades correspondentes */
    $form.on('submit', function (e) {
        e.preventDefault();
        const termo = $input.val().trim();
        if (termo) {
            window.location.href = `secundarios.html?termo=${encodeURIComponent(termo)}`;
        }
    });
}

/* Carregar receitas na home-page (index.html) */
function carregarIndex() {

    /* Declarações */
    const $receitas = $('#receitas');
    $receitas.empty();
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    dados.receitas.forEach(receita => {
        const favoritado = favoritos.includes(receita.id.toString());

        /* Estrutura */
        $receitas.append(`
            <article class="receita mt-0 px-0">
                <div class="card h-100" data-receita="${receita.id}">
                    <img src="${receita.imagem_principal}" class="card-img-top" alt="Foto de ${receita.titulo}">
                    <div class="card-body">
                        <h3 class="card-titulo">${receita.titulo}</h3>
                        <p class="card-texto">${receita.descricao}</p>
                    </div>
                    <button class="favorito ${favoritado ? 'favoritado' : ''}" 
                            data-id="${receita.id}"
                            aria-label="${favoritado ? 'Remover' : 'Adicionar'} ${receita.titulo} aos favoritos">
                        ${favoritado ? '💖' : '❤️'}
                    </button>
                </div>
            </article>
        `);
    });

    /* Funcionalidades correspondentes */
    $('.card').on('click', function (e) {
        if (!$(e.target).hasClass('favorito')) {
            const id = $(this).data('receita');
            window.location.href = `detalhes.html?id=${id}`;
        }
    });

    $('.favorito').on('click', function (e) {
        e.stopPropagation();
        const id = $(this).data('id');
        btnFavorito(this, id);
    });
}

/* Carregar carrossel na home-page (index.html) */
function carregarSlide() {

    /* Declarações */
    const $slides = $('#conteudo-slide');
    $slides.empty();

    const receitasSlider = [2, 5, 14];
    const receitas = dados.receitas.filter(r => receitasSlider.includes(r.id));

    /* Estrutura */
    $slides.append(`
        <div id="carouselReceitas" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2400">
            <div class="carousel-indicators">
                ${receitas.map((_, index) => `
                    <button type="button" 
                            data-bs-target="#carouselReceitas" 
                            data-bs-slide-to="${index}" 
                            ${index === 0 ? 'class="active" aria-current="true"' : ''} 
                            aria-label="Slide ${index + 1}">
                    </button>
                `).join('')}
            </div>
            <div class="carousel-inner">
                ${receitas.map((receita, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}" data-receita="${receita.id}">
                        <div class="card h-100">
                            <img src="${receita.imagem_principal}" 
                                 class="card-img-top" 
                                 alt="Foto de ${receita.titulo}">
                            <div class="card-body">
                                <h3 class="card-titulo">${receita.titulo}</h3>
                                <p class="card-texto">${receita.descricao}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselReceitas" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselReceitas" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Próximo</span>
            </button>
        </div>
    `);


    /* Funcionalidades correspondentes */
    const carouselElement = document.getElementById('carouselReceitas');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2400,
        ride: 'carousel'
    });

    function resetarCarrossel() {
        carousel.pause();
        setTimeout(() => {
            carousel.cycle();
        }, 2400);
    }

    $('.carousel-control-prev, .carousel-control-next').on('click', function () {
        resetarCarrossel();
    });

    $('.carousel-item .card').on('click', function () {
        const id = $(this).closest('.carousel-item').data('receita');
        window.location.href = `detalhes.html?id=${id}`;
    });
}

/* Carregar detalhes da receita (detalhes.html) */
function carregarDetalhes() {

    /* Declarações */
    const $conteudo = $('#conteudo-receita');
    const id = new URLSearchParams(window.location.search).get('id');
    const receita = dados.receitas.find(r => r.id === parseInt(id));
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const favoritado = favoritos.includes(id);

    if (!receita) {
        $('#conteudo-receita').html(`
          <div class="alert alert-danger">
            Receita não encontrada. <a href="index.html">Voltar à página inicial</a>.
          </div>
        `);
        return;
    }

    /* Estrutura*/
    $conteudo.html(`
        <div class="receita-detalhe-container">
            <div class="card receita-detalhe-card">
                <img src="${receita.imagem_principal}" class="card-img-top receita-detalhe-imagem" alt="Foto de ${receita.titulo}">
                ${receita.imagens_complementares.length > 0 ? `
                    <div class="imagens-complementares">
                        ${receita.imagens_complementares.map(img => `
                            <img src="${img.src}" class="imagem-complementar" 
                                 data-id="${img.id}" 
                                 alt="Imagem complementar de ${receita.titulo}">
                        `).join('')}
                    </div>
                ` : ''}
                <div class="card-body receita-detalhe-corpo">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="card-title receita-detalhe-titulo">${receita.titulo}</h2>
                        <button class="favorito ${favoritado ? 'favoritado' : ''}" 
                                data-id="${id}"
                                aria-label="${favoritado ? 'Remover' : 'Adicionar'} ${receita.titulo} aos favoritos">
                            ${favoritado ? '💖' : '❤️'}
                        </button>
                    </div>
                    <p class="card-texto receita-detalhe-descricao">${receita.descricao}</p>
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

    /* Funcionalidades correspondentes */
    $('.favorito').on('click', function () {
        const id = $(this).data('id');
        btnFavorito(this, id);
    });

    $('.imagem-complementar').on('click keypress', function (e) {
        if (e.type === 'click' || (e.type === 'keypress' && e.key === 'Enter')) {
            const $imagemComplementar = $(this);
            const $imagemPrincipal = $('.receita-detalhe-imagem');

            const srcComplementar = $imagemComplementar.attr('src');
            const srcPrincipal = $imagemPrincipal.attr('src');

            $imagemPrincipal.attr('src', srcComplementar);
            $imagemComplementar.attr('src', srcPrincipal);

            const altComplementar = $imagemComplementar.attr('alt');
            const altPrincipal = $imagemPrincipal.attr('alt');

            $imagemPrincipal.attr('alt', altComplementar);
            $imagemComplementar.attr('alt', altPrincipal);
        }
    });
}

/* Carregar receitas por categoria ou pesquisa (secundarios.html) */
function carregarCategoria() {

    /* Declarações */
    const $receitas = $('#receitas-categoria');
    const $titulo = $('#categoria-titulo');
    const categoria = new URLSearchParams(window.location.search).get('categoria');
    const termo = new URLSearchParams(window.location.search).get('termo');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const categorias = {
        entradas: 'Entradas',
        pratos_principais: 'Pratos Principais',
        sobremesas: 'Sobremesas',
        favoritos: 'Favoritos'
    };

    let receitasFiltradas = [];
    let titulo = '';

    /* Funcionalidades correspondentes */
    if (termo) {
        titulo = `Resultados da Pesquisa: "${termo}"`;
        receitasFiltradas = dados.receitas.filter(receita => {
            const noTitulo = receita.titulo.toLowerCase().includes(termo.toLowerCase());
            const nosIngredientes = receita.ingredientes.some(ing =>
                ing.toLowerCase().includes(termo.toLowerCase())
            );
            return noTitulo || nosIngredientes;
        });

    } else {
        titulo = categorias[categoria] || 'Categoria não encontrada';
        if (categoria === 'favoritos') {
            receitasFiltradas = dados.receitas.filter(r => favoritos.includes(r.id.toString()));
        } else {
            receitasFiltradas = dados.receitas.filter(r => r.categoria === categoria);
        }
    }

    $titulo.text(titulo);
    $receitas.empty();

    if (receitasFiltradas.length > 0) {
        receitasFiltradas.forEach(receita => {
            const favoritado = favoritos.includes(receita.id.toString());

            /* Estrutura */
            $receitas.append(`
                <article class="receita mt-0 px-0">
                    <div class="card h-100" data-receita="${receita.id}">
                        <img src="${receita.imagem_principal}" class="card-img-top" alt="${receita.titulo}">
                        <div class="card-body">
                            <h3 class="card-titulo">${receita.titulo}</h3>
                            <p class="card-texto">${receita.descricao}</p>
                        </div>
                        <button class="favorito ${favoritado ? 'favoritado' : ''}" 
                                data-id="${receita.id}"
                                aria-label="${favoritado ? 'Remover' : 'Adicionar'} ${receita.titulo} aos favoritos">
                            ${favoritado ? '💖' : '❤️'}
                        </button>
                    </div>
                </article>
            `);
        });

        $('.card').on('click', function (e) {
            if (!$(e.target).hasClass('favorito')) {
                const id = $(this).data('receita');
                window.location.href = `detalhes.html?id=${id}`;
            }
        });

        $('.favorito').on('click', function (e) {
            e.stopPropagation();
            const id = $(this).data('id');
            btnFavorito(this, id);
        });

        $('#limpar-favoritos').on('click', function () {
            localStorage.removeItem('favoritos');
            carregarCategoria();
        });

    } else {
        $receitas.html(`
            <div class="col-12 d-flex justify-content-center align-items-center">
                <p class="text-muted">
                    ${termo ? `Nenhuma receita encontrada para o termo "${termo}".` :
                categoria === 'favoritos' ? 'Nenhuma receita favoritada.' :
                    'Nenhuma receita encontrada para esta categoria.'}
                </p>
            </div>
        `);
    }
}

/* Botão de favorito para os cards */
function btnFavorito(button, receitaId) {

    /* Declarações */
    const $botao = $(button);
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    $botao.toggleClass('favoritado');

    /* Funcionalidades correspondentes */
    if ($botao.hasClass('favoritado')) {
        $botao.html('💖');
        $botao.attr('aria-label', $botao.attr('aria-label').replace('Adicionar', 'Remover'));
        if (!favoritos.includes(receitaId.toString())) {
            favoritos.push(receitaId.toString());
        }

    } else {
        $botao.html('❤️');
        $botao.attr('aria-label', $botao.attr('aria-label').replace('Remover', 'Adicionar'));
        favoritos = favoritos.filter(id => id !== receitaId.toString());
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));

    if (window.location.pathname.includes('secundarios.html') &&
        new URLSearchParams(window.location.search).get('categoria') === 'favoritos') {
        carregarCategoria();
    }
}

/* Gerar rodapé para os html's */
function gerarRodapé() {

    /* Estrutura */
    $('#rodape').html(`
        <footer class="text-white m-1 mt-1">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 my-2 mb-md-0">
                        <h4 class="fw-bold mb-2">Sobre:</h4>
                        <p class="mb-0">Este projeto foi desenvolvido por Rafael Xavier Oliveira como parte do curso de Ciência da Computação para a disciplina de Desenvolvimento de Interfaces Web. 
                            O Diretório de Receitas tem como objetivo facilitar o acesso a uma coleção variada de receitas culinárias, reunindo pratos com cultura em um único lugar. 
                            Utilizando HTML, CSS, JavaScript e recursos de acessibilidade, o projeto também serve como exercício prático de front-end web com integração de Bootstrap e mais.</p>
                    </div>
                    <div class="col-md-4">
                        <div class="autoria mb-3">
                            <h4 class="fw-bold mb-2">Autoria:</h4>
                            <div class="d-flex align-items-center">
                                <img src="banner-perfil.jpeg" alt="Foto de perfil" class="imagem-perfil me-2">
                                <div>
                                    <p class="mb-1"><strong>Aluno:</strong> Rafael Xavier Oliveira</p>
                                    <p class="mb-1"><strong>Curso:</strong> Ciência da Computação</p>
                                    <p class="mb-1"><strong>Turma:</strong> Manhã - Campus Lourdes</p>
                                </div>
                            </div>
                        </div>
                        <div class="infos">
                            <div class="d-flex align-items-center">
                                <h4 class="fw-bold my-0 me-2">Redes Sociais:</h4>
                                <p class="d-flex gap-3 mb-0">
                                    <a href="https://www.instagram.com/faelxg/" class="icone" aria-label="Instagram">
                                        <i class="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://wa.me/5537998219315" class="icone" aria-label="WhatsApp">
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </a>
                                    <a href="https://github.com/rafaelxo" class="icone" aria-label="GitHub">
                                        <i class="fa-brands fa-github"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `);
}


/* Inicialização dos elementos geral */
$(document).ready(function () {
    gerarMenu();
    pesquisar();
    if (document.getElementById('receitas')) {
        carregarIndex();
    }
    if (document.getElementById('conteudo-slide')) {
        carregarSlide();
    }
    if (window.location.pathname.includes('secundarios.html')) {
        carregarCategoria();
    }
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhes();
    }
    gerarRodapé();
});