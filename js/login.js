/* 
    Proyecto Final: Interprete de fórmulas tipo Excel
*/

// librerias
import { getBaseUrl } from './utiles.js';

// controladores
import { UsuarioController } from "./controllers/usuarioController.js";

const loginForm = document.querySelector("#loginForm");
const loginButton = document.querySelector("#submitButton");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {

    e.preventDefault();

    const idUsuario = loginForm.idUsuario.value;
    const password = loginForm.password.value;

    console.log('hizo click en submit --> ', idUsuario, password);

    const usuarios = new UsuarioController();
    let usuario = usuarios.get(idUsuario);

    if (idUsuario === usuario.id && password === usuario.password) {

        $(".navbar-nav").show();
        $(".navbar-brand").removeClass('disabled');

        // guarda el id del usuario logueado en sessionStorage
        usuarios.setUserLogon(usuario.id);

        // // mensaje de éxito
        // toastr.success(`Bienvenido ${usuario.nombre} al Sistema de Sueldos`,'Login al Sistema');

        // window.setTimeout(function() {
            // window.location.href = "../index.html";
            window.location.href = getBaseUrl() + '/index.html';
    
        // }, 5000);

        
    } else {
        // mensaje de error
        toastr.options = {
            "positionClass": "toast-top-center"
        }
        toastr.error('Id de usuario o password inválidos...','Login al Sistema');
    }
});


const iniciar = () => {
    // console.log('deberia ocultar el menuNavbar');
    $(".navbar-nav").hide();
    $(".navbar-brand").addClass('disabled');
};

window.onload = iniciar();
