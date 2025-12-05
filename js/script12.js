window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('progressBar').style.width = '100%';
    }, 100);
});

function selectOption(element, value) {
    AudioFeedback.playClick();
    document.querySelectorAll('.option-emoji-card').forEach(card => {
        card.classList.remove('selected');
    });
    element.classList.add('selected');
    localStorage.setItem('step12_answer', value);
    setTimeout(() => {
        AudioFeedback.playSuccess();
        setTimeout(() => {
            window.location.href = 'step13.html';
        }, 200);
    }, 300);
}
