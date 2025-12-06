// UTMIFY Back Redirect Script
// ALTERE O LINK PARA A PÁGINA QUE QUISER MOSTRAR QUANDO O USUÁRIO TENTAR SAIR
const link = 'https://quizdigestai.hyzencompra.shop/pages/back-redirect.html';

function setBackRedirect(url) {
    let urlBackRedirect = url;
    urlBackRedirect = urlBackRedirect =
        urlBackRedirect.trim() +
        (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
        document.location.search.replace('?', '').toString();
    
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);
    history.pushState({}, '', location.href);
    
    window.addEventListener('popstate', () => {
        console.log('onpopstate', urlBackRedirect);
        setTimeout(() => {
            location.href = urlBackRedirect;
        }, 1);
    });
}

setBackRedirect(link);
