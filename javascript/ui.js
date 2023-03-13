let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volta Aqui 🖕";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});