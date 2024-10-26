window.sr = ScrollReveal({reset:true});

sr.reveal('#right-content', {duration:1400});
sr.reveal('.titulo',{
    rotate:{x: 0, y:80, z:0},
    duration:2000
});/*parte da animação de transição*/

/*parte de mudar de cor ao digitar*/

let email = document.querySelector("#email-text");
let senha = document.querySelector("#senha-text");

email.addEventListener("click", () => {
    email.classList.add("novacor"); // Muda a cor do campo de email
});

email.addEventListener("blur", () => {
    email.classList.remove("novacor"); // Remove a mudança ao perder o foco
});

// Adicionando a mesma funcionalidade ao campo de senha
senha.addEventListener("click", () => {
    senha.classList.add("novacor"); // Muda a cor do campo de senha
});

senha.addEventListener("blur", () => {
    senha.classList.remove("novacor"); // Remove a mudança ao perder o foco
});
