// script.js

// 1. Mensagem de Confirmação (Debug)
console.log("O script.js foi carregado com sucesso.");

// 2. Efeito de Carregamento Suave (Aumenta a opacidade e move o conteúdo para cima)
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o estilo de transição ao elemento <main> após o carregamento da página
    const mainContent = document.querySelector('main');
    
    if (mainContent) {
        // Usa um pequeno atraso para garantir que o CSS inicial 'opacity: 0' seja aplicado
        setTimeout(() => {
            // Essas propriedades devem ser definidas no CSS inicial (style.css)
            // para que a transição ocorra
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // 3. Inicializa a funcionalidade do menu responsivo
    setupMenuToggle();
});

// 4. Funcionalidade de Menu Responsivo
function setupMenuToggle() {
    // Simula a existência de um botão de toggle no menu para telas menores.
    // Você precisará adicionar este botão no seu HTML e estilizar no CSS.
    
    const nav = document.querySelector('nav ul'); // O menu principal
    
    // Simplesmente para demonstração: ao clicar em qualquer item, fecha o menu (útil no mobile)
    if (nav) {
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                // Aqui você implementaria a lógica para fechar o menu mobile, 
                // por exemplo, removendo uma classe 'open' do <ul>
                console.log("Item do menu clicado. (Simulação de fechar menu mobile)");
            }
        });
    }
}