window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('progressBar').style.width = '94%';
    }, 100);
});

function selectOption(element, value) {
    AudioFeedback.playClick();
    document.querySelectorAll('.option-emoji-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    localStorage.setItem('step9_answer', value);
    setTimeout(() => {
        AudioFeedback.playSuccess();
        setTimeout(() => {
            window.location.href = 'step10.html';
        }, 200);
    }, 300);
}
