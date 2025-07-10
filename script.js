
document.getElementById('search').addEventListener('input', function () {
    const term = this.value.toLowerCase();
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = section.textContent.toLowerCase().includes(term) ? '' : 'none';
    });
});
