window.addEventListener('DOMContentLoaded', () => {
    // Anima a barra de progresso de 93% para 100%
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 500);
    }

    // Anima as barras de diagnóstico
    setTimeout(() => {
        document.querySelectorAll('.diagnosis-fill').forEach((fill, index) => {
            setTimeout(() => {
                fill.style.opacity = '1';
            }, index * 200);
        });
    }, 300);

    // Inicializa o carrossel
    initCarousel();

    // Inicializa o contador
    initCountdown();

    // Lança confetes ao carregar a página
    setTimeout(() => {
        console.log('Tentando lançar confetes...');
        console.log('window.Confetti existe?', !!window.Confetti);

        if (window.Confetti) {
            window.Confetti.launch();
        } else {
            console.error('Confetti não está disponível!');
        }
    }, 1000);
});

// Carrossel de depoimentos
let currentSlide = 0;
const totalSlides = 5;
let autoSlideInterval;

function initCarousel() {
    showSlide(0);
    startAutoSlide();
}

function showSlide(index) {
    const carousel = document.querySelector('.carousel-track');
    if (!carousel) {
        console.error('Carousel track não encontrado!');
        return;
    }

    currentSlide = index;
    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    const offset = -currentSlide * (100 / totalSlides);
    carousel.style.transform = `translateX(${offset}%)`;

    console.log(`Mostrando slide ${currentSlide + 1}, offset: ${offset}%`);

    // Atualiza indicadores
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    AudioFeedback.playClick();
    showSlide(currentSlide + 1);
    resetAutoSlide();
}

function prevSlide() {
    AudioFeedback.playClick();
    showSlide(currentSlide - 1);
    resetAutoSlide();
}

function goToSlide(index) {
    AudioFeedback.playClick();
    showSlide(index);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Muda a cada 5 segundos
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function toggleFaq(element) {
    AudioFeedback.playClick();
    const answer = element.querySelector('.faq-answer');
    const icon = element.querySelector('.faq-icon');

    if (element.classList.contains('active')) {
        element.classList.remove('active');
        icon.textContent = '+';
    } else {
        // Fecha outros FAQs
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            item.querySelector('.faq-icon').textContent = '+';
        });

        element.classList.add('active');
        icon.textContent = '−';
    }
}

// Contador regressivo
let countdownTime = 15 * 60; // 15 minutos em segundos

function initCountdown() {
    // Verifica se já existe um tempo salvo
    const savedTime = localStorage.getItem('countdownEndTime');
    const now = Math.floor(Date.now() / 1000);

    if (savedTime) {
        const remaining = parseInt(savedTime) - now;
        if (remaining > 0) {
            countdownTime = remaining;
        } else {
            // Tempo expirado, reinicia
            countdownTime = 15 * 60;
            localStorage.setItem('countdownEndTime', now + countdownTime);
        }
    } else {
        // Primeira vez, salva o tempo final
        localStorage.setItem('countdownEndTime', now + countdownTime);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

    if (countdownTime > 0) {
        countdownTime--;
        // Atualiza o localStorage
        const now = Math.floor(Date.now() / 1000);
        localStorage.setItem('countdownEndTime', now + countdownTime);
    } else {
        // Tempo expirado
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
    }
}

function activateProtocol() {
    AudioFeedback.playSuccess();
    setTimeout(() => {
        window.location.href = 'https://checkout.hyzencompra.shop/VCCL1O8SCKXC';
    }, 300);
}

// Back Redirect Logic
(function () {
    // Push a new state to history
    history.pushState(null, null, location.href);

    // Listen for back button press
    window.addEventListener('popstate', function () {
        window.location.href = 'back-redirect.html';
    });
})();
