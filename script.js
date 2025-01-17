document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um botão ao corpo da página
    const main = document.querySelector('main');
    if (main) {
        const button = document.createElement('button');
        button.textContent = 'Clique aqui';
        button.style.marginTop = '20px';

        main.appendChild(button);

        button.addEventListener('click', () => {
            const paragraph = document.createElement('p');
            paragraph.textContent = 'Você clicou no botão!';
            paragraph.style.color = '#007BFF';

            main.appendChild(paragraph);
        });
    }

    // Rola suavemente ao clicar nos links da navegação
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Submissão do formulário com Formspree
    const form = document.querySelector('form');
    const mensagemEnviadaDiv = document.getElementById('mensagem-enviada');
    const contactCard = document.getElementById('contact-card');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })
            .then(() => {
                form.reset();
                mensagemEnviadaDiv.textContent = 'Obrigado! Recebemos sua mensagem e entraremos em contato em breve.';
                mensagemEnviadaDiv.style.color = '#2d572c';
                mensagemEnviadaDiv.style.display = 'block';

                setTimeout(() => {
                    mensagemEnviadaDiv.style.display = 'none';
                    contactCard.classList.remove('show'); // Ocultar o mini card de contato
                }, 5000);
            })
            .catch(() => {
                mensagemEnviadaDiv.textContent = 'Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.';
                mensagemEnviadaDiv.style.color = '#FF0000';
                mensagemEnviadaDiv.style.display = 'block';

                setTimeout(() => {
                    mensagemEnviadaDiv.style.display = 'none';
                    contactCard.classList.remove('show'); // Ocultar o mini card de contato
                }, 5000);
            });
        });
    }

    // Exibe/oculta o mini card de contato ao clicar no botão "Entre em Contato"
    const contactButton = document.getElementById('contact-button');

    if (contactButton && contactCard) {
        contactButton.addEventListener('click', () => {
            contactCard.classList.toggle('show'); // Alternar a visibilidade do mini card de contato
        });
    }

    // Exibe o botão de subir ao topo quando a página é rolada para baixo
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show'); // Mostra o botão
        } else {
            scrollToTopBtn.classList.remove('show'); // Oculta o botão
        }
    });

    // Volta ao topo ao clicar no botão de subir ao topo
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth', // Rola suavemente para o topo
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.getElementById('contact-button');
    const contactCard = document.getElementById('contact-card');
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.querySelector('.thank-you-message');

    // Exibe o mini card ao clicar no botão "Entre em Contato"
    contactButton.addEventListener('click', () => {
        const buttonRect = contactButton.getBoundingClientRect();
        contactCard.style.top = `${buttonRect.bottom + window.scrollY}px`; // Posição abaixo do botão
        contactCard.style.right = `${window.innerWidth - buttonRect.right}px`; // Alinhado à direita do botão
        contactCard.style.display = 'block';
    });

    // Exibe a mensagem de agradecimento ao enviar o formulário
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Previne o comportamento padrão
        contactForm.style.display = 'none'; // Esconde o formulário
        thankYouMessage.style.display = 'block'; // Mostra a mensagem
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card-profissional');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Previne o flip se clicar nos botões
            if (e.target.tagName === 'A') return;
            
            // Remove a classe 'flipped' de todos os outros cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('flipped');
                }
            });
            
            // Toggle da classe 'flipped' no card clicado
            this.classList.toggle('flipped');
        });
    });
});
function toggleCard(clickedCard) {
    // Seleciona todos os cards
    const allCards = document.querySelectorAll('.professional-card, .intern-card');
    
    // Remove a classe 'flipped' de todos os outros cards
    allCards.forEach(card => {
        if (card !== clickedCard) {
            card.querySelector('.card-inner').classList.remove('flipped');
        }
    });

    // Toggle da classe 'flipped' no card clicado
    const cardInner = clickedCard.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
}
function toggleCard(cardId) {
    const card = document.getElementById(cardId);

    if (card.style.display === "block") {
        card.style.display = "none"; // Esconde o card
    } else {
        card.style.display = "block"; // Mostra o card
    }
}
function toggleCard(cardId) {
    // Fecha todos os cards primeiro
    const allCards = document.querySelectorAll('.blog-card');
    allCards.forEach(card => {
        if (card.id !== cardId) {
            card.style.display = 'none';
        }
    });

    // Abre ou fecha o card clicado
    const selectedCard = document.getElementById(cardId);
    if (selectedCard.style.display === 'none' || selectedCard.style.display === '') {
        selectedCard.style.display = 'block';
    } else {
        selectedCard.style.display = 'none';
    }
}
// Função para abrir/fechar os cards
function toggleCard(cardId) {
    // Seleciona todos os cards
    const cards = document.querySelectorAll('.blog-card');

    // Fecha todos os cards
    cards.forEach(card => {
        if (card.id !== cardId) {
            card.style.display = 'none'; // Fecha os outros cards
        }
    });

    // Seleciona o card atual
    const currentCard = document.getElementById(cardId);

    // Alterna entre abrir e fechar o card atual
    if (currentCard.style.display === 'block') {
        currentCard.style.display = 'none'; // Fecha se estiver aberto
    } else {
        currentCard.style.display = 'block'; // Abre se estiver fechado
    }
}
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    card.style.display = card.style.display === 'none' || card.style.display === '' ? 'block' : 'none';
}
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    card.style.display = card.style.display === 'none' || card.style.display === '' ? 'block' : 'none';
}
function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    card.style.display = card.style.display === 'none' || card.style.display === '' ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    // Fecha todos os cards inicialmente
    document.querySelectorAll('.blog-card').forEach(card => {
        card.style.display = 'none';
    });

    // Adiciona evento de clique aos botões "Leia mais"
    document.querySelectorAll('.blog-link').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fecha todos os outros cards abertos
            document.querySelectorAll('.blog-card').forEach(card => {
                if (card.id !== this.dataset.card) {
                    card.style.display = 'none';
                }
            });
            
            // Abre apenas o card correspondente
            const targetCard = document.getElementById(this.dataset.card);
            if (targetCard) {
                targetCard.style.display = targetCard.style.display === 'none' ? 'block' : 'none';
            }
        });
    });

    // Adiciona evento aos botões de fechar
    document.querySelectorAll('.close-card').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.blog-card').style.display = 'none';
        });
    });

    // Fecha cards ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.blog-post')) {
            document.querySelectorAll('.blog-card').forEach(card => {
                card.style.display = 'none';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blogLinks = document.querySelectorAll('.blog-link');
    
    blogLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Fecha todos os cards abertos
            document.querySelectorAll('.blog-card').forEach(card => {
                card.style.display = 'none';
            });
            
            // Abre apenas o card clicado
            const targetCard = document.getElementById(this.dataset.card);
            if (targetCard) {
                targetCard.style.display = 'block';
            }
        });
    });
    
    // Adiciona evento para os botões de fechar
    document.querySelectorAll('.close-card').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.blog-card').style.display = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = document.querySelectorAll('.blog-post');
    
    blogPosts.forEach(post => {
        const leiaBtn = post.querySelector('.blog-link');
        const conteudoCompleto = post.querySelector('.conteudo-completo');
        
        leiaBtn.addEventListener('click', function() {
            // Fecha todos os outros diálogos primeiro
            document.querySelectorAll('.dialogo-completo').forEach(dialog => {
                if (dialog.style.display === 'block') {
                    dialog.style.display = 'none';
                }
            });
            
            // Cria e mostra o diálogo com o conteúdo completo
            const dialogo = document.createElement('div');
            dialogo.className = 'dialogo-completo';
            dialogo.innerHTML = `
                <div class="dialogo-conteudo">
                    <h3>${post.querySelector('.blog-title').textContent}</h3>
                    <div class="texto-completo">
                        ${conteudoCompleto.innerHTML}
                    </div>
                    <button class="close-card">Fechar</button>
                </div>
            `;
            
            document.body.appendChild(dialogo);
            
            // Adiciona evento para fechar
            const btnFechar = dialogo.querySelector('.close-card');
            btnFechar.addEventListener('click', () => {
                dialogo.remove();
            });
            
            // Fecha ao clicar fora do diálogo
            dialogo.addEventListener('click', (e) => {
                if (e.target === dialogo) {
                    dialogo.remove();
                }
            });
        });
    });
});

