let docTitle = document.title;
alert("");
window.addEventListener("blur", () => {
    document.title = "Volta pra cá Cadela ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
});