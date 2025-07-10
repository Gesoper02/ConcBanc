function searchContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const content = document.querySelector("main");
    const allElements = content.querySelectorAll("p, li, h2, h3");

    allElements.forEach(el => {
        // Limpa realces anteriores
        el.innerHTML = el.textContent;

        const text = el.textContent.toLowerCase();
        if (input === "") {
            el.style.display = "";
        } else if (text.includes(input)) {
            el.style.display = "";

            // Aplica realce no texto encontrado
            const regex = new RegExp(`(${input})`, "gi");
            el.innerHTML = el.textContent.replace(regex, `<mark>$1</mark>`);
        } else {
            el.style.display = "none";
        }
    });
}
