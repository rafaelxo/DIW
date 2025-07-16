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

/* Função CRUD para cadastro de receitas (creceita.html) */
function inicializarCadastro() {
    const form = document.getElementById('cadastro');
    if (!form) return;

    form.setAttribute('novalidate', 'novalidate');

    /* Seleção dos elementos */
    const cancelarBtn = document.getElementById('cancelar');
    const limparBtn = document.getElementById('limpar');
    const tableBody = document.getElementById('tabela-receitas-body');
    const inputs = form.querySelectorAll('input, textarea, select');
    const imagemInput = document.getElementById('imagem');
    const complementaresInput = document.getElementById('complementares');
    const previewPrincipal = document.getElementById('preview-principal');
    const previewContainer = document.getElementById('preview-container');
    const adicionarMaisBtn = document.querySelector('.adicionar-mais');

    complementaresInput.setAttribute('name', 'complementares');

    const API_URL = 'http://localhost:3000/receitas';

    /* Prevenção de erros */
    const sanitizeInput = (value) => {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    };

    /* Conversão das imagens */
    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    };

    /* Requisição dos dados no JSON */
    const apiRequest = async (url, method, data = null) => {
        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: data ? JSON.stringify(data) : null
            });

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            if (method === 'DELETE') {
                return true;
            }

            return await response.json();
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert(`Erro ao comunicar com o servidor: ${error.message}`);
            return null;
        }
    };

    /* Declaração da estrutura do JSON */
    const campos = [
        {
            id: 'categoria',
            key: 'categoria',
            label: 'Categoria',
            regras: [
                { condicao: v => v, mensagem: 'O campo "Categoria" é obrigatório.' }
            ]
        },
        {
            id: 'nome',
            key: 'titulo',
            label: 'Nome',
            regras: [
                { condicao: v => v.length >= 3, mensagem: 'Deve ter pelo menos 3 caracteres.' }
            ]
        },
        {
            id: 'descricao',
            key: 'descricao',
            label: 'Descrição',
            regras: [
                { condicao: v => v.length >= 10, mensagem: 'Deve ter pelo menos 10 caracteres.' }
            ]
        },
        {
            id: 'ingredientes',
            key: 'ingredientes',
            label: 'Ingredientes',
            regras: [
                { condicao: v => v.length > 0, mensagem: 'Pelo menos um ingrediente é necessário.' }
            ]
        },
        {
            id: 'preparo',
            key: 'preparo',
            label: 'Modo de Preparo',
            regras: [
                { condicao: v => v.length > 0, mensagem: 'Pelo menos um passo de preparo é necessário.' }
            ]
        },
        {
            id: 'imagem',
            key: 'imagem_principal',
            label: 'Imagem Principal',
            regras: [
                { condicao: (v, isEdit) => isEdit || v, mensagem: 'A imagem principal é obrigatória.' }
            ]
        }
    ];

    /* Coletar os inputs */
    const coletarDados = async () => {
        const categoriaSelect = document.getElementById('categoria').value;
        const categoriaMap = {
            'opcao1': 'entradas',
            'opcao2': 'pratos_principais',
            'opcao3': 'sobremesas'
        };

        const ingredientesRaw = document.getElementById('ingredientes').value.trim();
        const preparoRaw = document.getElementById('preparo').value.trim();

        const ingredientes = ingredientesRaw
            .split(';')
            .map(item => sanitizeInput(item.trim()))
            .filter(item => item);

        const preparo = preparoRaw
            .split(';')
            .map(item => sanitizeInput(item.trim()))
            .filter(item => item);

        let imagemPrincipal = '';
        if (imagemInput.files[0]) {
            imagemPrincipal = await fileToBase64(imagemInput.files[0]);
        } else if (form.dataset.existingImagem) {
            imagemPrincipal = form.dataset.existingImagem;
        }

        let existingImagensComplementares = [];
        if (form.dataset.existingComplementares) {
            existingImagensComplementares = JSON.parse(form.dataset.existingComplementares);
            // Filter out removed images
            existingImagensComplementares = existingImagensComplementares.filter(img => !form.dataset.removedComplementares?.includes(img.id.toString()));
        }

        const newImagensComplementares = await Promise.all(
            Array.from(complementaresInput.files).map(async (file, index) => ({
                id: (existingImagensComplementares.length || 0) + index + 1,
                src: await fileToBase64(file)
            }))
        );

        const imagensComplementares = [...existingImagensComplementares, ...newImagensComplementares];

        return {
            categoria: categoriaMap[categoriaSelect] || '',
            titulo: sanitizeInput(document.getElementById('nome').value.trim()),
            descricao: sanitizeInput(document.getElementById('descricao').value.trim()),
            ingredientes,
            preparo,
            imagem_principal: imagemPrincipal,
            imagens_complementares: imagensComplementares
        };
    };

    /* Função de erro */
    const exibirErro = (campoId, mensagem) => {
        const input = document.getElementById(campoId);
        const erroDiv = document.getElementById(`erro-${campoId}`);

        if (input && erroDiv) {
            input.classList.add('invalid');
            erroDiv.textContent = mensagem;
            erroDiv.style.display = 'block';
            input.focus();
        }
    };

    /* Função para limpar erros */
    const limparErros = () => {
        inputs.forEach(input => {
            input.classList.remove('invalid');
            const erroDiv = document.getElementById(`erro-${input.id}`);
            if (erroDiv) {
                erroDiv.style.display = 'none';
                erroDiv.textContent = '';
            }
        });
    };

    /* Validação individual dos campos */
    const validarCampo = (campoId, valor, regras, isEdit = false) => {
        for (const regra of regras) {
            if (!regra.condicao(valor, isEdit)) {
                exibirErro(campoId, regra.mensagem);
                return false;
            }
        }

        const erroDiv = document.getElementById(`erro-${campoId}`);
        if (erroDiv) {
            erroDiv.style.display = 'none';
        }

        return true;
    };

    /* Validação geral dos campos */
    const validarCadastro = (dados, isEdit = false) => {
        let isValid = true;

        campos.forEach(campo => {
            let valor = dados[campo.key];
            if (campo.id === 'imagem') {
                valor = imagemInput.files[0] ? imagemInput.files[0].name : (isEdit && form.dataset.existingImagem ? form.dataset.existingImagem : '');
            }
            if (!validarCampo(campo.id, valor, campo.regras, isEdit)) {
                isValid = false;
            }
        });

        return isValid;
    };

    /* Visualização da imagem principal */
    const previewImagemPrincipal = () => {
        previewPrincipal.innerHTML = '';
        if (imagemInput.files[0]) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(imagemInput.files[0]);
            img.alt = 'Pré-visualização da imagem principal';
            img.style.maxWidth = '100%';
            img.style.maxHeight = '200px';
            previewPrincipal.appendChild(img);
        } else if (form.dataset.existingImagem) {
            const img = document.createElement('img');
            img.src = form.dataset.existingImagem;
            img.alt = 'Imagem principal atual';
            img.style.maxWidth = '100%';
            img.style.maxHeight = '200px';
            previewPrincipal.appendChild(img);
        }
    };

    /* Visualização das imagens complementares */
    const previewImagensComplementares = () => {
        previewContainer.innerHTML = '';

        let existingImagens = [];
        if (form.dataset.existingComplementares) {
            existingImagens = JSON.parse(form.dataset.existingComplementares);
            const removedIds = form.dataset.removedComplementares ? form.dataset.removedComplementares.split(',').map(id => parseInt(id)) : [];
            existingImagens = existingImagens.filter(img => !removedIds.includes(img.id));
        }

        existingImagens.forEach(img => {
            const container = document.createElement('div');
            container.className = 'preview-complementar-container';
            container.dataset.id = img.id;
            container.innerHTML = `
            <img src="${img.src}" alt="Imagem complementar atual" style="max-width: 100px; margin: 5px;">
        `;
            previewContainer.appendChild(container);
        });

        Array.from(complementaresInput.files).forEach((file, index) => {
            const container = document.createElement('div');
            container.className = 'preview-complementar-container';
            container.dataset.tempId = index; // Temporary ID for new images
            container.innerHTML = `
            <img src="${URL.createObjectURL(file)}" alt="Pré-visualização de imagem complementar" style="max-width: 100px; margin: 5px;">
        `;
            previewContainer.appendChild(container);
        });
    };

    /* Atualização das receitas */
    const carregarReceitas = async () => {
        const data = await apiRequest(API_URL, 'GET');
        const receitas = Array.isArray(data) ? data : [];

        tableBody.innerHTML = receitas.map((receita, index) => `
            <tr data-id="${receita.id}">
                <td><img src="${receita.imagem_principal || 'https://via.placeholder.com/60x60?text=Sem+Imagem'}" alt="Imagem de ${receita.titulo}" title="${receita.titulo}"></td>
                <td title="${receita.titulo}">${receita.titulo}</td>
                <td title="${receita.descricao}">${receita.descricao}</td>
                <td title="${receita.ingredientes.join('; ')}">${receita.ingredientes.join('; ')}</td>
                <td title="${receita.preparo.join('; ')}">${receita.preparo.join('; ')}</td>
                <td>
                    <button class="acao-btn editar" data-id="${receita.id}"><i class="fas fa-edit"></i> Editar</button>
                    <button class="acao-btn excluir" data-id="${receita.id}"><i class="fas fa-trash"></i> Excluir</button>
                </td>
            </tr>
        `).join('');

        document.querySelectorAll('.acao-btn.editar').forEach(btn => {
            btn.addEventListener('click', () => editarReceita(btn.dataset.id));
        });
        document.querySelectorAll('.acao-btn.excluir').forEach(btn => {
            btn.addEventListener('click', () => excluirReceita(btn.dataset.id));
        });
    };

    const salvarReceita = async (event) => {
        event.preventDefault();

        const dados = await coletarDados();
        const isEdit = form.dataset.editId !== undefined;
        if (!validarCadastro(dados, isEdit)) {
            alert('Por favor, corrija os erros no formulário.');
            return;
        }

        /* Cadastra ou edita a receita */
        let sucesso;
        if (isEdit) {
            const id = form.dataset.editId;
            const url = `${API_URL}/${id}`;
            sucesso = await apiRequest(url, 'PATCH', dados);
        } else {
            sucesso = await apiRequest(API_URL, 'POST', dados);
        }

        if (sucesso) {
            alert(isEdit ? 'Receita atualizada com sucesso!' : 'Receita registrada com sucesso!');
            form.reset();
            previewPrincipal.innerHTML = '';
            previewContainer.innerHTML = '';
            delete form.dataset.editId;
            delete form.dataset.existingImagem;
            delete form.dataset.existingComplementares;
            delete form.dataset.removedComplementares;
            await carregarReceitas();
        }
    };

    const editarReceita = async (id) => {
        const data = await apiRequest(API_URL, 'GET');
        const receitas = Array.isArray(data) ? data : [];
        const receita = receitas.find(r => r.id.toString() === id.toString());

        if (receita) {
            const categoriaMap = {
                'entradas': 'opcao1',
                'principais': 'opcao2',
                'sobremesas': 'opcao3'
            };

            document.getElementById('categoria').value = categoriaMap[receita.categoria] || '';
            document.getElementById('nome').value = receita.titulo || '';
            document.getElementById('descricao').value = receita.descricao || '';
            document.getElementById('ingredientes').value = receita.ingredientes ? receita.ingredientes.join('; ') : '';
            document.getElementById('preparo').value = receita.preparo ? receita.preparo.join('; ') : '';

            imagemInput.value = '';
            complementaresInput.value = '';
            previewPrincipal.innerHTML = receita.imagem_principal ? `<img src="${receita.imagem_principal}" alt="Imagem principal atual" style="max-width: 100%; max-height: 200px;">` : '';

            form.dataset.existingImagem = receita.imagem_principal || '';
            form.dataset.existingComplementares = receita.imagens_complementares ? JSON.stringify(receita.imagens_complementares) : '[]';
            delete form.dataset.removedComplementares;

            previewImagensComplementares();

            form.dataset.editId = id;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    /* Deleta receita */
    const excluirReceita = async (id) => {
        if (!confirm('Tem certeza que deseja excluir esta receita?')) {
            return;
        }

        const url = `${API_URL}/${id}`;
        const sucesso = await apiRequest(url, 'DELETE');

        if (sucesso) {
            alert('Receita excluída com sucesso!');
            await carregarReceitas();
        }
    };

    form.addEventListener('submit', salvarReceita);

    cancelarBtn.addEventListener('click', () => {
        if (confirm('Deseja realmente cancelar? Todas as alterações não salvas serão perdidas!')) {
            limparErros();
            form.reset();
            previewPrincipal.innerHTML = '';
            previewContainer.innerHTML = '';
            delete form.dataset.editId;
            delete form.dataset.existingImagem;
            delete form.dataset.existingComplementares;
            delete form.dataset.removedComplementares;
            window.location.href = 'index.html';
        }
    });

    limparBtn.addEventListener('click', () => {
        if (confirm('Deseja limpar todos os campos do cadastro?')) {
            form.reset();
            limparErros();
            previewPrincipal.innerHTML = '';
            previewContainer.innerHTML = '';
            delete form.dataset.editId;
            delete form.dataset.existingImagem;
            delete form.dataset.existingComplementares;
            delete form.dataset.removedComplementares;
            alert('Preenchimento limpo com sucesso!');
        }
    });

    imagemInput.addEventListener('change', previewImagemPrincipal);
    complementaresInput.addEventListener('change', previewImagensComplementares);

    adicionarMaisBtn.addEventListener('click', () => {
        complementaresInput.click();
    });

    inputs.forEach(input => {
        input.addEventListener('input', async () => {
            const campo = campos.find(c => c.id === input.id);
            if (campo) {
                let valor;
                if (campo.id === 'ingredientes' || campo.id === 'preparo') {
                    const raw = input.value.trim();
                    valor = raw.split(';').map(item => sanitizeInput(item.trim())).filter(item => item);
                } else if (campo.id === 'imagem') {
                    valor = imagemInput.files[0] ? imagemInput.files[0].name : (form.dataset.existingImagem || '');
                } else {
                    valor = input.value.trim();
                }
                validarCampo(input.id, valor, campo.regras, form.dataset.editId !== undefined);
            }
        });
    });

    carregarReceitas();
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
                    <div id="sobre" class="col-md-8 my-2 mb-md-0">
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