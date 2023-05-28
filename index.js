const btnLogin = document.getElementById("btn-login");
const btnCadastro = document.getElementById("btn-cadastro");
const loginForm = document.getElementById("login-form");
const cadastroForm = document.getElementById("cadastro");
const roscaImg = document.getElementById("rosca");
const roscaImg2 = document.getElementById("rosca2");

const tl = gsap.timeline({ paused: true });
tl.to(loginForm, { duration: 0.5, xPercent: -40 })

const tc = gsap.timeline({ paused: true });
tc.to(cadastroForm, { duration: 0.5, xPercent: -40 })

btnLogin.addEventListener('click', () => {
    if (loginForm.classList.contains("oculto")) {
        loginForm.classList.remove("oculto");
        cadastroForm.classList.add("oculto");
        tl.play();
        tl.to(roscaImg, { rotation: "-=390", left: "84%", duration: 1 });
        tc.reverse()
    }
    return
});

btnCadastro.addEventListener('click', () => {
    if (cadastroForm.classList.contains("oculto")) {
        cadastroForm.classList.remove("oculto");
        loginForm.classList.add("oculto");
        tc.play();
        tc.to(roscaImg2, { rotation: "+=360", left: "85%", duration: 1 });
        tl.reverse()
    }
    return
});
