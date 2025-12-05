window.addEventListener('DOMContentLoaded', () => {
    // Anima a barra de risco
    setTimeout(() => {
        const riskFill = document.querySelector('.risk-fill');
        const riskPercentage = document.querySelector('.risk-percentage');
        animateValue(riskPercentage, 0, 85, 1500);
        riskFill.style.width = '85%';
    }, 300);

    // Anima os indicadores
    setTimeout(() => {
        document.querySelectorAll('.indicator-fill').forEach(fill => {
            fill.style.opacity = '1';
        });
        
        // Anima os valores dos indicadores
        const indicators = [
            { element: document.querySelectorAll('.indicator-value')[0], value: 78 },
            { element: document.querySelectorAll('.indicator-value')[1], value: 64 },
            { element: document.querySelectorAll('.indicator-value')[2], value: 82 }
        ];
        
        indicators.forEach((indicator, index) => {
            setTimeout(() => {
                indicator.element.style.opacity = '1';
                animateValue(indicator.element, 0, indicator.value, 1500);
            }, index * 200);
        });
    }, 800);
});

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function continueToProtocol() {
    AudioFeedback.playSuccess();
    setTimeout(() => {
        window.location.href = 'step15.html';
    }, 200);
}
