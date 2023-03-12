let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volta pra cá ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});