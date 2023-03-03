let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volta pra cá Por Favor ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});