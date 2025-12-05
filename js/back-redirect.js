// Back Redirect - Contador e Funcionalidades

// Contador regressivo de 3 minutos
let countdownTime = 3 * 60; // 3 minutos

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    const minutesEl = document.getElementById('minutes-back');
    const secondsEl = document.getElementById('seconds-back');

    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    if (countdownTime > 0) {
        countdownTime--;
    } else {
        // Tempo expirado - redireciona ou mostra mensagem
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

// Inicia o contador
window.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});

// Função de ativação
function activateNow() {
    if (window.AudioFeedback) {
        AudioFeedback.playSuccess();
    }

    setTimeout(() => {
        window.location.href = 'https://checkout.hyzencompra.shop/VCCL1O8SCKXF';
    }, 300);
}

// Previne saída (opcional - descomente se quiser)
/*
window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = '';
    return '';
});
*/
