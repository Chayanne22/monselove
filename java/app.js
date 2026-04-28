// Seleccionamos los elementos
const btnIniciar = document.getElementById('btn-iniciar'); // Asegúrate que tu botón tenga este ID
const intro = document.querySelector('.intro');
const logoSpan = document.querySelectorAll('.logo-parts');
const musica = document.getElementById('musicaFondo');

// Función que agrupa toda la secuencia
function iniciarSecuencia() {
    // 1. Reproducir música
    musica.play().catch(e => console.log("Error al reproducir:", e));

    // 2. Iniciar animación de letras (aparecer)
    logoSpan.forEach((span, index) => {
        setTimeout(() => {
            span.classList.add('active');
        }, (index + 1) * 100);
    });

    // 3. Iniciar animación de letras (desaparecer/fade)
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (index + 1) * 100);
        });
    }, 2000);

    // 4. Mover la intro hacia arriba
    setTimeout(() => {
        intro.style.top = '-100vh';
        // Opcional: eliminar el elemento del DOM después de que suba
        setTimeout(() => { intro.style.display = 'none'; }, 1000);
    }, 2300);
}

// GATILLO: Solo esscuchamos el clic en el botón
btnIniciar.addEventListener('click', () => {
    iniciarSecuencia();
    btnIniciar.style.display = 'none'; // Ocultamos el botón para que no lo vuelvan a presionar
});