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
            <li><a href="creceita.html" class="nav-link">Cadastrar</a></li>
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
                    <div class="sobre col-md-8 my-2 mb-md-0">
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