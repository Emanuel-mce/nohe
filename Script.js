const mensajes = [
    
"Mana te quiero mucho",
"Eres una persona muy marravillosa y especial para todos",
"Lamento q debido a comentarios desubicados hayas cambiado tu hermosa forma de ser",
"Solo espero q si no vas a hacer el cambio le des la importancia q tienen algunas personas",
"Por ejemplo las del fondo",
"Te quiero mucho Linda"
];

let indiceMensaje = 0;

document.getElementById('mostrarMensajes').addEventListener('click', function() {
    const mensajeElemento = document.getElementById('mensaje');
    indiceMensaje = (indiceMensaje + 1) % mensajes.length;
    mensajeElemento.textContent = mensajes[indiceMensaje];
});