// Script para adicionar áudio em todos os arquivos
// Execute: node update_audio.js

const fs = require('fs');
const path = require('path');

// Padrão para adicionar som de clique
const addClickSound = (content) => {
    return content.replace(
        /function selectOption\(element, value\) \{/g,
        'function selectOption(element, value) {\n    AudioFeedback.playClick();'
    );
};

// Padrão para adicionar som de sucesso antes de redirecionar
const addSuccessSound = (content) => {
    return content.replace(
        /setTimeout\(\(\) => \{\s*window\.location\.href = '([^']+)';/g,
        `setTimeout(() => {
        AudioFeedback.playSuccess();
        setTimeout(() => {
            window.location.href = '$1';
        }, 200);`
    );
};

// Arquivos para atualizar
const files = [
    'js/script4.js', 'js/script5.js', 'js/script6.js',
    'js/script7.js', 'js/script8.js', 'js/script9.js',
    'js/script10.js', 'js/script11.js', 'js/script12.js'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = addClickSound(content);
    content = addSuccessSound(content);
    fs.writeFileSync(file, content);
    console.log(`✅ Atualizado: ${file}`);
});

console.log('\n🎵 Todos os scripts foram atualizados com áudio!');
