function startQuiz() {
    AudioFeedback.playSuccess();
    setTimeout(() => {
        window.location.href = 'pages/step2.html';
    }, 200);
}
