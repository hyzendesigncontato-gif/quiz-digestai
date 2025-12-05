window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('progressBar').style.width = '100%';
    }, 100);
});

function goToResult() {
    AudioFeedback.playSuccess();
    setTimeout(() => {
        window.location.href = 'step14.html';
    }, 200);
}
