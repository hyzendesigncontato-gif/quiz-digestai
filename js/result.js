window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.indicator-fill').forEach(fill => {
            fill.style.opacity = '1';
        });
        document.querySelectorAll('.indicator-value').forEach(value => {
            value.style.opacity = '1';
        });
    }, 500);
});

function continueToProtocol() {
    window.location.href = 'https://mpago.la/24AwMx6';
}
