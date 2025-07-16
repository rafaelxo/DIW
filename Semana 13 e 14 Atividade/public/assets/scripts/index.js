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
        });
}