// Adiciona evento de clique fora do card para fechar
document.addEventListener('click', function(e) {
    if (!e.target.closest('.card')) {
        document.querySelectorAll('.card.flipped').forEach(card => {
            card.classList.remove('flipped');
        });
    }
});

// Apenas para o flip dos cards profissionais
function toggleProfessionalCard(card) {
    // Remove a classe 'flipped' de outros cards
    document.querySelectorAll('.professional-card').forEach(otherCard => {
        if (otherCard !== card && otherCard.classList.contains('flipped')) {
            otherCard.classList.remove('flipped');
        }
    });
    
    // Toggle do card clicado
    card.classList.toggle('flipped');
}

// Adiciona os event listeners
document.querySelectorAll('.professional-card').forEach(card => {
    card.addEventListener('click', function() {
        toggleProfessionalCard(this);
    });
});

// Função única para controlar o flip dos cards
function toggleCard(clickedCard) {
    // Seleciona todos os cards
    const allCards = document.querySelectorAll('.professional-card, .intern-card');
    
    // Remove a classe 'flipped' de todos os outros cards
    allCards.forEach(card => {
        if (card !== clickedCard) {
            card.querySelector('.card-inner').classList.remove('flipped');
        }
    });

    // Toggle da classe 'flipped' no card clicado
    const cardInner = clickedCard.querySelector('.card-inner');
    cardInner.classList.toggle('flipped');
}

// Remove todos os outros event listeners para evitar conflitos
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.professional-card, .intern-card');
    
    cards.forEach(card => {
        // Remove event listeners antigos
        card.replaceWith(card.cloneNode(true));
        
        // Adiciona o novo event listener
        card.addEventListener('click', function() {
            toggleCard(this);
        });
    });
});
// Função para girar o card
function toggleCard(card) {
    const cardInner = card.querySelector('.card-inner'); // Seleciona o card-inner
    const isFlipped = cardInner.style.transform === 'rotateY(180deg)';
  
    // Alterna entre frente e verso
    cardInner.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
  }
  
