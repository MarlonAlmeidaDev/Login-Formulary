
let docTitle = document.title;

    window.addEventListener("blur", () =>{
        // Quando sair da aba vai colocar esse titulo
        document.title = "nova notificação (1)"
    })
    
    window.addEventListener("focus", () => {
        // Foco na aba volta o titulo normal
        document.title = docTitle;
    })