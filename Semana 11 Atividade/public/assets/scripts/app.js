/* Gerar menu de navegação nos html's */
function gerarMenu() {
    $('#menu').html(`
        <input type="checkbox" id="menuToggle" class="d-none">
        <label for="menuToggle" class="menu-icone" aria-label="Menu">
            <i class="fa-solid fa-chart-bar"></i>
            <i class="fa-solid fa-times-circle"></i>
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
    const $form = $('.pesquisa');
    const $input = $('#search-input');

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
    const $receitas = $('#receitas');
    $receitas.html('<p class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando receitas...</p>');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    fetch('http://localhost:3000/receitas')
        .then(res => {
            if (!res.ok) throw new Error('Erro ao acessar o servidor');
            return res.json();
        })
        .then(data => {
            const recipes = Array.isArray(data) ? data : [];
            if (!recipes.length) {
                $receitas.html(`
                    <div class="col-12 d-flex justify-content-center align-items-center">
                        <p class="text-muted">Nenhuma receita encontrada.</p>
                    </div>
                `);
                return;
            }

            $receitas.empty();
            recipes.forEach(receita => {
                const favoritado = favoritos.includes(receita.id.toString());
                const titulo = receita.titulo || 'Sem título';
                const descricao = receita.descricao || 'Sem descrição';
                const imagem = receita.imagem_principal || 'https://via.placeholder.com/300x200?text=Sem+Imagem';

                $receitas.append(`
                    <article class="receita mt-0 px-0">
                        <div class="card h-100" data-receita="${receita.id}">
                            <img src="${imagem}" class="card-img-top" alt="Foto de ${titulo}" loading="lazy">
                            <div class="card-body">
                                <h3 class="card-titulo">${titulo}</h3>
                                <p class="card-texto">${descricao}</p>
                            </div>
                            <button class="favorito ${favoritado ? 'favoritado' : ''}" 
                                    data-id="${receita.id}"
                                    aria-label="${favoritado ? 'Remover' : 'Adicionar'} ${titulo} aos favoritos">
                                ${favoritado ? '💖' : '❤️'}
                            </button>
                        </div>
                    </article>
                `);
            });

            $(document).on('click', '.card', function (e) {
                if (!$(e.target).hasClass('favorito')) {
                    const id = $(this).data('receita');
                    window.location.href = `detalhes.html?id=${id}`;
                }
            });

            $(document).on('click', '.favorito', function (e) {
                e.stopPropagation();
                const id = $(this).data('id');
                btnFavorito(this, id);
            });
        })
        .catch(error => {
            $receitas.html(`
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <p class="text-muted">Nenhuma receita encontrada.</p>
                </div>
            `);
            console.error('Fetch error:', error);
        });
}

/* Carregar carrossel na home-page (index.html) */
function carregarSlide() {
    const $slides = $('#conteudo-slide');
    $slides.html('<p class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando carrossel...</p>');

    fetch('http://localhost:3000/receitas')
        .then(res => {
            if (!res.ok) throw new Error('Erro ao acessar o servidor');
            return res.json();
        })
        .then(data => {
            const recipes = Array.isArray(data) ? data : [];
            if (!recipes.length) {
                $slides.html(`
                    <div class="col-12 d-flex justify-content-center align-items-center">
                        <p class="text-muted">Nenhuma receita encontrada para o carrossel.</p>
                    </div>
                `);
                return;
            }

            const receitasSlider = [2, 5, 14];
            const receitas = recipes.filter(r => receitasSlider.includes(r.id));

            $slides.empty();
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
                                    <img src="${receita.imagem_principal || 'https://via.placeholder.com/300x200?text=Sem+Imagem'}" 
                                         class="card-img-top" 
                                         alt="Foto de ${receita.titulo || 'Sem título'}" 
                                         loading="lazy">
                                    <div class="card-body">
                                        <h3 class="card-titulo">${receita.titulo || 'Sem título'}</h3>
                                        <p class="card-texto">${receita.descricao || 'Sem descrição'}</p>
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

            $(document).on('click', '.carousel-item .card', function (e) {
                if (!$(e.target).hasClass('favorito')) {
                    const id = $(this).closest('.carousel-item').data('receita');
                    window.location.href = `detalhes.html?id=${id}`;
                }
            });
        })
        .catch(error => {
            $slides.html(`
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <p class="text-muted">Nenhuma receita encontrada para o carrossel.</p>
                </div>
            `);
            console.error('Fetch error:', error);
        });
}

/* Carregar detalhes da receita (detalhes.html) */
function carregarDetalhes() {
    const $conteudo = $('#conteudo-receita');
    $conteudo.html('<p class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando receita...</p>');
    const id = new URLSearchParams(window.location.search).get('id');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (!id) {
        $conteudo.html(`
            <div class="alert alert-danger">
                Receita não encontrada. <a href="index.html">Voltar à página inicial</a>.
            </div>
        `);
        return;
    }

    fetch('http://localhost:3000/receitas')
        .then(res => {
            if (!res.ok) throw new Error('Erro ao acessar o servidor');
            return res.json();
        })
        .then(data => {
            const recipes = Array.isArray(data) ? data : [];
            const receita = recipes.find(r => r.id && r.id.toString() === id);
            if (!receita) {
                $conteudo.html(`
                    <div class="alert alert-danger">
                        Receita não encontrada. <a href="index.html">Voltar à página inicial</a>.
                    </div>
                `);
                return;
            }

            const favoritado = favoritos.includes(id.toString());
            const ingredientes = Array.isArray(receita.ingredientes) && receita.ingredientes.length
                ? receita.ingredientes
                : ['Sem ingredientes disponíveis'];
            const preparo = Array.isArray(receita.preparo) && receita.preparo.length
                ? receita.preparo
                : ['Sem instruções detalhadas disponíveis'];
            const titulo = receita.titulo || 'Sem título';
            const descricao = receita.descricao || 'Sem descrição disponível';
            const imagem = receita.imagem_principal || 'https://via.placeholder.com/400x300?text=Sem+Imagem';
            const imagensComplementares = Array.isArray(receita.imagens_complementares) && receita.imagens_complementares.length
                ? receita.imagens_complementares
                : [];

            $conteudo.html(`
                <div class="receita-detalhe-container">
                    <div class="card receita-detalhe-card">
                        <img src="${imagem}" class="card-img-top receita-detalhe-imagem" alt="Foto de ${titulo}" loading="lazy">
                        ${imagensComplementares.length > 0 ? `
                            <div class="imagens-complementares">
                                ${imagensComplementares.map(img => `
                                    <img src="${img.src}" class="imagem-complementar" 
                                         data-id="${img.id}" 
                                         alt="Imagem complementar de ${titulo}" 
                                         loading="lazy">
                                `).join('')}
                            </div>
                        ` : ''}
                        <div class="card-body receita-detalhe-corpo">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h2 class="card-title receita-detalhe-titulo">${titulo}</h2>
                                <button class="favorito ${favoritado ? 'favoritado' : ''}" 
                                        data-id="${id}"
                                        aria-label="${favoritado ? 'Remover' : 'Adicionar'} ${titulo} aos favoritos">
                                    ${favoritado ? '💖' : '❤️'}
                                </button>
                            </div>
                            <p class="card-texto receita-detalhe-descricao">${descricao}</p>
                            <div class="receita-detalhe-secao">
                                <h3 class="receita-detalhe-subtitulo"><i class="fas fa-list-ul me-2"></i>Ingredientes</h3>
                                <ul class="receita-detalhe-ingredientes">
                                    ${ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="receita-detalhe-secao">
                                <h3 class="receita-detalhe-subtitulo"><i class="fas fa-mortar-pestle me-2"></i>Modo de Preparo</h3>
                                <ol class="receita-detalhe-preparo my-2">
                                    ${preparo.map(p => `<li>${p}</li>`).join('')}
                                </ol>
                            </div>
                            <a href="index.html"><button class="my-1" id="voltar"><i class="fa-solid fa-arrow-left"></i> Voltar</button></a>
                        </div>
                    </div>
                </div>
            `);

            $(document).on('click', '.favorito', function (e) {
                e.stopPropagation();
                const btnId = $(this).data('id');
                btnFavorito(this, btnId);
            });

            $(document).on('click keypress', '.imagem-complementar', function (e) {
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
        })
        .catch(error => {
            $conteudo.html(`
                <div class="alert alert-danger">
                    Receita não encontrada. <a href="index.html">Voltar à página inicial</a>.
                </div>
            `);
            console.error('Fetch error:', error);
        });
}

/* Carregar receitas por categoria ou pesquisa (secundarios.html) */
function carregarCategoria() {
    const $receitas = $('#receitas-categoria');
    const $titulo = $('#categoria-titulo');
    $receitas.html('<p class="text-center"><i class="fas fa-spinner fa-spin"></i> Carregando receitas...</p>');
    const categoria = new URLSearchParams(window.location.search).get('categoria');
    const termo = new URLSearchParams(window.location.search).get('termo');
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    const categorias = {
        'entradas': 'Entradas',
        'pratos_principais': 'Pratos Principais',
        'sobremesas': 'Sobremesas',
        'favoritos': 'Favoritos'
    };

    fetch('http://localhost:3000/receitas')
        .then(res => {
            if (!res.ok) throw new Error('Erro ao acessar o servidor');
            return res.json();
        })
        .then(data => {
            let recipes = Array.isArray(data) ? data : [];
            let receitasFiltradas = [];
            let titulo = '';

            if (termo) {
                titulo = `Resultados da Pesquisa: "${termo}"`;
                receitasFiltradas = recipes.filter(receita => {
                    const noTitulo = receita.titulo.toLowerCase().includes(termo.toLowerCase());
                    const nosIngredientes = receita.ingredientes.some(ing =>
                        ing.toLowerCase().includes(termo.toLowerCase())
                    );
                    return noTitulo || nosIngredientes;
                });
            } else {
                titulo = categorias[categoria] || 'Categoria não encontrada';
                if (categoria === 'favoritos') {
                    receitasFiltradas = recipes.filter(r => favoritos.includes(r.id.toString()));
                } else {
                    receitasFiltradas = recipes.filter(r => r.categoria === categoria);
                }
            }

            $titulo.text(titulo);
            $receitas.empty();

            if (receitasFiltradas.length > 0) {
                receitasFiltradas.forEach(receita => {
                    const favoritado = favoritos.includes(receita.id.toString());
                    const titulo = receita.titulo || 'Sem título';
                    const descricao = receita.descricao || 'Sem descrição';
                    const imagem = receita.imagem_principal || 'https://via.placeholder.com/300x200?text=Sem+Imagem';

                    $receitas.append(`
                        <article class="receita mt-0 px-0">
                            <div class="card h-100" data-receita="${receita.id}">
                                <img src="${imagem}" class="card-img-top" alt="Foto de ${titulo}" loading="lazy">
                                <div class="card-body">
                                    <h3 class="card-titulo">${titulo}</h3>
                                    <p class="card-texto">${descricao}</p>
                                </div>
                                <button class="favorito ${favoritado ? 'favoritado' : ''}" 
                                        data-id="${receita.id}"
                                        aria-label="${favoritado ? 'Remover' : 'Adicionar'} ${titulo} aos favoritos">
                                    ${favoritado ? '💖' : '❤️'}
                                </button>
                            </div>
                        </article>
                    `);
                });

                $(document).on('click', '.card', function (e) {
                    if (!$(e.target).hasClass('favorito')) {
                        const id = $(this).data('receita');
                        window.location.href = `detalhes.html?id=${id}`;
                    }
                });

                $(document).on('click', '.favorito', function (e) {
                    e.stopPropagation();
                    const id = $(this).data('id');
                    btnFavorito(this, id);
                });

                $(document).on('click', '#limpar-favoritos', function () {
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

            $('#limpar-favoritos').toggle(categoria === 'favoritos');
        })
        .catch(error => {
            $receitas.html(`
                <div class="col-12 d-flex justify-content-center align-items-center">
                    <p class="text-muted">
                        ${termo ? `Nenhuma receita encontrada para o termo "${termo}".` :
                    categoria === 'favoritos' ? 'Nenhuma receita favoritada.' :
                        'Nenhuma receita encontrada para esta categoria.'}
                    </p>
                </div>
            `);
            $titulo.text(termo ? `Resultados da Pesquisa: "${termo}"` : categorias[categoria] || 'Categoria não encontrada');
            $('#limpar-favoritos').toggle(categoria === 'favoritos');
        });
}

/* Botão de favorito para os cards */
function btnFavorito(button, receitaId) {
    const $botao = $(button);
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    $botao.toggleClass('favoritado');

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
                                <img src="assets/img/banner-perfil.jpeg" alt="Foto de perfil" class="imagem-perfil me-2">
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
    if (document.getElementById('receitas')) carregarIndex();
    if (document.getElementById('conteudo-slide')) carregarSlide();
    if (window.location.pathname.includes('secundarios.html')) carregarCategoria();
    if (window.location.pathname.includes('detalhes.html')) carregarDetalhes();
    if (window.location.pathname.includes('creceita.html')) inicializarCadastro();
    gerarRodapé();
});