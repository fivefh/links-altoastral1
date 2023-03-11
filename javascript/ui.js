let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volta pra cá Cadela ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});