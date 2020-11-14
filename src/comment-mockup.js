if (document.body.classList.contains('post')) {
    const actualContent = document.getElementById('actual-content');
    const ghostContent = document.getElementById('ghost-content');
    actualContent.addEventListener('input', () => {
        ghostContent.textContent = `\u200b${actualContent.value}\u200b`;
        actualContent.style.height = `${ghostContent.getBoundingClientRect().height}px`;
    });
}
