// Sistema de detecção de botão voltar e redirecionamento
(function() {
    // Adiciona uma entrada no histórico
    history.pushState(null, null, location.href);
    
    // Marca que o usuário já viu o back-redirect
    const hasSeenBackRedirect = sessionStorage.getItem('hasSeenBackRedirect');
    
    // Detecta quando o usuário tenta voltar
    window.addEventListener('popstate', function(event) {
        // Se já viu o back-redirect, deixa navegar normalmente
        if (hasSeenBackRedirect === 'true') {
            return;
        }
        
        // Marca que viu o back-redirect
        sessionStorage.setItem('hasSeenBackRedirect', 'true');
        
        // Redireciona para a página de back-redirect
        window.location.href = '../pages/back-redirect.html';
    });
})();
