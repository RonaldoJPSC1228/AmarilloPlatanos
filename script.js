document.getElementById("mostrarImagen").addEventListener("click", function() {
    var imagenOculta = document.querySelector(".imagen-oculta");
    imagenOculta.style.display = "block"; // Mostrar la imagen

    var mensaje = "Aqui tienes tus flores nomas por bonita :B";
    alert(mensaje);
});

        const canvas = document.getElementById('lienzo');
        const ctx = canvas.getContext('2d');

        function dibujarFlor(x, y) {
            // Dibuja el tallo de la flor
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - 50);
            ctx.strokeStyle = 'green';
            ctx.lineWidth = 5;
            ctx.stroke();

            // Dibuja el centro de la flor
            ctx.beginPath();
            ctx.arc(x, y - 60, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'yellow';
            ctx.fill();

            // Dibuja los pétalos de la flor
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI * 2 / 6) * i;
                const petalX = x + Math.sin(angle) * 20;
                const petalY = y - 50 + Math.cos(angle) * 20;

                ctx.beginPath();
                ctx.moveTo(x, y - 50);
                ctx.quadraticCurveTo(petalX, petalY - 20, x, y - 50);
                ctx.fillStyle = 'yellow';
                ctx.fill();
            }
        }

        // Función para crear una nueva flor automáticamente
        function crearFlorAutomaticamente() {
            const x = Math.random() * canvas.width; // Posición X aleatoria
            const y = Math.random() * canvas.height; // Posición Y aleatoria
            dibujarFlor(x, y);
        }

        // Crear una nueva flor cada 2 segundos (ajusta el tiempo según lo desees)
        setInterval(crearFlorAutomaticamente, 500);
