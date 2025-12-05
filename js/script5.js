// Anima a barra de progresso ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('progressBar').style.width = '70%';
    }, 100);
});

function selectOption(element, value) {
    AudioFeedback.playClick();
    
    // Remove seleção anterior
    document.querySelectorAll('.option-simple').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Adiciona seleção na opção clicada
    element.classList.add('selected');
    
    // Salva a resposta
    localStorage.setItem('step5_answer', value);
    
    // Aguarda um pouco e vai para próxima etapa
    setTimeout(() => {
        AudioFeedback.playSuccess();
        setTimeout(() => {
            window.location.href = 'step6.html';
        }, 200);
    }, 300);
}
