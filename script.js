document.addEventListener('DOMContentLoaded', () => {
    // Adiciona um botão ao corpo da página (exemplo anterior)
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

    // Exibe o mini card de contato ao clicar no botão "Entre em Contato"
    const contactButton = document.getElementById('contact-button');
    const contactCard = document.getElementById('contact-card');

    if (contactButton && contactCard) {
        contactButton.addEventListener('click', () => {
            contactCard.classList.toggle('show'); // Alternar a visibilidade do mini card de contato
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Exibe/oculta o mini card de contato ao clicar no botão "Entre em Contato"
    const contactButton = document.getElementById('contact-button');
    const contactCard = document.getElementById('contact-card');

    if (contactButton && contactCard) {
        contactButton.addEventListener('click', () => {
            contactCard.classList.toggle('show'); // Alterna visibilidade
        });
    }

    // Submissão do formulário com Formspree
    const form = document.querySelector('form');
    const mensagemEnviadaDiv = document.getElementById('mensagem-enviada');

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
                    mensagemEnviadaDiv.textContent = 'Obrigado! Recebemos sua mensagem.';
                    mensagemEnviadaDiv.style.display = 'block';

                    setTimeout(() => {
                        mensagemEnviadaDiv.style.display = 'none';
                        contactCard.classList.remove('show'); // Ocultar o mini card
                    }, 5000);
                })
                .catch(() => {
                    mensagemEnviadaDiv.textContent = 'Erro ao enviar. Tente novamente.';
                    mensagemEnviadaDiv.style.color = '#FF0000';
                    mensagemEnviadaDiv.style.display = 'block';

                    setTimeout(() => {
                        mensagemEnviadaDiv.style.display = 'none';
                    }, 5000);
                });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Exibe o botão quando a página é rolada para baixo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show'); // Mostra o botão
        } else {
            scrollToTopBtn.classList.remove('show'); // Oculta o botão
        }
    });

    // Volta ao topo ao clicar no botão
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Rola suavemente para o topo
        });
    });
});
