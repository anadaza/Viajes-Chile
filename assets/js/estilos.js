alert("Bienvenido a Viajes Chile");

$(function(){
    $('[data-bs-taggle="tooltip"]').tooltip()
})

$("#enviar").click(function () {
        alert("correo enviado");
    });

$(document).scroll(function(){
    const y = $("html").scrolltop();

    y > 300 ? $("nav").addClass("nav-black") : $("nav").removeClass("nav-black");
})




